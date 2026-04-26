import { useDispatch, useSelector } from "react-redux";
import { userUpdate } from "../redux/actions/userAction";
import Success from "./Success";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Cartitem = () => {
  const users = useSelector((state) => state.userReducer.users);
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [open, setOpen] = useState(false);
  const TotalItme = users?.cart.reduce((acc,item)=> acc + item.quantity , 0)
  const TotalPrice = users?.cart.reduce((total,item)=>total + item.quantity * item.product.price, 0) 

 
  

    const Increasehandler = (index,c)=>{
        const conpyUser = {...users,cart:[...users.cart]}

        conpyUser.cart[index]={
            ...conpyUser.cart[index],
            quantity: conpyUser.cart[index].quantity + 1
        }

        dispatch(userUpdate(conpyUser.id,conpyUser))



    }

    const DeleteHandler = (index,c)=>{
        const conpyUser = {...users,cart:[...users.cart]}
        conpyUser.cart.splice(index,1)
         dispatch(userUpdate(conpyUser.id,conpyUser))
    }

      const DeleteAllHandler = (id,c)=>{
        const conpyUser = {...users,cart:[]}
         dispatch(userUpdate(conpyUser.id,conpyUser))
    }

    const Decreasehandler = (index,c)=>{

         const conpyUser = {...users,cart:[...users.cart]}

      if(conpyUser.cart[index].quantity > 1){

        conpyUser.cart[index]={
            ...conpyUser.cart[index],
            quantity: conpyUser.cart[index].quantity - 1
        }
        
    }
    else{
            conpyUser.cart.splice(index,1)
        }

        dispatch(userUpdate(conpyUser.id,conpyUser))



    }
  const cartItems = users?.cart.map((c,index) => {

    return (
      <div
        key={c.product.id}
        className="w-full h-25 rounded relative flex items-center gap-3 border border-[#c6c6c6] p-2 o"
      >
        <div className="w-25 rounded">
          <img src={c.product.img} alt={c.product.name} />
        </div>
        <div className="flex flex-col">
          <div className="flex absolute top-3 ">
            <h3 className="font-[Poppins] w-56 lg:w-53 ">{c.product.title}</h3>{" "}
            <img
            onClick={()=> DeleteHandler(index,c) }
              className="lg:w-5 w-6 lg:h-5 cursor-pointer"
              src="/delete-bin.png"
              alt=""
            />
          </div>

          <div className="flex absolute gap-9 bottom-3">
            <h4 className="text-[#f29006] font-semibold lg:w-32 w-37">${c.product.price}</h4>{" "}
            <div className="flex gap-3 items-center">
             <button onClick={()=> Decreasehandler(index,c)} className="text-2xl active:scale-95"> –</button>
              <h4>{c.quantity}</h4>
             <button onClick={()=> Increasehandler(index,c)} className="text-2xl active:scale-95">+</button>
            </div>
          </div>
        </div>
      </div>
    );
  });
  return (
<>{users?.cart.length > 0 ? <div className="w-full relative flex flex-col gap-3 mt-10 pb-44 ">
      {cartItems}

      <div className="fixed w-full lg:w-[25vw] h-40 p-2 border-t border-[#131313] bg-white bottom-2 lg:mr-20">
        
    <div className="flex flex-col mt-3">
          <div><h3 className="font-['Inter'] text-[19px] font-medium">Total Item : <span className="text-[#f29006]">{TotalItme}</span></h3></div>
        <div><h3 className="font-['Inter'] text-[19px] font-medium">Total Price : <span className="text-[#f29006]">₹{TotalPrice.toFixed(2)}</span></h3></div>
    </div>

        <button onClick={() =>{
          DeleteAllHandler(users.cart.id , users.cart)
          navigate('/success')}} className="w-full py-3 rounded active:scale-95 mt-7 bg-emerald-600">Checkout</button>
      </div>

      
    </div>:<p className="text-center text-gray-500">Your cart is empty.</p>} 


 
   </>
  );
};

export default Cartitem;

//  <div className='w-full h-screen absolute left-0 bg-white flex items-center justify-center'>
//       <video className='w-[10vw]' src="/Success.webm" autoPlay loop></video>
//     </div>