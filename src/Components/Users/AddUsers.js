import React, { useState } from "react";
import classes from "./AddUser.module.css";
import Card from "../UI/Card";
import ErrorModal from "./ErrorModal";

export default function AddUsers(props) {
  const [userName, setUserName] = useState("");
  const [userAge, setUserAge] = useState("");
  const [error, setError] = useState();

  const userNameHandler = (event) => {
    setUserName(event.target.value);
  };

  const userAgeHandler = (event) => {
    setUserAge(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    if (userName.trim().length === 0 || userAge.trim().length === 0) {
      setError({
        title: "Invalid Input",
        message: "Please, enter a valid name and age (non-empty values)",
      });
      return;
    }
    if (+userAge < 1) {
      setError({
        title: "Invalid Age",
        message: "Please enter a valid age (> 0)",
      });
      return;
    }
    props.onGetUsers(userName, userAge);
    setUserAge("");
    setUserName("");
  };

  const errorHandler = () => {
    setError(null);
  };
  return (
    <div>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onRemoveError={errorHandler}
        />
      )}
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
          <button type="submit" className={classes.button}>
            Add User
          </button>
        </form>
      </Card>
    </div>
    //next is to validate the input
  );
}
