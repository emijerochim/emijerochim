import React, { useState } from "react";
import "./App.css";
import Banner from "./components/Banner";
import Home from "./components/Home";
import Dropdown from "./components/Dropdown";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [show, setShow] = useState(false);

  return (
    <div className="App">
      <Banner
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        show={show}
        setShow={setShow}
      />
      <Dropdown show={show} />
      <Home />
    </div>
  );
}

export default App;
