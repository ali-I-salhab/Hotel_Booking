import User from "../models/User.js";

// middleware to check if user is authenticated
export const protect = async (req, res, next) => {
  console.log("------> protect middle ware");

  const { userId } = req.auth();
  if (!userId) {
    res.json({ success: false, message: "Unauthorized" });
  } else {
    const user = await User.findById(userId);
    req.user = user;
    next();
  }
};

// ali
