import React from "react";
import classes from "./Note.module.css";

const Note = () => {
  return (
    <div className={classes.noteContainer}>
      <div className={classes.entryContainer}>
        <p className={classes.entry}>Test note</p>
      </div>
      <span className={classes.span}>
        <p>01/01/2000</p>
        <button type="button" className={classes.button}></button>
      </span>
    </div>
  );
};

export default Note;
