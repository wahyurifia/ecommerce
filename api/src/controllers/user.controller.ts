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
    res.send(error.message)
  }
};

const getUserById = async (req: Request, res: Response, next: NextFunction) => {
  const userId: string = req.params.id
  try {
    const response = await userService.findUserById(userId)
    res.status(200).send({
      message: "Success get one user",
      response,
    })
  } catch (error: any) {
    res.send(error.message)
  }
}


export default {
  getUsers,
  getUserById
};
