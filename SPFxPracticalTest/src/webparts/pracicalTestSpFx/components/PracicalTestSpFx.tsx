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
      UserID: string;
      Question: string;
      Answer: string;
    }[]
  >(tableData.value);

  // Khai báo state ở đây, biến đấy tên là isSurveyStarted, setIsSurveyStarted
  // Nếu true thì hiển thị DisplayContent, ẩn button Start Survey
  // Nếu false thì ẩn DisplayContent, hiển thị button Start Survey

  // Riêng thằng Survey.tsx phải truyền props issurveystartaed xuống
  const [isSurveyStarted, setIsSurveyStarted] = useState(false);

  return (
    <div>
      <Header
        userInfor={userInfor}
        context={context}
        setTabularData={setTabularData}
        setIsSurveyStarted={setIsSurveyStarted}
        isSurveyStarted={isSurveyStarted}
      />
      {isSurveyStarted ? (
        <>
          <Survey
            userInfor={userInfor}
            context={context}
            setTabularData={setTabularData}
          />
          <DisplayContent userInfor={userInfor} tabularData={tabularData} />
        </>
      ) : (
        <></>
      )}
    </div>
  );
};

export default PracicalTestSpFx;
