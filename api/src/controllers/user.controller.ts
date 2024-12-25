import { NextFunction, Request, Response } from "express";
import userService from "../services/user.service";

const getUsers = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const response = await userService.findUsers();

    res.status(200).send({
      message: "Success get all user",
      response,
    });
  } catch (error: any) {
    next(error);
  }
};

const createUser = async (req: Request, res: Response, next: NextFunction) => {
  const { name, email, password } = req.body;
  try {
    const response = await userService.addUser(name, email, password);

    res.status(201).send({
      message: "Success create user",
      response,
    });
  } catch (error: any) {
    next(error);
  }
};

export default {
  getUsers,
  createUser,
};
