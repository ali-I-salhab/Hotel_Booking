import React from "react";
import { assets } from "../assets/assets";

const Test = () => {
  return (
    <div className="flex  flex-row h-98 justify-around  grow-0  border-amber-500 border-2 p-2">
      {/* <div className="bg-amber-500 w-1/2  p-3 box-border">a</div>
      <div className="bg-amber-950 m-3 p-3 justify-center absolute  bottom-0.5">
        b
      </div> */}
      <img src={assets.regImage} className="w-24 h-24" />
      <img
        src={assets.regImage}
        className="rounded-2xl mt-2   w-30 border-2"
        alt=""
      />
      <img
        src={assets.regImage}
        className="rounded-2xl mt-2   w-30 border-2"
        alt=""
      />
    </div>
  );
};

export default Test;
