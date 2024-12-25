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

export default { getProducts, createProduct };
