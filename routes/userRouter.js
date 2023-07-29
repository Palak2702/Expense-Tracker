import express from "express";
import {
  loginController,
  registerController,
} from "../controllers/userController.js";

const router = express.Router();

// routers

// post || LOGIN

router.post("/login", loginController);

// POST || REGISTER USER
router.post("/register", registerController);

export default router;
