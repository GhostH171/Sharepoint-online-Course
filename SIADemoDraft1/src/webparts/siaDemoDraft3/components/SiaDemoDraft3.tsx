import * as React from "react";
import styles from "./SiaDemoDraft3.module.scss";
import { ISiaDemoDraft3Props } from "./ISiaDemoDraft3Props";
import { escape } from "@microsoft/sp-lodash-subset";
import { sp } from "@pnp/sp";

const SiaDemoDraft3: React.FC<ISiaDemoDraft3Props> = (props) => {
  const { description } = props;
  const [titleLength, setTitleLength] = React.useState<number>();
  const [descriptionLength, setDescriptionTitleLength] =
    React.useState<number>();
  const CountCharacter = (e) => {
    setTitleLength(e.target.value.length);
  };
  const CountDesChar = (e) => {
    setDescriptionTitleLength(e.target.value.length);
  };

  return (
    <section className={styles.section}>
      <div className={styles["content--threshold"]}>
        <div className={styles["content--threshold-threshold"]}>
          <div
            className={styles["content--threshold-threshold-threshold__left"]}
          >
            RECOMMENDED THRESHOLD: *
          </div>

          <div
            className={styles["content--threshold-threshold-threshold__right"]}
            id="titleDesCount"
          >
            {titleLength}
          </div>
        </div>
        <textarea
          className={styles["content--threshold-input"]}
          onInput={CountCharacter}
        >
          {}
        </textarea>
      </div>
      <div className={styles["content--information"]}>
        <div className={styles["content--information-information"]}>
          <div
            className={
              styles["content--information-information-information__left"]
            }
          >
            COST/WARRANTY INFORMATION: *
          </div>
          <div
            className={
              styles["content--information-information-information__right"]
            }
          >
            {descriptionLength}
          </div>
        </div>
        <div className={styles["content--information-input"]}>
          <table className={styles["content--information-table"]}>
            <thead className={styles["content--information-thead-light"]}>
              <tr>
                <th scope="col">#</th>
                <th scope="col">First</th>
                <th scope="col">Last</th>
                <th scope="col">Handle</th>
                <th scope="col">Handle</th>
                <th scope="col">Handle</th>
                <th scope="col">Handle</th>
                <th scope="col">Handle</th>
                <th scope="col">Handle</th>
                <th scope="col">Handle</th>
                <th scope="col">Handle</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
                <td>@mdo</td>
                <td>@mdo</td>
                <td>@mdo</td>
                <td>@mdo</td>
                <td>@mdo</td>
                <td>@mdo</td>
                <td>@mdo</td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
                <td>@fat</td>
                <td>@fat</td>
                <td>@fat</td>
                <td>@fat</td>
                <td>@fat</td>
                <td>@fat</td>
                <td>@fat</td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td>Larry</td>
                <td>the Bird</td>
                <td>@twitter</td>
                <td>@twitter</td>
                <td>@twitter</td>
                <td>@twitter</td>
                <td>@twitter</td>
                <td>@twitter</td>
                <td>@twitter</td>
                <td>@ttt</td>
              </tr>
            </tbody>
          </table>
          <div>
            <input
              type="button"
              value="Configuration 1: .................. "
              className={styles["button-row-button__long"]}
            />
          </div>
          <div>
            <input
              type="button"
              value="Configuration 1: .................. "
              className={styles["button-row-button__long"]}
            />
          </div>
        </div>
      </div>
      <div className={styles["content--revision"]}>
        <div className={styles["content--revision-revision"]}>
          <div className={styles["content--revision-revision-revision__left"]}>
            REASON FOR REVISION: *
          </div>
        </div>
        <textarea
          className={styles["content--revision-input"]}
          onInput={CountCharacter}
        >
          {}
        </textarea>
      </div>
      <div className={styles["content--submit"]}>
        <div className={styles["content--submit-submit"]}>
          <div className={styles["content--submit-submit-submit__left"]}>
            SUBMITTED BY: *
          </div>
        </div>
        <textarea
          className={styles["content--submit-input"]}
          onInput={CountCharacter}
        >
          {}
        </textarea>
      </div>
      <button className={styles["button--end"]}>
        EXECUTIVE SUMMARY OF MODIFICATION CONTINUED
      </button>
    </section>
  );
};

export default SiaDemoDraft3;
