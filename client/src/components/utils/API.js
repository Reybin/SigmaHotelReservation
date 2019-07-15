import axios from "axios";

const tokken = localStorage.getItem("authToken");
export default axios.create({
  baseURL: "http://localhost:5000/api/",
  responseType: "json",
  headers: {
    "Access-Control-Allow-Origin": "*",
    Authorization: `bearer ${tokken}`,
    crossorigin: "true"
  }
});
