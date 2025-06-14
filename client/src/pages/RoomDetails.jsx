import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  assets,
  facilityIcons,
  roomCommonData,
  roomsDummyData,
} from "../assets/assets";
import StarRating from "../components/StarRating";

const RoomDetails = () => {
  const { id } = useParams();
  const [room, setRoom] = useState(null);
  const [mainImage, setMainImage] = useState(null);
  useEffect(() => {
    const roomm = roomsDummyData.find((room) => {
      return room._id === id;
    });
    console.log(roomm);
    roomm && setRoom(roomm);
    roomm && setMainImage(roomm.images[0]);
  }, []);
  return room ? (
    <div className="py-30 md:py-35 px-4 md:px-16 lg:px-24 xl:px-32">
      {/* Room Details */}
      <div className="">
        <h1>
          {room.hotel.name}
          <span className="font-inter text-xs py-1.5 px-3 text-gray-900 font-black font-sans">
            ({room.roomType})
          </span>
          <span className="font-inter text-xs py-1.5 px-3 text-white bg-orange-500 rounded-full">
            20% OFF
          </span>
        </h1>
      </div>
      {/* Room Rating */}

      <div className="flex items-center gap-2 mt-2">
        <StarRating />
        <p className="ml-2">200+ reviews</p>
      </div>

      {/* Room Address */}
      <div className="flex items-center gap-1 text-gray-500 mt-3">
        <img src={assets.locationFilledIcon} alt="" />
        <span>{room.hotel.address}</span>
      </div>

      {/* Room Images  */}
      <div className="flex flex-col lg:flex-row mt-6 gap-6">
        {/*main image  */}
        <div className="lg:w-1/2 w-full">
          <img
            src={mainImage}
            alt=""
            className="w-full rounded-xl shadow-xl object-cover"
          />
        </div>
        {/* Sub Images */}
        <div className="grid grid-cols-2 gap-4 lg:w-1/2 w-full">
          {room?.images.length > 1 &&
            room.images.map((image, index) => {
              return (
                <img
                  onClick={() => {
                    setMainImage(image);
                  }}
                  key={index}
                  src={image}
                  alt="room image"
                  className={`w-full transition-all duration-100  rounded-xl shadow-xl object-cover cursor-pointer ${
                    image === mainImage && " outline-2 p-3 outline-orange-500"
                  }`}
                />
              );
            })}
        </div>
      </div>
      {/* Room Highlight */}

      <div className="flex flex-col md:flex-row md:justify-between mt-10">
        <div className="flex flex-col">
          <h1 className="text-3xl md:text-4xl font-playfair">
            Lorem ipsum dolor sit.
          </h1>
          <div className="flex flex-wrap items-center mt-3 mb-6 gap-4">
            {room.amenities.map((item, index) => {
              return (
                <div
                  key={index}
                  className="flex items-center gap-2 px-3 py-2 rounded-lg bg-gray-400"
                >
                  <img src={facilityIcons[item]} alt="" className="w-5 h-5" />
                  <p className="text-xs">{item}</p>
                </div>
              );
            })}
          </div>
        </div>
        {/* room price */}
        <p className="text-2xl font-medium">$ {room.pricePerNight}/night</p>
      </div>
      {/* checkin checout form */}
      <form
        action=""
        className="flex flex-col md:flex-row items-start md:items-center justify-between bg-white shadow-[0px_0px_20px_rgba(0,0,0,0.15)] p-6 rounded-xl mx-auto mt-16 max-w-6xl"
      >
        <div className="flex flex-col flex-wrap  md:flex-row items-start md:items-center gap-4 md:gap-10 text-gray-500">
          <div className="flex flex-col">
            <label htmlFor="" className="font-medium">
              CheckIn
            </label>
            <input
              type="date"
              id="checkInDate"
              placeholder="checkIn"
              required
              className="w-full rounded border border-gray-300 px-3 py-2 mt-1.5 outline-none"
            />
          </div>
          <div className="w-px h-12 bg-gray-600 max-md:hidden"></div>

          <div className="flex flex-col">
            <label htmlFor="" className="font-medium">
              CheckOut
            </label>
            <input
              type="date"
              id="checkOutDate"
              placeholder="checkOut"
              required
              className="w-full rounded border border-gray-300 px-3 py-2 mt-1.5 outline-none"
            />
          </div>
          <div className="w-px h-12 bg-gray-600 max-md:hidden"></div>
          <div className="flex flex-col">
            <label htmlFor="" className="font-medium">
              guests
            </label>
            <input
              type="number"
              id="guests"
              placeholder="0"
              required
              className="max-w-20 rounded border border-gray-300 px-3 py-2 mt-1.5 outline-none"
            />
          </div>
        </div>
        <button
          type="sumbit"
          className="bg-primary hover:bg-primary-dull active:scale-95 transition-all text-white rounded-md max-md:w-full max-md:mt-6 md:px-25 py-4 text-base cursor-pointer "
        >
          Check Availability
        </button>
      </form>

      {/* comme=on specifications */}
      <div className="mt-25 space-y-6">
        {roomCommonData.map((spec, index) => {
          return (
            <div key={index} className="flex items-start gap-2 mt-6">
              <img src={spec.icon} alt={`${spec.title}`} className="w-5 h-5" />
              <div>
                <p className="text-base">{spec.title}</p>
                <p className="text-gray-500">{spec.description}</p>
              </div>
            </div>
          );
        })}
      </div>
      <div className="max-w-3xl border-y-2 border-gray-300 my-15 py-10 text-gray-500">
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus labore
          nemo velit.
        </p>
      </div>
      {/* hosted by */}
      <div>
        <div className="flex gap-4">
          <img
            src={room.hotel.owner.image}
            alt="Host"
            className="w-14 h-14 md:h-18 md:w-18 rounded-full"
          />
          <div className="text-lg md:text-xl">
            <p>Hosted By {room.hotel.name}</p>
            <div className="flex items-center mt-1">
              <StarRating rating={room.hotel.rating} />
              <p className="ml-2">200+ review</p>
            </div>
          </div>
        </div>
      </div>
      <button className="px-6 py-2.5 mt-4 rounded text-white bg-primary hover:bg-primary-dull transition-all cursor-pointer">
        Contact Now
      </button>
    </div>
  ) : (
    <div className="py-30 md:py-35 px-4 md:px-16 lg:px-24 xl:px-32">
      404 not found
    </div>
  );
};

export default RoomDetails;
