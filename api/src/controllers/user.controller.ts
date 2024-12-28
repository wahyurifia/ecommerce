import { NextFunction, Request, Response } from "express";
import userService from "../services/user.service";

const getUsers = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const response = await userService.findUsers();

    res.status(200).send({
      response,
    });
  } catch (error: any) {
    res.send(error.message);
  }
};

const getUserById = async (req: Request, res: Response, next: NextFunction) => {
  const userId: string = req.params.id;
  try {
    const response = await userService.findUserById(userId);
    res.status(200).send({
      response,
    });
  } catch (error: any) {
    res.send(error.message);
  }
};

const updateUser = async (req: Request, res: Response, next: NextFunction) => {
  const userId = req.params.id;
  const { name, email, oldPassword, newPassword } = req.body;

  try {
    const response = await userService.editUser(
      userId,
      name,
      email,
      oldPassword,
      newPassword
    );
    res.status(200).json({
      response,
    });
  } catch (error: any) {
    res.status(500).json(error.message);
  }
};

export default {
  getUsers,
  getUserById,
  updateUser,
};
