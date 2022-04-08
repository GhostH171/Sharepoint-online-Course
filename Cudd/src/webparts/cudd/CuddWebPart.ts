import { Version } from "@microsoft/sp-core-library";
import {
  IPropertyPaneConfiguration,
  PropertyPaneTextField,
} from "@microsoft/sp-property-pane";
import { BaseClientSideWebPart } from "@microsoft/sp-webpart-base";
import { IReadonlyTheme } from "@microsoft/sp-component-base";
import { escape } from "@microsoft/sp-lodash-subset";

import styles from "./CuddWebPart.module.scss";
import * as strings from "CuddWebPartStrings";

export interface ICuddWebPartProps {
  description: string;
}

export default class CuddWebPart extends BaseClientSideWebPart<ICuddWebPartProps> {
  private _isDarkTheme: boolean = false;
  private _environmentMessage: string = "";

  protected onInit(): Promise<void> {
    this._environmentMessage = this._getEnvironmentMessage();

    return super.onInit();
  }

  public render(): void {
    this.domElement.innerHTML = `
    <div>
      <div>
      <table border="5" bgcolor="aqua">
      <tr>
        <td>Software Title</td>
        <td><input type="text" id="txtSoftwareTitle" /></td>
      </tr>

      <tr>
        <td>Software Name</td>
        <td><input type="text" id="txtSoftwareName" /></td>
      </tr>

      <tr>
        <td>Software vendor</td>
        <td>
          <select id="ddlSoftwareVendor">
            <option value="Microsoft">Microsoft</option>
            <option value="Sun">Sun</option>
            <option value="Oracle">Oracle</option>
            <option value="Google">Google</option>
          </select>
        </td>
      </tr>
      <tr>
        <td>Software Version</td>
        <td><input type="text" id="txtSoftwareVersion" /></td>
      </tr>
      <tr>
        <td>Software Description</td>
        <td>
          <textarea
            id="txtSoftwareDescription"
            cols="30"
            rows="5"
          ></textarea>
        </td>
      </tr>
      <tr>
        <td colspan="2" align="center">
          <input type="submit" value="Insert Item" id="btnSubmit" />
          <input type="submit" value="Update" id="btnUpdate" />
          <input type="submit" value="Delete" id="btnDelete" />
          <input type="submit" value="Show All Record" id="btnReadAll" />
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
