import { combineReducers } from "redux";

import animalsReducer from "./animals/reducer";

export default combineReducers({
  animals: animalsReducer,
});
