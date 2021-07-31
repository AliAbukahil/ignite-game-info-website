import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

// Redux Setup + Redux-thunk, which are (applyMiddleware, compose)
import { createStore, applyMiddleware, compose } from "redux";

//importing that combiner of reducers
import rootReducer from "./reducers";

// importing the connector ot the connection  to Redux which is Provider (this how you connect your app to Redux)
import { Provider } from "react-redux";

// Importing thunk from redux-thunk
import thunk from "redux-thunk";

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

//Redux devtools, you add it in the createStore parameters with the Reducers combiner ==> (window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
const store = createStore(rootReducer, composeEnhancer(applyMiddleware(thunk)));

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
