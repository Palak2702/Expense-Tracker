import express from "express";
import {
  addTransection,
  getAllTransection,
  editTransection,
  deleteTransection,
} from "../controllers/transectionctr.js";

const router = express.Router();

// routers

// post ||

router.post("/add-transection", addTransection);

router.post("/edit-transection", editTransection);

router.post("/delete-transection", deleteTransection);

// get

router.post("/get-transection", getAllTransection);

export default router;
