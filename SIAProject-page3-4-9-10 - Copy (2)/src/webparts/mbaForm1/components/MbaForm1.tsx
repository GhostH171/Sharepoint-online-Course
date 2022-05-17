import * as React from "react";
import { FunctionComponent } from "react";
import { IMbaForm1Props } from "./IMbaForm1Props";
import Page3 from "./pages/Page3/Page3";
import Page4 from "./pages/Page4/Page4";
import Page9 from "./pages/Page9/Page9";
import Page10 from "./pages/Page10/Page10";

const IMbaForm1: FunctionComponent<IMbaForm1Props> = (props) => {
  return (
    <div>
      <Page3 />
      {/* <Page4 />
      <Page9 />
      <Page10 /> */}
    </div>
  );
};

export default IMbaForm1;
