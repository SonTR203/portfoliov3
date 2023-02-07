import React from "react";

const ScrollProgressBar = () => {
  return (
    <div className="fixed top-1/2 h-96 transform -translate-y-1/2">
      <div className="bg-white w-2 rounded h-full">
        <div
          style={{ height: `${30}%` }}
          className="bg-black w-2 rounded h-full absolute z-10"></div>
        {/* <div className=" w-12 h-12 rounded-full border-8 border-white -translate-x-5">
          <div className="w-8 h-8 rounded-full bg-neutral-900 z-20"></div>
        </div> */}
        <div className=" w-10 h-10 rounded bg-neutral-900 -translate-x-5 py-3 z-20"></div>
      </div>
    </div>
  );
};

export default ScrollProgressBar;
