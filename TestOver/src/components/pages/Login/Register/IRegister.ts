import { WebPartContext } from "@microsoft/sp-webpart-base";
export interface IRegisterProps {
  context: WebPartContext;
  changeFlag: any;
  setTabularData: React.Dispatch<
    React.SetStateAction<{
      userName: string;
      passWord: string;
    }>
  >;
}
