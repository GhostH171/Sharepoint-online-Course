import * as React from "react";
import { FunctionComponent } from "react";
import styles from "./EdmaForm2.module.scss";
import { IEdmaForm2Props } from "./IEdmaForm2Props";
import PageOne from "./pages/PageOne/PageOne";
import PageTwo from "./pages/PageTwo/PageTwo";

const EDMAForm2: FunctionComponent<IEdmaForm2Props> = (props) => {
  return (
    <div>
      <PageOne />
      <PageTwo />
    </div>
  );
};

export default EDMAForm2;
