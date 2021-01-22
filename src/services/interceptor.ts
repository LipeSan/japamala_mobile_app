import axios from 'axios';
import promise from 'promise';

// Add a request interceptor 
var axiosInstance = axios.create();

axiosInstance.interceptors.request.use(function (config) {
    console.log("TEST1",config);
  return config;
}, error => {
   // Do something with request error 
   return promise.reject(error);
});

axiosInstance.interceptors.response.use(function (config) {
    console.log("TEST2",config);
  return config;
}, error => {
   // Do something with request error 
   return promise.reject(error);
});

export default axiosInstance;