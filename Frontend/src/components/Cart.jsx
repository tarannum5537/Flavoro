import React, { useState } from "react";
import Cartitem from "./Cartitem";
import { useSelector } from "react-redux";

const Cart = () => {
const users = useSelector((state) => state.userReducer.users);

const TotalItme = users?.cart.reduce((acc,item)=> acc + item.quantity , 0)


    const [active, setActive] = useState(false)
  return (
    <>

        <div onClick={()=> setActive(true)} className={` fixed right-4 bottom-4 lg:right-15 lg:bottom-10 w-15 h-15 re rounded-[50%] border bg-white border-[#9e9e9e]  flex items-center justify-center cursor-pointer  `}> 
            <img className="w-9 h-9  object-cover" src="/shopping-cart.png" alt="" />
            {TotalItme > 0 && <span className="absolute -top-2 right-1 bg-orange-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
              {TotalItme}
            </span>}

        </div>
      <div className={`fixed right-0 top-0 w-full lg:w-[400px] h-full bg-white flex justify-center rounded z-99 border p-2 border-[#c6c6c6] transition-all  duration-500 ${active ? 'translate-x-0' : 'translate-x-full'}`}>
        <div>
          {/* Close Button */}
          <button
              onClick={() => setActive(!active)}
            className="absolute z-20 top-3 right-4 text-3xl lg:text-xl"
          >
            ✕
          </button>

          {/* Cart Content */}
         
          
         
        </div>

          <div className="w-full h-[calc(100vh-60px)]  overflow-y-scroll scrollbar-hide">
            <Cartitem/>
          </div>
      </div>
    </>
  );
};

export default Cart;
