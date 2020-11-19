import movieService from "../services/movieService";
import Constants from "../helpers/enums/Constants";
import Utils from "../helpers/utils";

const getMovies = (LOADING_IDENTIFICATOR = "", callback = () => {}) => (
  dispatch
) => {
  dispatch(Utils.startLoading(LOADING_IDENTIFICATOR));

  return movieService
    .getMovies()
    .then((response) => {
      if (response) {
        // Utils.setToken(response.data.Token);
        // let jwt = jwtDecode(response.data.Token);
        callback();
        dispatch({
          type: Constants.GET_ALL,
          payload: response.data,
        });
      }
    })
    .catch((error) => {
      callback(error);
    })
    .finally(() => {
      dispatch(Utils.endLoading(LOADING_IDENTIFICATOR));
    });
};

const generateChampionship = (
  values,
  LOADING_IDENTIFICATOR = "",
  callback = () => {}
) => (dispatch) => {
  dispatch(Utils.startLoading(LOADING_IDENTIFICATOR));

  return movieService
    .getWinner(values)
    .then((response) => {
      if (response) {
        callback();
        dispatch({
          type: Constants.WINNERS,
          payload: response.data,
        });
      }
    })
    .catch((error) => {
      callback(error);
    })
    .finally(() => {
      dispatch(Utils.endLoading(LOADING_IDENTIFICATOR));
    });
};

export const saveLength = (length) => ({
  type: Constants.SAVE_LIST_MOVIES,
  payload: length,
});

export default {
  getMovies,
  generateChampionship,
  saveLength,
};
