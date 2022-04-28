import * as React from "react";
import styles from "./SiaDemoDraft1.module.scss";
import { ISiaDemoDraft1Props } from "./ISiaDemoDraft1Props";
import { escape } from "@microsoft/sp-lodash-subset";
import { sp } from "@pnp/sp";
import { FaRegQuestionCircle } from "react-icons/fa";
const SiaDemoDraft1: React.FC<ISiaDemoDraft1Props> = (props) => {
  const defaultMaxLength = 200;
  const [countLength, setCountLength] = React.useState<number>();
  const CountChar = (e) => {
    setCountLength(e.target.value.length);
  };

  const [countLengthDes, setCountLengthDes] = React.useState<number>();
  const CountCharDes = (e) => {
    setCountLengthDes(e.target.value.length);
  };

  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <img
          src={require("../assets/singapore-airlines-logo.jpg")}
          alt=""
          className={styles["header-logo"]}
        />
        <div className={styles["header-title"]}>
          EXCUTIVE SUMMARY OF MODIFICATION
        </div>
      </div>
      <div className={styles["title"]}>
        <div className={styles["title-content"]}>
          <div className={styles["title-content-left"]}>
            TITLE:
            <div className={styles["title-content-left-redstar"]}>*</div>
          </div>

          <div className={styles["title-content-right"]}>
            <p
              className={
                countLength > defaultMaxLength - 1
                  ? styles["title-content-right-maxlength"]
                  : styles["title-content-right-maxLengthHide"]
              }
            >
              Not over 200 characters
            </p>
            <div className={styles["title-content-right-count"]}>
              {countLength}
            </div>
          </div>
        </div>
        <textarea
          className={styles["title-input"]}
          onInput={CountChar}
          maxLength={defaultMaxLength}
        ></textarea>
      </div>
      <div className={styles["description"]}>
        <div className={styles["description-content"]}>
          <div className={styles["description-content-left"]}>
            DESCRIPTION:{" "}
            <div className={styles["description-content-left-redstar"]}>*</div>
          </div>
          <div className={styles["description-content-right"]}>
            <p
              className={
                countLengthDes > defaultMaxLength - 1
                  ? styles["description-content-right-maxlength"]
                  : styles["description-content-right-maxLengthHide"]
              }
            >
              Not over 200 characters
            </p>
            <div className={styles["description-content-right-count"]}>
              {countLengthDes}
            </div>
          </div>
        </div>
        <textarea
          className={styles["description-input"]}
          onInput={CountCharDes}
          maxLength={defaultMaxLength}
        ></textarea>
      </div>
      <div className={styles["aircrapt"]}>
        <div className={styles["aircrapt-content"]}>
          <div className={styles["aircrapt-content-left"]}>
            AIRCRAPT / COMPONENT AFFECTED:{" "}
            <div className={styles["aircrapt-content-left-redstar"]}>*</div>
            <FaRegQuestionCircle />
          </div>
          <div className={styles["aircrapt-content-right"]}></div>
        </div>
        <div className={styles["aircrapt-input"]}>
          <div className={styles["buttons"]}>
            <input
              type="button"
              value="A350 ALL"
              className={styles["buttons-normal"]}
            />
            <input
              type="button"
              value="MH"
              className={styles["buttons-normal"]}
            />
            <input
              type="button"
              value="LH"
              className={styles["buttons-normal"]}
            />
            <input
              type="button"
              value="URL"
              className={styles["buttons-normal"]}
            />
            <input
              type="button"
              value="F"
              className={styles["buttons-normal"]}
            />
          </div>
          <div className={styles["buttons"]}>
            <input
              type="button"
              value="B777 ALL"
              className={styles["buttons-normal"]}
            />
            <input
              type="button"
              value="350ER"
              className={styles["buttons-normal"]}
            />
            <input
              type="button"
              value="X"
              className={styles["buttons-normal"]}
            />
          </div>
          <div className={styles["buttons"]}>
            <input
              type="button"
              value="A3880 ALL"
              className={styles["buttons-normal"]}
            />
          </div>
          <div className={styles["buttons"]}>
            <input
              type="button"
              value="B747 ALL"
              className={styles["buttons-normal"]}
            />
          </div>
          <div className={styles["buttons"]}>
            <input
              type="button"
              value="B787 ALL"
              className={styles["buttons-normal"]}
            />
          </div>
          <div className={styles["buttons"]}>
            <input
              type="button"
              value="Configuration 1: .................. "
              className={styles["buttons-long"]}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SiaDemoDraft1;
