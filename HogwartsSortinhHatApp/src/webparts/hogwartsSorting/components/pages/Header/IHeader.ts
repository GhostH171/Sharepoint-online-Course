import { WebPartContext } from "@microsoft/sp-webpart-base";

export interface IHeaderProps {
  userInfor: any;
  context: WebPartContext;
  setHouseData: React.Dispatch<
    React.SetStateAction<
      {
        FullName: string;
        House: string;
        Dateandtime: string;
      }[]
    >
  >;
  setTabularData: React.Dispatch<
    React.SetStateAction<
      {
        FullName: string;
        House: string;
        Dateandtime: string;
      }[]
    >
  >;
}
