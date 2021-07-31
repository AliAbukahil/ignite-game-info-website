import React, { useEffect } from "react";
// Importing useDispatch
import { useDispatch } from "react-redux";
// Importing an action
import { loadGames } from "./actions/gamesActions";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadGames());
  });
  return (
    <div className="App">
      <h1>Hello Ignite</h1>
    </div>
  );
}

export default App;
