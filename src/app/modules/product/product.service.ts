import { TProduct } from "./product.interface";
import { ProductModel } from "./product.model";

//create product
const createProductIntoDB = async (product: TProduct) => {
  const result = await ProductModel.create(product);
  return result;
};
// get all product
const getAllProductFromDB = async () => {
  const result = await ProductModel.find();
  return result;
};
// get single product by id
const getSingleProductFromDB = async (id: string) => {
  const result = await ProductModel.findOne({ _id: id });
  return result;
};

export const ProductServices = {
  createProductIntoDB,
  getAllProductFromDB,
  getSingleProductFromDB,
};
