import React, { useState } from "react";
import classes from "./AddUser.module.css";
import Card from "../UI/Card";

export default function AddUsers(props) {
  const [userName, setUserName] = useState("");
  const [userAge, setUserAge] = useState("");

  const userNameHandler = (event) => {
    setUserName(event.target.value);
    console.log("name");
  };

  const userAgeHandler = (event) => {
    setUserAge(event.target.value);
    console.log("age");
  };

  const submitHandler = (event) => {
    event.preventDefault();
    console.log("submit");
  };

  return (
    <Card myStyle={classes.input}>
      <form onSubmit={submitHandler}>
        <label htmlFor="userName">USERNAME</label>
        <input
          type="text"
          name="userName"
          id="userName"
          onChange={userNameHandler}
          value={userName}
        />
        <label htmlFor="age">AGE</label>
        <input
          type="text"
          name="age"
          id="age"
          onChange={userAgeHandler}
          value={userAge}
        />
        <button type="button" className={classes.button}>
          Add User
        </button>
      </form>
    </Card>
  );
}
