import React from "react";
import NavBar from "./components/NavBar";
import { useLocation, Routes, Route } from "react-router-dom";
import Hero from "./components/Hero";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import AllRooms from "./pages/AllRooms";
import Test from "./pages/Test";
import RoomDetails from "./pages/RoomDetails";
import MyBooking from "./pages/MyBooking";
import HotelReg from "./components/HotelReg";
import Layout from "./pages/hotelOwner/Layout";
import DashBoard from "./pages/hotelOwner/DashBoard";
import AddRoom from "./pages/hotelOwner/AddRoom";
import ListRoom from "./pages/hotelOwner/ListRoom";
const App = () => {
  const isOwnerPath = useLocation().pathname.includes("owner");
  const istest = useLocation().pathname.includes("test");

  return (
    <div>
      {!(istest || isOwnerPath) && <NavBar />}
      {false && <HotelReg />}
      <div className="min-h-[70vh]">
        <Routes>
          <Route path="/" element={<Home />} key="home" />
          <Route path="/rooms" element={<AllRooms />} key="home" />
          <Route path="/test" element={<Test />} key="home" />
          <Route path="/rooms/:id" element={<RoomDetails />} key="home" />
          <Route path="/my-bookings" element={<MyBooking />} key="home" />
          <Route path="/owner" element={<Layout />}>
            <Route index element={<DashBoard />} />
            <Route path="add-room" element={<AddRoom />} />
            <Route path="list-room" element={<ListRoom />} />
          </Route>
        </Routes>
      </div>
      {!istest && <Footer />}
    </div>
  );
};

export default App;
