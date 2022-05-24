import * as React from "react";
import { FunctionComponent } from "react";
import { IHeaderProps } from "./IHeader";
import styles from "./Header.module.scss";
import * as dayjs from "dayjs";
import { SPOpertations } from "../../Services/SPServices";
const spOperations = new SPOpertations();

const Header: FunctionComponent<IHeaderProps> = (props) => {
  const [houseName, setHouseName] = React.useState("Click to enter a house");
  const [houseImage, setHouseImage] = React.useState(
    "https://64.media.tumblr.com/2e724263042763c8a572f6a9bc16e40c/tumblr_inline_p07sdaHu8S1uniz1z_540.png"
  );
  const [text, setText] = React.useState("Sort");

  const [currentDate, setCurrentDate] = React.useState(
    dayjs().format(`YYYY-MM-DD HH:mm:ss`)
  );

  React.useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentDate(dayjs().format(`YYYY-MM-DD HH:mm:ss`));
    }, 1000);
    return () => {
      clearInterval(intervalId);
    };
  }, []);

  function randomHouses() {
    const houses = ["Gryffindor", "Slytherin", "Ravenclaw", "Hufflepuff"];
    const random = Math.floor(Math.random() * houses.length);
    return houses[random];
  }

  const onSortHandler = () => {
    const houseName = randomHouses();
    const fullName = props.userInfor.DisplayName;
    setHouseName(houseName);

    spOperations.GetHouseList(props.context, houseName).then((res) => {
      props.setHouseData(res.value);
    });
    SPOpertations.CreateListItem(props.context, houseName, fullName);
    spOperations.GetAllList(props.context).then((res) => {
      props.setTabularData(res.value);
    });
  };

  React.useEffect(() => {
    switch (houseName) {
      case "Gryffindor":
        setHouseImage(
          "https://static.wikia.nocookie.net/harrypotter/images/b/b1/Gryffindor_ClearBG.png"
        );
        break;
      case "Slytherin":
        setHouseImage(
          "https://static.wikia.nocookie.net/harrypotter/images/0/00/Slytherin_ClearBG.png"
        );
        break;
      case "Ravenclaw":
        setHouseImage(
          "https://static.wikia.nocookie.net/harrypotter/images/7/71/Ravenclaw_ClearBG.png"
        );
        break;
      case "Hufflepuff":
        setHouseImage(
          "https://static.wikia.nocookie.net/harrypotter/images/0/06/Hufflepuff_ClearBG.png"
        );
        break;
      default:
        "";
    }
  });

  React.useEffect(() => {
    if (
      houseImage ===
      "https://64.media.tumblr.com/2e724263042763c8a572f6a9bc16e40c/tumblr_inline_p07sdaHu8S1uniz1z_540.png"
    ) {
      setText("Sort");
    } else {
      setText("Sort Again");
    }
  });

  React.useEffect(() => {}, []);

  return (
    <div className={styles.container}>
      <div className={styles.display}>
        <div className={styles.infor}>
          <h2>{props.userInfor.DisplayName}</h2>
          <span style={{ marginBottom: "10px" }}>
            Email: {props.userInfor.Email}
          </span>
          <span>Date: {currentDate}</span>
        </div>
        <div className={styles.middleInfor}>
          <h2>{houseName}</h2>
          <button className={styles.btnSort} onClick={onSortHandler}>
            {text}
          </button>
        </div>

        <img
          src={houseImage}
          alt="Gryffindor"
          className={styles.displayHouse}
        />
      </div>
    </div>
  );
};

export default Header;
