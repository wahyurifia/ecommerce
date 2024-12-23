import prisma from "../prisma/prismaClient";

export class ProductRepository {
  async getProducts() {
    return await prisma.product.findMany();
  }
  async createProducts(
    name: string,
    image: string,
    description: string,
    price: number,
    stock: number
  ) {
    await prisma.product.create({
      data: { name, image, description, price, stock },
    });
  }
}
