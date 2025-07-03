import { useState } from "react";
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
    <main className="max-w-7xl h-full max-h-screen mx-auto my-0 px-10 py-5 flex flex-col gap-7">
      <MainHeader />
      <SearchBar />
      <NotesList />
    </main>
  );
}

export default App;
