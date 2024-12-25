import prisma from "../prisma/prismaClient";

const getProducts = async () => {
  return await prisma.product.findMany();
};

const createProducts = async (
  name: string,
  image: string,
  description: string,
  price: number,
  stock: number
) => {
  await prisma.product.create({
    data: { name, image, description, price, stock },
  });
};

export default {
  getProducts,
  createProducts,
};
