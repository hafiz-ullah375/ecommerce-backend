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
    // res.status(500).json({
    //   success: false,
    //   message: "order is created failed",
    //   error: err,
    // });
    next(err);
  }
};

export const orderController = {
  createOrder,
};
