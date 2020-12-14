import Axios, { AxiosInstance } from "axios";

/**
 * This axios instance is used throughout the app
 */

let axiosInstance: AxiosInstance = Axios.create({
    //backend API
    baseURL: "http://165.22.182.250:7000",
    // "http://localhost:7000"
});

export default axiosInstance;
