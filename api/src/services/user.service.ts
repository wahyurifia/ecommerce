import { hashSync } from "bcrypt";
import userRepository from "../repositories/userRepository";

const findUsers = async () => {
  return await userRepository.getUsers();
};

const addUser = async (name: string, email: string, password: string) => {
  const hashPassword = hashSync(password, 10);

  return await userRepository.createUsers(name, email, hashPassword);
};

export default {
  findUsers,
  addUser,
};
