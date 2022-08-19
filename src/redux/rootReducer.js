import { combineReducers } from "redux";
import collectionReducer from "./collection/collectionReducer";
import photosReducer from "./photos/photosReducer";
import photosIDReducer from "./GetPhotoById/requestByIdReducer";
const rootReducer = combineReducers({
  photosState: photosReducer,
  collectionState: collectionReducer,
  uniquePhoto: photosIDReducer
});

export default rootReducer;
