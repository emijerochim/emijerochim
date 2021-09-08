import React, { useState } from "react";
import "./App.css";
import Banner from "./components/Banner";
import Home from "./components/Home";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className="App">
      <Banner darkMode={darkMode} setDarkMode={setDarkMode} />
      <Home />
    </div>
  );
}

export default App;
