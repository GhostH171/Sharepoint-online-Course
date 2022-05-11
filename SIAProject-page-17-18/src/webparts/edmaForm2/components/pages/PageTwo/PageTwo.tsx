import * as React from "react";
import { useState } from "react";
import { FunctionComponent } from "react";
import { IPageTwoProps } from "./IPageTwoProps";
import styles from "./PageTwo.module.scss";
const PageTwo: FunctionComponent<IPageTwoProps> = (props) => {
  return (
    <div className={styles.mainForm}>
      <div className={styles.title}>special inspection</div>
      <div className={styles["first-content"]}>
        <table style={{ width: "100%" }}>
          <tr style={{ height: "44px" }}>
            <th>
              <div className={styles.btngreen}>
                to terminate existing si after mod competition
              </div>
            </th>
            <th>
              <div className={styles.btngreen}>to revise existing si </div>
            </th>
          </tr>

          <tr>
            <td>
              <div className={styles.btngreen}>to raise new si</div>
            </td>
            <td>
              <div style={{ padding: "5px", fontSize: "11px" }}>
                si to terminate: ______________________
              </div>
            </td>
          </tr>
        </table>
      </div>
      <div className={styles["second-content"]}>
        <div className={styles.mpcc}>mpcc action text:</div>
        <div className={styles.btnred}>NIL</div>
      </div>
      <div className={styles["last-content"]}>
        <p>
          <b>1: TO ISSUE MOD TO AIRCRAFT REGARDLESS OF MOD STATUS</b>
        </p>
        <p>
          <b>2: INSTRUCTION 2</b>
        </p>
        <p>
          <b>3: INSTRUCTION 3</b>
        </p>
        <p>
          <b>4: INSTRUCTION 4</b>
        </p>
        <p>
          <b>ETC</b>
        </p>
      </div>
    </div>
  );
};

export default PageTwo;
