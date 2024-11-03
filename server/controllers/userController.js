import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "../models/userModel.js";

// Creating JWT Token
const createToken = (_id, role, email) => {
  const payload = { _id, role, email };
  return jwt.sign(payload, process.env.JWT_SECRET, {
    expiresIn: "1h",
  });
};

export const registerUser = async (req, res) => {
  try {
    const { username, email, password, role, fullname, contact_number } =
      req.body;

    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    // Hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create new user
    const user = new User({
      fullname,
      contact_number,
      username,
      email,
      password: hashedPassword,
      role,
    });

    const savedUser = await user.save();
    console.log(savedUser);

    res
      .status(201)
      .json({ message: "User registered successfully", user: savedUser });
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
};

export const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Find user by email
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "Incorrect email" });
    }

    // Check password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid password" });
    }

    // Create and send token
    const token = createToken(user._id, user.role, user.email);
    res.json({ user: user, token });
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
};
