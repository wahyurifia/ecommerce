import { hashSync } from "bcrypt";
import prisma from "../prisma/prismaClient";

const findUsers = async () => {
  return await prisma.user.findMany({
    select: { id: true, name: true, email: true },
  })
};

const findUserById = async (userId: string) => {
  const user = await prisma.user.findFirst({
    where: { id: userId },
    select: { id: true, name: true, email: true },
  })
  if (!user) throw Error("User Not Found!");

  return user
}

export default {
  findUsers,
  findUserById
};
