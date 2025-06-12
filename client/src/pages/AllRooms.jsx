import React, { useState } from "react";
import { assets, facilityIcons, roomsDummyData } from "../assets/assets";
import { useNavigate } from "react-router-dom";
import StarRating from "./../components/StarRating";
const CheckBox = ({ label, selectd = false, onChange = () => {} }) => {
  return (
    <label
      htmlFor=""
      className="flex gap-3 items-center cursor-pointer mt-2 text-sm"
    >
      <input
        type="checkbox"
        checked={selectd}
        onChange={(e) => {
          onChange(e.target.checked, label);
        }}
      />
      <span className="font-light select-none">{label}</span>
    </label>
  );
};
const RadioButton = ({ label, selectd = false, onChange = () => {} }) => {
  return (
    <label
      htmlFor=""
      className="flex gap-3 items-center cursor-pointer mt-2 text-sm"
    >
      <input
        type="radio"
        checked={selectd}
        name="sortOption"
        onChange={() => {
          onChange(label);
        }}
      />
      <span className="font-light select-none">{label}</span>
    </label>
  );
};
const AllRooms = () => {
  const roomTypes = ["Single Room", "Double Room", "Deluxe Room", "Suite Room"];
  const priceRanges = [
    "Rs. 1000 - Rs. 2000",
    "Rs. 2000 - Rs. 3000",
    "Rs. 3000 - Rs. 4000",
    "Rs. 4000 - Rs. 5000",
    "Rs. 5000 - Rs. 6000",
    "Rs. 6000 - Rs. 7000",
    "Rs. 7000 - Rs. 8000",
    "Rs. 8000 - Rs. 9000",
    "Rs. 9000 - Rs. 10000",
  ];
  const sortOptions = [
    "Price: Low to High",
    "Price: High to Low",
    "Rating: High to Low",
    "Rating: Low to High",
  ];
  const navigate = useNavigate();
  const [openFilters, setOpenedFilters] = useState(false);
  return (
    <div className="flex flex-col-reverse lg:flex-row items-start justify-between pt-28 md:pt-35 px-4 md:px-16 lg:px-24">
      <div>
        <div className="flex flex-col items-baseline text-left">
          <h1 className="font-playfair text-4xl md:text-[40px]">Hotel Rooms</h1>
          <p className="text-sm md:text-base text-gray-500 mt-2 max-w-174">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam
            consequuntur quae molestias enim nam at hic deserunt corrupti
          </p>
        </div>
        {roomsDummyData.map((room, index) => {
          return (
            <div
              key={room._id}
              className="flex flex-col md:flex-row items-start py-10 gap-6 border-b border-gray-300 last:pd-30 last:border-0"
            >
              <img
                onClick={() => {
                  navigate(`/rooms/${room._id}`);
                  scrollTo(0, 0);
                }}
                src={room.images[0]}
                className="max-h-65 md:w-1/2 rounded-xl shadow-lg object-cover cursor-pointer"
                alt=""
                title="view room details"
              />
              <div className="md:w-1/2 flex flex-col gap-2.5">
                <p className="text-gray-600">{room.hotel.city}</p>
                <p
                  onClick={() => {
                    navigate(`/rooms/${room._id}`);
                    scrollTo(0, 0);
                  }}
                  className="text-gray-800 font-playfair text-3xl  cursor-pointer"
                >
                  {room.hotel.name}
                </p>
                <div className="flex items-center">
                  <StarRating rating={room.rating} />
                  <p className="ml-2"> 200+ reviews</p>
                </div>
                <div className="flex items-center gap-2 text-sm mt-2 ">
                  <img src={assets.locationIcon} alt="" />
                  <span>{room.hotel.address}</span>
                </div>
                <div className="flex flex-wrap items-center mt-3 mb-6 gap-4">
                  {room.amenities.map((room, index) => {
                    return (
                      <div
                        key={index}
                        className="flex flex-row items-center justify-center gap-2 px-1 py-2 rounded-lg bg-[#f5f5ff]"
                      >
                        <img
                          src={facilityIcons[room]}
                          alt=""
                          className="w-6 h-6"
                        />
                        <p className="text-xs text-center">{room}</p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          );
        })}
      </div>
      {/* filters */}
      <div className="bg-white w-80 border border-gray-900 text-gray-600 max-lg:mb-8 min-lg:mt-16">
        <div
          className={`flex items-center transition-all duration-150 justify-between px-5 py-2.5 min-lg:border-b border-gray-300 ${
            openFilters && "border-b-amber-400 border-b-4"
          }`}
        >
          <p className="text-base font-medium text-gray-800">Filter</p>
          <div className="text-sm cursor-pointer">
            <span
              onClick={() => {
                setOpenedFilters(!openFilters);
              }}
              className="lg:hidden"
            >
              {openFilters ? "Hide" : "Show"}
            </span>
            <span className="hidden lg:block">Clear</span>
          </div>
        </div>
        <div
          className={`${
            openFilters ? "h-auto" : "h-0 lg:h-auto"
          } overflow-hidden transition-all duration-700`}
        >
          <div className="px-5 py-4">
            <p className="font-medium text-gray-800 pb-3">popular filter</p>
            {roomTypes.map((e, index) => {
              return <CheckBox label={e} key={index} />;
            })}
          </div>
          <div className="px-5 py-4">
            <p className="font-medium text-gray-800 pb-3">price range</p>
            {priceRanges.map((e, index) => {
              return <CheckBox label={`${e}+$`} key={index} />;
            })}
          </div>
          <div className="px-5 py-4 pb-7">
            <p className="font-medium text-gray-800 pb-3">sortby</p>
            {sortOptions.map((e, index) => {
              return <RadioButton label={e} key={index} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllRooms;
