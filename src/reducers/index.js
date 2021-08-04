import { combineReducers } from "redux";

// Importing Reducers
import gamesReducer from "./gamesReducers";
import detailReducer from "./detailReducer";

const rootReducer = combineReducers({
  games: gamesReducer,
  detail: detailReducer,
});

export default rootReducer;
