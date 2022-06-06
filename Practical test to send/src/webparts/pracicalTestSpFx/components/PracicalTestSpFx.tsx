import * as React from "react";
import { useEffect, useState } from "react";
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
  const [isSurveyStarted, setIsSurveyStarted] = useState(false);
  const [isViewResponse, setIsViewResponse] = useState(false);
  const [userHasAnswer, setUserHasAnswer] = useState<boolean>(false);

  useEffect(() => {
    if (
      tabularData?.findIndex(
        (tbItem) => tbItem.UserID === userInfor.DisplayName
      ) > -1
    ) {
      setUserHasAnswer(true);
    }
  }, []);

  const showTable = () => {
    return <DisplayContent userInfor={userInfor} tabularData={tabularData} />;
  };

  const handleSubmitSurvey = (surveyStatus) => {
    setIsSurveyStarted(surveyStatus);
  };

  return (
    <div>
      <Header
        userInfor={userInfor}
        context={context}
        setTabularData={setTabularData}
        setIsSurveyStarted={handleSubmitSurvey}
        isSurveyStarted={isSurveyStarted}
        setUserHasAnswer={setUserHasAnswer}
        userHasAnswer={userHasAnswer}
        setIsViewResponse={setIsViewResponse}
      />
      {userHasAnswer && isViewResponse && showTable()}
      {isSurveyStarted && !userHasAnswer && (
        <Survey
          userInfor={userInfor}
          context={context}
          setTabularData={setTabularData}
          setUserHasAnswer={setUserHasAnswer}
        />
      )}
    </div>
  );
};

export default PracicalTestSpFx;
