import React from "react";
import classes from "./Error.module.css";
import Card from "../UI/Card";

export default function ErrorModal(props) {
  return (
    <div>
      <div className={classes.backdrop} onClick={props.onRemoveError}></div>
      <Card myStyle={classes.modal}>
        <header className={classes.header}>
          <h2>{props.title}</h2>
        </header>
        <div className={classes.content}>
          <p>{props.message}</p>
        </div>
        <footer className={classes.actions}>
          <button className={classes.button} onClick={props.onRemoveError}>
            Okay
          </button>
        </footer>
      </Card>
    </div>
  );
}
