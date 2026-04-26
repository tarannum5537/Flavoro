import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { userUpdate } from "../redux/actions/userAction";
import toast, { Toaster } from 'react-hot-toast';
import Cart from "./Cart";

const FoodCart = () => {
  
  const users = useSelector((state) => state.userReducer.users);
  const product = useSelector((state) => state.productReducer.products);
  
  // ✅ loading state
  const [loading, setLoading] = useState(true);
  const [selectedProduct, setSelectedProduct] = useState(null);
  
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // ✅ products aate hi loading band
  useEffect(() => {
    if (product && product.length > 0) {
      setLoading(false);
    }
  }, [product]);

  const UpdateHandler = (product) => {
    const conpyUser = { ...users, cart: [...users.cart] };
    const x = conpyUser.cart.findIndex((c) => c.product.id == product.id);
    if (x == -1) {
      conpyUser.cart.push({ product, quantity: 1 });
    } else {
      conpyUser.cart[x] = { product, quantity: conpyUser.cart[x].quantity + 1 };
    }
    dispatch(userUpdate(conpyUser.id, conpyUser));
    toast.success(`${product.title} added to cart`);
  };

  // ✅ Skeleton Card
  const SkeletonCard = () => (
    <div className="w-[17rem] h-[23rem] rounded-[10px] border border-gray-200 p-5 animate-pulse">
      <div className="w-full h-[150px] bg-gray-200 rounded-lg"></div>
      <div className="mt-3 h-5 bg-gray-200 rounded w-3/4"></div>
      <div className="mt-2 h-4 bg-gray-200 rounded w-full"></div>
      <div className="mt-1 h-4 bg-gray-200 rounded w-5/6"></div>
      <div className="mt-1 h-4 bg-gray-200 rounded w-4/6"></div>
      <div className="flex items-center gap-10 mt-6">
        <div className="h-5 bg-gray-200 rounded w-16"></div>
        <div className="h-8 bg-gray-200 rounded w-24"></div>
      </div>
    </div>
  );

  const renderProducts = product && product.map((product) => (
    <div
      key={product.id}
      className="w-[17rem] h-[23rem] relative rounded-[10px] border border-gray-400 p-5"
    >
      <div onClick={() => setSelectedProduct(product)}>
        <div className="w-full h-[150px] flex justify-center items-center">
          <img className="w-full h-full object-cover" src={product?.img} alt={product?.title} />
        </div>
        <div className="flex justify-between items-center mt-3">
          <h3 className="font-['Poppins'] font-semibold text-xl">{product?.title}</h3>
          <div className="flex justify-between items-center gap-1 font-medium">
            <img src="./star-s-fill.png" alt="" />
            <h3 className="text-gray-500">4/5</h3>
          </div>
        </div>
        <p className="text-gray-500 leading-5 mt-3">{product?.description.slice(0, 100)}...</p>
      </div>
      <div className="flex items-center absolute bottom-4 gap-10">
        <h3 className="text-[15px] w-20 font-medium text-[#323232]">₹{product?.price}</h3>
        {users?.isAdmin ? (
          <button className="py-2 px-6 bg-[#ff806d67] border border-[#ff3c00] text-[#ff3300] font-semibold rounded-2xl active:scale-95 transition">Delete</button>
        ) : (
          <button
            onClick={() => users ? UpdateHandler(product) : navigate("/login")}
            className="py-1 px-2 bg-[#ffcc6d67] border border-[#ff9900] text-[#ff9900] font-semibold rounded-xl active:scale-95 transition"
          >
            Add to Cart
          </button>
        )}
      </div>
    </div>
  ));

  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />

      <div className="w-full flex flex-wrap items-center justify-center mt-6 lg:gap-3 gap-5">
        
        {/* ✅ Loading true hai to skeleton, false hai to products */}
        {loading
          ? Array(6).fill(0).map((_, i) => <SkeletonCard key={i} />)
          : renderProducts
        }

      </div>

      {selectedProduct && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 transition-opacity duration-300">
          <div className="bg-white w-[600px] lg:w-[650px] h-[650px] lg:h-[330px] mt-44 lg:mt-0 p-6 rounded-xl flex gap-6 relative transform transition-all duration-300 scale-95 animate-[popup_0.35s_ease]">
            <button onClick={() => setSelectedProduct(null)} className="absolute top-3 right-4 text-xl">✕</button>
            <div className="mt-10 lg:mt-0 flex flex-col lg:flex-row gap-6">
              <img src={selectedProduct?.img} className="w-full lg:w-1/2 rounded-lg object-cover" />
              <div className="flex flex-col justify-between mt-12 lg:mt-2">
                <div>
                  <h2 className="text-4xl font-semibold">{selectedProduct.title}</h2>
                  <p className="text-gray-500 text-xl mt-2">{selectedProduct.description}</p>
                </div>
                <div className="flex items-center mt-20 lg:mt-0 justify-evenly">
                  <p className="text-[35px] lg:text-[28px] mt-4 font-semibold">₹{selectedProduct.price}</p>
                  {users && users.isAdmin ? (
                    <button className="bg-red-500 text-white px-11 lg:px-3 lg:py-2 py-3 rounded ml-20 mt-5">Delete</button>
                  ) : (
                    <button
                      onClick={() => users ? UpdateHandler(selectedProduct) : navigate("/login")}
                      className="bg-orange-500 text-white px-11 lg:px-2 lg:py-2 py-3 rounded ml-16 mt-5"
                    >
                      Add to Cart
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <Cart />
    </>
  );
};

export default FoodCart;
