import React from "react";
import profilePic from "../../assets/profilePicChess.jpg";
import turnOff from "../../assets/turnOffComputerIcon.png";
import logOff from "../../assets/logOffComputerIcon.png";
import iExplorer from "../../assets/iexplorerIcon.png";
import mineSweeper from "../../assets/minesweeperIcon.png";
import notepad from "../../assets/notepadIcon.png";
import painball from "../../assets/painballIcon.png";
import paint from "../../assets/paintIcon.png";
import windowsMediaPlayer from "../../assets/windowsMediaPlayerIcon.png";
import msn from "../../assets/windowsMessengerIcon.png";
import mail from "../../assets/mailIcon.png";
import myDoc from "../../assets/MyDocIcon.png";
import RecentDoc from "../../assets/RecentDocIcon.png";
import RecentPic from "../../assets/RecentPicturesIcon.png";
import MyMusic from "../../assets/MyMusicIcon.png";
import ConrolPanel from "../../assets/ControlPanelIcon.png";
import PorgramAccess from "../../assets/SetProgramAccessIcon.png";
import ConnectTo from "../../assets/ConnectToIcon.png";
import Printers from "../../assets/PrintersIcon.png";
import Help from "../../assets/HelpAndSupportIcon.png";
import Search from "../../assets/SearchIcon.png";
import Run from "../../assets/RunIcon.png";
import AllPrograms from "../../assets/AllProgramsIcon.ico";
import myComputer from "../../assets/myComputer.png";

