import express from "express";
import {
  addBooking,
  getAllServices,
  getSingleService,
} from "../controllers/servicesController.js";
const router = express.Router();

router.get("/services", getAllServices);
router.get("/services/:id", getSingleService);
router.post("/bookings", addBooking);

export default router;
