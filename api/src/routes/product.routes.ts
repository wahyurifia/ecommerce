import { Router } from "express";
import { ProductController } from "../controllers/product.controller";

const productRouter: Router = Router();
const productController = new ProductController();

productRouter.get("/", productController.getProducts);
productRouter.post("/", productController.createProduct);

export default productRouter;
