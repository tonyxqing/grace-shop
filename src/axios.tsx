import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:5001/grace-shop-95023/us-central1/api",
});

export default instance;
