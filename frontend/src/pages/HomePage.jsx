import { useState, useEffect } from "react";
import { IoRocket } from "react-icons/io5";
import { useProductStore } from "../store/product.js";
import ProductCard from "../components/ProductCard.jsx";
import EditContainer from "../components/EditContainer.jsx";
import { Skeleton } from "@/components/ui/skeleton";

const HomePage = () => {
  const { fetchProducts, products } = useProductStore();
  const [isLoading, setIsLoading] = useState(true);
  const [isOpenEdit, setIsOpenEdit] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    const loadProducts = async () => {
      setIsLoading(true);
      await fetchProducts();
      setIsLoading(false);
    };
    loadProducts();
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

      {isLoading ? (
        <div
          className="products-container
          grid
          grid-cols-1
          sm:grid-cols-2
          xl:grid-cols-3
          place-items-center
          gap-y-4
          sm:gap-y-10"
        >
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <ProductCardSkeleton key={item} />
          ))}
        </div>
      ) : products.length === 0 ? (
        <p className="text-center mx-auto font-bold sm:text-2xl">
          😢 No Products to View!
        </p>
      ) : (
        <div className="products-container grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 place-items-center gap-y-4 sm:gap-y-10">
          {products.map((product) => (
            <ProductCard
              key={product._id}
              product={product}
              onEditClick={() => handleEditClick(product)}
            />
          ))}
        </div>
      )}
    </main>
  );
};

const ProductCardSkeleton = () => {
  return (
    <div className="dark:border-2 rounded-md shadow-md w-[20rem] overflow-hidden">
      {/* Image skeleton*/}
      <Skeleton className="w-full h-[300px] rounded-md" />

      {/* Product info container */}
      <div className="p-2">
        {/* Product*/}
        <Skeleton className="h-7 w-4/5 rounded-md" />

        {/* Price */}
        <Skeleton className="h-6 w-1/4 mt-3 rounded-md" />

        {/* Buttons container*/}
        <div className="flex items-center gap-x-3 mt-5">
          {/* Two circular button skeletons */}
          <Skeleton className="w-10 h-10 rounded-full" />
          <Skeleton className="w-10 h-10 rounded-full" />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
