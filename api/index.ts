import express, { Application, NextFunction, Request, Response } from "express";
import dotenv from "dotenv";
import cors from "cors";
import { router } from "./src/products/products.controller";

const app: Application = express();
dotenv.config();

const PORT = process.env.PORT;
app.use(cors());
app.use(express.json());

app.use("/api", router);

app.get("/", (req: Request, res: Response, next: NextFunction) => {
  console.log("Welcome my server ecommerce by wahyu");
});

app.listen(PORT || 2000, () => {
  console.log("server listening on port " + PORT);
});
