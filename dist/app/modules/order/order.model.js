"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderModel = exports.orderSchema = void 0;
const mongoose_1 = require("mongoose");
exports.orderSchema = new mongoose_1.Schema({
    email: {
        type: String,
        required: [true, "Email is required"],
        trim: true,
    },
    productId: {
        type: mongoose_1.Schema.Types.ObjectId,
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
exports.OrderModel = (0, mongoose_1.model)("Order", exports.orderSchema);
