import prisma from "../prisma/prismaClient";

export class UserRepository {
  async getProducts() {
    return await prisma.user.findMany();
  }
}
