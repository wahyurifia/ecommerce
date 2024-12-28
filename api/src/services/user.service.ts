import { compareSync, hashSync } from "bcrypt";
import prisma from "../prisma/prismaClient";

const findUsers = async () => {
  return await prisma.user.findMany({
    select: { id: true, name: true, email: true, isAdmin: true },
  });
};

const findUserById = async (userId: string) => {
  const user = await prisma.user.findFirst({
    where: { id: userId },
    select: {
      id: true,
      name: true,
      email: true,
      isAdmin: true,
      password: true,
    },
  });
  if (!user) throw Error("User Not Found!");

  return user;
};

const editUser = async (
  id: string,
  name?: string,
  email?: string,
  oldPassword?: string,
  newPassword?: string
) => {
  const user = await findUserById(id);

  if (oldPassword && !compareSync(oldPassword, user.password)) {
    throw Error("Invalid Password");
  } else if (email && email !== user.email) {
    const cekEmail = await prisma.user.findUnique({ where: { email } });
    if (cekEmail) throw Error("Email already exist!");
  }

  const hashPassword = newPassword ? hashSync(newPassword, 10) : undefined;

  return await prisma.user.update({
    where: { id },
    data: { name, email, password: hashPassword },
    select: {
      id: true,
      name: true,
      email: true,
      isAdmin: true,
      createAt: true,
      updateAt: true,
    },
  });
};

export default {
  findUsers,
  findUserById,
  editUser,
};
