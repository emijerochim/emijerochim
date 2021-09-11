import "./App.css";
import React, { useState } from "react";
import Particles from "react-tsparticles";
import particlesOptions from "./particlesOptions";

import Banner from "./components/Banner";
import Dropdown from "./components/Dropdown";
import Home from "./components/Home";
import Stack from "./components/Stack";

function App() {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className="App">
      <Banner showMenu={showMenu} setShowMenu={setShowMenu} />
      <Dropdown showMenu={showMenu} setShowMenu={setShowMenu} />
      <Home />
      <Particles id="tsparticles" params={particlesOptions}></Particles>
      <Stack />
    </div>
  );
}

export default App;
