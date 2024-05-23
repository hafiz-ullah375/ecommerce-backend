import express from "express";
import { orderController } from "./order.controller";

const router = express.Router();

// will call controller function
router.post("/api/orders", orderController.createOrder);

export const orderRouter = router;
