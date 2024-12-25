import express, { Application, NextFunction, Request, Response } from "express";
import dotenv from "dotenv";
import cors from "cors";
import productRouter from "./src/routes/product.routes";
import userRouter from "./src/routes/user.routes";
import authRouter from "./src/routes/auth.routes";

const app: Application = express();
dotenv.config();

//Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/product", productRouter);
app.use("/api/user", userRouter);
app.use("/api/auth", authRouter);

app.get("/", (req: Request, res: Response, next: NextFunction) => {
  console.log("Welcome my server ecommerce by wahyu");
});

export default app;
