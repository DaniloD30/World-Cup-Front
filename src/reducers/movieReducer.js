import Constants from "../helpers/enums/Constants";
const INITIAL_STATE = {
  movieArr: [],
  movies: 0,
  winners: []
};

export default function movieReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Constants.GET_ALL:
      return {
        ...state,
        movieArr: action?.payload,
      };
    case Constants.SAVE_LIST_MOVIES:
      return {
        ...state,
        movies: action?.payload,
      };
      case Constants.WINNERS:
      return {
        ...state,
        winners: action?.payload,
      };
    default:
      return state;
  }
}
