import React, { createContext, useState, useEffect, useRef } from "react";

const AppContext = createContext();

const AppProvider = ({ children }) => {
  // Clickable Icons
  const [isMyComputerClicked, setIsMyComputerClicked] = useState(false);
  const [startMenu, setStartMenu] = useState(false);
  const [recycleBin, setRecycleBin] = useState(false);
  const [iExplorer, setIexplorer] = useState(false);
  const [wolfenstein, setWolfenstein] = useState(false);
  const [notepad, setNotepad] = useState(false);
  const [paint, setPaint] = useState(false);

  // Folders
  const [myComputerMenu, setMyComputerMenu] = useState(false);

  // Menues
  const [startMenuOpen, setIsStartMenuOpen] = useState(false);

  //Games/Apps
  const [wolfensteinLaunched, setWolfensteinLaunched] = useState(false);
  // Functions
  const handleClickedIcon = (icon, event) => {
    if (icon === "myComputer") {
      setRecycleBin(false);
      setIsStartMenuOpen(false);
      setIexplorer(false);
      setWolfenstein(false);
      setNotepad(false);
      setPaint(false);
      event.stopPropagation();
      return setIsMyComputerClicked((prev) => !prev);
    } else if (icon === "startMenu") {
      if (startMenuOpen === true) {
        return setIsStartMenuOpen(false);
      } else {
        setMyComputerMenu(false);
        setRecycleBin(false);
        setIexplorer(false);
        setWolfenstein(false);
        setNotepad(false);
        setPaint(false);
        setIsStartMenuOpen(true);
        event.stopPropagation();
      }
      return;
    } else if (icon === "recycleBin") {
      setIsMyComputerClicked(false);
      setIsStartMenuOpen(false);
      setIexplorer(false);
      setWolfenstein(false);
      setNotepad(false);
      setPaint(false);
      event.stopPropagation();
      return setRecycleBin((prev) => !prev);
    } else if (icon === "iExplorer") {
      setIsMyComputerClicked(false);
      setIsStartMenuOpen(false);
      setRecycleBin(false);
      setWolfenstein(false);
      setNotepad(false);
      setPaint(false);
      event.stopPropagation();
      return setIexplorer((prev) => !prev);
    } else if (icon === "wolfenstein") {
      setIsMyComputerClicked(false);
      setIsStartMenuOpen(false);
      setIexplorer(false);
      setRecycleBin(false);
      setNotepad(false);
      setPaint(false);
      event.stopPropagation();
      return setWolfenstein((prev) => !prev);
    } else if (icon === "notepad") {
      setIsMyComputerClicked(false);
      setIsStartMenuOpen(false);
      setIexplorer(false);
      setWolfenstein(false);
      setRecycleBin(false);
      setPaint(false);
      event.stopPropagation();
      return setNotepad((prev) => !prev);
    } else if (icon === "paint") {
      setIsMyComputerClicked(false);
      setIsStartMenuOpen(false);
      setIexplorer(false);
      setWolfenstein(false);
      setNotepad(false);
      setRecycleBin(false);
      event.stopPropagation();
      return setPaint((prev) => !prev);
    }
  };

  const handleDoubleClickedIcon = (icon) => {
    if (icon === "myComputer") {
      setMyComputerMenu(true);
      setIsMyComputerClicked(false);
      return;
    } else if (icon === "wolfenstein") {
      setWolfensteinLaunched(true);
    }
  };

  const handleClickOnDesktopEmptySpace = () => {
    setIsStartMenuOpen(false);
    setIsMyComputerClicked(false);
    setRecycleBin(false);
    setIexplorer(false);
    setWolfenstein(false);
    setNotepad(false);
    setPaint(false);
  };

  const quitApplications = () => {
    setWolfensteinLaunched(false);
    console.log("izgasena");
  };

  return (
    <AppContext.Provider
      value={{
        desktop: {
          startMenu,
          setStartMenu,
          isMyComputerClicked,
          setIsMyComputerClicked,
          handleClickedIcon,
          handleDoubleClickedIcon,
          handleClickOnDesktopEmptySpace,
          recycleBin,
          setRecycleBin,
          iExplorer,
          wolfenstein,
          notepad,
          paint,
        },
        menues: {
          startMenuOpen,
          setIsStartMenuOpen,
        },
        applications: {
          wolfensteinLaunched,
          setWolfensteinLaunched,
          quitApplications,
        },
      }}
    >
      {" "}
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider };
