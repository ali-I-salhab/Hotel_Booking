import React from "react";
import { assets, testimonials } from "../assets/assets";

const StarRating = ({ rating = 2 }) => {
  return (
    <>
      {Array(5)
        .fill("")
        .map((_, index) => {
          return (
            <img
              src={
                rating > index ? assets.starIconFilled : assets.starIconOutlined
              }
              alt=""
              className="h-4 w-4"
            />
          );
        })}
    </>
  );
};

export default StarRating;
