import * as React from "react";
import * as ReactDom from "react-dom";

import { Version } from "@microsoft/sp-core-library";
import { DisplayMode } from "@microsoft/sp-core-library";
import {
  IPropertyPaneConfiguration,
  PropertyPaneTextField,
} from "@microsoft/sp-property-pane";
import { BaseClientSideWebPart } from "@microsoft/sp-webpart-base";
import { IReadonlyTheme } from "@microsoft/sp-component-base";
import { escape } from "@microsoft/sp-lodash-subset";

import styles from "./HelloWorld2WebPart.module.scss";
import * as strings from "HelloWorld2WebPartStrings";
import {
  SPHttpClient,
  SPHttpClientResponse,
  ISPHttpClientOptions,
} from "@microsoft/sp-http";

export interface IHelloWorld2WebPartProps {
  description: string;
}

export default class HelloWorld2WebPart extends BaseClientSideWebPart<IHelloWorld2WebPartProps> {
  public render(): void {
    this.domElement.innerHTML = `<div class='${styles.helloWorld2}'>
      <h3>Creating a New List Dynamically</h3><br/><br/>
      <p>Please fill out the below details to create a new list programatically</p><br/><br/>
      New List Name: <br/><input type ='text' id='txtNewListName'/><br/><br/>
      New List Description: <br/><input type ='text' id='txtNewListDescription'/><br/><br/>
      <input type='button' id='btnCreateNewList' value='Create New List'>
    </div>`;

    const pageMode: string =
      this.displayMode === DisplayMode.Edit
        ? "You are in edit mode"
        : "You are in read mode";
    this.bindEvents();
  }

  private bindEvents(): void {
    this.domElement
      .querySelector("#btnCreateNewList")
      .addEventListener("click", () => {
        this.createNewList();
      });
  }
  private createNewList(): void {
    var newListName = document.getElementById("txtNewListName")["value"];
    var newListDescription = document.getElementById("txtNewListDescription")[
      "value"
    ];
    const listUrl: string =
      this.context.pageContext.web.absoluteUrl +
      `/_api/web/lists/GetByTitle('${newListName}')`;

    this.context.spHttpClient
      .get(listUrl, SPHttpClient.configurations.v1)
      .then((response: SPHttpClientResponse) => {
        if (response.status === 200) {
          alert("A list already does exist with this name");
          return;
        }
        if (response.status === 404) {
          const url: string =
            this.context.pageContext.web.absoluteUrl + "/_api/web/lists";

          const listDefinition: any = {
            Title: newListName,
            Description: newListDescription,
            AllowContentTypes: true,
            BaseTemplate: 100,
            ContentTypeEnabled: true,
          };
          const spHttpClientOptions: ISPHttpClientOptions = {
            body: JSON.stringify(listDefinition),
          };
          this.context.spHttpClient
            .post(url, SPHttpClient.configurations.v1, spHttpClientOptions)
            .then((response: SPHttpClientResponse) => {
              if (response.status === 201) {
                alert("A new List has been created successfully");
              } else {
                alert(
                  "Error Message: " +
                    response.status +
                    " " +
                    response.statusText
                );
              }
            });
        }
        // else {
        //   alert(
        //     "Error Message: " + response.status + " " + response.statusText
        //   );
        // }
      });
  }

  // private _getEnvironmentMessage(): string {
  //   if (!!this.context.sdks.microsoftTeams) { // running in Teams
  //     return this.context.isServedFromLocalhost ? strings.AppLocalEnvironmentTeams : strings.AppTeamsTabEnvironment;
  //   }

  //   return this.context.isServedFromLocalhost ? strings.AppLocalEnvironmentSharePoint : strings.AppSharePointEnvironment;
  // }

  // protected onThemeChanged(currentTheme: IReadonlyTheme | undefined): void {
  //   if (!currentTheme) {
  //     return;
  //   }

  //   this._isDarkTheme = !!currentTheme.isInverted;
  //   const {
  //     semanticColors
  //   } = currentTheme;
  //   this.domElement.style.setProperty('--bodyText', semanticColors.bodyText);
  //   this.domElement.style.setProperty('--link', semanticColors.link);
  //   this.domElement.style.setProperty('--linkHovered', semanticColors.linkHovered);

  // }

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
