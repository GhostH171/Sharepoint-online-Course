import { SPHttpClient, SPHttpClientResponse } from "@microsoft/sp-http";
import { BaseClientSideWebPart } from "@microsoft/sp-webpart-base";
import * as React from "react";
import * as ReactDom from "react-dom";
import { SPOpertations } from "../../components/Services/SPService";
import HelloWorld from "./components/HelloWorld";
import { IGetTodoProps } from "./components/IGetTodoProps";
import { IHelloWorldProps } from "./components/IHelloWorldProps";

export interface IGetTodoWebpartProps {
  description: string;
  title: string;
  day: Date;
  setCompleted: boolean;
}

export default class GetTodoWebpart extends BaseClientSideWebPart<IGetTodoWebpartProps> {
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
        new SPOpertations().GetTodoList(this.context).then((resp) => {
          const element: React.ReactElement<IHelloWorldProps> =
            React.createElement(HelloWorld, {
              todo: resp,
              context: this.context,
            });
          console.log(resp);
          ReactDom.render(element, this.domElement);
        });
      });
  }
  public render(): void {
    this.getTodos();
  }
}
