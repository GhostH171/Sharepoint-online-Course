import { IReadonlyTheme } from "@microsoft/sp-component-base";
import { Version } from "@microsoft/sp-core-library";
import { escape } from "@microsoft/sp-lodash-subset";
import {
  IPropertyPaneConfiguration,
  PropertyPaneTextField,
  PropertyPaneToggle,
  PropertyPaneSlider,
  PropertyPaneChoiceGroup,
} from "@microsoft/sp-property-pane";
import { BaseClientSideWebPart } from "@microsoft/sp-webpart-base";
import * as strings from "GetListOfListDemoWebPartStrings";
import styles from "./GetListOfListDemoWebPart.module.scss";

export interface IGetListOfListDemoWebPartProps {
  productname: string;
  productdescription: string;
  productcost: number;
  quantity: number;
  billamount: number;
  discount: number;
  netbillamount: number;
  currentTime: Date;
  IsCertified: boolean;
  Rating: number;
  processorttype: string;
}

export default class GetListOfListDemoWebPart extends BaseClientSideWebPart<IGetListOfListDemoWebPartProps> {
  private _isDarkTheme: boolean = false;
  private _environmentMessage: string = "";
  // Initial values here have higher priority than those in manifest json file
  protected onInit(): Promise<void> {
    return new Promise<void>((resolve, _reject) => {
      this.properties.productname = "Mouse";
      this.properties.productdescription = "Mouse Des";
      this.properties.productcost;
      this.properties.quantity;
      if (this.properties.currentTime === undefined) {
        const dtCurrent: Date = new Date();
        dtCurrent.setDate(dtCurrent.getDate() + 1);
        this.properties.currentTime = dtCurrent;
      }
      resolve(undefined);
    });
  }
  // Create apply button to avoid changing property values instantly
  protected get disableReactivePropertyChanges(): boolean {
    return true;
  }

  public render(): void {
    this.domElement.innerHTML = `
    <section class="${styles.getListOfListDemo} ${
      !!this.context.sdks.microsoftTeams ? styles.teams : ""
    }">
      <div class="${styles.welcome}">
        <img alt="" src="${
          this._isDarkTheme
            ? require("./assets/welcome-dark.png")
            : require("./assets/welcome-light.png")
        }" 
        class="${styles.welcomeImage}" />
        <h2>Well done, ${escape(
          this.context.pageContext.user.displayName
        )}!</h2>
        <div>${this._environmentMessage}</div>
        <div>Web part property value: <strong>
        ${escape(this.properties.productname)}
        </strong></div>
      </div>
      <div>
        <table>
        <tr>
        <td>Current time: </td>
        <td>${this.properties.currentTime}</td>
        </tr>
        <tr>
        <td>Product Name: </td>
        <td>${this.properties.productname}</td>
        </tr>
        <tr>
        <td>Description: </td>
        <td>${this.properties.productdescription}</td>
        </tr>
        <tr>
        <td>Product Cost: </td>
        <td>${this.properties.productcost}</td>
        </tr>
        <tr>
        <td>Product Quantity: </td>
        <td>${this.properties.quantity}</td>
        </tr>
        <tr>
        <td>Bill Amount: </td>
        <td>${(this.properties.billamount =
          this.properties.productcost * this.properties.quantity)}</td>
        </tr>
        <td>Bill Discount: </td>
        <td>${(this.properties.discount =
          this.properties.billamount * 0.1)}</td>
        </tr>
        <td>Bill Amount: </td>
        <td>${(this.properties.netbillamount =
          this.properties.billamount - this.properties.discount)}</td>
        </tr>
        <td>Is Certified? : </td>
        <td>${this.properties.IsCertified}</td>
        </tr>
        </tr>
        <td>Rating : </td>
        <td>${this.properties.Rating}</td>
        </tr>
        <td>Processor Type: </td>
        <td>${this.properties.processorttype}</td>
        </tr>

        </table>
      </div>
    </section>`;
  }

  private _getEnvironmentMessage(): string {
    if (!!this.context.sdks.microsoftTeams) {
      // running in Teams
      return this.context.isServedFromLocalhost
        ? strings.AppLocalEnvironmentTeams
        : strings.AppTeamsTabEnvironment;
    }

    return this.context.isServedFromLocalhost
      ? strings.AppLocalEnvironmentSharePoint
      : strings.AppSharePointEnvironment;
  }

  protected onThemeChanged(currentTheme: IReadonlyTheme | undefined): void {
    if (!currentTheme) {
      return;
    }

    this._isDarkTheme = !!currentTheme.isInverted;
    const { semanticColors } = currentTheme;
    this.domElement.style.setProperty("--bodyText", semanticColors.bodyText);
    this.domElement.style.setProperty("--link", semanticColors.link);
    this.domElement.style.setProperty(
      "--linkHovered",
      semanticColors.linkHovered
    );
  }

  protected get dataVersion(): Version {
    return Version.parse("1.0");
  }

  // protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
  //   return {
  //     pages: [
  //       {
  //         header: {
  //           description: strings.PropertyPaneDescription
  //         },
  //         groups: [
  //           {
  //             groupName: strings.BasicGroupName,
  //             groupFields: [
  //               PropertyPaneTextField('description', {
  //                 label: strings.DescriptionFieldLabel
  //               })
  //             ]
  //           }
  //         ]
  //       }
  //     ]
  //   };
  // }
  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        {
          groups: [
            {
              groupName: "Product Details",
              groupFields: [
                PropertyPaneTextField("productname", {
                  label: "Product Name",
                  multiline: false,
                  resizable: false,
                  deferredValidationTime: 5000,
                  placeholder: "Please enter product name",
                  description: "Name property field",
                }),
                PropertyPaneTextField("productdescription", {
                  label: "Product Description",
                  multiline: false,
                  resizable: false,
                  deferredValidationTime: 5000,
                  placeholder: "Please enter product description",
                  description: "Name property field",
                }),
                PropertyPaneTextField("productcost", {
                  label: "Product Cost",
                  multiline: false,
                  resizable: false,
                  deferredValidationTime: 5000,
                  placeholder: "Please enter product cost",
                  description: "Number property field",
                }),
                PropertyPaneTextField("quantity", {
                  label: "Quantity",
                  multiline: false,
                  resizable: false,
                  deferredValidationTime: 5000,
                  placeholder: "Please enter product quantity",
                  description: "Number property field",
                }),

                PropertyPaneToggle("IsCertified", {
                  key: "IsCertified",
                  label: "Is it Certified?",
                  onText: "ISI Certified",
                  offText: "Not an ISI Certified Product",
                }),

                PropertyPaneSlider("Rating", {
                  label: "Select Your Rating",
                  min: 1,
                  max: 10,
                  step: 1,
                  showValue: true,
                  value: 1,
                }),

                PropertyPaneChoiceGroup("processorttype", {
                  label: "Choices",
                  options: [
                    { key: "I4", text: "Yasuo", checked: true },
                    { key: "I5", text: "Riven" },
                    { key: "I6", text: "Amumu" },
                  ],
                }),
              ],
            },
          ],
        },
      ],
    };
  }
}
