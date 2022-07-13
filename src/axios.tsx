import axios from "axios";

const instance = axios.create({
    baseURL: "http://localhost:5001/grace-shop-95023/us-central1/api",
});
//https://us-central1-grace-shop-95023.cloudfunctions.net/function-1
export default instance;
