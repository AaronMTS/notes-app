import React from "react";
import classes from "./MainHeader.module.css";
import ToggleButton from "./Buttons/ToggleButton";

const MainHeader = () => {
  return (
    <header className={classes.container}>
      <h1>Notes</h1>
      <span className={classes.span}>
        <h4>Dark Mode:</h4>
        <ToggleButton />
      </span>
    </header>
  );
};

export default MainHeader;
