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
        <div className={styles["header-header-title"]}>
          EXCUTIVE SUMMARY OF MODIFICATION
        </div>
      </div>
      <div className={styles["content--title"]}>
        <div className={styles["content--title-title"]}>
          <div className={styles["content--title-title-title__left"]}>
            TITLE:
            <div className={styles["content--title-title-title__left-redstar"]}>
              *
            </div>
          </div>

          <div className={styles["content--title-title-title__right"]}>
            <p
              className={
                countLength > defaultMaxLength - 1
                  ? styles["content--title-title-title__right-maxlength"]
                  : styles["content--title-title-title__right-maxLengthHide"]
              }
            >
              Not over 200 characters
            </p>
            <div className={styles["content--title-title-title__right-count"]}>
              {countLength}
            </div>
          </div>
        </div>
        <textarea
          className={styles["content--title-input"]}
          onInput={CountChar}
          maxLength={defaultMaxLength}
        ></textarea>
      </div>
      <div className={styles["content--description"]}>
        <div className={styles["content--description-description"]}>
          <div
            className={
              styles["content--description-description-description__left"]
            }
          >
            DESCRIPTION:{" "}
            <div
              className={
                styles[
                  "content--description-description-description__left-redstar"
                ]
              }
            >
              *
            </div>
          </div>
          <div
            className={
              styles["content--description-description-description__right"]
            }
          >
            <p
              className={
                countLengthDes > defaultMaxLength - 1
                  ? styles[
                      "content--description-description-description__right-maxlength"
                    ]
                  : styles[
                      "content--description-description-description__right-maxLengthHide"
                    ]
              }
            >
              Not over 200 characters
            </p>
            <div
              className={
                styles[
                  "content--description-description-description__right-count"
                ]
              }
            >
              {countLengthDes}
            </div>
          </div>
        </div>
        <textarea
          className={styles["content--description-input"]}
          onInput={CountCharDes}
          maxLength={defaultMaxLength}
        ></textarea>
      </div>
      <div className={styles["content--aircrapt"]}>
        <div className={styles["content--aircrapt-aircrapt"]}>
          <div className={styles["content--aircrapt-aircrapt-aircrapt__left"]}>
            AIRCRAPT / COMPONENT AFFECTED:{" "}
            <div
              className={
                styles["content--aircrapt-aircrapt-aircrapt__left-redstar"]
              }
            >
              *
            </div>
            <FaRegQuestionCircle />
          </div>
          <div
            className={styles["content--aircrapt-aircrapt-aircrapt__right"]}
          ></div>
        </div>
        <div className={styles["content--aircrapt-input"]}>
          <div className={styles["button-row"]}>
            <input
              type="button"
              value="A350 ALL"
              className={styles["button-row-button__normal"]}
            />
            <input
              type="button"
              value="MH"
              className={styles["button-row-button__normal"]}
            />
            <input
              type="button"
              value="LH"
              className={styles["button-row-button__normal"]}
            />
            <input
              type="button"
              value="URL"
              className={styles["button-row-button__normal"]}
            />
            <input
              type="button"
              value="F"
              className={styles["button-row-button__normal"]}
            />
          </div>
          <div className={styles["button-row"]}>
            <input
              type="button"
              value="B777 ALL"
              className={styles["button-row-button__normal"]}
            />
            <input
              type="button"
              value="350ER"
              className={styles["button-row-button__normal"]}
            />
            <input
              type="button"
              value="X"
              className={styles["button-row-button__normal"]}
            />
          </div>
          <div className={styles["button-row"]}>
            <input
              type="button"
              value="A3880 ALL"
              className={styles["button-row-button__normal"]}
            />
          </div>
          <div className={styles["button-row"]}>
            <input
              type="button"
              value="B747 ALL"
              className={styles["button-row-button__normal"]}
            />
          </div>
          <div className={styles["button-row"]}>
            <input
              type="button"
              value="B787 ALL"
              className={styles["button-row-button__normal"]}
            />
          </div>
          <div className={styles["button-row"]}>
            <input
              type="button"
              value="Configuration 1: .................. "
              className={styles["button-row-button__long"]}
            />
          </div>
        </div>
      </div>
      <button className={styles["button--continued"]}>
        EXECUTIVE SUMMARY OF MODIFICATION CONTINUED
      </button>
    </section>
  );
};

export default SiaDemoDraft1;
