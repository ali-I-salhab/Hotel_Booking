import React from "react";
import HotelCard from "./HotelCard";
import { roomsDummyData } from "../assets/assets";
import Title from "./Title";
import { useNavigate } from "react-router-dom";
/**
 * Renders a section showcasing featured destinations with a title, a subtitle,
 * a list of hotel cards, and a button to view all destinations. The section is
 * styled with a flexbox layout and includes a Title component for displaying
 * the section's heading. Hotel cards are generated using the roomsDummyData
 * array, displaying up to four featured rooms.
 */

const FeatureDestination = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col items-center px-6 md:px-16 lg:px-24 xl:px-32 bg-slate-50">
      <Title
        title={"Featured Destinations"}
        subTilte={
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita assumenda quibusdam, ut ullam maiores enim dignissimos laborum cum porro saepe. Neque et dolore nisi omnis iure. Iusto expedita porro ipsum!"
        }
        align={"center"}
        font={"font-playfair"}
      />
      <div className="flex flex-wrap items-center justify-center gap-6 mt-20   ">
        {roomsDummyData.slice(0, 4).map((room, index) => {
          return <HotelCard key={room._id} room={room} index={index} />;
        })}
      </div>
      <button
        onClick={() => {
          navigate("/rooms");
          scrollTo(0, 0);
        }}
        className=" cursor-pointer bg-gray-600 rounded-2xl text-white m-4  p-3.5 hover:bg-gray-300 hover:text-gray-600 transition-all duration-200"
      >
        View All Destination
      </button>
    </div>
  );
};

export default FeatureDestination;
