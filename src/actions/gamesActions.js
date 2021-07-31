// Importing axios (npm install axios)
import axios from "axios";

// importing from api.js
import { popularGameURL } from "../api";

// ACTION CREATOR
export const loadGames = () => async (dispatch) => {
  // FETCH AXIOS
  const popularData = await axios.get(popularGameURL());
  dispatch({
    type: "FETCH_GAMES",
    payload: {
      popular: popularData.data.results,
    },
  });
};
