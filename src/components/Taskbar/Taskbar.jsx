import React, { useContext, useState, useRef } from "react";
import startBtn from "../../assets/Start2Icon.png";
import soundIcon from "../../assets/soundIcon.png";
import windowsDefence from "../../assets/windowsDefenceIcon.png";
import hotplugIcon from "../../assets/hotplugIcon.png";
import { AppContext } from "../../context/AppContext";

const Taskbar = () => {
  const homeScreen = useContext(AppContext);
  const [startBtnClicked, setStartBtnClicked] = useState(false);

  //   Handle start button click
  const handleStartBtnClick = (type) => {
    if (type === "down") {
      setStartBtnClicked(true);
    } else {
      setStartBtnClicked(false);
    }
  };

  // Local time
  const getLocalDate = () => {
    const date = new Date();

    let hours = date.getHours();
    let minutes = date.getMinutes();

    const ampm = hours >= 12 ? "PM" : "AM";

    return `${hours <= 9 ? "0" + hours : hours}:${minutes <= 9 ? "0" + minutes : minutes} ${ampm}`;
  };

  return (
    <div
      className="flex items-center justify-between w-full h-[4vh]"
      style={{
        background:
          "linear-gradient(rgb(31, 47, 134) 0px, rgb(49, 101, 196) 3%, rgb(54, 130, 229) 6%, rgb(68, 144, 230) 10%, rgb(56, 131, 229) 12%, rgb(43, 113, 224) 15%, rgb(38, 99, 218) 18%, rgb(35, 91, 214) 20%, rgb(34, 88, 213) 23%, rgb(33, 87, 214) 38%, rgb(36, 93, 219) 54%, rgb(37, 98, 223) 86%, rgb(36, 95, 220) 89%, rgb(33, 88, 212) 92%, rgb(29, 78, 192) 95%, rgb(25, 65, 165) 98%)",
      }}
    >
      {/* Start button */}
      <img
        src={startBtn}
        onMouseDown={() => handleStartBtnClick("down")}
        onMouseUp={() => handleStartBtnClick("up", event)}
        onClick={(event) => homeScreen.desktop.handleClickedIcon("startMenu", event)}
        className={`h-[4vh] -ml-1 ${startBtnClicked === false ? "" : "brightness-65"}`}
      />
      {/* Clock and small icons */}
      <div
        className="flex items-center justify-center gap-[1px] p-[10px] w-[122px] h-[4vh] border-l-[1px]-[rgb(24,187,255)] ml-[10px] py-[10px] cursor-default"
        style={{
          background:
            "linear-gradient(rgb(12, 89, 185) 1%, rgb(19, 158, 233) 6%, rgb(24, 181, 242) 10%, rgb(19, 155, 235) 14%, rgb(18, 144, 232) 19%, rgb(13, 141, 234) 63%, rgb(13, 159, 241) 81%, rgb(15, 158, 237) 88%, rgb(17, 155, 233) 91%, rgb(19, 146, 226) 94%, rgb(19, 126, 215) 97%, rgb(9, 91, 201) 100%)",
        }}
      >
        <img src={soundIcon} className="h-[15px] w-[15px]" />
        <img src={hotplugIcon} className="h-[15px] w-[15px]" />
        <img src={windowsDefence} className="h-[15px] w-[15px]" />
        <div className="text-[11px] text-white">{getLocalDate()}</div>
      </div>
    </div>
  );
};

export default Taskbar;
