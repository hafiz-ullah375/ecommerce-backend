import { NextFunction, Request, Response } from "express";
import { orderServices } from "./order.service";

// create order
const createOrder = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const order = req.body;
    const result = await orderServices.createOrderIntoDB(order);

    res.status(200).json({
      success: true,
      message: "order is created successfully",
      data: result,
    });
  } catch (err) {
    next(err);
  }
};

const getAllOrders = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const email = req.query.email as string | undefined;
    const result = await orderServices.getAllOrdersFromDB(email);

    res.status(200).json({
      success: true,
      message: email
        ? "Orders fetched successfully for user email!"
        : "Orders fetched successfully!",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

export const orderController = {
  createOrder,
  getAllOrders,
};
