import express from "express";
import { protect } from "../middleware/authMiddleware.js";
import { registerHotel } from "../contollers/hotelController.js";

const hotelRouter = express.Router();

hotelRouter.post("/", protect, registerHotel);

export default hotelRouter;
