import React from "react";

const Welcome = () => {
  return (
    <div className="flex flex-col h-screen w-screen bg-red-200 z-50">
      {/* Header */}
      <div className="h-[12.7vh] bg-[rgb(0,48,156)] z-50"></div>
      {/* Border */}
      <div
        className="h-[3px] rounded-tl-[5px] rounded-tr-[5px] z-50"
        style={{
          background:
            "linear-gradient(to right, transparent 0px, rgba(255, 255, 255, 0.3) 1%, rgba(255, 255, 255, 0.5) 2%, rgba(255, 255, 255, 0.5) 95%, rgba(255, 255, 255, 0.3) 98%, rgba(255, 255, 255, 0.2) 99%, transparent 100%)",
          boxShadow: "rgb(14, 96, 203) 0px -1px 1px inset",
        }}
      ></div>
      {/* Main */}
      <div className="flex items-center justify-center h-[74.7vh] bg-[rgb(90,126,220)]">
        <p className="text-white font-black text-shadow-lg text-[45px] italic ml-[25vh]">welcome</p>
      </div>
      {/* Border */}
      <div
        className="h-[2px] w-full"
        style={{
          background:
            "linear-gradient(to right, rgba(0, 0, 0, 0) 0%, rgb(218, 136, 74) 50%, rgba(0, 0, 0, 0) 100%)",
        }}
      ></div>
      {/* Footer */}
      <div className="flex items-baseline h-[12.7vh] bg-[rgb(0,48,156)]"></div>
      {/* End */}
    </div>
  );
};

export default Welcome;
