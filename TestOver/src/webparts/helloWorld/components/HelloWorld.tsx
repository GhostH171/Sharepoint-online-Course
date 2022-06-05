import * as React from "react";
import styles from "./HelloWorld.module.scss";
import { IHelloWorldProps } from "./IHelloWorldProps";
import { escape } from "@microsoft/sp-lodash-subset";
import LoginForm from "../../../components/pages/Login/LoginForm/LoginForm";

const HelloWorld: React.FunctionComponent<IHelloWorldProps> = ({
  account: account,
}) => {
  return (
    <div>
      <LoginForm account={account} />
      aaa
    </div>
  );
};
export default HelloWorld;
