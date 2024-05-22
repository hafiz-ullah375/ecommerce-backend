import { Request, Response } from "express";
import { ProductServices } from "./product.service";

// create product
const createProduct = async (req: Request, res: Response) => {
  try {
    const product = req.body;
    const result = await ProductServices.createProductIntoDB(product);

    res.status(200).json({
      success: true,
      message: "Product is created successfully",
      data: result,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Product is created failed",
      error: err,
    });
  }
};

// get  all product

const getAllProduct = async (req: Request, res: Response) => {
  try {
    const result = await ProductServices.getAllProductFromDB();

    res.status(200).json({
      success: true,
      message: "All products are retrieved successfully",
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "product not found",
      error: error,
    });
  }
};

// get a product by id
const getSingleProductById = async (req: Request, res: Response) => {
  try {
    const { productId } = req.params;

    const result = await ProductServices.getSingleProductFromDB(productId);
    res.status(200).json({
      success: true,
      message: "product retrieved successfully",
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "product retrieved failed",
      error: error,
    });
  }
};

// update product
const updateProductById = async (req: Request, res: Response) => {
  try {
    const { productId } = req.params;
    const updateProduct = req.body;

    const result = await ProductServices.UpdateProductIntoDb(
      productId,
      updateProduct
    );

    res.status(200).json({
      success: true,
      message: "product updated successfully",
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "product updated failed",
      error: error,
    });
  }
};

export const productController = {
  createProduct,
  getAllProduct,
  getSingleProductById,
  updateProductById,
};
