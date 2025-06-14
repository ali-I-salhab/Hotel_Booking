import React, { useState } from "react";
import Title from "../../components/Title";
import { assets, dashboardDummyData } from "../../assets/assets";

const DashBoard = () => {
  const [dashboarddata, setDashboarddata] = useState(dashboardDummyData);
  return (
    <div>
      <Title
        title={"Dashboard"}
        font={"outfit"}
        subTilte={
          "    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem blanditiis quidem tempora quod voluptatibus impedit, autem, amet nemo dolorem totam esse sint vel deserunt quaerat repellendus doloremque eveniet id tenetur."
        }
        align={"left"}
      />
      <div className="flex gap-4 my-8">
        {/* total Bookings */}
        <div className="bg-primary/20 border border-primary rounded flex p-4 pr-8">
          <img
            src={assets.totalBookingIcon}
            alt=""
            className="max-sm:hidden  h-10"
          />
          <div className="flex flex-col sm:ml-4 font-medium">
            <p className="text-blue-500 text-lg">Total Booking</p>
            <p className="text-neutral-400 text-base">
              {dashboarddata.totalBookings}
            </p>
          </div>
        </div>
        {/* total reveneu */}
        <div className="bg-primary/20 border border-primary rounded flex p-4 pr-8">
          <img
            src={assets.totalRevenueIcon}
            alt=""
            className="max-sm:hidden  h-10"
          />
          <div className="flex flex-col sm:ml-4 font-medium">
            <p className="text-blue-500 text-lg">Total Revenue</p>
            <p className="text-neutral-400 text-base">
              ${dashboarddata.totalRevenue}
            </p>
          </div>
        </div>
        {/* recent bookings */}
        <h2 className="text-xl text-blue-950/70 font-medium mb-5">
          Recent Booking
        </h2>
        {/* data table */}
        <div className="w-full max-w-3xl text-left border border-gray-300 rounded-lg max-h-80 overflow-y-scroll">
          <table className="w-full">
            <thead className="bg-gray-700">
              <tr>
                <th className="py-3 px-4 text-gray-50 font-medium">
                  user name
                </th>
                <th className="py-3 px-4 text-gray-50 font-medium max-sm::hidden">
                  room name
                </th>
                <th className="py-3 px-4 text-gray-50 font-medium text-center">
                  total amount
                </th>
                <th className="py-3 px-4 text-gray-50 font-medium text-center">
                  payment status
                </th>
              </tr>
            </thead>

            <tbody className="text-sm">
              {dashboarddata.bookings.map((item, index) => {
                return (
                  <tr key={index}>
                    <td className="py-3 px-4 text-gray-700 border-t border-gray-300">
                      {item.user.username}
                    </td>

                    <td className="py-3 px-4 text-gray-700 border-t border-gray-300 max-sm:hidden">
                      {item.room.roomType}
                    </td>

                    <td className="py-3 px-4 text-gray-700 border-t border-gray-300 text-center">
                      $ {item.totalPrice}
                    </td>
                    <td className="py-3 px-4 border-t border-gray-400 flex">
                      <button
                        className={`py-1 px-3 text-xs rounded-full mx-auto ${
                          item.isPaid
                            ? "bg-green-200 text-green-600"
                            : "bg-amber-200 text-yellow-600"
                        }`}
                      >
                        {item.isPaid ? "completed" : "pending"}
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default DashBoard;
