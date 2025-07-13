import axios from "axios";

const axiosProductClient = axios.create({
  baseURL: "https://6873a019c75558e27354be00.mockapi.io/api/v1/",
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 10000,
});

export default axiosProductClient;
