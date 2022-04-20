import * as React from "react";
import styles from "./ListInfo.module.scss";
import { IListInfoProps } from "./IListInfoProps";
import { escape } from "@microsoft/sp-lodash-subset";
import {
  IPropertyPaneConfiguration,
  PropertyPaneTextField,
} from "@microsoft/sp-property-pane";
import {
  BasicGroupName,
  DescriptionFieldLabel,
  PropertyPaneDescription,
} from "ListInfoWebPartStrings";

export default class ListInfo extends React.Component<IListInfoProps, {}> {
  private validateDescription(value: string): string {
    if (value === null || value.trim().length === 0) {
      return "Provide a description";
    }

    if (value.length > 40) {
      return "Description should not be longer than 40 characters";
    }

    return "";
  }
  public render(): React.ReactElement<IListInfoProps> {
    const {
      description,
      isDarkTheme,
      environmentMessage,
      hasTeamsContext,
      userDisplayName,
    } = this.props;

    return (
      <section
        className={`${styles.listInfo} ${hasTeamsContext ? styles.teams : ""}`}
      >
        <div className={styles.welcome}>
          <img
            alt=""
            src={
              isDarkTheme
                ? require("../assets/welcome-dark.png")
                : require("../assets/welcome-light.png")
            }
            className={styles.welcomeImage}
          />
          <h2>Well done, {escape(userDisplayName)}!</h2>
          <div>{environmentMessage}</div>
          <div>
            Web part property value: <strong>{escape(description)}</strong>
          </div>
        </div>
        {<div></div>}
      </section>
    );
  }
}
