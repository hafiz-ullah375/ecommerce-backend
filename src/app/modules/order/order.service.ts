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

// Middleware to ensure productId is an ObjectId or a product object
// orderSchema.pre("save", function (next) {
//     const order = this as TOrder & Document;
//     if (
//       !Types.ObjectId.isValid(order.productId) &&
//       typeof order.productId !== "object"
//     ) {
//       return next(new Error("Invalid productId"));
//     }
//     next();
//   });

//   // Pre-remove hook to update product inventory
//   orderSchema.pre("remove", async function (next) {
//     const order = this as TOrder & Document;

//     try {
//       const product = await mongoose.model("Product").findById(order.productId);
//       if (product) {
//         product.inventory.quantity += order.quantity;
//         product.inventory.inStock = product.inventory.quantity > 0;
//         await product.save();
//       }
//       next();
//     } catch (error) {
//       next(error);
//     }
//   });

export const orderServices = {
  createOrderIntoDB,
};
