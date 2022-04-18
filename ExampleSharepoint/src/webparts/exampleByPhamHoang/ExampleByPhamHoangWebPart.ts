import { Version } from "@microsoft/sp-core-library";
import {
  IPropertyPaneConfiguration,
  PropertyPaneTextField,
} from "@microsoft/sp-property-pane";
import { BaseClientSideWebPart } from "@microsoft/sp-webpart-base";
import { IReadonlyTheme } from "@microsoft/sp-component-base";
import { escape } from "@microsoft/sp-lodash-subset";

import styles from "./ExampleByPhamHoangWebPart.module.scss";
import * as strings from "ExampleByPhamHoangWebPartStrings";
import { getIconClassName } from "@uifabric/styling";

export interface IExampleByPhamHoangWebPartProps {
  title: string;
  description: string;
}

export default class ExampleByPhamHoangWebPart extends BaseClientSideWebPart<IExampleByPhamHoangWebPartProps> {
  private _isDarkTheme: boolean = false;
  private _environmentMessage: string = "";

  protected onInit(): Promise<void> {
    this._environmentMessage = this._getEnvironmentMessage();

    return super.onInit();
  }

  public render(): void {
    this.domElement.innerHTML = `
    <div>
    <table>
    <tr>
    <td>
      <h2 display="flex" float="right">Welcome</h2>
    </td>
    <td>
   <i class="${getIconClassName("StatusCircleQuestionMark")}"></i>
    </td>
    <td>
    <i class="${getIconClassName("Mail")}" ></i>
    </td>
    </td>
    </table>
    </div>
    <div>
    <table>
      <tr>
        <td>
        <i class="${getIconClassName("Mail")}" ></i>
        </td>
        <td>
        <h2 color="#0078d4">Task Desk</h2>
        </td>
      </tr>
    </table>
    </div>
    <div>
    <table border="5" bgcolor="#ffff66">
    <tr>
      <td>Search</td>
      <td>
        <select id="ddlSoftwareVendor">
          <option value="StartWidth">Starts Width</option>
          <option value="EndWidth">Ends Width</option>
        
        </select>
      </td>
 
      <td><input type="text" id="txtSoftwareVersion" /></td>
      <td colspan="2" align="center">
        <input type="submit" value="Search" id="btnSubmit" />
      </td>
    </tr>
    </table>
    </div>
  <div id="divStatus"/>
  </div>
    `;
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

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        {
          header: {
            description: strings.PropertyPaneDescription,
          },
          groups: [
            {
              groupName: strings.BasicGroupName,
              groupFields: [
                PropertyPaneTextField("description", {
                  label: strings.DescriptionFieldLabel,
                }),
              ],
            },
          ],
        },
      ],
    };
  }
}
