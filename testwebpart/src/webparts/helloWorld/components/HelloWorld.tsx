import * as React from "react";
import styles from "./HelloWorld.module.scss";
import { IHelloWorldProps } from "./IHelloWorldProps";
import { escape } from "@microsoft/sp-lodash-subset";
import { SPComponentLoader } from "@microsoft/sp-loader";
import { IItemAddResult, sp, Web } from "@pnp/sp/presets/all";

export default class HelloWorld extends React.Component<IHelloWorldProps, {}> {
  private async fetchdata() {
    let _localuser: any = null;
    await sp.web.currentUser.get().then((r: any) => {
      _localuser = r;
    });

    // Get Item from List
    if (this.props.userDisplayName) {
      const _list = sp.web.lists.getById(this.props.messagelistid);
      let readitems = await _list.items.top(1).filter(`Title eq '${1}'`).get();
      console.log(readitems);
      this.setState({
        currentUser: _localuser,
        loading: false,
      });
    } else {
      this.setState({ currentUser: _localuser });
    }
  }

  public componentDidMount() {
    this.fetchdata();
  }

  public render(): React.ReactElement<IHelloWorldProps> {
    const {
      description,
      isDarkTheme,
      environmentMessage,
      hasTeamsContext,
      userDisplayName,
    } = this.props;

    return (
      <div
        className={`${styles.helloWorld} ${
          hasTeamsContext ? styles.teams : ""
        }`}
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
      </div>
    );
  }
}
