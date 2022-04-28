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
          className={styles["header-logo"]}
        />
        <div className={styles["header-title"]}>
          MODIFICATION BULLET IN APPROVAL
        </div>
      </div>
      <div className={styles["content"]}>
        <div className={styles["content-left"]}>
          <div className={styles["title"]}>TITLE</div>
          <div className={styles["description"]}>DESCRIPTION</div>
          <div className={styles["modification"]}>REASON FOR MODIFICATION</div>
          <div className={styles["remarks"]}>REASON FOR REVISION/REMARKS</div>
        </div>
        <div className={styles["content-right"]}>
          <div className={styles["mra"]}>
            <div className={styles["mra-left"]}>
              <div className={styles["mdn"]}>Mod Doc No.:_____________</div>
              <div className={styles["revision"]}>Revision:_____________</div>
            </div>
            <div className={styles["mra-right"]}>
              <p>ATA</p>
            </div>
          </div>
          <div className={styles["ae"]}>
            <div className={styles["ae-left"]}>
              AIRCRAFT TYPE
              <input
                type="button"
                value="A350-900"
                className={styles["button"]}
              />
            </div>

            <div className={styles["ae-right"]}>
              ENGINE TYPE
              <input
                type="button"
                value="TRENT XWB"
                className={styles["button"]}
              />
            </div>
          </div>
          <div className={styles["aircrapt"]}>
            <div className={styles["aircrapt-left"]}>
              <div className={styles["aircrapt-left-air"]}>
                AIRCRAFT <FaRegQuestionCircle />
                <input type="radio" name="approve"></input>
              </div>
              <div className={styles["aircrapt-left-regis"]}>
                REGISTRATION
                <input
                  type="button"
                  value="A350 ALL"
                  className={styles["button"]}
                />
              </div>{" "}
            </div>
            <div className={styles["aircrapt-right"]}>
              ENGINE SN
              <input type="radio" name="approve"></input>
            </div>
          </div>
          <div className={styles["component"]}>COMPONENT</div>
          <div className={styles["componentpartno"]}>COMPONENT PART NO</div>
        </div>
      </div>
    </section>
  );
};
export default SiaDemoDraft9;
