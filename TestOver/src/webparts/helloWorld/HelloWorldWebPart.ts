import { SPHttpClient, SPHttpClientResponse } from "@microsoft/sp-http";
import { BaseClientSideWebPart } from "@microsoft/sp-webpart-base";
import * as React from "react";
import * as ReactDom from "react-dom";
import { SPOpertations } from "../../components/Services/SPService";
import { IHelloWorldProps } from "./components/IHelloWorldProps";
import HelloWorld from "./components/HelloWorld";

export interface IHelloWorldWebpPartProps {
  description: string;
  username: string;
  password: string;
}
export default class HelloWorldWebPart extends BaseClientSideWebPart<IHelloWorldWebpPartProps> {
  private getUser() {
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
        new SPOpertations().GetExactList(this.context).then((resp) => {
          const element: React.ReactElement<IHelloWorldProps> =
            React.createElement(HelloWorld, {
              account: resp,
              context: this.context,
            });
          console.log(resp);
          ReactDom.render(element, this.domElement);
        });
      });
  }
  public render(): void {
    this.getUser();
  }
}
