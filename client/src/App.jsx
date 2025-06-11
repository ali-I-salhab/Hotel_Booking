import React from "react";
import NavBar from "./components/NavBar";
import { useLocation, Routes, Route } from "react-router-dom";
import Hero from "./components/Hero";
import Home from "./pages/Home";

const App = () => {
  const isOwnerPath = useLocation().pathname.includes("owner");

  return (
    <div>
      {!isOwnerPath && <NavBar />}
      <div className="min-h-[70vh]">
        <Routes>
          <Route path="/" element={<Home />} key="home" />
        </Routes>
      </div>
    </div>
  );
};

export default App;
