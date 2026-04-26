import { useEffect } from "react";
import Navbar from "./components/Navbar";
import Mainroutes from "./Routes/Mainroutes";
import { useDispatch, useSelector } from "react-redux";
import { currenUser } from "./redux/actions/userAction";
import { loadProduct } from "./redux/actions/productAction";

const App = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.userReducer.users);
  const products = useSelector((state) => state.productReducer.products);

  useEffect(() => {
    dispatch(currenUser());
    dispatch(loadProduct());
  }, []);



  
  return (
    <div className="bg-white h-screen w-full px-3 align-middle  lg:overflow-hidden md:px-14 lg:px-10 py-5">
      <Navbar />
      <Mainroutes />
    </div>
  );
};

export default App;
