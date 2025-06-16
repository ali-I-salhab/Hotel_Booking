// get /api/user/

import User from "../models/User.js";

export const getUserData = async (req, res) => {
  console.log("=============");
  console.log(req.user);

  try {
    const role = req.user.role;
    const recentSearchCity = req.user.recentSearchCity;
    return res.json({ success: true, role, recentSearchCity });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};
// store user recent search city

export const storeRecentSearchCities = async (req, res) => {
  try {
    const { recentSearchCity } = req.body;
    const user = await req.user;
    if (user.recentSearchCity.length < 3) {
      user.recentSearchCity.push(recentSearchCity);
    } else {
      user.recentSearchCity.shift();
      user.recentSearchCity.push(recentSearchCity);
    }
    await User.save();
    res.json({ success: true, message: "City Added" });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};
