import express from "express";
import "dotenv/config";
import cors from "cors";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import connectDb from "./config/db.js";
import { clerkMiddleware } from "@clerk/express";
import clerkWebhooks from "./contollers/clerkWebHooks.js";
import userRouter from "./routes/userRoutes.js";
import hotelRouter from "./routes/hotelRoute.js";
connectDb();
const app = express();
app.use(cors());

// 👇 Capture raw body for webhook signature verification
app.use(
  bodyParser.json({
    verify: (req, res, buf) => {
      req.rawBody = buf.toString();
    },
  })
);

app.use(clerkMiddleware());

// 👇 Clerk webhook endpoint
app.use("/api/clerk", clerkWebhooks);

app.get("/", (req, res) => {
  return res.json({
    message: "updated",
    age: 12,
    hotel: { _id: 1, name: "asas" },
  });
});
app.use("/api/user", userRouter);
app.use("/api/hotels", hotelRouter);
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
