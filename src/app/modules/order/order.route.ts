import express from "express";
import { orderController } from "./order.controller";
import { OrderValidatedSchema } from "./order.validation";

import validateRequest from "../../shared/ValidationRequest";

const router = express.Router();

// will call controller function
router.post(
  "/api/orders",
  validateRequest(OrderValidatedSchema.CreateZodValidationSchema),
  orderController.createOrder
);
router.get("/api/orders", orderController.getAllOrders);

export const orderRouter = router;
