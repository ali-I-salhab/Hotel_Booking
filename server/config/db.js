import mongoose from "mongoose";
const connectDb = async () => {
  try {
    mongoose.connection.on("connected", () => {
      console.log("connected successfully", mongoose.connection.host);
    });
    await mongoose.connect(`${process.env.MONGODB_URI}/hotel-booking`);
  } catch (error) {
    console.log(error.message);
  }
};

export default connectDb;
