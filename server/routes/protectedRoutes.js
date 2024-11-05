import express from "express";
import { authenticate, isAdmin } from "../middleware/authMiddleware.js";

const router = express.Router();

// Route accessible to all authenticated users
router.get("/user-dashboard", authenticate, (req, res) => {
  res.json({ message: `Welcome to your dashboard, ${req.user.role}!` });
});

// Route accessible only to admin users
router.get("/admin-dashboard", authenticate, isAdmin, (req, res) => {
  res.json({ message: "Welcome to the admin dashboard!" });
});

export default router;
