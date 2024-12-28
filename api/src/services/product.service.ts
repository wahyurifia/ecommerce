import prisma from "../prisma/prismaClient";

const findProducts = async () => {
  return await prisma.product.findMany({
    select: {
      id: true,
      name: true,
      image: true,
      description: true,
    },
  });
};

const addProduct = async (
  name: string,
  image: string,
  description: string,
  price: number,
  stock: number
) => {
  return await prisma.product.create({
    data: { name, image, description, price, stock },
  });
};

const findProductById = async (productId: string) => {
  const product = await prisma.product.findFirst({ where: { id: productId } });

  if (!product) throw Error("Product not found!");
  return product;
};

export default {
  findProducts,
  addProduct,
  findProductById,
};
