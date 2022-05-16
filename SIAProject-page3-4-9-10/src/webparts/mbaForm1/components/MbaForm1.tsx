import * as React from "react";
import { FunctionComponent } from "react";
import styles from "./MbaForm1.module.scss";
import { IMbaForm1Props } from "./IMbaForm1Props";
import { escape } from "@microsoft/sp-lodash-subset";
import Page34 from "./pages/Page3-4/Page34";
import Page910 from "./pages/Page9-10/Page910";

const EDMAForm2: FunctionComponent<IMbaForm1Props> = (props) => {
  return (
    <div>
      <Page34 />
      <Page910 />
    </div>
  );
};

export default EDMAForm2;
