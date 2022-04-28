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
        <div className={styles["threshold-content"]}>
          <div className={styles["threshold-content-left"]}>
            RECOMMENDED THRESHOLD:{" "}
            <div className={styles["threshold-content-left-redstar"]}>*</div>
          </div>
          <div className={styles["threshold-content-right"]}>
            <p
              className={
                thresholdLength > defaultMaxLength - 1
                  ? styles["threshold-content-right-maxlength"]
                  : styles["threshold-content-right-maxLengthHide"]
              }
            >
              Not over 200 characters
            </p>
            <div className={styles["threshold-content-right-count"]}>
              {thresholdLength}
            </div>
          </div>
        </div>
        <textarea
          className={styles["threshold-input"]}
          onInput={CountCharacter}
          maxLength={defaultMaxLength}
        ></textarea>
      </div>
      <div className={styles["information"]}>
        <div className={styles["information-content"]}>
          <div className={styles["information-content-left"]}>
            COST/WARRANTY INFORMATION:{" "}
            <div className={styles["information-content-left-redstar"]}>*</div>
          </div>
          <div className={styles["information-content-right"]}></div>
        </div>
        <div className={styles["information-input"]}>
          <table className={styles["information-table"]}>
            <thead className={styles["information-theadlight"]}>
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
                <th
                  scope="row"
                  className={styles["information-table-tdb"]}
                ></th>
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
              className={styles["button-button__long"]}
            />
          </div>
          <div>
            <input
              type="button"
              value="Configuration 1: .................. "
              className={styles["button-button__long"]}
            />
          </div>
        </div>
      </div>
      <div className={styles["revision"]}>
        <div className={styles["revision-content"]}>
          <div className={styles["revision-content-left"]}>
            REASON FOR REVISION:{" "}
          </div>
        </div>
        <textarea className={styles["revision-input"]} onInput={CountCharacter}>
          {}
        </textarea>
      </div>
      <div className={styles["submit"]}>
        <div className={styles["submit-content"]}>
          <div className={styles["submit-content-left"]}>
            SUBMITTED BY:{" "}
            <div className={styles["submit-content-left-redstar"]}>*</div>
          </div>
        </div>
        <textarea
          className={styles["submit-input"]}
          onInput={CountCharacter}
        ></textarea>
      </div>
    </section>
  );
};

export default SiaDemoDraft3;
