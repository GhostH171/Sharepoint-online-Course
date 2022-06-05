import { WebPartContext } from "@microsoft/sp-webpart-base";
export interface IHelloWorldProps {
  account: {
    username: string;
    password: string;
  };
  context: WebPartContext;
}
