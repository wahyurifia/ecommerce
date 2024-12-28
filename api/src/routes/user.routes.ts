import { Router } from "express";
import userController from "../controllers/user.controller";
import authController from "../controllers/auth.controller";
import { authMiddleware } from "../middlewares/auth";

const router: Router = Router();
router.post("/login", authController.login);
router.post("/register", authController.register);

router.get("/", authMiddleware, userController.getUsers);
router.get("/profile/:id", authMiddleware, userController.getUserById);
router.put("/profile/:id", authMiddleware, userController.updateUser);

export default router;
