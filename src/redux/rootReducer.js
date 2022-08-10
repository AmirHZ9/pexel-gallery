import { combineReducers } from "redux";
import photosReducer from "./photos/photosReducer";

const rootReducer = combineReducers({
  photosState: photosReducer,
});

export default rootReducer;
