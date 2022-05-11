import * as React from "react";
import { FunctionComponent } from "react";
import styles from "./HogwartsSorting.module.scss";
import { IHogwartsSortingProps } from "./IHogwartsSortingProps";
import { escape } from "@microsoft/sp-lodash-subset";
import SortingHat from "./pages/SoringHat/SortingHat";
import Header from "./pages/Header/Header";

const HogwartsSorting: FunctionComponent<IHogwartsSortingProps> = (props) => {
  return (
    <div>
      <Header />
      <SortingHat />
    </div>
  );
};

export default HogwartsSorting;
