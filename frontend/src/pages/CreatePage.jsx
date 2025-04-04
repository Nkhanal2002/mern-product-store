import { useState } from "react";
import { useProductStore } from "../store/product.js";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

const CreatePage = () => {
  const [newProduct, setNewProduct] = useState({
    name: "",
    price: "",
    productImage: "",
  });
  const { createProduct } = useProductStore();
  const navigate = useNavigate();
  const handleAddProduct = async () => {
    // console.log(newProduct);
    const { success, message } = await createProduct(newProduct);
    console.log(success);
    console.log(message);

    // clear all input values after adding the product
    if (success) {
      setNewProduct({
        name: "",
        price: "",
        productImage: "",
      });
      toast.success("You've successfully added a product!", {
        action: { label: "Go Home", onClick: () => navigate("/") },
      });
    } else {
      toast.success("Error while adding a product!");
    }
  };
  return (
    <main className="min-h-[90vh] max-w-[85%] mx-auto relative">
      <h1 className="text-2xl sm:text-3xl text-center py-3 my-5 from-cyan-500 to-blue-600 bg-gradient-to-r bg-clip-text text-transparent font-bold">
        Create New Product
      </h1>
      <section className="main-container bg-slate-100 dark:bg-background dark:border mx-auto p-4 rounded-md shadow-md w-[90%] sm:max-w-[50%]">
        <div>
          <input
            className="w-full border border-black p-3 bg-slate-50 dark:bg-gray-800 rounded-xl mb-3 text-lg sm:text-xl"
            type="text"
            name="name"
            value={newProduct.name}
            placeholder="Product Name"
            onChange={(e) =>
              setNewProduct({ ...newProduct, name: e.target.value })
            }
          />
        </div>
        <div>
          <input
            className="w-full border border-black p-3 bg-slate-50 dark:bg-gray-800 rounded-xl mb-3 text-lg sm:text-xl"
            type="number"
            name="price"
            value={newProduct.price}
            placeholder="Price"
            onChange={(e) =>
              setNewProduct({ ...newProduct, price: e.target.value })
            }
          />
        </div>
        <div>
          <input
            className="w-full border border-black p-3 bg-slate-50 dark:bg-gray-800 rounded-xl mb-3 text-lg sm:text-xl"
            type="text"
            name="productImage"
            value={newProduct.productImage}
            placeholder="Image URL"
            onChange={(e) =>
              setNewProduct({ ...newProduct, productImage: e.target.value })
            }
          />
        </div>
        <button
          className="add-btn text-center text-lg sm:text-xl from-cyan-500 to-blue-400 bg-gradient-to-r w-full text-white rounded-xl p-3"
          onClick={handleAddProduct}
        >
          Add Product
        </button>
      </section>
    </main>
  );
};

export default CreatePage;
