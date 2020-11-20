import http from "../config/httpRequest/http";
export const getMovies = (id) => {
  return new Promise((resolve, reject) => {
    http
      .get(`movies`)
      .then((response) => resolve(response))
      .catch((error) => reject(error));
  });
};

export const getWinner = (movies) => {
  return new Promise((resolve, reject) => {
    http
      .post(`Championship`, movies)
      .then((response) => resolve(response))
      .catch((error) => reject(error));
  });
};
export default {
  getMovies,
  getWinner,
};
