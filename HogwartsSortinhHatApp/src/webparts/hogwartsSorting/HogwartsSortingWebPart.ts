import * as React from "react";
import * as ReactDom from "react-dom";
import {
  IPropertyPaneConfiguration,
  PropertyPaneTextField,
} from "@microsoft/sp-property-pane";
import { BaseClientSideWebPart } from "@microsoft/sp-webpart-base";

import * as strings from "HogwartsSortingWebPartStrings";
import HogwartsSorting from "./components/HogwartsSorting";
import { IHogwartsSortingProps } from "./components/IHogwartsSortingProps";
import { SPHttpClient, SPHttpClientResponse } from "@microsoft/sp-http";
export interface IHogwartsSortingWebPartProps {
  description: string;
}

export default class HogwartsSortingWebPart extends BaseClientSideWebPart<IHogwartsSortingWebPartProps> {
  private getCurrrentProfile() {
    return this.context.spHttpClient
      .get(
        `https://5jvv0n.sharepoint.com/_api/sp.userprofiles.peoplemanager/GetMyProperties`,
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
      })
      .then((res) => {
        const element: React.ReactElement<IHogwartsSortingProps> =
          React.createElement(HogwartsSorting, {
            userInfor: res,
          });

        ReactDom.render(element, this.domElement);
      });
  }

  public render(): void {
    this.getCurrrentProfile();
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
