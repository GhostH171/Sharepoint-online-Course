import * as React from "react";
import { useState, useEffect } from "react";
import { FunctionComponent } from "react";
import styles from "../../../../webparts/helloWorld/components/HelloWorld.module.scss";
import { IRegisterProps } from "./IRegister";
import { SPOpertations } from "../../../Services/SPService";

const Register: FunctionComponent<IRegisterProps> = (props) => {
  const spOperations = new SPOpertations();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const backtoLoginHandler = (e) => {
    props.changeFlag(false);
    e.preventDefault();
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    const pushData = [
      {
        userName: username,
        passWord: password,
      },
    ];
    const promises = pushData.map((item) => {
      return SPOpertations.CreateListItem(
        props.context,
        item.userName,
        item.passWord
      );
    });
    await Promise.all(promises);

    await spOperations.GetExactList(props.context).then((res) => {
      props.setTabularData(res.value);
    });
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
        <button className={styles.btn} onClick={onSubmitHandler}>
          Submit
        </button>
        <button className={styles.btn} onClick={backtoLoginHandler}>
          Back to Login
        </button>
      </form>
    </div>
  );
};
export default Register;
