import React from "react";
import classes from "./ToggleButton.module.css";

const ToggleButton = () => {
  return (
    <label className={classes.container}>
      <input
        type="checkbox"
        name="toggleColorScheme"
        className={classes.checkbox}
      />
      <span className={classes.sliderContainer}>
        <span className={classes.slider}></span>
      </span>
    </label>
  );
};

export default ToggleButton;
