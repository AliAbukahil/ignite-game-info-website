import { combineReducers } from "redux";

// Importing Reducers
import gamesReducer from "./gamesReducers";

const rootReducer = combineReducers({
  games: gamesReducer,
});

export default rootReducer;
