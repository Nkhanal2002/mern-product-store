import React, { useState, useEffect } from "react";
import { FaCircleXmark } from "react-icons/fa6";
import { useProductStore } from "../store/product.js";

const EditContainer = ({ selectedProduct, onCloseClick }) => {
  const { updateProduct } = useProductStore();

  // Initialize state with a copy of the selectedProduct or an empty object if null
  const [updatedProduct, setUpdatedProduct] = useState({
    name: "",
    price: "",
    productImage: "",
  });

  // Sync state with selectedProduct when it changes
  useEffect(() => {
    if (selectedProduct) {
      setUpdatedProduct({
        name: selectedProduct.name || "",
        price: selectedProduct.price || "",
        productImage: selectedProduct.productImage || "",
      });
    }
  }, [selectedProduct]);

  const handleProductUpdate = async () => {
    await updateProduct(selectedProduct._id, updatedProduct);
    onCloseClick();
  };

  return (
    <section className="w-[90%] absolute top-12 sm:top-20 left-1/2 transform -translate-x-1/2 z-20 p-4 bg-slate-100 rounded-lg sm:w-[50%]">
      <FaCircleXmark
        className="text-xl sm:text-3xl absolute right-[-8px] top-[-8px] text-purple-600 hover:text-red-600 cursor-pointer"
        onClick={onCloseClick}
      />
      <div className="heading text-center bg-gradient-to-r from-purple-500 to-blue-600 text-transparent bg-clip-text text-xl sm:text-3xl font-bold mb-4">
        <h2>Update Product</h2>
      </div>
      <div className="form">
        <input
          className="w-full border border-black p-3 bg-slate-50 rounded-xl mb-3 text-lg sm:text-xl"
          type="text"
          value={updatedProduct.name}
          onChange={(e) =>
            setUpdatedProduct((prev) => ({ ...prev, name: e.target.value }))
          }
        />
        <input
          className="w-full border border-black p-3 bg-slate-50 rounded-xl mb-3 text-lg sm:text-xl"
          type="number"
          value={updatedProduct.price}
          onChange={(e) =>
            setUpdatedProduct((prev) => ({ ...prev, price: e.target.value }))
          }
        />
        <input
          className="w-full border border-black p-3 bg-slate-50 rounded-xl mb-3 text-lg sm:text-xl"
          type="text"
          value={updatedProduct.productImage}
          onChange={(e) =>
            setUpdatedProduct((prev) => ({
              ...prev,
              productImage: e.target.value,
            }))
          }
        />
        <button
          className="add-btn text-center text-lg sm:text-xl from-cyan-500 to-blue-400 bg-gradient-to-r w-full text-white rounded-xl p-3"
          onClick={handleProductUpdate}
        >
          Update
        </button>
      </div>
    </section>
  );
};

export default EditContainer;