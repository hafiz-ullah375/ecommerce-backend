import express from "express";
import { productController } from "./product.controller";
import { ValidatedProductSchema } from "./product.validation";
import validateRequest from "../../shared/ValidationRequest";

const router = express.Router();

// will call controller function
router.post(
  "/api/products",
  validateRequest(ValidatedProductSchema.CreateZodValidationSchema),
  productController.createProduct
);
router.get("/api/products", productController.getAllProduct);
router.get("/api/products/:productId", productController.getSingleProductById);
router.put(
  "/api/products/:productId",
  validateRequest(ValidatedProductSchema.UpdatedZodValidationSchema),
  productController.updateProductById
);
router.delete("/api/products/:productId", productController.deleteProductById);

export const ProductRoutes = router;
