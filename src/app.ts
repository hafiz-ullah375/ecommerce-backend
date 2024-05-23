import express, { Application } from "express";
import cors from "cors";
import { ProductRoutes } from "./app/modules/product/product.route";
import { orderRouter } from "./app/modules/order/order.route";
import { globalError } from "./app/shared/GlobalError";

const app: Application = express();

// parser
app.use(express.json());
app.use(cors());

// product routes
app.use("/", ProductRoutes);

// order router
app.use("/", orderRouter);

app.use(globalError);
export default app;
