import { combineReducers } from "redux";
import collectionReducer from "./collection/collectionReducer";
import photosReducer from "./photos/photosReducer";
import searchPhotosReducer from "./search/searchReducer";
import photosIDReducer from "./GetPhotoById/requestByIdReducer";
const rootReducer = combineReducers({
  photosState: photosReducer,
  collectionState: collectionReducer,
  searchState : searchPhotosReducer,
  uniquePhoto: photosIDReducer
});

export default rootReducer;
