import prisma from "../prisma/prismaClient";

const getUsers = async () => {
  return await prisma.user.findMany({
    select: { id: true, name: true, email: true },
  });
};

const createUsers = async (name: string, email: string, password: string) => {
  return await prisma.user.create({
    data: { name, email, password },
    select: { id: true, name: true, email: true },
  });
};

export default {
  getUsers,
  createUsers,
};
