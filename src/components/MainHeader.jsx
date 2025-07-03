import React from "react";
import ToggleButton from "./Buttons/ToggleButton";

const MainHeader = () => {
  return (
    <header className="flex justify-between items-center">
      <h1 className="leading-[normal]">Notes</h1>
      <span className="flex gap-2">
        <h4>Dark Mode:</h4>
        <ToggleButton />
      </span>
    </header>
  );
};

export default MainHeader;
