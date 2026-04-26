import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { createProduct } from "../../redux/actions/productAction";


const CreateProduct = () => {
    const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const submitHandler = (product)=>{

    dispatch(createProduct(product))

  }
     const navigate = useNavigate()
      const dispatch = useDispatch()
  return (
    <div className="flex w-full justify-center items-center flex-col mt-10">
        <h1 className="font-['Poppins'] text-2xl text-gray-800 font-semibold">Create Product</h1>

     <form onSubmit={handleSubmit(submitHandler)}  className="font-['Inter'] flex flex-col mt-7 w-[70vh]">
              <div className="flex flex-col gap-6 ">
           
            <input {...register('img')} className="py-1 px-5 border-b  outline-0" id="img" type="url" placeholder="paste url"  />
            <input {...register('title')} className="py-1 px-5 border-b  outline-0" id="title" type="text" placeholder="Enter title" />
          </div>
          <div className="flex flex-col gap-2 mt-3">
           
           
            <input {...register('price')} className="py-1 px-5 border-b  outline-0" id="price" type="number" placeholder="Enter price" />
          </div>
          <div className="flex flex-col gap-1 mt-3 ">
        
        
            <textarea {...register('description')} className="py-2 mt-2 px-5 border  rounded outline-0" id="description" type="text" placeholder="Enter description" ></textarea>
          </div>
          <select {...register('category')} className="py-2 mt-2 px-5 border  rounded outline-0" id="category">
            <option value="">Launch</option>
            <option value="breakfast">Breakfast</option>
            <option value="Snack">Snack</option>
            
          </select>
          <button onClick={() => navigate('/login')}   type="submit" className="mt-7 text-white  font-['Inter'] text-[14px] hover:bg-[#f29006] bg-[#f29006] px-4 py-2  rounded-lg flex justify-center items-center">
            Sign Up
          </button>
        </form>
    </div>
  )
}

export default CreateProduct
