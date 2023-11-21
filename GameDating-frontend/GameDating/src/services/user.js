import axiosInstance from "../plugins/axios.js";
import {ref} from "vue";
import {useRouter} from "vue-router";

let current;

export  const getCurrentUser = async ()=>{
    const router = useRouter();
    if(current === undefined){
        const res = await axiosInstance.get("/user/current");
        if(res.code === 40100){
            await router.push({
                path: '/user/login'
            })
            return ;
        }
        setCurrentUser(res.data);
    }
    return current;
}
export const setCurrentUser = (user) =>{
    current = user
}
