import * as React from "react";
import { useState } from "react";
import { IHelloWorldProps } from "./IHelloWorldProps";
import LoginForm from "../../../components/pages/Login/LoginForm/LoginForm";
import Register from "../../../components/pages/Login/Register/Register";
import * as strings from "HelloWorldWebPartStrings";
import Home from "../../../components/pages/Home/Home";

const HelloWorld: React.FunctionComponent<IHelloWorldProps> = ({
  account: account,
  context,
}) => {
  const [flag, setFlag] = React.useState(false);
  const [goHome, setGoHome] = useState(false);
  const [acc, setAcc] = React.useState<{
    userName: string;
    passWord: string;
  }>({ userName: "", passWord: "" });

  const handleFlag = (flag: boolean) => {
    setFlag(flag);
  };
  const handleGoHome = (goHome: boolean) => {
    setGoHome(goHome);
  };
  console.log(acc);
  return (
    <div>
      {/* {goHome ? (
        <Home />
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
      )} */}
      <Home />
    </div>
  );
};
export default HelloWorld;
