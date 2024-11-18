import { useState } from "react";
import classes from "./App.module.css";
import MainHeader from "./components/MainHeader";
import SearchBar from "./components/SearchBar";
import NotesList from "./components/NotesList";
import WebFont from "webfontloader";

function App() {
  WebFont.load({
    google: {
      families: ['Inter']
    }
  });

  return (
    <main className={classes.mainContent}>
      <MainHeader />
      <SearchBar />
      <NotesList />
    </main>
  );
}

export default App;
