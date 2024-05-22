import { Schema, model } from "mongoose";

import { TInventory, TProduct, TVariant } from "./product.interface";

const variantSchema = new Schema<TVariant>({
  type: {
    type: String,
    required: [true, "Variant type is required."],
    trim: true,
  },
  value: {
    type: String,
    required: [true, "Variant value is required."],
    trim: true,
  },
});

const inventorySchema = new Schema<TInventory>({
  quantity: {
    type: Number,
    required: [true, "Inventory quantity is required."],
    min: [1, "Inventory quantity cannot be less than 1."],
  },
  inStock: {
    type: Boolean,
    required: [true, "Inventory inStock status is required."],
  },
});

const productSchema = new Schema<TProduct>({
  name: {
    type: String,
    required: [true, "Product name is required."],
    trim: true,
  },
  description: {
    type: String,
    required: [true, "Product description is required."],
    trim: true,
  },
  price: {
    type: Number,
    required: [true, "Product price is required."],
    min: [0, "Product price cannot be less than 0."],
  },
  category: {
    type: String,
    required: [true, "Product category is required."],
    trim: true,
  },
  tags: {
    type: [String],
    required: [true, "Product tags are required."],
    trim: true,
  },
  variants: {
    type: [variantSchema],
    required: [true, "Product variants are required."],
  },
  inventory: {
    type: inventorySchema,
    required: [true, "Product inventory is required."],
  },
});

export const ProductModel = model<TProduct>("product", productSchema);
