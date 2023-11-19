import React from "react";
import classes from "./UserList.module.css";
import Card from "../UI/Card";

export default function UserLIst(props) {
  return (
    <Card myStyle={classes.users}>
      <ul>
        {props.users.map((user) => (
          <li key={user.id}>
            {user.name} is {user.age} years old
          </li>
        ))}
      </ul>
    </Card>
  );
}
