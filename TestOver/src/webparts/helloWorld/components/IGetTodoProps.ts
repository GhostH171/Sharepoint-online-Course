import { WebPartContext } from "@microsoft/sp-webpart-base";
export interface IGetTodoProps {
  todo: {
    title: string;
    day: Date;
    setCompleted: boolean;
  };
  context: WebPartContext;
}
