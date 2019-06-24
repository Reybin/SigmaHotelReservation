import axios from "axios";

export default axios.create({
  baseURL: "http://localhost:5001/api/",
  responseType: "json",
  headers: {
    "Access-Control-Allow-Origin": "*",
    Authorization: "bearer "
  }
});
