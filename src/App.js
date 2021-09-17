import "./App.css";
import React, { useState } from "react";
import Particles from "react-tsparticles";
import particlesOptions from "./utils/particlesOptions";

import Banner from "./components/Banner/Banner";
import Dropdown from "./components/Dropdown/Dropdown";
import Home from "./components/Home/Home";
import Stack from "./components/Stack/Stack";

function App() {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <main className="App">
      <header>
        <Banner showMenu={showMenu} setShowMenu={setShowMenu} />
        <Dropdown showMenu={showMenu} setShowMenu={setShowMenu} />
      </header>
      <Home />
      <Particles id="tsparticles" params={particlesOptions}></Particles>
      <Stack />
    </main>
  );
}

export default App;
