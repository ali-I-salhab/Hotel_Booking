import React, { useState } from "react";
import Title from "../../components/Title";
import { assets } from "../../assets/assets";

const AddRoom = () => {
  const [images, setImages] = useState({
    1: null,
    2: null,
    3: null,
    4: null,
  });
  const [input, setInput] = useState({
    roomType: "",
    pricePerNight: 0,
    amenities: {
      "Free Wifi": true,
      "Free Breakfast": false,
      "Room Service": false,
      "Mountain View": false,
      "Pool Access": false,
    },
  });
  return (
    <form>
      <Title
        title={"Add New Room"}
        subTilte={
          "      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum rerum voluptate aspernatur soluta recusandae ad culpa, debitis magnam facere dignissimos sapiente odio, laboriosam exercitationem consequatur? Atque nemo eaque possimus beatae?"
        }
        font={"outfit"}
      />
      {/* Upload Area for images */}
      <p className="text-gray-800 mt-10">Upload Images</p>
      <div className="grid-cols-2 sm:flex gap-4 my-2 flex-wrap">
        {Object.keys(images).map((key) => {
          return (
            <div key={key}>
              <label htmlFor={`roomimage${key}`} key={key}>
                <img
                  className="max-h-13 cursor-pointer opacity-45"
                  src={
                    images[key]
                      ? URL.createObjectURL(images[key])
                      : assets.uploadArea
                  }
                  alt=""
                />
                <input
                  type="file"
                  accept="image/*"
                  id={`roomimage${key}`}
                  key={key}
                  hidden
                  onChange={(e) => {
                    setImages({ ...images, [key]: e.target.files[0] });
                  }}
                />
              </label>
            </div>
          );
        })}
      </div>
      <div className="w-full flex max-sm:flex-col sm:gap-4 mt-4">
        <div className="flex-1 max-w-48">
          <p className="text-gray-800 mt-4">Room Type</p>
          <select
            className="border opacity-50 border-gray-300 mt-1 rounded p-2"
            onChange={(e) => {
              setInput({ ...input, roomType: e.target.value });
            }}
            value={input.roomType}
          >
            <option value="">select room type</option>
            <option value="single bed">single bed</option>
            <option value="double bed">double bed</option>
            <option value="luxury room">luxury room</option>
            <option value="family suite">family suite</option>
          </select>
        </div>
        <div>
          <p className="mt-4 text-gray-800">
            Price <span className="text-xs">/night</span>
          </p>
          <input
            type="number"
            placeholder="0"
            className="border border-gray-400 mt-1 rounded p-2 w-24"
            value={input.pricePerNight}
            onChange={() => {
              setInput({ ...input, pricePerNight: e.target.value });
            }}
          />
        </div>
      </div>
      <p className="text-gray-500 mt-4"> Amenities</p>
      <div className="flex flex-col flex-wrap mt-1 text-gray-600 max-w-sm">
        {Object.keys(input.amenities).map((key) => {
          return (
            <div key={key}>
              <input
                type="checkbox"
                id={key}
                checked={input.amenities[key]}
                onChange={() => {
                  setInput({
                    ...input,
                    amenities: {
                      ...input.amenities,
                      [key]: !input.amenities[key],
                    },
                  });
                }}
              />
              <label htmlFor={key}>{key}</label>
            </div>
          );
        })}
      </div>
      <button className="bg-primary-600 mt-4 text-white p-3 rounded cursor-pointer">
        Add Room
      </button>
    </form>
  );
};

export default AddRoom;
