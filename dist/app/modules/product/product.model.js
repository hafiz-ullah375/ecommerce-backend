"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductModel = void 0;
const mongoose_1 = require("mongoose");
const variantSchema = new mongoose_1.Schema({
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
const inventorySchema = new mongoose_1.Schema({
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
const productSchema = new mongoose_1.Schema({
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
exports.ProductModel = (0, mongoose_1.model)("product", productSchema);
