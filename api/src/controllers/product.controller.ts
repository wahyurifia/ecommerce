import { NextFunction, Request, Response } from "express";
import productService from "../services/product.service";

const getProducts = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const response = await productService.findProducts();

    res.status(200).send({
      message: "Success get all products",
      response,
    });
  } catch (error: any) {
    next(error);
  }
};

const getProductById = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const productId = req.params.id;
  try {
    const response = await productService.findProductById(productId);

    res.status(200).json({
      response,
    });
  } catch (error: any) {
    res.json(error.message);
  }
};

const createProduct = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { name, image, description, price, stock } = req.body;
  try {
    const data = await productService.addProduct(
      name,
      image,
      description,
      price,
      stock
    );

    res.status(202).send({
      message: "Success create one product",
      data,
    });
  } catch (error: any) {
    next(error);
  }
};

export default { getProducts, createProduct, getProductById };
