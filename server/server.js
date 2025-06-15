import express from "express";
import "dotenv/config";
import cors from "cors";
import mongoose from "mongoose";
import connectDb from "./config/db.js";
import { clerkMiddleware } from "@clerk/express";
import clerkWebhooks from "./contollers/clerkWebHooks.js";
connectDb();
const app = express();
app.use(cors()); //enable cross-origin resource sharing

// middleware
app.use(express.json());
app.use(clerkMiddleware());

// api to listen to clerk webhook
app.use("/api/clerk", clerkWebhooks);
app.get("/", (req, res) => {
  return res.json({
    message: "ssssssss",
    age: 12,
    hotel: { _id: 1, name: "asas" },
  });
});
const PORT = process.env.PORT || 3000;

// start server with the given port
app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
