import * as React from "react";
import { useState, useEffect } from "react";
import { FunctionComponent } from "react";
import styles from "../../../../webparts/helloWorld/components/HelloWorld.module.scss";
import { ILoginProps } from "./ILoginForm";
import { SPOpertations } from "../../../Services/SPService";

const LoginForm: FunctionComponent<ILoginProps> = (props) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const onGoHomeHandler = () => {
    props.changeGoHome(true);
  };
  const checkLogin = (e) => {
    const aa = props.account.value.findIndex((acc) => {
      return acc.UserName === username && acc.Password === password;
    });

    if (aa === -1) {
      alert("Login failed");
    } else {
      alert("Login successfully");
      onGoHomeHandler();
    }
    e.preventDefault();
  };
  const onRegisterhandler = () => {
    props.changeFlag(true);
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
        <button
          type="button"
          className={styles.btn}
          onClick={onRegisterhandler}
        >
          Register
        </button>
      </form>
    </div>
  );
};
export default LoginForm;
