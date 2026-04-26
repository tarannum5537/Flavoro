import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { userLogout } from "../redux/actions/userAction";

const Navbar = () => {

  const user = useSelector((state)=>state.userReducer.users)
  const dispatch = useDispatch()

  const [show, setShow] = useState(false)

  
  const navigate = useNavigate()
  return (
    <div className=" grid grid-cols-2 lg:grid-cols-3 md:grid-cols-3  items-center  px-8 py-2 z-40 ">
      {/* Logo */}
      <div className="font-['Poppins'] font-bold text-xl">
        FLA<span className="text-[#f29006]">VORO</span>
      </div>

      {/* Nav Links */}
      <nav className="hidden md:flex font-['Inter'] font-medium text-[15px] justify-center gap-7">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/product">Product</NavLink>
        <NavLink to="/contact">Contact</NavLink>
          {user && user.isAdmin && <NavLink to="/admin/createproduct">Create</NavLink>}
      </nav>

      {/* Cart */}
      <div className="flex justify-end relative transition all-ease-in-out duration-300">
       {user? <div className="z-99">
        <div   onClick={() => setShow(prev => !prev)} className="flex items-center ">
          <div><img src="/user.png" alt="" /></div>
          {show?<img src="/arrow-up.png" alt="" />:<img src="/arrow-nav.png" alt="" />}</div>

          {show && <div className="transition all-ease-in-out duration-300 w-[200px] h-[580%] lg:h-[480%] bg-white border p-3 border-b-gray-700 absolute right-1 top-10 rounded">
            <h3 className="font-['Poppins'] pb-2">{user.fullName}</h3>
            <hr />
           <div className="flex flex-col gap-3 pt-5">
             <div onClick={()=>
            
             navigate('/')

            } className="flex items-center gap-3 cursor-pointer hover:scale-105 origin-center">
              <img className="w-[20px] h-[20px]" src="/home1.png" alt="" />
              <h3 className="cursor-pointer">Home</h3>
            </div>
            <div className="flex items-center gap-3 cursor-pointer hover:scale-105 lg:hidden">
              <img className="w-[20px] h-[20px]" src="/shopping-bag.png" alt="" />
              <h3>Product</h3>
            </div>
            <div onClick={()=>
            
             dispatch(userLogout())

            } className="flex items-center gap-3 cursor-pointer hover:scale-105">
              <img className="w-[20px] h-[20px]" src="/logout.png" alt="" />
              <h3>Log out</h3>
            </div>
           </div>
          </div>}
       </div>:
       <>
      <div className="lg:hidden z-99">
        <div   onClick={() => setShow(prev => !prev)} className="flex items-center ">
          <div><img src="/user.png" alt="" /></div>
          {show?<img src="/arrow-up.png" alt="" />:<img src="/arrow-nav.png" alt="" />}</div>

          {show && <div className="transition all-ease-in-out duration-300 w-[200px] h-[580%] lg:h-[480%] bg-white border p-3 border-b-gray-700 absolute right-1 top-10 rounded">
            
            <hr />
           <div className="flex flex-col gap-3 pt-5">
             <div onClick={()=>
            
             navigate('/')

            } className="flex items-center gap-3 cursor-pointer hover:scale-105 origin-center">
              <img className="w-[20px] h-[20px]" src="/home1.png" alt="" />
              <h3 className="cursor-pointer">Home</h3>
            </div>
            <div onClick={()=>
            
             navigate('/product')

            }  className="flex items-center gap-3 cursor-pointer hover:scale-105 lg:hidden">
              <img className="w-[20px] h-[20px]" src="/shopping-bag.png" alt="" />
              <h3>Product</h3>
            </div>
            <div onClick={()=>
            
             navigate('/login')

            } className="flex items-center gap-3 cursor-pointer hover:scale-105">
              <img className="w-[20px] h-[20px]" src="/login.png" alt="" />
              <h3>Login</h3>
            </div>
           </div>
          </div>}
       </div>
        <button onClick={() => navigate('/login')} className="hidden lg:block text-black  font-['Inter'] text-[14px] hover:bg-black hover:text-white px-4 py-2  rounded-lg flex items-center gap-2 transition-all ease-in-out duration-300">
         Sign in
        </button>
       </>}
      </div>
    </div>
  );
};

export default Navbar;
