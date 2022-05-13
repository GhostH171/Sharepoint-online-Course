import * as React from "react";
import { FunctionComponent } from "react";
import { IHogwartsSortingProps } from "./IHogwartsSortingProps";
import Header from "./pages/Header/Header";
import SortingHat from "./pages/SoringHat/SortingHat";

const HogwartsSorting: FunctionComponent<IHogwartsSortingProps> = ({
  userInfor,
  tabularData,
  context,
}) => {
  // props.user

  return (
    <div>
      <Header userInfor={userInfor} context={context} />

      <SortingHat tabularData={tabularData} userInfor={userInfor} />
    </div>
  );
};

export default HogwartsSorting;
