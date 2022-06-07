import * as React from "react";
import { useState } from "react";
import { FunctionComponent } from "react";
import { IHeaderProps } from "./IHeader";
import styles from "../../../../webparts/helloWorld/components/HelloWorld.module.scss";

const Header: FunctionComponent<IHeaderProps> = (props) => {
  const [title, setTitle] = useState("");
  const [day, setDay] = useState("");
  const [completed, setCompleted] = useState(false);
  const onSubmit = (e) => {
    e.preventDefault();

    if (!title) {
      alert("Please add a todo");
      return;
    }

    setTitle("");
    setDay("");
    setCompleted(false);
  };

  return (
    <div className={styles.container}>
      <header>
        <h1>To do List</h1>
        <form className={styles.addForm} onSubmit={onSubmit}>
          <div className={styles.formControl}>
            <label>Title</label>
            <input
              type="text"
              placeholder="Add Todo"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className={styles.formControl}>
            <label>Day and Time</label>
            <input
              type="datetime-local"
              value={day}
              onChange={(e) => setDay(e.target.value)}
            ></input>
          </div>
          <div className={styles.formControlCheck}>
            <label>Set Completed</label>
            <input
              type="checkbox"
              checked={completed}
              onChange={() => setCompleted(!completed)}
            />
          </div>

          <input type="submit" value="Save Todo" className={styles.btn} />
        </form>
      </header>
    </div>
  );
};

export default Header;
