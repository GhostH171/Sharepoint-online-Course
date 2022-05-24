import { WebPartContext } from "@microsoft/sp-webpart-base";

export interface IHeaderProps {
  userInfor: any;
  context: WebPartContext;
  setTabularData: React.Dispatch<
    React.SetStateAction<
      {
        Question: string;
        Answer: string;
      }[]
    >
  >;
}
