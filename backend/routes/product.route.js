import express from "express";

import {
  getProduct,
  createProduct,
  updateProduct,
  deleteProduct,
} from "../controllers/product.controller.js";

const router = express.Router();
//get all the products
router.get("/", getProduct);

//send the product as request
router.post("/", createProduct);

// update a product using id via put
router.put("/:id", updateProduct);

//delete the product using id
router.delete("/:id", deleteProduct);

export default router;
