import * as React from "react";
import styles from "./SiaDemoDraft3.module.scss";
import { ISiaDemoDraft3Props } from "./ISiaDemoDraft3Props";
import { escape } from "@microsoft/sp-lodash-subset";
import { sp } from "@pnp/sp";

const SiaDemoDraft3: React.FC<ISiaDemoDraft3Props> = (props) => {
  const defaultMaxLength = 200;
  const [thresholdLength, setThresholdLength] = React.useState<number>();
  const CountCharacter = (e) => {
    setThresholdLength(e.target.value.length);
  };

  return (
    <section className={styles.section}>
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
              className={styles["buttonButtonLong"]}
            />
          </div>
          <div>
            <input
              type="button"
              value="Configuration 1: .................. "
              className={styles["buttonButtonLong"]}
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

export default SiaDemoDraft3;
