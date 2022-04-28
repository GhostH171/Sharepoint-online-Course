import * as React from "react";
import styles from "./SiaDemoDraft10.module.scss";
import { ISiaDemoDraft10Props } from "./ISiaDemoDraft10Props";
import { escape } from "@microsoft/sp-lodash-subset";

const SiaDemoDraft10: React.FC<ISiaDemoDraft10Props> = (props) => {
  return (
    <section>
      <div className={styles.header}>
        <img
          src={require("../assets/singapore-airlines-logo.jpg")}
          alt=""
          className={styles["header-logo"]}
        />
        <div className={styles["header-title"]}>
          MODIFICATION BULLET IN APPROVAL
        </div>
      </div>
      <div className={styles["content"]}>
        <div className={styles["content-left"]}>
          <div className={styles["schedule"]}>
            <div className={styles["title"]}>
              TO UPLIFT REVISED BASIC WEIGHT SCHEDULE (BWS)
              <div className={styles["title-redstar"]}>*</div>
            </div>
            <div className={styles["approval"]}>
              <input type="radio" name="approval" />
              <label>YES</label>
              <input type="radio" name="approval" />
              <label>NO</label>
            </div>
            <div className={styles["notification"]}>
              IF YES, ENSURE THAT THE INSTRUCTION "TO UPLIFT REVISED BWS ONTO
              THE AIRCRAFT" IS IN THE MB AND MAF
            </div>
          </div>
          <div className={styles["classified"]}>
            <div className={styles["title"]}>
              THIS MODIFICATION IS CLASSIFIED AS
            </div>
            <div className={styles["approval"]}>
              <input type="radio" name="majorandminor" />
              <label>MAJOR</label>
              <input type="radio" name="majorandminor" />
              <label>MINOR</label>
            </div>
            <p>AMA NO.</p>
            <p>___________________</p>
          </div>
        </div>
        <div className={styles["content-right"]}>
          <div className={styles["titleself"]}>APPPROVED</div>
          <p>
            I HEREBY CERTIFY THAT THE DESIGN OF THIS MODIFICATION COMPLIES WITH
            THE APPLICABLE AIRWORTHINESS REQUIREMENTS AND THE REQUIREMENT OF
            PART 2 PARA 2.2 OF TECHNICAL SERVICES EXPOSITION
          </p>
          <p>_______________________</p>
          <p className={styles["titleself"]}>
            DESIGN SIGNATORY TECHNICAL SERVICES
          </p>
          <p>DATE:________________</p>
          <div className={styles["bottomtitle"]}>
            CAAS APPROVAL: AWI/DOA/005
          </div>
        </div>
      </div>
      <div className={styles["bottomtitle"]}>
        <p>CO.REG.NO.1972000078R</p>
        <p>RESTRICTED</p>
        <p>SIA TS 001 (NOV/20)</p>
      </div>
    </section>
  );
};

export default SiaDemoDraft10;
