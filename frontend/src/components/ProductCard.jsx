import { MdDelete, MdEditSquare } from "react-icons/md";
import { useProductStore } from "../store/product.js";

const ProductCard = ({ product, onEditClick }) => {
  const { deleteProduct } = useProductStore();

  // handle product deletion
  const handleDeleteProduct = async (pid) => {
    deleteProduct(pid);
  };

  return (
    <div className="dark:border-2 dark:border-gray-700 rounded-lg shadow-md hover:translate-y-[-5px] duration-150 transition-all hover:shadow-xl z-10 w-[20rem] overflow-hidden bg-white dark:bg-gray-800">
      <div className="h-[200px] overflow-hidden">
        <img
          src={product.productImage || "/placeholder.svg"}
          alt={product.name}
          className="w-full h-full object-cover object-center"
        />
      </div>
      <div className="product-info p-4">
        <h2 className="text-lg sm:text-[1.4rem] font-bold text-gray-800 dark:text-gray-100 line-clamp-1">
          {product.name}
        </h2>
        <p className="price text-lg text-gray-700 dark:text-gray-200 font-semibold mt-2">
          ${product.price}
        </p>
        <div className="btns flex items-center justify-between mt-4">
          <div className="flex items-center gap-x-3 text-[1.3rem]">
            <button
              onClick={() => handleDeleteProduct(product._id)}
              className="text-purple-600 p-2 bg-purple-100 dark:bg-gray-700 dark:hover:bg-gray-600 rounded-full hover:bg-purple-200  transition-all duration-150 flex items-center justify-center"
              aria-label="Delete product"
            >
              <MdDelete />
            </button>
            <button
              onClick={onEditClick}
              className="text-purple-600 p-2 bg-purple-100 dark:bg-gray-700 dark:hover:bg-gray-600 rounded-full hover:bg-purple-200 transition-all duration-150 flex items-center justify-center"
              aria-label="Edit product"
            >
              <MdEditSquare />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
