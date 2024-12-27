import { NextFunction, Request, Response } from "express";
import authService from "../services/auth.service";

const login = async (req: Request, res: Response, next: NextFunction) => {
  const { email, password } = req.body;
  try {
    await authService.login(email, password)
    res.status(200).json({
      message: "Success login"
    })
  } catch (error: any) {
    res.json(error.message)
  }
};

const register = async (req: Request, res: Response, next: NextFunction) => {
  const { name, email, password } = req.body
  try {
    await authService.register(name, email, password)

    res.status(201).json({
      message: "Success register"
    })
  } catch (error: any) {
    res.json(error.message)
  }
};

export default {
  login,
  register,
};
