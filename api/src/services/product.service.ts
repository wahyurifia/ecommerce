import { ProductRepository } from "../repositories/product.repository";

const productRepository = new ProductRepository();

export class ProductService {
  async findProducts() {
    const response = await productRepository.getProducts();
    return response;
  }
  async createProduct(
    name: string,
    image: string,
    description: string,
    price: number,
    stock: number
  ) {
    const response = await productRepository.createProducts(
      name,
      image,
      description,
      price,
      stock
    );
    return response;
  }
}
