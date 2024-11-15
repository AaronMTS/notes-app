import React from "react";
import classes from "./MainHeader.module.css";
import ToggleButton from "./Buttons/ToggleButton";

const MainHeader = () => {
  return (
    <header className={classes.container}>
      <h1 className={classes.noMargin}>Notes</h1>
      <span className={classes.span}>
        <h4 className={classes.noMargin}>Dark Mode:</h4>
        <ToggleButton />
      </span>
    </header>
  );
};

export default MainHeader;
