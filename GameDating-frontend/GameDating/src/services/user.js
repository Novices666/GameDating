import axiosInstance from "../plugins/axios.js";

export  const getCurrentUser = async ()=>{
    return await axiosInstance.get("/user/current");
}

