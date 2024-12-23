import { UserRepository } from "../repositories/user.repository";

const userRepository = new UserRepository();

export class UserService {
  async findUsers() {
    return await userRepository.getProducts();
  }
}
