import { combineReducers } from "redux";

// Application Reducers
import movie from "./movieReducer";

import app from "./appReducer";
export default combineReducers({
  app,
  movie,
});
