"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductRoutes = void 0;
const express_1 = __importDefault(require("express"));
const product_controller_1 = require("./product.controller");
const product_validation_1 = require("./product.validation");
const ValidationRequest_1 = __importDefault(require("../../shared/ValidationRequest"));
const router = express_1.default.Router();
// will call controller function
router.post("/api/products", (0, ValidationRequest_1.default)(product_validation_1.ValidatedProductSchema.CreateZodValidationSchema), product_controller_1.productController.createProduct);
router.get("/api/products", product_controller_1.productController.getAllProduct);
router.get("/api/products/:productId", product_controller_1.productController.getSingleProductById);
router.put("/api/products/:productId", (0, ValidationRequest_1.default)(product_validation_1.ValidatedProductSchema.UpdatedZodValidationSchema), product_controller_1.productController.updateProductById);
router.delete("/api/products/:productId", product_controller_1.productController.deleteProductById);
exports.ProductRoutes = router;
