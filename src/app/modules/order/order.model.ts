import { Schema, model } from "mongoose";
import { TOrder } from "./order.interface";

export const orderSchema = new Schema<TOrder>({
  email: {
    type: String,
    required: [true, "Email is required"],
    trim: true,
  },
  productId: {
    type: Schema.Types.ObjectId,
    required: [true, "Product ID is required"],
    ref: "product",
  },
  price: {
    type: Number,
    required: [true, "Price is required"],
  },
  quantity: {
    type: Number,
    required: [true, "Quantity is required"],
  },
});

// Create models

export const OrderModel = model<TOrder>("Order", orderSchema);
