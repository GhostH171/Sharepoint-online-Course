import * as React from "react";
import styles from "./Page34.module.scss";
import { IPage34Props } from "./IPage34Props";
import { FaRegQuestionCircle } from "react-icons/fa";
const Page34: React.FC<IPage34Props> = (props) => {
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
        </div>
      </div>
      <div className={styles.threshold}>
        <div className={styles.thresholdContent}>
          <div className={styles.thresholdLeft}>
            RECOMMENDED THRESHOLD: <div className={styles.Redstar}>*</div>
          </div>
          <div className={styles.thresholdRight}>
            <p
              className={
                thresholdLength > defaultMaxLength - 1
                  ? styles.Maxlength
                  : styles.MaxLengthHide
              }
            >
              Not over 200 characters
            </p>
            <div className={styles.Count}>{thresholdLength}</div>
          </div>
        </div>
        <div style={{ display: "flex", padding: "5px" }}>
          <textarea
            className={styles.thresholdInput}
            onInput={CountCharacter}
            maxLength={defaultMaxLength}
          ></textarea>
        </div>
      </div>
      <div className={styles.infor}>
        <div className={styles.inforContent}>
          <div className={styles.inforLeft}>
            COST/WARRANTY INFORMATION: <div className={styles.Redstar}>*</div>
          </div>
          <div className={styles.inforRight}></div>
        </div>
        <div className={styles.inforInput}>
          <table className={styles.inforTable}>
            <thead className={styles.inforThreadlight}>
              <tr>
                <th scope="col">CONFIGURATION</th>
                <th scope="col">AIRCRAPT</th>
                <th scope="col">MANHOUR(S)</th>
                <th scope="col">COST PER MANHOUR</th>
                <th scope="col">LABOUR COST</th>
                <th scope="col">MATERIAL COST</th>
                <th scope="col">TOTAL UNIT COST</th>
                <th scope="col">TOTAL FLEET COST</th>
                <th scope="col">EXCHANGE RATE</th>
                <th scope="col">EXCHANGE RATE</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>20</td>
                <td>5.5</td>
                <td>73</td>
                <td>401.50</td>
                <td>825</td>
                <td>1226.50</td>
                <td>24530</td>
                <td>1.35</td>
                <td>1.50</td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>38</td>
                <td>6</td>
                <td>73</td>
                <td>73</td>
                <td>825</td>
                <td>47994</td>
                <td>47994</td>
                <td>USD</td>
                <td>EURO</td>
              </tr>
              <tr>
                <th scope="row" className={styles.inforTdb}></th>
                <td></td>
                <td></td>
                <td>SGD</td>
                <td>SGD</td>
                <td>EURO &#62; SGD</td>
                <td>GRAND TOTAL</td>
                <td>72524</td>
                <td>SGD</td>
                <td></td>
              </tr>
            </tbody>
          </table>
          <div>
            <input
              type="button"
              value="Configuration 1: .................. "
              className={styles.btnLong}
            />
          </div>
          <div>
            <input
              type="button"
              value="Configuration 1: .................. "
              className={styles.btnLong}
            />
          </div>
        </div>
      </div>
      <div className={styles.revision}>
        <div className={styles.revisionContent}>
          <div className={styles.revisionLeft}>REASON FOR REVISION: </div>
        </div>
        <div style={{ display: "flex", padding: "5px" }}>
          <textarea className={styles.revisionInput} onInput={CountCharacter}>
            {}
          </textarea>
        </div>
      </div>
      <div className={styles.submit}>
        <div className={styles.submitContent}>
          <div className={styles.submitLeft}>
            SUBMITTED BY: <div className={styles.Redstar}>*</div>
          </div>
        </div>
        <div style={{ display: "flex", padding: "5px" }}>
          <textarea
            className={styles.submitInput}
            onInput={CountCharacter}
          ></textarea>
        </div>
      </div>
    </section>
  );
};

export default Page34;
