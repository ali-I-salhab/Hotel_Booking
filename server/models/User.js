import mongoose from "mongoose";
import { Timestamp } from "./../node_modules/bson/src/timestamp";

const userSchema = mongoose.Schema(
  {
    _id: {
      type: String,
      required: true,
      unique: true,
    },
    username: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    role: {
      type: Boolean,
      enum: ["user", "hotelowner"],
      default: "user",
    },
    recentSearchCity: [{ type: String, required: true }],
  },
  { Timestamp: true }
);
const User = mongoose.model("User", userSchema);
export default User;