const StartMenu = () => {
  return (
    <div className=" flex flex-col w-[384px] h-[477px] bg-[rgba(66,130,214)] rounded-tl-[5px] rounded-tr-[5px] text-white shadow-[0_5px_12px_rgba(0,0,0,0.5)]">
      {/* header */}
      <div
        className="h-[3px] rounded-tl-[5px] rounded-tr-[5px]"
        style={{
          background:
            "linear-gradient(to right, transparent 0px, rgba(255, 255, 255, 0.3) 1%, rgba(255, 255, 255, 0.5) 2%, rgba(255, 255, 255, 0.5) 95%, rgba(255, 255, 255, 0.3) 98%, rgba(255, 255, 255, 0.2) 99%, transparent 100%)",
          boxShadow: "rgb(14, 96, 203) 0px -1px 1px inset",
        }}
      ></div>

      <div
        className="h-[54px] pl-[5px] pt-[6px] pr-[5px] pb-[5px] rounded-tl-[5px] rounded-tr-[5px]"
        style={{
          background:
            "linear-gradient(rgb(24, 104, 206) 0%, rgb(14, 96, 203) 12%, rgb(14, 96, 203) 20%, rgb(17, 100, 207) 32%, rgb(22, 103, 207) 33%, rgb(27, 108, 211) 47%, rgb(30, 112, 217) 54%, rgb(36, 118, 220) 60%, rgb(41, 122, 224) 65%, rgb(52, 130, 227) 77%, rgb(55, 134, 229) 79%, rgb(66, 142, 233) 90%, rgb(71, 145, 235) 100%)",
        }}
      >
        {/* Top part */}
        <div className="flex items-center">
          <img
            src={profilePic}
            className="h-[42px] w-[42px] mr-[5px] rounded-[3px] border-[2px] border-solid border-[rgba(222,222,222,08)]"
          />
          <div className="text-[14px] font-bold" style={{ textShadow: "rgb(0 0 0 / 70%) 1px 1px" }}>
            User
          </div>
        </div>
      </div>
      {/* Bot border of top part */}
      <div
        className="h-[2px]"
        style={{
          background:
            "linear-gradient(to right, rgba(0, 0, 0, 0) 0%, rgb(218, 136, 74) 50%, rgba(0, 0, 0, 0) 100%)",
        }}
      ></div>
      {/* Menu */}
      <div className="flex w-[380px] h-[386px] bg-white">
        {/* Left half */}
        <div className="flex flex-col w-1/2 bg-[rgb(255,255,255)] p-[5px]">
          {/* Internet Explorer */}
          <div className="flex h-[34px] p-[1px] mb-[4px] hover:bg-[rgb(56,105,218)] cursor-default hover:text-white group">
            <img src={iExplorer} className="h-[30px] w-[30px]" />
            <div className="flex-col ml-1 space-y-[-3px] hover:text-white">
              <p className="text-[12px] font-bold text-black group-hover:text-white">Internet</p>
              <p className="text-[11px] text-[rgba(0,0,0,0.4)] group-hover:text-white">
                Internet Explorer
              </p>
            </div>
          </div>
          {/* E-mail */}
          <div className="flex h-[34px] p-[1px] mb-[4px] hover:bg-[rgb(56,105,218)] cursor-default hover:text-white group">
            <img src={mail} className="h-[30px] w-[30px]" />
            <div className="flex-col ml-1 space-y-[-3px] hover:text-white">
              <p className="text-[12px] font-bold text-black group-hover:text-white">E-mail</p>
              <p className="text-[11px] text-[rgba(0,0,0,0.4)] group-hover:text-white">
                Outlook Express
              </p>
            </div>
          </div>
          {/* Separator */}
          <div
            className="h-[2px] mt-1 mb-1"
            style={{
              background:
                "linear-gradient(to right, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.1) 50%, rgba(0, 0, 0, 0) 100%) content-box",
            }}
          ></div>
          {/* Minesweeper */}
          <div className="flex items-center gap-[3px] h-[34px] p-[1px] mb-[4px] hover:bg-[rgb(56,105,218)] cursor-default hover:text-white group">
            <img src={mineSweeper} className="h-[30px] w-[30px]" />
            <p className="text-[11px] text-black group-hover:text-white">Minesweeper</p>
          </div>
          {/* Notepad */}
          <div className="flex items-center gap-[3px] h-[34px] p-[1px] mb-[4px] hover:bg-[rgb(56,105,218)] cursor-default hover:text-white group">
            <img src={notepad} className="h-[30px] w-[30px]" />
            <p className="text-[11px] text-black group-hover:text-white">Notepad</p>
          </div>
          {/* Painball */}
          <div className="flex items-center gap-[3px] h-[34px] p-[1px] mb-[4px] hover:bg-[rgb(56,105,218)] cursor-default hover:text-white group">
            <img src={painball} className="h-[30px] w-[30px]" />
            <p className="text-[11px] text-black group-hover:text-white">Painball</p>
          </div>
          {/* Paint */}
          <div className="flex items-center gap-[3px] h-[34px] p-[1px] mb-[4px] hover:bg-[rgb(56,105,218)] cursor-default hover:text-white group">
            <img src={paint} className="h-[30px] w-[30px]" />
            <p className="text-[11px] text-black group-hover:text-white">Paint</p>
          </div>
          {/* Windows Media Player */}
          <div className="flex items-center gap-[3px] h-[34px] p-[1px] mb-[4px] hover:bg-[rgb(56,105,218)] cursor-default hover:text-white group">
            <img src={windowsMediaPlayer} className="h-[30px] w-[30px]" />
            <p className="text-[11px] text-black group-hover:text-white">Windows Media Player</p>
          </div>
          {/* Messenger */}
          <div className="flex items-center gap-[3px] h-[34px] p-[1px] mb-[4px] hover:bg-[rgb(56,105,218)] cursor-default hover:text-white group">
            <img src={msn} className="h-[30px] w-[30px]" />
            <p className="text-[11px] text-black group-hover:text-white">Windows Messenger</p>
          </div>
          {/* end */}
        </div>
        {/* Right half */}
        <div className="flex flex-col w-1/2 bg-[rgba(203,227,255)] p-[5px]">
          {/* My Documents */}
          <div className="flex items-center gap-1 h-[26px] hover:bg-[rgb(56,105,218)] mb-[4px] p-[1px] cursor-default group">
            <img src={myDoc} className="h-[22px] w-[22px]" />
            <div className="text-[11px] text-[rgb(0,19,107)] font-black group-hover:text-white">
              My Documents
            </div>
          </div>
          {/* My Recent Documents */}
          <div className="flex items-center gap-1 h-[26px] hover:bg-[rgb(56,105,218)] mb-[4px] p-[1px] cursor-default group">
            <img src={RecentDoc} className="h-[22px] w-[22px]" />
            <div className="text-[11px] text-[rgb(0,19,107)] font-black group-hover:text-white">
              My Recent Documents
            </div>
          </div>
          {/* My Pictures */}
          <div className="flex items-center gap-1 h-[26px] hover:bg-[rgb(56,105,218)] mb-[4px] p-[1px] cursor-default group">
            <img src={RecentPic} className="h-[22px] w-[22px]" />
            <div className="text-[11px] text-[rgb(0,19,107)] font-black group-hover:text-white">
              My Pictures
            </div>
          </div>
          {/* My Music */}
          <div className="flex items-center gap-1 h-[26px] hover:bg-[rgb(56,105,218)] mb-[4px] p-[1px] cursor-default group">
            <img src={MyMusic} className="h-[22px] w-[22px]" />
            <div className="text-[11px] text-[rgb(0,19,107)] font-black group-hover:text-white">
              My Music
            </div>
          </div>
          {/* My Computer */}
          <div className="flex items-center gap-1 h-[26px] hover:bg-[rgb(56,105,218)] mb-[4px] p-[1px] cursor-default group">
            <img src={myComputer} className="h-[22px] w-[22px]" />
            <div className="text-[11px] text-[rgb(0,19,107)] font-black group-hover:text-white">
              My Computer
            </div>
          </div>
          {/* Separator */}
          <div
            className="h-[2px] mt-1 mb-1"
            style={{
              background:
                "linear-gradient(to right, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.1) 50%, rgba(0, 0, 0, 0) 100%) content-box",
            }}
          ></div>
          {/* Control Panel */}
          <div className="flex items-center gap-1 h-[26px] hover:bg-[rgb(56,105,218)] mb-[4px] p-[1px] cursor-default group">
            <img src={ConrolPanel} className="h-[22px] w-[22px]" />
            <div className="text-[11px] text-[rgb(0,19,107)] group-hover:text-white">
              Control Panel
            </div>
          </div>
          {/* Program Access */}
          <div className="flex items-center gap-1 h-[26px] hover:bg-[rgb(56,105,218)] mb-[4px] p-[1px] cursor-default group">
            <img src={PorgramAccess} className="h-[22px] w-[22px]" />
            <div className="text-[11px] text-[rgb(0,19,107)] group-hover:text-white">
              Set Program Access
            </div>
          </div>
          {/* Connect To */}
          <div className="flex items-center gap-1 h-[26px] hover:bg-[rgb(56,105,218)] mb-[4px] p-[1px] cursor-default group">
            <img src={ConnectTo} className="h-[22px] w-[22px]" />
            <div className="text-[11px] text-[rgb(0,19,107)] group-hover:text-white">
              Connect To
            </div>
          </div>
          {/* Printers */}
          <div className="flex items-center gap-1 h-[26px] hover:bg-[rgb(56,105,218)] mb-[4px] p-[1px] cursor-default group">
            <img src={Printers} className="h-[22px] w-[22px]" />
            <div className="text-[11px] text-[rgb(0,19,107)] group-hover:text-white">
              Printers and Faxes
            </div>
          </div>
          {/* Separator */}
          <div
            className="h-[2px] mt-1 mb-1"
            style={{
              background:
                "linear-gradient(to right, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.1) 50%, rgba(0, 0, 0, 0) 100%) content-box",
            }}
          ></div>
          {/* Help And Support */}
          <div className="flex items-center gap-1 h-[26px] hover:bg-[rgb(56,105,218)] mb-[4px] p-[1px] cursor-default group">
            <img src={Help} className="h-[22px] w-[22px]" />
            <div className="text-[11px] text-[rgb(0,19,107)] group-hover:text-white">
              Help and Support
            </div>
          </div>
          {/* Search */}
          <div className="flex items-center gap-1 h-[26px] hover:bg-[rgb(56,105,218)] mb-[4px] p-[1px] cursor-default group">
            <img src={Search} className="h-[22px] w-[22px]" />
            <div className="text-[11px] text-[rgb(0,19,107)] group-hover:text-white">Search</div>
          </div>
          {/* Run */}
          <div className="flex items-center gap-1 h-[26px] hover:bg-[rgb(56,105,218)] mb-[4px] p-[1px] cursor-default group">
            <img src={Run} className="h-[22px] w-[22px]" />
            <div className="text-[11px] text-[rgb(0,19,107)] group-hover:text-white">Run...</div>
          </div>
          {/* End */}
        </div>
      </div>
      {/* Footer */}
      <div
        className="flex items-center h-[36px] justify-end p-[5px]"
        style={{
          background:
            "linear-gradient(rgb(66, 130, 214) 0%, rgb(59, 133, 224) 3%, rgb(65, 138, 227) 5%, rgb(65, 138, 227) 17%, rgb(60, 135, 226) 21%, rgb(55, 134, 228) 26%, rgb(52, 130, 227) 29%, rgb(46, 126, 225) 39%, rgb(35, 116, 223) 49%, rgb(32, 114, 219) 57%, rgb(25, 110, 219) 62%, rgb(23, 107, 216) 72%, rgb(20, 104, 213) 75%, rgb(17, 101, 210) 83%, rgb(15, 97, 203) 88%)",
        }}
      >
        <div className="flex items-center justify-center gap-[3px] p-[3px] hover:bg-[rgb(56,105,218)] cursor-default">
          <img src={logOff} className="h-[22px] w-[22px]" />
          <div className="text-[11px]">Log Off</div>
        </div>
        <div className="flex items-center justify-center gap-[3px] p-[3px] hover:bg-[rgb(56,105,218)] cursor-default">
          <img src={turnOff} className="h-[22px] w-[22px]" />
          <div className="text-[11px]">Turn Off Computer</div>
        </div>
      </div>
    </div>
  );
};

export default StartMenu;
