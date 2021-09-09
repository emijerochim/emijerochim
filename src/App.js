import "./App.css";
import React, { useState } from "react";
import Banner from "./components/Banner";
import Home from "./components/Home";
import Dropdown from "./components/Dropdown";

function App() {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className="App">
      <Banner showMenu={showMenu} setShowMenu={setShowMenu} />
      <Dropdown showMenu={showMenu} setShowMenu={setShowMenu} />
      <Home />
    </div>
  );
}

export default App;
