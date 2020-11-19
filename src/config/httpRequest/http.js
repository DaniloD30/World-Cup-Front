import axios from "axios";
// import { addInterceptors } from './interceptors';

let instance = null;

const getInstance = () => {
  // console.log("url =>", window.env.URL_API)
  console.log("");
  if (!instance) {
    instance = axios.create({
      baseURL: "https://localhost:44396/api/",
    });
  }

  return instance;
};

export default getInstance();
