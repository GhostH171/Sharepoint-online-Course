import * as React from "react";
import styles from "./Testlist.module.scss";
import { ITestlistProps } from "./ITestlistProps";

export default class Testlist extends React.Component<ITestlistProps, {}> {
  public render(): React.ReactElement<ITestlistProps> {
    const {} = this.props;

    return <div>123</div>;
  }
}
