"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.orderRouter = void 0;
const express_1 = __importDefault(require("express"));
const order_controller_1 = require("./order.controller");
const order_validation_1 = require("./order.validation");
const ValidationRequest_1 = __importDefault(require("../../shared/ValidationRequest"));
const router = express_1.default.Router();
// will call controller function
router.post("/api/orders", (0, ValidationRequest_1.default)(order_validation_1.OrderValidatedSchema.CreateZodValidationSchema), order_controller_1.orderController.createOrder);
router.get("/api/orders", order_controller_1.orderController.getAllOrders);
exports.orderRouter = router;
