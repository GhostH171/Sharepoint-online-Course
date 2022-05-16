import * as React from "react";
import { TextField, MaskedTextField } from "@fluentui/react/lib/TextField";
import { Stack, IStackProps, IStackStyles } from "@fluentui/react/lib/Stack";
import * as moment from "moment";
import { SPHttpClient, SPHttpClientResponse } from "@microsoft/sp-http";
import { IUserTrackingProps } from "./IUserTrackingProps";
import { IListItem, IUser, IUserTrackingState } from "./IUserTrackingState";

const stackTokens = { childrenGap: 50 };
const iconProps = { iconName: "Calendar" };
const stackStyles: Partial<IStackStyles> = { root: { width: 650 } };
const columnProps: Partial<IStackProps> = {
  tokens: { childrenGap: 15 },
  styles: { root: { width: 300 } },
};
const dateFormat = "DD/MM/YYYY h:mm:ss";

export default class UserTracking extends React.Component<
  IUserTrackingProps,
  IUserTrackingState
> {
  constructor(props: IUserTrackingProps, state: IUserTrackingState) {
    super(props);

    this.state = {
      id: 0,
      status: "",
      fullName: "",
      email: "",
      currentDatetime: moment().format(dateFormat),
      showClockIn: true,
    };
  }

  public render(): React.ReactElement<IUserTrackingProps> {
    return (
      <Stack horizontal tokens={stackTokens} styles={stackStyles}>
        <Stack {...columnProps}>
          <TextField
            label="Full name"
            value={this.state.fullName}
            name="fullName"
            disabled
            onChange={this.handleInputChange}
            required
          />
          <TextField
            label="Email"
            value={this.state.email}
            name="email"
            disabled
            onChange={this.handleInputChange}
            required
          />
          <TextField
            label="Current date/time"
            iconProps={iconProps}
            disabled
            value={this.state.currentDatetime}
            name="currentDatetime"
            onChange={this.handleInputChange}
          />
          {this.state.showClockIn ? (
            <a href="#" id="btnClockIn" onClick={() => this.clockIn()}>
              <span>Clock In</span>
            </a>
          ) : (
            <a href="#" id="btnClockOut" onClick={() => this.clockOut()}>
              <span>Clock Out</span>
            </a>
          )}
          {this.state.status}
        </Stack>
      </Stack>
    );
  }

  public componentDidMount(): void {
    this.getCurrentProfile().then((response) => {
      let user = response as any;
      console.log(user);
      this.setState({
        status: "",
        fullName: user.DisplayName,
        email: user.Email,
        currentDatetime: moment().format(dateFormat),
        showClockIn: true,
      });
    });

    setInterval(() => {
      this.setState({
        currentDatetime: moment().format(dateFormat),
      });
    }, 1000);
  }

  private handleInputChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    this.setState({
      [name]: value,
    } as any);
  };

  private getCurrentItemId(email: string): Promise<number> {
    return new Promise<number>(
      (
        resolve: (itemId: number) => void,
        reject: (error: any) => void
      ): void => {
        this.props.spHttpClient
          .get(
            `${this.props.siteUrl}/_api/web/lists/getbytitle('TimeTrackingManagement')/items?$Email=${email}&$orderby=Id desc&$top=1&$select=id`,
            SPHttpClient.configurations.v1,
            {
              headers: {
                Accept: "application/json;odata=nometadata",
                "odata-version": "",
              },
            }
          )
          .then(
            (
              response: SPHttpClientResponse
            ): Promise<{ value: { Id: number }[] }> => {
              return response.json();
            },
            (error: any): void => {
              reject(error);
            }
          )
          .then((response: { value: { Id: number }[] }): void => {
            if (response.value.length === 0) {
              resolve(-1);
            } else {
              resolve(response.value[0].Id);
            }
          });
      }
    );
  }

  private getCurrentProfile(): Promise<IUser> {
    return this.props.spHttpClient
      .get(
        `${this.props.siteUrl}/_api/sp.userprofiles.peoplemanager/GetMyProperties`,
        SPHttpClient.configurations.v1,
        {
          headers: {
            Accept: "application/json;odata=nometadata",
            "odata-version": "",
          },
        }
      )
      .then((response: SPHttpClientResponse) => {
        return response.json();
      });
  }

  private clockIn = () => {
    const body: string = JSON.stringify({
      Title: this.state.fullName,
      Email: this.state.email,
      ClockInDatetime: moment().format(),
    });

    this.props.spHttpClient
      .post(
        `${this.props.siteUrl}/_api/web/lists/getbytitle('TimeTrackingManagement')/items`,
        SPHttpClient.configurations.v1,
        {
          headers: {
            Accept: "application/json;odata=nometadata",
            "Content-type": "application/json;odata=nometadata",
            "odata-version": "",
          },
          body: body,
        }
      )
      .then((response: SPHttpClientResponse): Promise<IListItem> => {
        return response.json();
      })
      .then(
        (item: IListItem): void => {
          this.setState({
            id: item.Id,
            showClockIn: false,
            status: `Clock-in successfully`,
          });
        },
        (error: any): void => {
          this.setState({
            status: "Error while creating the item: " + error,
          });
        }
      );
  };

  private clockOut(): void {
    let latestItemId = this.state.id;

    this.getCurrentItemId(this.state.email)
      .then((itemId: number): Promise<SPHttpClientResponse> => {
        if (itemId === -1) {
          throw new Error("No items found in the list");
        }

        if (latestItemId === 0) {
          latestItemId = itemId;
        }

        this.setState({
          status: `Loading information about item ID: ${latestItemId}...`,
        });

        return this.props.spHttpClient.get(
          `${this.props.siteUrl}/_api/web/lists/getbytitle('TimeTrackingManagement')/items(${latestItemId})?$select=Title,Id`,
          SPHttpClient.configurations.v1,
          {
            headers: {
              Accept: "application/json;odata=nometadata",
              "odata-version": "",
            },
          }
        );
      })
      .then((response: SPHttpClientResponse): Promise<IListItem> => {
        return response.json();
      })
      .then((item: IListItem): void => {
        this.setState({
          status: "Loading latest items...",
        });

        const body: string = JSON.stringify({
          Title: this.state.fullName,
          Email: this.state.email,
          ClockOutDatetime: moment().format(),
        });

        this.props.spHttpClient
          .post(
            `${this.props.siteUrl}/_api/web/lists/getbytitle('TimeTrackingManagement')/items(${item.Id})`,
            SPHttpClient.configurations.v1,
            {
              headers: {
                Accept: "application/json;odata=nometadata",
                "Content-type": "application/json;odata=nometadata",
                "odata-version": "",
                "IF-MATCH": "*",
                "X-HTTP-Method": "MERGE",
              },
              body: body,
            }
          )
          .then(
            (response: SPHttpClientResponse): void => {
              this.setState({
                status: `Clock-out successfully`,
              });
            },
            (error: any): void => {
              this.setState({
                status: `Error updating item: ${error}`,
              });
            }
          );
      });
  }
}
