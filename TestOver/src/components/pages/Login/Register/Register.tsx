import * as React from "react";
import { useState, useEffect } from "react";
import { FunctionComponent } from "react";
import styles from "../../../../webparts/helloWorld/components/HelloWorld.module.scss";
import { IRegisterProps } from "./IRegister";
import { SPOpertations } from "../../../Services/SPService";
import { useRouteMatch, Route } from "react-router-dom";

const Register: FunctionComponent<IRegisterProps> = (props) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

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
        <button className={styles.btn}>SignUp</button>
      </form>
    </div>
  );
};
export default Register;
