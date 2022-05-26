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
  setIsSurveyStarted: any;
  isSurveyStarted: boolean;
  setUserHasAnswer: React.Dispatch<React.SetStateAction<boolean>>;
  userHasAnswer: boolean;
  setIsViewResponse: React.Dispatch<React.SetStateAction<boolean>>;
}
