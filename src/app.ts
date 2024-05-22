import express, { Application, Request, Response } from "express";
import cors from "cors";
import { ProductRoutes } from "./app/modules/product/product.route";

const app: Application = express();

// parser
app.use(express.json());
app.use(cors());

// product routes
app.use("/api", ProductRoutes);
// app.use("/api", ProductRoutes);

export default app;
