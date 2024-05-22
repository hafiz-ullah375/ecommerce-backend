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

// update product
const UpdateProductIntoDb = async (
  id: string,
  payload: Partial<TProduct>
): Promise<TProduct | null> => {
  const updatedProductData: Partial<TProduct> = { ...payload };

  const result = await ProductModel.findByIdAndUpdate(
    { _id: id },
    updatedProductData,
    { new: true }
  );
  return result;
};

// delete Product

const deleteProduct = async (id: string): Promise<TProduct | null> => {
  const product = await ProductModel.findOneAndDelete({ _id: id });
  return product;
};

export const ProductServices = {
  createProductIntoDB,
  getAllProductFromDB,
  getSingleProductFromDB,
  UpdateProductIntoDb,
};
