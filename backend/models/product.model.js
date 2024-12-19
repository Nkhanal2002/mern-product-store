import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    productImage: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true, //once the user provides the product info, it will keep track of createdtime and updatedtime by using keywords like createdAt and updatedAt
  }
);

const Product = mongoose.model("Product", productSchema);

export default Product;
