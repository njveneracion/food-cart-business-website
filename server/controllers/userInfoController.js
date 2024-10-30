import User from "../models/userModel.js";

export const getUser = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json({ success: true, data: users });
  } catch (error) {
    res
      .status(500)
      .json({ success: false, message: "Cannot get users information" });
  }
};
