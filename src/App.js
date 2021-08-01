import React from "react";
// Importing components and pages
import Home from "./pages/Home";
// Importing Global Styles
import GlobalStyle from "./components/GlobalStyles";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Home />
    </div>
  );
}

export default App;
