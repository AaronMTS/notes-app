import { useState, useEffect } from "react";
import MainHeader from "../components/MainHeader";
import ToggleDarkMode from "../components/Buttons/ToggleDarkMode";
import SearchBar from "../components/SearchBar";
import NotesList from "../components/NotesList";
import Modal from "../components/Modal";
import AddNote from "./AddNote";

const Home = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    setIsDarkMode(window.matchMedia("(prefers-color-scheme: dark)").matches);
  }, []);

  const changeColorScheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <main
      className={`${isDarkMode ? "dark" : ""} size-full dark:bg-neutral-800`}
    >
      <div className="max-w-7xl h-full min-h-dvh mx-auto my-0 p-5 flex flex-col gap-5 sm:px-10">
        <MainHeader>
          <ToggleDarkMode
            isNightMode={isDarkMode}
            onUpdate={changeColorScheme}
          />
        </MainHeader>
        <SearchBar />
        <NotesList />
      </div>
    </main>
  );
};

export default Home;
