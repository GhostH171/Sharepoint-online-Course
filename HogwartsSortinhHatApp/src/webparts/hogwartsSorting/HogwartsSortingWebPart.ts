import * as React from "react";
import * as ReactDom from "react-dom";
import { BaseClientSideWebPart } from "@microsoft/sp-webpart-base";

import HogwartsSorting from "./components/HogwartsSorting";
import { IHogwartsSortingProps } from "./components/IHogwartsSortingProps";
import { SPHttpClient, SPHttpClientResponse } from "@microsoft/sp-http";
import { SPOpertations } from "./components/Services/SPServices";
export interface IHogwartsSortingWebPartProps {
  description: string;
}

export default class HogwartsSortingWebPart extends BaseClientSideWebPart<IHogwartsSortingWebPartProps> {
  private getCurrrentProfile() {
    return this.context.spHttpClient
      .get(
        `${this.context.pageContext.web.absoluteUrl}/_api/sp.userprofiles.peoplemanager/GetMyProperties`,
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
        const userInfor = res;

        new SPOpertations().GetAllList(this.context).then((resp) => {
          console.log(resp);

          const element: React.ReactElement<IHogwartsSortingProps> =
            React.createElement(HogwartsSorting, {
              userInfor,
              tabularData: resp,
              context: this.context,
            });

          ReactDom.render(element, this.domElement);
        });
      });
  }
  private getHouse() {}

  public render(): void {
    this.getCurrrentProfile();
  }
}
