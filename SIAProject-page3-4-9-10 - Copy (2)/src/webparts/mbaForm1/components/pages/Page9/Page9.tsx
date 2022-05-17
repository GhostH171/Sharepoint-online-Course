import * as React from "react";
import styles from "./Page9.module.scss";
import { IPage9Props } from "./IPage9Props";
import { FaRegQuestionCircle } from "react-icons/fa";

const Page9: React.FC<IPage9Props> = (props) => {
  return (
    <section>
      <div className={styles.header}>
        <img
          src={require("../../../assets/singapore-airlines-logo.jpg")}
          alt=""
          className={styles.headerLogo}
        />
        <div className={styles.headerTitle}>
          MODIFICATION BULLET IN APPROVAL
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.contentLeft}>
          <div className={styles.title}>TITLE</div>
          <div className={styles.description}>DESCRIPTION</div>
          <div className={styles.modification}>REASON FOR MODIFICATION</div>
          <div className={styles.remarks}>REASON FOR REVISION/REMARKS</div>
        </div>
        <div className={styles.contentRight}>
          <div className={styles.mra}>
            <div className={styles.mraLeft}>
              <div className={styles.mdn}>Mod Doc No.:_____________</div>
              <div className={styles.revision}>Revision:_____________</div>
            </div>
            <div className={styles.mraRight}>
              <p>ATA</p>
            </div>
          </div>
          <div className={styles.ae}>
            <div className={styles.aeLeft}>
              AIRCRAFT TYPE
              <input type="button" value="A350-900" className={styles.button} />
            </div>

            <div className={styles.aeRight}>
              ENGINE TYPE
              <input
                type="button"
                value="TRENT XWB"
                className={styles.button}
              />
            </div>
          </div>
          <div className={styles.aircrapt}>
            <div className={styles.aircraptLeft}>
              <div className={styles.aircraptAir}>
                AIRCRAFT <FaRegQuestionCircle />
                <input type="radio" name="approve"></input>
              </div>
              <div className={styles.aircraptRegis}>
                REGISTRATION
                <input
                  type="button"
                  value="A350 ALL"
                  className={styles.button}
                />
              </div>{" "}
            </div>
            <div className={styles.aircraptRight}>
              ENGINE SN
              <input type="radio" name="approve"></input>
            </div>
          </div>
          <div className={styles.component}>COMPONENT</div>
          <div className={styles.componentpartno}>COMPONENT PART NO</div>
        </div>
      </div>
    </section>
  );
};
export default Page9;
