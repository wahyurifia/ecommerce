import { Request, Response } from "express";
import { ProductService } from "../services/product.service";

const productService = new ProductService();

export class ProductController {
  async getProducts(req: Request, res: Response) {
    try {
      const response = await productService.findProducts();
      res.status(200).send({
        message: "Success get all products",
        response,
      });
    } catch (error: any) {
      res.send(error.message);
    }
  }
  async createProduct(req: Request, res: Response) {
    const { name, image, description, price, stock } = req.body;
    try {
      const data = await productService.createProduct(
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
      res.send(error.message);
    }
  }
}
