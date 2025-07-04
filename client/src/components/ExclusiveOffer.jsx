import React from "react";
import Title from "./Title";
import { assets, exclusiveOffers } from "../assets/assets";

const ExclusiveOffer = () => {
  return (
    <div>
      {" "}
      <div className="flex flex-col md:flex-row items-center justify-between w-full gap-6 p-12">
        <div className="md:w-2/3">
          <Title
            title="Exclusive Offers"
            subTilte="Lorem ipsum dolor sit amet..."
            align="left"
          />
        </div>
        <button className="group flex items-center gap-2 font-medium cursor-pointer max-md:mt-12">
          View All Offers
          <img
            src={assets.arrowIcon}
            alt="arrow"
            className="cursor-pointer group-hover:translate-x-1 transition-all"
          />
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 ld:grid-cols-3 gap-6 mt-12">
        {exclusiveOffers.map((item) => {
          return (
            <div
              key={item._id}
              className="group relative  flex flex-col items-start justify-between w-full pt-12 px-4 rounded-xl text-white bg-no-repeat bg-cover bg-center"
              style={{ backgroundImage: `url(${item.image})` }}
            >
              <p className="px-3 py-1 absolute top-4 left-4 text-xs bg-white text-gray-800 font-medium rounded-full">
                {item.priceOff} % Off
              </p>
              <div>
                <p className="text-2xl font-medium font-playfair">
                  {item.title}
                </p>
                <p className="">{item.description}</p>
                <p className="text-xs text-white/70 mt-3">{item.expiryDate}</p>
              </div>
              <button className="flex items-center gap-2 font-medium cursor-pointer mt-4 mb-5">
                View Offers
                <img
                  className="invert group-hover:translate-x-1 transition-all"
                  src={assets.arrowIcon}
                  alt="arrow"
                />
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ExclusiveOffer;
