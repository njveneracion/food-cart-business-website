import express from "express";
import { getUser } from "../controllers/userInfoController.js";

const router = express.Router();

router.get("/userinfo", getUser);

export default router;
