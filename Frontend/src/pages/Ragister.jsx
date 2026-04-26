import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { nanoid } from 'nanoid';
import { userRegister } from '../redux/actions/userAction';

const Ragister = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

     const navigate = useNavigate()
     const dispatch = useDispatch()

     const submitHandler = (user)=>{
      user.id = nanoid()
      user.isAdmin = false
      user.cart=[]
      dispatch(userRegister(user))
      navigate('/login')

     }


  return (
   <div className="w-screen flex justify-center  h-screen ">
      <div className="w-[420px] mt-30 flex flex-col gap-5 items-flex-start">
        <div>
          <h2 className="font-['Inter'] text-[40px] font-bold ">Sign Up</h2>
          <h4 className="font-['Inter'] mt-[-10px] text-[20px] text-gray-500">
            Already have an account? <span  onClick={() => navigate('/login')}  className="text-[#ff9603] font-medium">Sign In</span>
          </h4>
        </div>
        <form onSubmit={handleSubmit(submitHandler)} className="font-['Inter'] flex flex-col mt-7">
              <div className="flex flex-col gap-2 ">
           
            <label className="text-[20px] tracking-[-1px]" htmlFor="email">Full Name</label>
            <input {...register('fullName')} className="py-1 px-5 border  rounded outline-0" id="fullName" type="text" placeholder="Full Name" />
          </div>
          <div className="flex flex-col gap-2 mt-3">
           
            <label className="text-[20px] tracking-[-1px]" htmlFor="email">Email</label>
            <input {...register('email')} className="py-1 px-5 border  rounded outline-0" id="email" type="email" placeholder="Email" />
          </div>
          <div className="flex flex-col gap-1 mt-3 ">
        
            <label className="text-[20px] tracking-[-1px]" htmlFor="password">Password</label>
            <input {...register('password')} className="py-1 px-5 border  rounded outline-0" id="password" type="password" placeholder="Password" />
          </div>
          <button onClick={() => navigate('/login')}   type="submit" className="mt-7 text-white  font-['Inter'] text-[14px] hover:bg-[#f29006] bg-[#f29006] px-4 py-2  rounded-lg flex justify-center items-center">
            Sign Up
          </button>
        </form>
      </div>
    </div>
  )
}

export default Ragister
