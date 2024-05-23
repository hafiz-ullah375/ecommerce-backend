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
exports.productController = void 0;
const product_service_1 = require("./product.service");
// create product
const createProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const product = req.body;
        const result = yield product_service_1.ProductServices.createProductIntoDB(product);
        res.status(200).json({
            success: true,
            message: "Product is created successfully",
            data: result,
        });
    }
    catch (err) {
        res.status(500).json({
            success: false,
            message: "Product is created failed",
            error: err,
        });
    }
});
// get  all product
const getAllProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const searchTerm = req.query.searchTerm; // Extract term and the rest of the query parameters
        const result = yield product_service_1.ProductServices.getAllProductFromDB(searchTerm);
        res.status(200).json({
            success: true,
            message: "All products are retrieved successfully",
            data: result,
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: "product not found",
            error: error,
        });
    }
});
// get a product by id
const getSingleProductById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { productId } = req.params;
        const result = yield product_service_1.ProductServices.getSingleProductFromDB(productId);
        res.status(200).json({
            success: true,
            message: "product retrieved successfully",
            data: result,
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: "product retrieved failed",
            error: error,
        });
    }
});
// update product
const updateProductById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { productId } = req.params;
        const updateProduct = req.body;
        const result = yield product_service_1.ProductServices.UpdateProductIntoDb(productId, updateProduct);
        res.status(200).json({
            success: true,
            message: "product updated successfully",
            data: result,
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: "product updated failed",
            error: error,
        });
    }
});
// delete Product controller
const deleteProductById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { productId } = req.params;
        const result = yield product_service_1.ProductServices.deleteProduct(productId);
        res.status(200).json({
            success: true,
            message: "product deleted successfully",
            data: result,
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: "product deleted failed",
            error: error,
        });
    }
});
exports.productController = {
    createProduct,
    getAllProduct,
    getSingleProductById,
    updateProductById,
    deleteProductById,
};
