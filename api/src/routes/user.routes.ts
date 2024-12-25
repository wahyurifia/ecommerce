import { Router } from "express";
import asyncHandler from "express-async-handler";
import userController from "../controllers/user.controller";

const router: Router = Router();

router.get("/", asyncHandler(userController.getUsers));
router.post("/", asyncHandler(userController.createUser));

export default router;
