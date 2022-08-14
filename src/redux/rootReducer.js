import { combineReducers } from "redux";
import collectionReducer from "./collection/collectionReducer";
import photosReducer from "./photos/photosReducer";
import searchPhotosReducer from "./search/searchReducer";

const rootReducer = combineReducers({
  photosState: photosReducer,
  collectionState: collectionReducer,
  searchState : searchPhotosReducer
});

export default rootReducer;
