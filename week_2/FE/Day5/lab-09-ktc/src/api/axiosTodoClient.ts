import axios from "axios";

const axiosTodoClient = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
  headers: {"Content-Type": "application/json" },
  timeout: 10000,
});

export default axiosTodoClient;