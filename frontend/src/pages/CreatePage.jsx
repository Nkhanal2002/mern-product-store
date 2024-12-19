import { useState } from "react";
import { useProductStore } from "../store/product.js";

const CreatePage = () => {
  const [isToastOpen, setIsToastOpen] = useState(false);
  const [messageInfo, setMessageInfo] = useState("");
  const [successInfo, setSuccessInfo] = useState(false);
  const [newProduct, setNewProduct] = useState({
    name: "",
    price: "",
    productImage: "",
  });
  const { createProduct } = useProductStore();
  const handleAddProduct = async () => {
    // console.log(newProduct);
    const { success, message } = await createProduct(newProduct);
    console.log(success);
    console.log(message);
    setIsToastOpen(true);
    setSuccessInfo(success);
    setMessageInfo(message);

    // clear all input values after adding the product
    if (success) {
      setNewProduct({
        name: "",
        price: "",
        productImage: "",
      });
    }

    //using setTimeout to display the toaster for only 5 seconds
    setTimeout(() => {
      setIsToastOpen(false);
    }, 2500);
  };
  return (
    <main className="min-h-[90vh] max-w-[85%] mx-auto relative">
      <h1 className="text-2xl sm:text-3xl text-center py-3 my-5 from-cyan-500 to-blue-600 bg-gradient-to-r bg-clip-text text-transparent font-bold">
        Create New Product
      </h1>
      <section className="main-container bg-slate-100 mx-auto p-4 rounded-md shadow-md w-[90%] sm:max-w-[50%]">
        <div>
          <input
            className="w-full border border-black p-3 bg-slate-50 rounded-xl mb-3 text-lg sm:text-xl"
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
            className="w-full border border-black p-3 bg-slate-50 rounded-xl mb-3 text-lg sm:text-xl"
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
            className="w-full border border-black p-3 bg-slate-50 rounded-xl mb-3 text-lg sm:text-xl"
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
      {isToastOpen &&
        (successInfo ? (
          <section className="toaster-added sm:w-[30%] p-2 from-cyan-600 to-green-500 bg-gradient-to-r text-white absolute left-1/2 transform -translate-x-1/2 bottom-5 rounded-md flex flex-col gap-1">
            {" "}
            <p className="success text-lg font-bold sm:text-xl">Success</p>
            <p className="message-info font-semibold">{messageInfo}</p>
          </section>
        ) : (
          <section className="toaster-not-added sm:w-[30%] p-4 from-red-600 to-pink-500 bg-gradient-to-r text-white font-bold absolute left-1/2 transform -translate-x-1/2 bottom-5 rounded-md flex flex-col gap-1">
            {" "}
            <p className="success text-lg font-bold sm:text-xl">Error</p>
            <p className="message-info font-semibold">{messageInfo}</p>
          </section>
        ))}
    </main>
  );
};

export default CreatePage;
