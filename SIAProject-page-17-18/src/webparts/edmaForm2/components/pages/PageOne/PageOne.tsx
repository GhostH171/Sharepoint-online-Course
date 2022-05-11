import * as React from "react";
import { useState } from "react";
import { FunctionComponent } from "react";
import { IPageOneProps } from "./IPageOneProps";
import styles from "./PageOne.module.scss";

const modification: Array<any> = [
  { id: 1, name: "Major mod" },
  { id: 2, name: "Minor mod" },
];
const PageOne: FunctionComponent<IPageOneProps> = (props) => {
  const [checked, setChecked] = useState();
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.title}>
          <img
            src={require("../../../assets/singapore-airlines-logo.jpg")}
            width={160}
            alt=""
          />
          <h3>ENGINEERING DIVISION MODIFICATION APPROVAL FORM</h3>
        </div>
        <div className={styles.board}>
          <table style={{ width: "100%" }}>
            <thead>
              <th>MAF No.</th>
              <th>12345</th>
              <th>REV</th>
              <th>0</th>
            </thead>
            <tbody>
              <tr>
                <td>
                  <b>* MOD</b>
                </td>
                <td>
                  <b>B URGENT</b>
                </td>
                <td>
                  <b>ATA</b>
                </td>
                <td>
                  <b>34</b>
                </td>
              </tr>
              <tr>
                <td>
                  <b>MEETING NO.</b>
                </td>
                <td></td>
                {modification.map((mod) => (
                  <td>
                    <input
                      type="radio"
                      onChange={() => setChecked(mod.id)}
                      checked={checked === mod.id}
                    />
                    {mod.name}
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className={styles.maf}>
        <table style={{ width: "100%" }}>
          <thead>
            <th className={styles.title}>
              <b>SUPERSEDING MAF? :</b>
            </th>
            <th>
              <b>
                <div
                  className={styles.selectedcell}
                  style={{ borderRight: "none" }}
                >
                  <button type="button" className={styles.selectyes}>
                    YES
                  </button>
                  /
                  <button type="button" className={styles.selectno}>
                    NO
                  </button>
                </div>
              </b>
            </th>
            <th style={{ borderRight: "none", borderLeft: "none" }}></th>
            <th style={{ borderLeft: "none" }}></th>
          </thead>
          <tbody>
            <tr>
              <td>
                <b>AF NO.</b>
              </td>
              <td></td>
              <td>
                <b>REVISION</b>
              </td>
              <td></td>
            </tr>
            <tr>
              <td>
                <b>MAF NO.</b>
              </td>
              <td></td>
              <td>
                <b>REVISION</b>
              </td>
              <td></td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className={styles.mpcc}>MPPC ACTION</div>
      <div className={styles.mainboard}>
        <div className={styles.leftboard}>
          <div className={styles.maincontent}>to schedule</div>
          <div className={styles.maincontent}>
            <button type="button" className={styles.btngreen}>
              line maintenance
            </button>
            <button type="button" className={styles.btngreen}>
              short hanger check(blo, a check)
            </button>
            <button type="button" className={styles.btngreen}>
              long hanger check(blo, a check)
            </button>
            <button type="button" className={styles.btngreen}>
              off-wing
            </button>
          </div>
          <div className={styles.bottomleft}>
            <div style={{ paddingLeft: "5px" }}>MOD TO BE COMPLETED BY:</div>
            <div style={{ marginBottom: "5px", paddingLeft: "5px" }}>
              ________________________________________
            </div>
          </div>
          <div className={styles.bottomleft}>
            <div style={{ paddingLeft: "5px" }}>
              preferred modification accomplishment plan:
            </div>
            <div style={{ marginBottom: "5px", paddingLeft: "5px" }}>
              ________________________________________
            </div>
          </div>
          <div className={styles.bottomleft}>
            <div style={{ paddingLeft: "5px" }}>
              modification accomplishment options:
            </div>
            <div style={{ marginBottom: "5px", paddingLeft: "5px" }}>
              ________________________________________
            </div>
          </div>
        </div>
        <div className={styles.rightboard}>
          <div
            style={{
              width: "100%",
              borderBottom: "2px solid black",
              borderRight: "2px solid black",
            }}
          >
            <button type="button" className={styles.btngreen}>
              to indicate the instruction "to request for revised bws from tech
              svcs performance" in the mod tasklist
            </button>
          </div>
          <div style={{ width: "100%" }}>
            <button type="button" className={styles.btngreen}>
              to preload media
            </button>
          </div>
          <div style={{ width: "100%" }}>
            <button type="button" className={styles.btngreen}>
              to issue process sheet
            </button>
            <div style={{ paddingLeft: "5px", fontSize: "11px" }}>
              process sheet no:
            </div>
            <div style={{ marginBottom: "5px", paddingLeft: "5px" }}>
              ________________________________________
            </div>
          </div>
          <div style={{ width: "100%" }}>
            <button type="button" className={styles.btngreen}>
              to issue form
            </button>
            <div
              style={{
                paddingLeft: "5px",
                fontSize: "11px",
                marginBottom: "10px",
              }}
            >
              form no:
            </div>
            <div
              style={{
                marginBottom: "5px",
                paddingLeft: "5px",
              }}
            >
              ________________________________________
            </div>
          </div>
        </div>
        <div className={styles.rightboard}>
          <div
            style={{
              width: "100%",
              borderBottom: "2px solid black",
            }}
          >
            <button type="button" className={styles.btngreen}>
              mpd/lie-limited part affected
            </button>
            <div style={{ marginBottom: "5px", paddingLeft: "5px" }}>
              ______________________________
            </div>
          </div>
          <button type="button" className={styles.btngreen}>
            to raise new npe
          </button>
          <button type="button" className={styles.btngreen}>
            to sevise existing npe
          </button>
          <button type="button" className={styles.btngreen}>
            to terminate existing npe after mod
          </button>
          <button type="button" className={styles.btngreen}>
            to create task instruction to uplift/remove npe after mod embodiment
          </button>
          <div
            style={{
              paddingLeft: "5px",
              fontSize: "11px",
              borderBottom: "2px solid black",
            }}
          >
            npe no.:_______________________/
            <button
              className={styles.btnred}
              style={{
                float: "right",
                marginRight: "5px",
                marginBottom: "10px",
              }}
            >
              NIL
            </button>
          </div>

          <div style={{ width: "100%" }}>
            <button type="button" className={styles.btngreen}>
              stc modification
            </button>
            <div style={{ paddingLeft: "5px", fontSize: "11px" }}>
              icaw references:
            </div>
            <div
              style={{
                marginBottom: "5px",
                padding: "5px",
              }}
            >
              ________________________________________
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageOne;
