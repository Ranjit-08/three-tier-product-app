import axios from "axios";

export default axios.create({
  baseURL: "http://BACKEND_PUBLIC_IP:5000/api"
});
