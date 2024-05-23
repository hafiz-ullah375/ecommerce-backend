import { Types } from "mongoose";
import { TProduct } from "../product/product.interface";

export type TOrder = {
  email: string;
  productId: Types.ObjectId | TProduct;
  price: number;
  quantity: number;
};
