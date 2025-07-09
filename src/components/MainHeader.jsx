import React from "react";

const MainHeader = ({ children }) => {
  return (
    <header className="flex justify-between items-center">
      <h1 className="text-2xl font-semibold leading-[normal] dark:text-gray-100">Notes</h1>
      {children}
    </header>
  );
};

export default MainHeader;
