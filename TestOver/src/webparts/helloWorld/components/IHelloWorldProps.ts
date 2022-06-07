import { WebPartContext } from "@microsoft/sp-webpart-base";
export interface IHelloWorldProps {
  account?: {
    username: string;
    password: string;
  };

  todo?: {
    title: string;
    day: string;
    setCompleted: boolean;
  };
  context: WebPartContext;
}
