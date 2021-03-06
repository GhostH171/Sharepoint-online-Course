import { Version } from "@microsoft/sp-core-library";
import {
  IPropertyPaneConfiguration,
  PropertyPaneTextField,
} from "@microsoft/sp-property-pane";
import { BaseClientSideWebPart } from "@microsoft/sp-webpart-base";
import { IReadonlyTheme } from "@microsoft/sp-component-base";
import { escape } from "@microsoft/sp-lodash-subset";

import styles from "./Sitecreation1WebPart.module.scss";
import * as strings from "Sitecreation1WebPartStrings";
import {
  ISPHttpClientOptions,
  SPHttpClient,
  SPHttpClientResponse,
} from "@microsoft/sp-http";

export interface ISitecreation1WebPartProps {
  description: string;
}

export default class Sitecreation1WebPart extends BaseClientSideWebPart<ISitecreation1WebPartProps> {
  private _isDarkTheme: boolean = false;
  private _environmentMessage: string = "";

  protected onInit(): Promise<void> {
    this._environmentMessage = this._getEnvironmentMessage();

    return super.onInit();
  }

  public render(): void {
    this.domElement.innerHTML = `
      <div class="${styles.sitecreation1}">
        <h1>Create a New Subtite</h1>
        <p>Please fill the below details to create a new subsite.</p><br/>

        Sub Site Title: <br/><input type='text' id='txtSubSiteTitle'/><br/>
        Sub Site Url: <br/><input type='text' id='txtSubSiteUrl'/><br/>
        Sub Site Description: <br/><input type='text' id='txtSubSiteDescription' rows="5" cols="30"/></textarea><br/><br/>
        <input type="button" id="btnCreateSubSite" value="Create Sub Site"/><br/>
      </div>
    `;
    this.bindEvents();
  }

  private bindEvents(): void {
    debugger;
    this.domElement
      .querySelector("#btnCreateSubSite")
      .addEventListener("click", () => {
        this.createSubSIte();
      });
  }
  private createSubSIte(): void {
    let subSiteTitle = document.getElementById("txtSubSiteTitle")["value"];
    let subSiteUrl = document.getElementById("txtSubSiteurl")["value"];
    let subSiteDescription = document.getElementById("txtSubSiteDescription")[
      "value"
    ];

    const url: string =
      this.context.pageContext.web.absoluteUrl + "/_api/web/webinfos/add";
    const spHttpClientOptions: ISPHttpClientOptions = {
      body: `{
        "parameters":{
          "@odata.type":"SP.WebInfoCreationInformation",
          "Title":"${subSiteTitle}",
          "Url":"${subSiteUrl}",
          "Description" : "${subSiteDescription}",
          "Language":1033,
          "WebTemplate":"STS#0",
          "UseUniquePermissions":true
        }
      }`,
    };

    this.context.spHttpClient
      .post(url, SPHttpClient.configurations.v1, spHttpClientOptions)
      .then((response: SPHttpClientResponse) => {
        if (response.status === 200) {
          alert("New Subtitile has been created successfully");
        } else {
          alert(
            "Error Message: " + response.status + "-" + response.statusText
          );
        }
      });
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
