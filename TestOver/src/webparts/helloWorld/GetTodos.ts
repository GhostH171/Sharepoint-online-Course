import { SPHttpClient, SPHttpClientResponse } from "@microsoft/sp-http";
import { BaseClientSideWebPart } from "@microsoft/sp-webpart-base";
import * as React from "react";
import * as ReactDom from "react-dom";
import { SPOpertations } from "../../components/Services/SPService";
import { IGetTodoProps } from "./components/IGetTodoProps";
import HelloWorld from "./components/HelloWorld";

export interface IGetTodoProps {
  description: string;
  title: string;
  day: Date;
  setCompleted: boolean;
}
export default class HelloWorldWebPart extends BaseClientSideWebPart<IGetTodoProps> {
  private getTodos() {
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
        const username = res;
        new SPOpertations().GetExactList(this.context).then((resp) => {
          const element: React.ReactElement<IGetTodoProps> =
            React.createElement(HelloWorld, {
              todo: resp,
              context: this.context,
            });
          ReactDom.render(element, this.domElement);
        });
      });
  }
  public render(): void {
    this.getTodos();
  }
}
