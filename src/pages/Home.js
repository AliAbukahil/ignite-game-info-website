import React, { useEffect } from "react";
// Redux Logic
// Importing useDispatch
import { useDispatch } from "react-redux";
// Importing an action
import { loadGames } from "../actions/gamesActions";

const Home = () => {
  // FETCH GAMES
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadGames());
  });
  return (
    <div>
      <h1>home</h1>
    </div>
  );
};

export default Home;
