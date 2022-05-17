import * as React from "react";
import { FunctionComponent } from "react";
import { IHogwartsSortingProps } from "./IHogwartsSortingProps";
import Header from "./pages/Header/Header";
import HistoryTracking from "./pages/HistoryTracking/HistoryTracking";
import FullList from "./pages/FullList/FullList";

const HogwartsSorting: FunctionComponent<IHogwartsSortingProps> = ({
  userInfor,
  tabularData: tableData,
  context,
}) => {
  // props.user

  const [houseData, setHouseData] = React.useState<
    {
      FullName: string;
      House: string;
      Dateandtime: string;
    }[]
  >([]);

  const [tabularData, setTabularData] = React.useState<
    {
      FullName: string;
      House: string;
      Dateandtime: string;
    }[]
  >(tableData.value);

  return (
    <div>
      <Header
        userInfor={userInfor}
        context={context}
        setHouseData={setHouseData}
        setTabularData={setTabularData}
      />

      <HistoryTracking tabularData={houseData} userInfor={userInfor} />

      <FullList tabularData={tabularData} userInfor={userInfor} />
    </div>
  );
};

export default HogwartsSorting;
