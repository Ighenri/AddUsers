import React from "react";
import classes from "./Card.module.css";

export default function Card(props) {
  return (
    <div className={`${props.myStyle} ${classes.card}`}>{props.children}</div>
  );
}
