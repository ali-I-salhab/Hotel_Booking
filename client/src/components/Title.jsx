import React from "react";

const Title = ({ title, subTilte, align, font }) => {
  return (
    <div
      className={` ${
        align === "left" && "md:items-start md:text-left"
      } flex flex-col justify-center text-center `}
    >
      <h1 className={`text-4xl md:text-[40px]   ${font || "font-playfair"}`}>
        {title}
      </h1>
      <p className="text-sm md:text-base text-gray-500/900 mt-2 max-w-174">
        {subTilte}
      </p>
    </div>
  );
};

export default Title;
