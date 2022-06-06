import { SPHttpClient, SPHttpClientResponse } from "@microsoft/sp-http";
import { BaseClientSideWebPart } from "@microsoft/sp-webpart-base";
import * as React from "react";
import * as ReactDom from "react-dom";
import { SPOpertations } from "../../components/Services/SPServices";
import { IPracicalTestSpFxProps } from "./components/IPracicalTestSpFxProps";
import PracicalTestSpFx from "./components/PracicalTestSpFx";

export interface IPracicalTestSpFxWebPartProps {
  description: string;
}

export default class PracicalTestSpFxWebPart extends BaseClientSideWebPart<IPracicalTestSpFxWebPartProps> {
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
        new SPOpertations().GetExactList(this.context).then((resp) => {
          const element: React.ReactElement<IPracicalTestSpFxProps> =
            React.createElement(PracicalTestSpFx, {
              userInfor,
              tabularData: resp,
              context: this.context,
            });

          ReactDom.render(element, this.domElement);
        });
      });
  }
  public render(): void {
    this.getCurrrentProfile();
  }
}
