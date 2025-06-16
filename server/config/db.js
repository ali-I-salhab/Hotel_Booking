import mongoose from "mongoose";
const connectDb = async () => {
  try {
    console.log(process.env.MONGODB_URI);

    const conn = await mongoose.connect(
      `${process.env.MONGODB_URI}/hotel-booking`
    );
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

export default connectDb;
