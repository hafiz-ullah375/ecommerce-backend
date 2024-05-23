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
exports.orderServices = void 0;
const CustomError_1 = require("../../shared/CustomError");
const product_model_1 = require("../product/product.model");
const order_model_1 = require("./order.model");
const createOrderIntoDB = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    var _a, _b, _c, _d, _e;
    const { productId, quantity } = payload;
    const isProduct = yield product_model_1.ProductModel.findById({ _id: productId });
    if (!isProduct) {
        throw (0, CustomError_1.CustomError)("Product not found", 401);
    }
    if (((_a = isProduct === null || isProduct === void 0 ? void 0 : isProduct.inventory) === null || _a === void 0 ? void 0 : _a.quantity) < quantity ||
        ((_b = isProduct === null || isProduct === void 0 ? void 0 : isProduct.inventory) === null || _b === void 0 ? void 0 : _b.quantity) === 0 ||
        quantity === 0) {
        throw (0, CustomError_1.CustomError)("Insufficient quantity available in inventory", 401);
    }
    if (((_c = isProduct === null || isProduct === void 0 ? void 0 : isProduct.inventory) === null || _c === void 0 ? void 0 : _c.quantity) > 0 &&
        ((_d = isProduct === null || isProduct === void 0 ? void 0 : isProduct.inventory) === null || _d === void 0 ? void 0 : _d.inStock) === true) {
        isProduct.inventory.quantity -= quantity;
        yield isProduct.save();
        if (((_e = isProduct === null || isProduct === void 0 ? void 0 : isProduct.inventory) === null || _e === void 0 ? void 0 : _e.quantity) === 0) {
            isProduct.inventory.inStock = false;
            yield isProduct.save();
        }
    }
    const result = yield order_model_1.OrderModel.create(payload);
    return result;
});
const getAllOrdersFromDB = (email) => __awaiter(void 0, void 0, void 0, function* () {
    const findQuery = email ? { email } : {};
    const orders = yield order_model_1.OrderModel.find(findQuery);
    if (orders.length === 0) {
        throw (0, CustomError_1.CustomError)("Order not found");
    }
    return orders;
});
exports.orderServices = {
    createOrderIntoDB,
    getAllOrdersFromDB,
};
