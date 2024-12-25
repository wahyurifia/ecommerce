import productRepository from "../repositories/product.repository";

const findProducts = async () => {
  const response = await productRepository.getProducts();
  return response;
};

const addProduct = async (
  name: string,
  image: string,
  description: string,
  price: number,
  stock: number
) => {
  const response = await productRepository.createProducts(
    name,
    image,
    description,
    price,
    stock
  );
  return response;
};

export default {
  findProducts,
  addProduct,
};
