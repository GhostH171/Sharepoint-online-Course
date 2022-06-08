import * as React from "react";
import { useState } from "react";
import { IHelloWorldProps } from "./IHelloWorldProps";
import LoginForm from "../../../components/pages/Login/LoginForm/LoginForm";
import Register from "../../../components/pages/Login/Register/Register";
import Header from "../../../components/pages/Home/header/Header";
import TaskDisplay from "../../../components/pages/Home/taskDisplay/TaskDisplay";
import styles from "./HelloWorld.module.scss";

const HelloWorld: React.FunctionComponent<IHelloWorldProps> = ({
  account: account,
  todo: todo,
  context,
}) => {
  const [flag, setFlag] = React.useState(false);
  const [goHome, setGoHome] = useState(false);
  const [acc, setAcc] = React.useState<{
    userName: string;
    passWord: string;
  }>({ userName: "", passWord: "" });
  const [todos, setTodos] = React.useState<{
    title: string;
    day: Date;
    setCompleted: boolean;
  }>({ title: "", day: new Date(), setCompleted: false });
  console.log(todo);
  console.log(account);

  const handleFlag = (flag: boolean) => {
    setFlag(flag);
  };
  const handleGoHome = (goHome: boolean) => {
    setGoHome(goHome);
  };

  return (
    <div>
      {goHome ? (
        <>
          <Header setTodo={setTodos} />
          <TaskDisplay context={context} todo={todo} />
        </>
      ) : flag ? (
        <Register
          changeFlag={handleFlag}
          setTabularData={setAcc}
          context={context}
        />
      ) : (
        <LoginForm
          account={account}
          changeFlag={handleFlag}
          changeGoHome={handleGoHome}
        />
      )}
      <div className={styles.container}>
        <Header setTodo={setTodos} />
        <TaskDisplay todo={todo} context={context} />
      </div>
    </div>
  );
};
export default HelloWorld;
