import * as React from "react";
import { useState, useEffect } from "react";
import { FunctionComponent } from "react";
import styles from "../../../../webparts/helloWorld/components/HelloWorld.module.scss";
import { ILoginProps } from "./ILoginForm";
import { SPOpertations } from "../../../Services/SPService";
import { useRouteMatch, Route } from "react-router-dom";

const LoginForm: FunctionComponent<ILoginProps> = (props) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  console.log(props.account);
  const accs = props.account?.value.map((acc) => {
    acc.UserName;
  });
  console.log(accs);
  const checkLogin = (e) => {
    if (
      username === props.account.UserName &&
      password === props.account.Password
    ) {
      console.log("You are logged in");
    } else {
      console.log("Check again");
    }
    e.preventDefault();
  };

  return (
    <div className={styles.container}>
      <form>
        <div className={styles.formControl}>
          <label htmlFor="username">User Name</label>
          <input
            id="username"
            type="text"
            placeholder="User Name ..."
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className={styles.formControl}>
          <label htmlFor="pass">Password</label>
          <input
            id="pass"
            type="password"
            placeholder="Password ..."
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button className={styles.btn} onClick={checkLogin}>
          Login
        </button>
        <button className={styles.btn}>Register</button>
      </form>
    </div>
  );
};
export default LoginForm;
