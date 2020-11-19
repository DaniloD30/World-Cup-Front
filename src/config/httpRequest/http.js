import axios from "axios";
// import { addInterceptors } from './interceptors';

let instance = null;

const getInstance = () => {
  if (!instance) {
    instance = axios.create({
      baseURL: "https://worldcupmovie.herokuapp.com/api/",
    });
  }

  return instance;
};

export default getInstance();
