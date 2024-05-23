import { CustomError } from "../../shared/CustomError";
import { ProductModel } from "../product/product.model";
import { TOrder } from "./order.interface";
import { OrderModel } from "./order.model";

const createOrderIntoDB = async (payload: TOrder) => {
  const { productId, quantity } = payload;

  const isProduct = await ProductModel.findById({ _id: productId });

  if (!isProduct) {
    throw CustomError("Product not found", 401);
  }
  if (
    isProduct?.inventory?.quantity < quantity ||
    isProduct?.inventory?.quantity === 0 ||
    quantity === 0
  ) {
    throw CustomError("Insufficient quantity available in inventory", 401);
  }
  if (
    isProduct?.inventory?.quantity > 0 &&
    isProduct?.inventory?.inStock === true
  ) {
    isProduct.inventory.quantity -= quantity;

    await isProduct.save();
    if (isProduct?.inventory?.quantity === 0) {
      isProduct.inventory.inStock = false;

      await isProduct.save();
    }
  }

  const result = await OrderModel.create(payload);
  return result;
};

const getAllOrdersFromDB = async (email?: string) => {
  const findQuery = email ? { email } : {};

  const orders = await OrderModel.find(findQuery);

  if (orders.length === 0) {
    throw CustomError("Order not found");
  }

  return orders;
};

export const orderServices = {
  createOrderIntoDB,
  getAllOrdersFromDB,
};
