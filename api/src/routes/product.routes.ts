import { Router } from "express";
import productController from "../controllers/product.controller";
import { authMiddleware } from "../middlewares/auth";

const router: Router = Router();

router.get("/", authMiddleware, productController.getProducts);
router.get("/:id", authMiddleware, productController.getProductById);
router.post("/", authMiddleware, productController.createProduct);

export default router;
