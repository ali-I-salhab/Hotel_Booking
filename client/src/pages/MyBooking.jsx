import React, { useState } from "react";
import Title from "../components/Title";
import { assets, userBookingsDummyData } from "./../assets/assets";

const MyBooking = () => {
  const [bookings, setBooking] = useState(userBookingsDummyData);
  return (
    <div className="py-30 md:py-35 px-4 md:px-16 lg:px-24 xl:px-32">
      <Title
        title="My Booking"
        subTilte="Lorem ipsum dolor sit amet..."
        align="left"
      />
      <div className="max-w-6xl mt-8 w-full text-gray-800">
        <div className="hidden md:grid md:grid-cols-[3fr_2fr_1fr] w-full bordr-b border-gray-200 font-medium text-base py-3">
          <div className="w-1/3">Hotels</div>

          <div className="w-1/3">Date timing</div>
          <div className="w-1/3">Payment</div>
        </div>
      </div>
      {bookings.map((booking) => {
        return (
          <div
            key={booking._id}
            className="grid grid-cols-1 md:grid-cols-[3fr_2fr_1fr] w-full border-b border-gray-200 py-6 first:border-t-amber-700"
          >
            {/* hotel details */}
            <div className="flex flex-col md:flex-row">
              <img
                src={booking.room.images[0]}
                alt=""
                className="min-md:w-44 rounded-2xl shadow object-cover"
              />
              <div className="flex flex-col gap-1.5 max-md:mt-3 min-md:ml-4">
                <p className="font-playfair text-2xl">
                  {booking.hotel.name} <span>({booking.room.roomType})</span>
                </p>
                <div className="flex items-center gap-1 text-sm text-gray-500">
                  <img src={assets.locationIcon} alt="" />
                  <span className="font-inner text-sm">
                    {booking.hotel.address}
                  </span>
                </div>
                <div className="flex items-center gap-1 text-sm text-gray-500">
                  <img src={assets.guestsIcon} alt="" />
                  <span className="font-inner text-sm">{booking.guests}</span>
                </div>
                <p className="text-base">Total : ${booking.totalPrice}</p>
              </div>
            </div>
            {/* hotel date timing */}
            <div className="flex flex-row md:items-center md:gab-12 mt-3 gap-8">
              <div>
                <p>Check-In:</p>
                <p className="text-gray-500 text-sm">
                  {new Date(booking.checkInDate).toDateString()}
                </p>
              </div>
              <div>
                <p>Check-Out:</p>
                <p className="text-gray-500 text-sm">
                  {new Date(booking.checkOutDate).toDateString()}
                </p>
              </div>
            </div>
            {/* hotel payment */}
            <div className="flex flex-col items-start justify-center pt-3">
              <div className="flex items-center gap-1.5">
                <div
                  className={`h-5 w-5 rounded-full ${
                    booking.isPaid ? "bg-green-500" : "bg-red-500"
                  }`}
                ></div>
                <p
                  className={`text-sm ${
                    booking.isPaid ? "text-green-500" : "bg-red-500"
                  }`}
                >
                  {booking.isPaid ? "Paid" : "Unpaid"}
                </p>
                {booking.isPaid && (
                  <button className="px-4 py-1.5 text-xs border border-gray-400 rounded-full hover:bg-gray-50 transition-all cursor-pointer">
                    Pay now
                  </button>
                )}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default MyBooking;
