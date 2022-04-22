import * as React from "react";
import { useState, useEffect, FunctionComponent } from "react";
import styles from "./SiaDemoDraft1.module.scss";
import { ISiaDemoDraft1Props } from "./ISiaDemoDraft1Props";
import { escape } from "@microsoft/sp-lodash-subset";
import { sp } from "@pnp/sp";
import {
  Checkbox,
  Text,
  IStackTokens,
  ITheme,
  Stack,
} from "office-ui-fabric-react";
import {
  IPropertyPaneConfiguration,
  PropertyPaneTextField,
} from "@microsoft/sp-property-pane";

export default class SiaDemoDraft1 extends React.Component<
  ISiaDemoDraft1Props,
  {}
> {
  public render(): React.ReactElement<ISiaDemoDraft1Props> {
    const { description, title } = this.props;

    return (
      <section className={styles.section}>
        <div className={styles.header}>
          <img
            src={require("../assets/logo1.png")}
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
              TITLE: *
            </div>
            <div className={styles["content--title-title-title__right"]}></div>
          </div>
          <div className={styles["content--title-input"]}>{title}</div>
        </div>
        <div className={styles["content--description"]}>
          <div className={styles["content--description-description"]}>
            <div
              className={
                styles["content--description-description-description__left"]
              }
            >
              DESCRIPTION: *
            </div>
            <div
              className={
                styles["content--description-description-description__right"]
              }
            ></div>
          </div>
          <div className={styles["content--description-input"]}>
            {description}
          </div>
        </div>
        <div className={styles["content--aircrapt"]}>
          <div className={styles["content--aircrapt-aircrapt"]}>
            <div
              className={styles["content--aircrapt-aircrapt-aircrapt__left"]}
            >
              AIRCRAPT / COMPONENT AFFECTED: *
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
        <div className={styles["button--continued"]}>
          EXECUTIVE SUMMARY OF MODIFICATION CONTINUED
        </div>
      </section>
    );
  }
}
