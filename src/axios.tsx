import axios from "axios";

const instance = axios.create({
  baseURL: "https://us-central1-grace-shop-95023.cloudfunctions.net/function-1",
});

export default instance;
