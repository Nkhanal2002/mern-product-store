import { useState, useEffect } from "react";
import { IoRocket } from "react-icons/io5";
import { useProductStore } from "../store/product.js";
import ProductCard from "../components/ProductCard.jsx";
import EditContainer from "../components/EditContainer.jsx";

const HomePage = () => {
  const { fetchProducts, products } = useProductStore();
  const [isOpenEdit, setIsOpenEdit] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  const handleEditClick = (product) => {
    setSelectedProduct(product);
    setIsOpenEdit(true);
  };

  const handleCloseClick = () => {
    setIsOpenEdit(false);
    setSelectedProduct(null); // cleanup on close
  };

  return (
    <main className="relative min-h-[90vh] max-w-[85%] mx-auto pb-5">
      <div className="font-bold text-2xl my-5 sm:my-10 sm:text-4xl flex items-center justify-center gap-1">
        <span className="bg-gradient-to-r from-purple-500 to-blue-600 text-transparent bg-clip-text">
          Current Products
        </span>
        <IoRocket className="text-blue-600" />
      </div>
      {isOpenEdit && selectedProduct && (
        <EditContainer
          selectedProduct={selectedProduct}
          onCloseClick={handleCloseClick}
        />
      )}
      <div className="products-container grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 place-items-center gap-y-4 sm:gap-y-10">
        {products?.map((product) => (
          <ProductCard
            key={product._id}
            product={product}
            onEditClick={() => handleEditClick(product)}
          />
        ))}
      </div>
    </main>
  );
};

export default HomePage;
