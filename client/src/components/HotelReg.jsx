import React from "react";
import { assets, cities } from "../assets/assets";

const HotelReg = () => {
  return (
    <div className="fixed  top-0 bottom-0 left-0 right-0 z-40 flex items-center justify-center bg-black/70">
      <form
        action=""
        className="flex bg-white rounded-xl max-w-4xl max-md:mx-2"
      >
        <img
          className="w-1/2 rounded-2xl hidden md:block"
          src={assets.regImage}
        />
        <div className="relative flex flex-col items-center md:w-1/2 p-8 md:p-10">
          <img
            className="absolute top-4 right-2 h-4 w-4 cursor-pointer"
            src={assets.closeIcon}
          />
          <p className="text-2xl text-gray-800 font-semibold">
            Register Your Hotel
          </p>
          {/* Hotel Name */}
          <div className="w-full mt-4">
            <label htmlFor="name" className="font-medium text-gray-500">
              Hotel name
            </label>
            <input
              id="name"
              type="text"
              placeholder="Type Here"
              className="border border-gray-200 rounded w-full px-3 py-2.5 mt-1 outline-indigo-500 font-light"
              required
            />
          </div>
          {/* phone */}
          <div className="w-full mt-4">
            <label htmlFor="contact" className="font-medium text-gray-500">
              Phone Number
            </label>
            <input
              type="text"
              id="contact"
              placeholder="Type Here"
              className="border border-gray-200 rounded w-full px-3 py-2.5 mt-1 outline-indigo-500 font-light"
              required
            />
          </div>
          {/* address */}
          <div className="w-full mt-4">
            <label htmlFor="contact" className="font-medium text-gray-500">
              Address
            </label>
            <input
              type="text"
              id="address"
              placeholder="Type Here"
              className="border border-gray-200 rounded w-full px-3 py-2.5 mt-1 outline-indigo-500 font-light"
              required
            />
          </div>
          {/* select city drop down */}
          <div className="w-full mt-4 max-w-60 mr-auto">
            <label htmlFor="city" className="font-medium text-gray-500">
              City
            </label>
            <select
              required
              id="city"
              className="border border-gray-200 rounded w-full px-3 py-2.5 mt-1 outline-indigo-500 font-light"
            >
              <option value="">select City</option>
              {cities.map((city) => {
                return <option value={city}>{city}</option>;
              })}
            </select>
          </div>
          <button className="bg-indigo-500 border rounded-2xl py-1.5 px-4 mt-4 text-white text-base hover:bg-indigo-700 cursor-pointer hover:scale-110 duration-150 transition-all">
            Register
          </button>
        </div>
      </form>
    </div>
  );
};

export default HotelReg;
