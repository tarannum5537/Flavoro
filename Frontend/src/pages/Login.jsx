import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { userLogin } from "../redux/actions/userAction";

const Login = () => {
  const {
    register,
    handleSubmit,
     setError,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const loginHandler = async (user) => {
    const res = await dispatch(userLogin(user));

    if (res?.error === "email") {
      setError("email", {
        type: "manual",
        message: "Account does not exist",
      });
    }

    if (res?.error === "password") {
      setError("password", {
        type: "manual",
        message: "Wrong password",
      });
    }

    if (res?.success) {
      navigate("/product");
    }
  };

  return (
    <div className="w-screen flex justify-center  h-screen ">
      <div className="w-[420px] mt-40 flex flex-col gap-5 items-flex-start">
        <div>
          <h2 className="font-['Inter'] text-[40px] font-bold ">Sign In</h2>
          <h4 className="font-['Inter'] mt-[-10px] text-[20px] text-gray-500">
            New user ?{" "}
            <span
              onClick={() => navigate("/register")}
              className="text-[#ff9603] font-medium"
            >
              Create an account
            </span>
          </h4>
        </div>
        <form
          onSubmit={handleSubmit(loginHandler)}
          className="font-['Inter'] flex flex-col mt-7"
        >
          <div className="flex flex-col gap-2 ">
            <label className="text-[20px] tracking-[-1px]" htmlFor="email">
              Email
            </label>
            <input
              {...register("email")}
              className="py-1 px-5 border  rounded outline-0"
              id="email"
              type="email"
              placeholder="Email"
            />
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email.message}</p>
            )}
          </div>
          <div className="flex flex-col gap-1 mt-3 ">
            <label className="text-[20px] tracking-[-1px]" htmlFor="password">
              Password
            </label>
            <input
              {...register("password")}
              className="py-1 px-5 border  rounded outline-0"
              type="password"
              placeholder="Password"
            />
          </div>
          <button
            type="submit"
            className="mt-7 text-white  font-['Inter'] text-[14px] hover:bg-[#f29006] bg-[#f29006] px-4 py-2  rounded-lg flex justify-center items-center"
          >
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
