import axios from "../../api/axiosConfigure";
import { laodusers, removeuser } from "../Reducers/userReducer";

export const userRegister = (user) => async (dispatch, state) => {
  try {
    const res = await axios.post("/users", user);
    console.log("User registered successfully:", res.data);
    
  } catch (error) {
    console.error("Registration error:", error);
    alert("Registration failed: " + (error.message || "Unknown error"));
  }
};

export const currenUser = ()=>async (dispatch,state)=>{
    const userStr = localStorage.getItem("user")
    if(userStr){
        const user = JSON.parse(userStr)
        dispatch(laodusers(user))
   
        
    }
}

export const userLogin = (user) => async (dispatch) => {

  const res = await axios.get(`/users?email=${user.email}`);

  if(res.data.length > 0){

    const dbUser = res.data[0];

    if(dbUser.password === user.password){
   localStorage.setItem("user", JSON.stringify(dbUser))
   
    }else{
      console.log("Wrong password");
      return { error: "password" };
    }

    

  }else{
    console.log("User not found");
    return { error: "email" };
  }

  dispatch(currenUser())
return { success: true };
}




export const userLogout = ()=>async (dispatch,state)=>{
    localStorage.removeItem("user")
    dispatch(removeuser())
}
export const userUpdate = (id, userData)=>async (dispatch,state)=>{

      const {data} = await axios.patch(`/users/`+id, userData)
       localStorage.setItem("user", JSON.stringify(data))
       dispatch(currenUser())
    
}

