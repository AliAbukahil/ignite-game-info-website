import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

// Redux Setup
import { createStore } from "redux";

//importing that combiner of reducers
import rootReducer from "./reducers";

// importing the connector ot the connection  to Redux which is Provider (this how you connect your app to Redux)
import { Provider } from "react-redux";

//Redux devtools, you add it in the createStore parameters with the Reducers combiner ==> (window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
