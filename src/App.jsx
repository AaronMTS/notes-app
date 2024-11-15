import { useState } from "react";
import classes from "./App.module.css";
import MainHeader from "./components/MainHeader";
import SearchBar from "./components/SearchBar";

function App() {
  return (
    <main className={classes.mainContent}>
      <MainHeader />
      <SearchBar />
    </main>
  );
}

export default App;
