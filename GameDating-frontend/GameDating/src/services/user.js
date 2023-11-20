import axiosInstance from "../plugins/axios.js";
import {ref} from "vue";

let current;

export  const getCurrentUser = async ()=>{
    if(current === undefined){
        setCurrentUser((await axiosInstance.get("/user/current")).data);
    }
    return current;
}
export const setCurrentUser = (user) =>{
    current = user
}
