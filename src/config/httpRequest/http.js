import axios from "axios";
// import { addInterceptors } from './interceptors';

let instance = null;

const getInstance = () => {
  if (!instance) {
    instance = axios.create({
      baseURL: process.env.REACT_APP_API_URL
    });
  }

  return instance;
};

export default getInstance();
