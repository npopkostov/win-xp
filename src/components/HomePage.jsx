import React, { useState, useContext, useEffect } from "react";
import windowsXpBg from "../assets/windowsXpBg.jpg";
import Taskbar from "./Taskbar/Taskbar";
import myComputer from "../assets/myComputer.png";
import recycleBin from "../assets/recycleBinIcon.png";
import { AppContext } from "../context/AppContext";
import StartMenu from "./StartMenu/StartMenu";
import iExplorer from "../assets/iexplorerIcon.png";
import paint from "../assets/paintIcon.png";
import notepad from "../assets/notepadIcon.png";
import wolfenstein from "../../public/games/wolfenstein/WolfensteinIcon.png";
import WolfensteinGame from "./gamesLaunch/Wolfenstein";

const HomePage = () => {
  const homeScreen = useContext(AppContext);

  const handleEscape = (e) => {
    if (e.key === "Escape") {
      console.log("vlagame");
      if (homeScreen.applications.wolfensteinLaunched) {
        console.log("vlagame pak");
        homeScreen.applications.quitApplications();
      }
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleEscape);

    return () => {
      window.removeEventListener("keydown", handleEscape);
    };
  }, []);

  return (
    <>
      <div
        className="w-screen h-screen bg-cover bg-center flex flex-col"
        style={{ backgroundImage: `url(${windowsXpBg})` }}
        onClick={() => {
          homeScreen.desktop.handleClickOnDesktopEmptySpace();
        }}
      >
        <div className="flex flex-grow flex-col text-white items-center space-y-6 p-10 w-[20vh]">
          {/* My Computer */}
          <div
            onDoubleClick={() => homeScreen.desktop.handleDoubleClickedIcon("myComputer")}
            onClick={(event) => {
              homeScreen.desktop.handleClickedIcon("myComputer", event);
            }}
            className="flex flex-col items-center space-y-1"
          >
            <img
              src={myComputer}
              className={`w-[30px] h-[30px] ${
                homeScreen.desktop.isMyComputerClicked === true ? " opacity-60" : ""
              }`}
            />
            <div
              className={`text-[10px] text-center cursor-default ${
                homeScreen.desktop.isMyComputerClicked === true
                  ? "bg-[rgb(11,97,255)] text-white "
                  : ""
              }`}
              style={{ textShadow: "black 0px 1px 1px" }}
            >
              My Computer
            </div>
          </div>
          {/* Recycle Bin */}
          <div
            onDoubleClick={() => {
              homeScreen.desktop.handleDoubleClickedIcon("recycleBin");
            }}
            onClick={(event) => {
              homeScreen.desktop.handleClickedIcon("recycleBin", event);
            }}
            className="flex flex-col items-center space-y-1"
          >
            <img
              src={recycleBin}
              className={`w-[30px] h-[30px] ${
                homeScreen.desktop.recycleBin === true ? " opacity-60" : ""
              }`}
            />
            <div
              className={`text-[10px] text-center cursor-default ${
                homeScreen.desktop.recycleBin === true ? "bg-[rgb(11,97,255)] text-white " : ""
              }`}
              style={{ textShadow: "black 0px 1px 1px" }}
            >
              Recycle Bin
            </div>
          </div>
          {/* Internet Explorer */}
          <div
            onDoubleClick={() => homeScreen.desktop.handleDoubleClickedIcon("iExplorer")}
            onClick={(event) => {
              homeScreen.desktop.handleClickedIcon("iExplorer", event);
            }}
            className="flex flex-col items-center space-y-1"
          >
            <img
              src={iExplorer}
              className={`w-[30px] h-[30px] ${
                homeScreen.desktop.iExplorer === true ? " opacity-60" : ""
              }`}
            />
            <div
              className={`text-[10px] text-center cursor-default ${
                homeScreen.desktop.iExplorer === true ? "bg-[rgb(11,97,255)] text-white " : ""
              }`}
              style={{ textShadow: "black 0px 1px 1px" }}
            >
              Internet Explorer
            </div>
          </div>
          {/* Wolfenstein */}
          <div
            onDoubleClick={() => homeScreen.desktop.handleDoubleClickedIcon("wolfenstein")}
            onClick={(event) => {
              homeScreen.desktop.handleClickedIcon("wolfenstein", event);
            }}
            className="flex flex-col items-center space-y-1"
          >
            <img
              src={wolfenstein}
              className={`w-[30px] h-[30px] ${
                homeScreen.desktop.wolfenstein === true ? " opacity-60" : ""
              }`}
            />
            <div
              className={`text-[10px] text-center cursor-default ${
                homeScreen.desktop.wolfenstein === true ? "bg-[rgb(11,97,255)] text-white " : ""
              }`}
              style={{ textShadow: "black 0px 1px 1px" }}
            >
              Wolfenstein 3D
            </div>
          </div>
          {/* Notepad */}
          <div
            onDoubleClick={() => homeScreen.desktop.handleDoubleClickedIcon("notepad")}
            onClick={(event) => {
              homeScreen.desktop.handleClickedIcon("notepad", event);
            }}
            className="flex flex-col items-center space-y-1"
          >
            <img
              src={notepad}
              className={`w-[30px] h-[30px] ${
                homeScreen.desktop.notepad === true ? " opacity-60" : ""
              }`}
            />
            <div
              className={`text-[10px] text-center cursor-default ${
                homeScreen.desktop.notepad === true ? "bg-[rgb(11,97,255)] text-white " : ""
              }`}
              style={{ textShadow: "black 0px 1px 1px" }}
            >
              Notepad
            </div>
          </div>
          {/* Paint */}
          <div
            onDoubleClick={() => homeScreen.desktop.handleDoubleClickedIcon("paint")}
            onClick={(event) => {
              homeScreen.desktop.handleClickedIcon("paint", event);
            }}
            className="flex flex-col items-center space-y-1"
          >
            <img
              src={paint}
              className={`w-[30px] h-[30px] ${
                homeScreen.desktop.paint === true ? " opacity-60" : ""
              }`}
            />
            <div
              className={`text-[10px] text-center cursor-default ${
                homeScreen.desktop.paint === true ? "bg-[rgb(11,97,255)] text-white " : ""
              }`}
              style={{ textShadow: "black 0px 1px 1px" }}
            >
              Paint
            </div>
          </div>
          {/* END */}
        </div>
        {/*  startMenu */}
        <div
          className={`${
            homeScreen.menues.startMenuOpen === true ? "absolute bg-white bottom-[4vh]" : "hidden"
          }
            `}
        >
          <StartMenu />
        </div>
        <Taskbar />
        {/* Application running */}
        {homeScreen.applications.wolfensteinLaunched === true ? (
          <div className="absolute w-screen h-screen">
            <button
              className="absolute top-[5vh] right-[5vh]"
              onClick={() => {
                homeScreen.applications.quitApplications();
              }}
            >
              Quit game
            </button>
            <WolfensteinGame />
          </div>
        ) : (
          ""
        )}
      </div>
    </>
  );
};

export default HomePage;
