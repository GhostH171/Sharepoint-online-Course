import { WebPartContext } from "@microsoft/sp-webpart-base";
import * as React from "react";

export interface ISurveyProps {
  userInfor: any;
  context: WebPartContext;
  setUserHasAnswer: React.Dispatch<React.SetStateAction<boolean>>;
  setTabularData: React.Dispatch<
    React.SetStateAction<
      {
        UserID: string;
        Question: string;
        Answer: string;
      }[]
    >
  >;
}
