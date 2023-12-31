// 添加请求拦截器
import axios from "axios";
import {useRouter} from "vue-router";
import {router} from "../main.js";

const axiosInstance = axios.create({
    baseURL: 'http://localhost:8080/api',
    //withCredentials:true,
});

axiosInstance.defaults.withCredentials = true;

axiosInstance.interceptors.request.use(function (config) {
    // 在发送请求之前做些什么
    console.log("发送请求");
    return config;
}, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
});

// 添加响应拦截器
axiosInstance.interceptors.response.use(function (response) {
    // 2xx 范围内的状态码都会触发该函数。
    // 对响应数据做点什么
    console.log(response,"接收到响应");
    if(response.data?.code === 40100){
        router.push({
            path: '/user/login'
        }).then(r => {

        })
    }
    return response.data;
}, function (error) {
    // 超出 2xx 范围的状态码都会触发该函数。
    // 对响应错误做点什么
    return Promise.reject(error);
});

export default axiosInstance;