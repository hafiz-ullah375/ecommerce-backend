import express from "express";
import { productController } from "./product.controller";

const router = express.Router();

// will call controller function
router.post("/api/products", productController.createProduct);
router.get("/api/products", productController.getAllProduct);
router.get("/api/products/:productId", productController.getSingleProductById);
router.put("/api/products/:productId", productController.updateProductById);
router.delete("/api/products/:productId", productController.deleteProductById);

export const ProductRoutes = router;
