"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.orderController = void 0;
const order_service_1 = require("./order.service");
// create order
const createOrder = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const order = req.body;
        const result = yield order_service_1.orderServices.createOrderIntoDB(order);
        res.status(200).json({
            success: true,
            message: "order is created successfully",
            data: result,
        });
    }
    catch (err) {
        next(err);
    }
});
const getAllOrders = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const email = req.query.email;
        const result = yield order_service_1.orderServices.getAllOrdersFromDB(email);
        res.status(200).json({
            success: true,
            message: email
                ? "Orders fetched successfully for user email!"
                : "Orders fetched successfully!",
            data: result,
        });
    }
    catch (error) {
        next(error);
    }
});
exports.orderController = {
    createOrder,
    getAllOrders,
};
