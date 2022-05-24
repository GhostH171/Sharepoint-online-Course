import * as React from "react";
import { useState } from "react";
import { IPracicalTestSpFxProps } from "./IPracicalTestSpFxProps";
import Header from "../../../components/Pages/Header/Header";
import DisplayContent from "../../../components/Pages/DisplayContent/DisplayContent";
import Survey from "../../../components/Pages/Survey/Survey";

const PracicalTestSpFx: React.FunctionComponent<IPracicalTestSpFxProps> = ({
  userInfor,
  context,
  tabularData: tableData,
}) => {
  const [tabularData, setTabularData] = useState<
    {
      Question: string;
      Answer: string;
    }[]
  >(tableData.value);
  return (
    <div>
      <Header
        userInfor={userInfor}
        context={context}
        setTabularData={setTabularData}
      />
      <Survey />
      <DisplayContent tabularData={tabularData} />
    </div>
  );
};

export default PracicalTestSpFx;
