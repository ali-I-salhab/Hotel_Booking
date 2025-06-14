import React, { useState } from "react";
import { roomsDummyData } from "./../../assets/assets";
import Title from "./../../components/Title";

const ListRoom = () => {
  const [rooms, setRooms] = useState(roomsDummyData);
  return (
    <div>
      <Title
        align={"left"}
        font={"outfit"}
        title={"List Rooms"}
        subTilte={
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis amet facere vitae nisi accusamus ullam quam molestias dicta suscipit quas tempora sed perspiciatis assumenda neque enim sit accusantium, maiores similique?"
        }
      />
      <p className="text-gray-500 mt-8">All Rooms</p>
      <div className="w-full mt-4 max-w-3xl text-left border border-gray-300 rounded-lg max-h-80 overflow-y-scroll">
        <table className="w-full">
          <thead className="bg-gray-700">
            <tr>
              <th className="py-3 px-4 text-gray-50 font-medium"> name</th>
              <th className="py-3 px-4 text-gray-50 font-medium max-sm::hidden">
                Facility
              </th>
              <th className="py-3 px-4 text-gray-50 font-medium ">
                Price per night
              </th>
              <th className="py-3 px-4 text-gray-50 font-medium text-center">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="text-sm">
            {rooms.map((room) => {
              return (
                <tr key={room._id}>
                  <td className="py-3 px-4 text-gray-700 border-t border-gray-400">
                    {room.roomType}
                  </td>
                  <td className="py-3 px-4 mx-sm:hidden text-gray-700 border-t border-gray-400">
                    {room.amenities.join(",")}
                  </td>
                  <td className="py-3 px-4  border-t text-center  border-gray-400">
                    {room.pricePerNight} $
                  </td>
                  <label
                    htmlFor=""
                    className="relative inline-flex items-center cursor-pointer text-gray-900 gap-3"
                  >
                    <input
                      type="checkbox"
                      className="sr-only peer"
                      checked={room.isAvailable}
                    />
                    <div className="w-12 h-7 bg-slate-400 rounded-full peer peer-checked:bg-blue-700 transition-colors duration-500">
                      <span className="dot absolute left-1 top-1  w-6 h-6 bg-white rounded-full  transition-transform duration-500 ease-in peer-checked:translate-x-5"></span>
                    </div>
                  </label>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ListRoom;
