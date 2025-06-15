import express from "express";
import "dotenv/config";
import cors from "cors";
import mongoose from "mongoose";
import connectDb from "./config/db.js";
// cloudinary upload images to cloud storage
// multer upload image
// svix make api call http request
connectDb();
const app = express();
// connnect fron to back
app.use(cors()); //enable cross-origin resource sharing

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
