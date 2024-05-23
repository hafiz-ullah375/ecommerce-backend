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
exports.ProductServices = void 0;
const product_model_1 = require("./product.model");
//create product
const createProductIntoDB = (product) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield product_model_1.ProductModel.create(product);
    return result;
});
// get all product
const getAllProductFromDB = (searchTerm) => __awaiter(void 0, void 0, void 0, function* () {
    const findQuery = searchTerm
        ? {
            $or: [
                { name: { $regex: searchTerm, $options: "i" } },
                { description: { $regex: searchTerm, $options: "i" } },
                { category: { $regex: searchTerm, $options: "i" } },
            ],
        }
        : {};
    const products = yield product_model_1.ProductModel.find(findQuery);
    if (products.length === 0) {
        throw Error("Product not found");
    }
    return products;
});
// get single product by id
const getSingleProductFromDB = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield product_model_1.ProductModel.findOne({ _id: id });
    return result;
});
// update product
const UpdateProductIntoDb = (id, payload) => __awaiter(void 0, void 0, void 0, function* () {
    const updatedProductData = Object.assign({}, payload);
    const result = yield product_model_1.ProductModel.findByIdAndUpdate({ _id: id }, updatedProductData, { new: true });
    return result;
});
// delete Product
const deleteProduct = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const product = yield product_model_1.ProductModel.findOneAndDelete({ _id: id });
    return product;
});
exports.ProductServices = {
    createProductIntoDB,
    getAllProductFromDB,
    getSingleProductFromDB,
    UpdateProductIntoDb,
    deleteProduct,
};
