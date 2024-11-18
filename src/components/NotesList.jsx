import React from "react";
import classes from "./NotesList.module.css";
import Note from "./Notes/Note";

const NotesList = () => {
  return (
    <div className={classes.listContainer}>
      <Note />
    </div>
  );
};

export default NotesList;
