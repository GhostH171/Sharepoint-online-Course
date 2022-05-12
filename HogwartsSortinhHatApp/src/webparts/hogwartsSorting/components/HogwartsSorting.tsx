import * as React from "react";
import { FunctionComponent } from "react";
import { IHogwartsSortingProps } from "./IHogwartsSortingProps";
import Header from "./pages/Header/Header";
import SortingHat from "./pages/SoringHat/SortingHat";

const HogwartsSorting: FunctionComponent<IHogwartsSortingProps> = ({
  userInfor,
}) => {
  // props.user

  console.log(userInfor);

  return (
    <div>
      <Header userInfor={userInfor} />

      <SortingHat userInfor={userInfor} />
    </div>
  );
};

export default HogwartsSorting;
