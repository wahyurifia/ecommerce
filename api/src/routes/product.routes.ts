import { Router } from "express";
import asyncHandler from "express-async-handler";
import productController from "../controllers/product.controller";

const router: Router = Router();

router.get("/", asyncHandler(productController.getProducts));
router.post("/", asyncHandler(productController.createProduct));

export default router;
