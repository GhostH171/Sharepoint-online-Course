import * as React from "react";
import styles from "./SiaDemoDraft9.module.scss";
import { ISiaDemoDraft9Props } from "./ISiaDemoDraft9Props";
import { escape } from "@microsoft/sp-lodash-subset";
import { FaRegQuestionCircle } from "react-icons/fa";

const SiaDemoDraft9: React.FC<ISiaDemoDraft9Props> = (props) => {
  return (
    <section>
      <div className={styles.header}>
        <img
          src={require("../assets/singapore-airlines-logo.jpg")}
          alt=""
          className={styles["headerLogo"]}
        />
        <div className={styles["headerTitle"]}>
          MODIFICATION BULLET IN APPROVAL
        </div>
      </div>
      <div className={styles["content"]}>
        <div className={styles["contentLeft"]}>
          <div className={styles["title"]}>TITLE</div>
          <div className={styles["description"]}>DESCRIPTION</div>
          <div className={styles["modification"]}>REASON FOR MODIFICATION</div>
          <div className={styles["remarks"]}>REASON FOR REVISION/REMARKS</div>
          <div className={styles["schedule"]}>
            <div className={styles["titleSchedule"]}>
              TO UPLIFT REVISED BASIC WEIGHT SCHEDULE (BWS)
              <div className={styles["titleRedstar"]}>*</div>
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
            <div className={styles["titleClassified"]}>
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
        <div className={styles["contentRight"]}>
          <div className={styles["mra"]}>
            <div className={styles["mraLeft"]}>
              <div className={styles["mdn"]}>Mod Doc No.:_____________</div>
              <div className={styles["revision"]}>Revision:_____________</div>
            </div>
            <div className={styles["mraRight"]}>
              <p>ATA</p>
            </div>
          </div>
          <div className={styles["ae"]}>
            <div className={styles["aeLeft"]}>
              AIRCRAFT TYPE
              <input
                type="button"
                value="A350-900"
                className={styles["button"]}
              />
            </div>

            <div className={styles["aeRight"]}>
              ENGINE TYPE
              <input
                type="button"
                value="TRENT XWB"
                className={styles["button"]}
              />
            </div>
          </div>
          <div className={styles["aircrapt"]}>
            <div className={styles["aircraptLeft"]}>
              <div className={styles["aircraptLeftAir"]}>
                AIRCRAFT <FaRegQuestionCircle />
                <input type="radio" name="approve"></input>
              </div>
              <div className={styles["aircraptLeftRegis"]}>
                REGISTRATION
                <input
                  type="button"
                  value="A350 ALL"
                  className={styles["button"]}
                />
              </div>{" "}
            </div>
            <div className={styles["aircraptRight"]}>
              ENGINE SN
              <input type="radio" name="approve"></input>
            </div>
          </div>
          <div className={styles["component"]}>COMPONENT</div>
          <div className={styles["componentpartno"]}>COMPONENT PART NO</div>

          <div className={styles["titleself"]}>APPPROVED</div>
          <p className={styles["paragraph"]}>
            I HEREBY CERTIFY THAT THE DESIGN OF THIS MODIFICATION COMPLIES WITH
            THE APPLICABLE AIRWORTHINESS REQUIREMENTS AND THE REQUIREMENT OF
            PART 2 PARA 2.2 OF TECHNICAL SERVICES EXPOSITION
          </p>
          <p className={styles["solidCenter"]}>_______________________</p>
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
export default SiaDemoDraft9;
