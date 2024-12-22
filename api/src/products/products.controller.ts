import { NextFunction, Request, Response, Router } from "express";
import products from "../../data/product";

export const router: Router = Router();

router.get(
  "/products",
  async (req: Request, res: Response, next: NextFunction) => {
    res.status(200).json({
      products,
    });
  }
);

router.get(
  "/products/:id",
  async (req: Request, res: Response, next: NextFunction) => {
    const productId = parseInt(req.params.id);

    try {
      const product = products.find(
        (product) => product.id === parseInt(req.params.id)
      );

      res.status(200).send({
        message: "Success get one product by id",
        product,
      });
    } catch (error: any) {
      res.send(error.message);
    }
  }
);
