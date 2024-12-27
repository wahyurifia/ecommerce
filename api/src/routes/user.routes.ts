import { Router } from "express";
import userController from "../controllers/user.controller";
import authController from "../controllers/auth.controller";

const router: Router = Router();
router.post("/login", authController.login)
router.post("/register", authController.register)

router.get("/", userController.getUsers);
router.get("/:id", userController.getUserById)

export default router;
