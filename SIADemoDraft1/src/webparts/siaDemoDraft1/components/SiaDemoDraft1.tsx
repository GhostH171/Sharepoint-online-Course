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
  const [thresholdLength, setThresholdLength] = React.useState<number>();
  const CountCharacter = (e) => {
    setThresholdLength(e.target.value.length);
  };

  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <img
          src={require("../assets/singapore-airlines-logo.jpg")}
          alt=""
          className={styles["headerLogo"]}
        />
        <div className={styles["headerTitle"]}>
          EXCUTIVE SUMMARY OF MODIFICATION
        </div>
      </div>
      <div className={styles["title"]}>
        <div className={styles["titleContent"]}>
          <div className={styles["titleContentLeft"]}>
            TITLE:
            <div className={styles["titleContentLeftRedstar"]}>*</div>
          </div>

          <div className={styles["titleContentRight"]}>
            <p
              className={
                countLength > defaultMaxLength - 1
                  ? styles["titleContentRightMaxlength"]
                  : styles["titleContentRightMaxLengthHide"]
              }
            >
              Not over 200 characters
            </p>
            <div className={styles["titleContentRightCount"]}>
              {countLength}
            </div>
          </div>
        </div>
        <div className={styles["textareaField"]}>
          <textarea
            className={styles["titleInput"]}
            onInput={CountChar}
            maxLength={defaultMaxLength}
          ></textarea>
        </div>
      </div>
      <div className={styles["description"]}>
        <div className={styles["descriptionContent"]}>
          <div className={styles["descriptionContentLeft"]}>
            DESCRIPTION:{" "}
            <div className={styles["descriptionContentLeftRedstar"]}>*</div>
          </div>
          <div className={styles["descriptionContentRight"]}>
            <p
              className={
                countLengthDes > defaultMaxLength - 1
                  ? styles["descriptionContentRightMaxlength"]
                  : styles["descriptionContentRightMaxLengthHide"]
              }
            >
              Not over 200 characters
            </p>
            <div className={styles["descriptionContentRightCount"]}>
              {countLengthDes}
            </div>
          </div>
        </div>
        <textarea
          className={styles["descriptionInput"]}
          onInput={CountCharDes}
          maxLength={defaultMaxLength}
        ></textarea>
      </div>
      <div className={styles["aircrapt"]}>
        <div className={styles["aircraptContent"]}>
          <div className={styles["aircraptContentLeft"]}>
            AIRCRAPT / COMPONENT AFFECTED:{" "}
            <div className={styles["aircraptContentLeftRedstar"]}>*</div>
            <FaRegQuestionCircle />
          </div>
          <div className={styles["aircraptContentRight"]}></div>
        </div>
        <div className={styles["aircraptInput"]}>
          <div className={styles["buttons"]}>
            <input
              type="button"
              value="A350 ALL"
              className={styles["buttonsNormal"]}
            />
            <input
              type="button"
              value="MH"
              className={styles["buttonsNormal"]}
            />
            <input
              type="button"
              value="LH"
              className={styles["buttonsNormal"]}
            />
            <input
              type="button"
              value="URL"
              className={styles["buttonsNormal"]}
            />
            <input
              type="button"
              value="F"
              className={styles["buttonsNormal"]}
            />
          </div>
          <div className={styles["buttons"]}>
            <input
              type="button"
              value="B777 ALL"
              className={styles["buttonsNormal"]}
            />
            <input
              type="button"
              value="350ER"
              className={styles["buttonsNormal"]}
            />
            <input
              type="button"
              value="X"
              className={styles["buttonsNormal"]}
            />
          </div>
          <div className={styles["buttons"]}>
            <input
              type="button"
              value="A3880 ALL"
              className={styles["buttonsNormal"]}
            />
          </div>
          <div className={styles["buttons"]}>
            <input
              type="button"
              value="B747 ALL"
              className={styles["buttonsNormal"]}
            />
          </div>
          <div className={styles["buttons"]}>
            <input
              type="button"
              value="B787 ALL"
              className={styles["buttonsNormal"]}
            />
          </div>
          <div className={styles["buttons"]}>
            <input
              type="button"
              value="Configuration 1: .................. "
              className={styles["buttonsLong"]}
            />
          </div>
        </div>
      </div>
      <div className={styles["threshold"]}>
        <div className={styles["thresholdContent"]}>
          <div className={styles["thresholdContentLeft"]}>
            RECOMMENDED THRESHOLD:{" "}
            <div className={styles["thresholdContentLeftRedstar"]}>*</div>
          </div>
          <div className={styles["thresholdContentRight"]}>
            <p
              className={
                thresholdLength > defaultMaxLength - 1
                  ? styles["thresholdContentRightMaxlength"]
                  : styles["thresholdContentRightMaxLengthHide"]
              }
            >
              Not over 200 characters
            </p>
            <div className={styles["thresholdContentRightCount"]}>
              {thresholdLength}
            </div>
          </div>
        </div>
        <textarea
          className={styles["thresholdInput"]}
          onInput={CountCharacter}
          maxLength={defaultMaxLength}
        ></textarea>
      </div>
      <div className={styles["information"]}>
        <div className={styles["informationContent"]}>
          <div className={styles["informationContentLeft"]}>
            COST/WARRANTY INFORMATION:{" "}
            <div className={styles["informationContentLeftRedstar"]}>*</div>
          </div>
          <div className={styles["informationContentRight"]}></div>
        </div>
        <div className={styles["informationInput"]}>
          <table className={styles["informationTable"]}>
            <thead className={styles["informationThreadlight"]}>
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
                <th scope="row" className={styles["informationTableTdb"]}></th>
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
              className={styles["buttonsLong"]}
            />
          </div>
          <div>
            <input
              type="button"
              value="Configuration 1: .................. "
              className={styles["buttonsLong"]}
            />
          </div>
        </div>
      </div>
      <div className={styles["revision"]}>
        <div className={styles["revisionContent"]}>
          <div className={styles["revisionContentLeft"]}>
            REASON FOR REVISION:{" "}
          </div>
        </div>
        <textarea className={styles["revisionInput"]} onInput={CountCharacter}>
          {}
        </textarea>
      </div>
      <div className={styles["submit"]}>
        <div className={styles["submitContent"]}>
          <div className={styles["submitContentLeft"]}>
            SUBMITTED BY:{" "}
            <div className={styles["submitContentLeftRedstar"]}>*</div>
          </div>
        </div>
        <textarea
          className={styles["submitInput"]}
          onInput={CountCharacter}
        ></textarea>
      </div>
    </section>
  );
};

export default SiaDemoDraft1;
