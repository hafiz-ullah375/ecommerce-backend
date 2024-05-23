import express, { Application, NextFunction, Request, Response } from "express";
import cors from "cors";
import { ProductRoutes } from "./app/modules/product/product.route";
import { orderRouter } from "./app/modules/order/order.route";
import { globalError } from "./app/shared/GlobalError";
import httpStatus from "http-status";

const app: Application = express();

// parser
app.use(express.json());
app.use(cors());

// product routes
app.use("/", ProductRoutes);

// order router
app.use("/", orderRouter);

app.use(globalError);

app.use((req: Request, res: Response, next: NextFunction) => {
  res.status(httpStatus.NOT_FOUND).json({
    success: false,
    message: "Not Found",
    errorMessages: [
      {
        path: req.originalUrl,
        message: "API Not Found",
      },
    ],
  });
  next();
});
export default app;
