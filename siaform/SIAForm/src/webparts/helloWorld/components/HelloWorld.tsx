import * as React from "react";
import { FunctionComponent } from "react";
import styles from "./HelloWorld.module.scss";
import { IHelloWorldProps } from "./IHelloWorldProps";
import { datas, datas2 } from './data';
import { format } from 'date-fns';

const HelloWorld: FunctionComponent<IHelloWorldProps> = (props) => {
  return (
    <div className={styles.form}>

        <div className={styles.header}>
          <img
            className={styles.imgLogo}
            src={require("../assets/singair-logo2.jpg")}
            alt=""
            width={160}
          />
          <div className={styles.title}>
            <h3>MINOR MODIFICATION CHECKLIST</h3>
          </div>
        </div>

        <div className={styles.docField}>
          <div className={styles.firstLine}>
            <span style={{marginRight: 15}}>MODIFICATION DOCUMENT NO.: </span>
            <span style={{marginRight: 15}}>   ___________________</span>
            <span style={{marginRight: 15}}>REVISION</span>
            <div style={{ height: 15, width: 100, border: "1px solid" }}></div>
          </div>
          <div className={styles.secondLine}>
            <span style={{marginRight: 30}}><i>ATTACHMENT TO MODIFICATION BULLETIN</i></span>
            <span style={{marginRight: 15}}>  MAF NO.: </span>
            <span style={{marginRight: 15}}>  ___________________</span>
            <span style={{marginRight: 15}}>REVISION</span>
            <div style={{ height: 15, width: 100, border: "1px solid" }}></div>
          </div>
        </div>

        <div className={styles.listForm}>

          <table style={{width: '100%'}}>
            <thead>
              <th colSpan={3}>MODIFICATION SUBSTANTIATION</th>
              <th>Action</th>
            </thead>
            <tbody>
              {datas.map(data => (
                <tr>
                  <td width={'5%'}>{data.id}</td>
                  <td width={'50%'}>{data.field}</td>
                  <td width={'20%'}><input type="text" className={styles.inputForm}></input></td>
                  <td width={'25%'}><input type="text" className={styles.inputForm}></input></td>
                </tr>
              ))}
            </tbody>
          </table>

          <table style={{marginTop: 5}}>
            <thead>
              <th colSpan={3} style={{textAlign: 'left'}}>OTHERS</th>
              <th></th>
            </thead>
            <tbody style={{width: '100%'}}>
            {datas2.map(data => (
                <tr>
                <td width={'5%'}>{data.id}</td>
                <td width={'50%'}>{data.field}</td>
                <td width={'20%'}><input type="text" className={styles.inputForm}></input></td>
                <td width={'25%'}><input type="text" className={styles.inputForm}></input></td>
              </tr>
              ))}
            </tbody>
          </table>

        </div>

        <div className={styles.Footer}>

          <div className={styles.preparedWrapper}>
            <div className={styles.preparedBy}>
              <span>PREPARED BY</span>
              <input type="text" className={styles.inputFooter}/>
            </div>
            <div className={styles.date}>
              <span style={{marginLeft: 12}}>DATE</span>
              <span style={{borderBottom: '1px solid', width: '140px', marginLeft: 12}}>
                {format(new Date(Date.now()), 'MM-dd-yyyy \t hh:mm:ss')}
              </span>
            </div>
          </div>

          <div className={styles.reviewedWrapper}>
            <div className={styles.reviewedBy}>
              <span>REVIEWED BY</span>
              <input type="text" className={styles.inputFooter}/>
            </div>

            <div className={styles.reviewName}>
              <span style={{display: 'inline-block', height: 20}}></span>
              <input type="text" className={styles.inputFooter}/>
            </div>

            <div className={styles.date}>
              <span style={{marginLeft: 24}}>DATE</span>
              <span style={{borderBottom: '1px solid', width: '140px', marginLeft: 24}}>
                {format(new Date(Date.now()), 'MM-dd-yyyy \t hh:mm:ss')}
              </span>
            </div>
          </div>
        </div>
        
        <div className={styles.secondFooter}>
          <div className={styles.checkedWrapper}>
              <div className={styles.checkedBy}>
                <span>CHECKED BY</span>
                <input type="text" className={styles.inputFooter}/>
              </div>

              <div className={styles.checkName}>
                <span style={{display: 'inline-block', height: 20}}></span>
                <input type="text" className={styles.inputFooter}/>
              </div>

              <div className={styles.date}>
                <span style={{marginLeft: 31}}>DATE</span>
                <span style={{borderBottom: '1px solid', width: '140px', marginLeft: 31}}>
                  {format(new Date(Date.now()), 'MM-dd-yyyy \t hh:mm:ss')}
                </span>
              </div>
            </div>
        </div>

        <div className={styles.signatures}>
          <span>CO. REG. NO 197200078R</span>
          <span>RESTRICTED</span>
          <span>SIA TS 017 (SEP / 10)</span>
        </div>
      </div>
  );
};

export default HelloWorld;