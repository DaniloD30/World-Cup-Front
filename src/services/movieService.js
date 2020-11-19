import http from "../config/httpRequest/http";
export const getMovies = (id) => {
  // ?pagina=1&itensPorPagina=10 Recurso
  return new Promise((resolve, reject) => {
    http
      .get(`movies`)
      .then((response) => resolve(response))
      .catch((error) => reject(error));
  });
};

export const getWinner = (movies) => {
  // ?pagina=1&itensPorPagina=10 Recurso
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
