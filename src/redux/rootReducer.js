import { combineReducers } from "redux";
import collectionReducer from "./collection/collectionReducer";
import photosReducer from "./photos/photosReducer";

const rootReducer = combineReducers({
  photosState: photosReducer,
  collectionState: collectionReducer
});

export default rootReducer;
