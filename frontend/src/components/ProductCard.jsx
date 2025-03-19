import React from "react";
import { MdDelete, MdEditSquare } from "react-icons/md";
import { useProductStore } from "../store/product.js";
const ProductCard = ({ product, onEditClick }) => {
  const { deleteProduct } = useProductStore();

  // handle product deletion
  const handleDeleteProduct = async (pid) => {
    deleteProduct(pid);
  };

  return (
    <div className="dark:border-2 rounded-md shadow-md hover:translate-y-[-5px] duration-150 transition-all hover:shadow-xl z-10 w-[20rem]">
      <img
        src={product.productImage}
        alt={product.name}
        className="rounded-md"
      />
      <div className="product-info p-2">
        <h2 className="text-lg sm:text-[1.4rem] font-bold">{product.name}</h2>
        <p className="price text-lg text-gray-700 dark:text-white font-semibold mt-3">
          ${product.price}
        </p>
        <div className="btns flex items-center gap-x-3 text-[1.3rem] mt-5">
          <button className="text-violet-600 p-2 bg-slate-300 dark:bg-gray-800 dark:hover:bg-gray-700 rounded-full hover:bg-slate-400 transistion-all duration-150">
            <MdDelete onClick={() => handleDeleteProduct(product._id)} />
          </button>
          <button className="text-purple-600 p-2 bg-slate-300 dark:bg-gray-800 dark:hover:bg-gray-700 rounded-full hover:bg-slate-400 transistion-all duration-150">
            <MdEditSquare onClick={onEditClick} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
