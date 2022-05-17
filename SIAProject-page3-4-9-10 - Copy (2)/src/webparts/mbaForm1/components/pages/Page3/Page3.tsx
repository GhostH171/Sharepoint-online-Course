import * as React from "react";
import styles from "./Page3.module.scss";
import { IPage3Props } from "./IPage3Props";
import { FaRegQuestionCircle } from "react-icons/fa";
const Page3: React.FC<IPage3Props> = (props) => {
  const defaultMaxLength = 200;
  const [countLength, setCountLength] = React.useState<number>();
  const CountChar = (e) => {
    setCountLength(e.target.value.length);
  };

  const [countLengthDes, setCountLengthDes] = React.useState<number>();
  const CountCharDes = (e) => {
    setCountLengthDes(e.target.value.length);
  };
  const [thresholdLength, setThresholdLength] = React.useState<number>();
  const CountCharacter = (e) => {
    setThresholdLength(e.target.value.length);
  };
  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <img
          src={require("../../../assets/singapore-airlines-logo.jpg")}
          alt=""
          className={styles.HeaderLogo}
        />
        <div className={styles.HeaderTitle}>
          EXCUTIVE SUMMARY OF MODIFICATION
        </div>
      </div>
      <div className={styles.title}>
        <div className={styles.TitleContent}>
          <div className={styles.TitleLeft}>
            TITLE:
            <div className={styles.Redstar}>*</div>
          </div>

          <div className={styles.TitleRight}>
            <p
              className={
                countLength > defaultMaxLength - 1
                  ? styles.Maxlength
                  : styles.MaxLengthHide
              }
            >
              Not over 200 characters
            </p>
            <div className={styles.Count}>{countLength}</div>
          </div>
        </div>
        <div style={{ display: "flex", padding: "5px" }}>
          <textarea
            className={styles.TitleInput}
            onInput={CountChar}
            maxLength={defaultMaxLength}
          ></textarea>
        </div>
      </div>
      <div className={styles.description}>
        <div className={styles.DesContent}>
          <div className={styles.DesLeft}>
            DESCRIPTION: <div className={styles.Redstar}>*</div>
          </div>
          <div className={styles.DesRight}>
            <p
              className={
                countLengthDes > defaultMaxLength - 1
                  ? styles.Maxlength
                  : styles.MaxLengthHide
              }
            >
              Not over 200 characters
            </p>
            <div className={styles.Count}>{countLengthDes}</div>
          </div>
        </div>
        <div style={{ display: "flex", padding: "5px" }}>
          <textarea
            className={styles.DesInput}
            onInput={CountCharDes}
            maxLength={defaultMaxLength}
          ></textarea>
        </div>
      </div>
      <div className={styles.aircrapt}>
        <div className={styles.AircraptContent}>
          <div className={styles.AircraptLeft}>
            AIRCRAPT / COMPONENT AFFECTED:{" "}
            <div className={styles.Redstar}>*</div>
            <FaRegQuestionCircle />
          </div>
          <div className={styles.AircraptRight}></div>
        </div>
        <div className={styles.AircraptInput}>
          <div className={styles.btn}>
            <input
              type="button"
              value="A350 ALL"
              className={styles.btnNormal}
            />
            <input type="button" value="MH" className={styles.btnNormal} />
            <input type="button" value="LH" className={styles.btnNormal} />
            <input type="button" value="URL" className={styles.btnNormal} />
            <input type="button" value="F" className={styles.btnNormal} />
          </div>
          <div className={styles.btn}>
            <input
              type="button"
              value="B777 ALL"
              className={styles.btnNormal}
            />
            <input type="button" value="350ER" className={styles.btnNormal} />
            <input type="button" value="X" className={styles.btnNormal} />
          </div>
          <div className={styles.btn}>
            <input
              type="button"
              value="A3880 ALL"
              className={styles.btnNormal}
            />
          </div>
          <div className={styles.btn}>
            <input
              type="button"
              value="B747 ALL"
              className={styles.btnNormal}
            />
          </div>
          <div className={styles.btn}>
            <input
              type="button"
              value="B787 ALL"
              className={styles.btnNormal}
            />
          </div>
          <div className={styles.btn}>
            <input
              type="button"
              value="Configuration 1: .................. "
              className={styles.btnLong}
            />
          </div>
          <div className={styles.btn}>
            <input
              type="button"
              value="Configuration 1: .................. "
              className={styles.btnLong}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
export default Page3;
