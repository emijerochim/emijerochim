import "./App.css";
import React, { useState } from "react";
import Particles from "react-tsparticles";
import particlesOptions from "./utils/particlesOptions";

//Components
import Banner from "./components/Banner/Banner";
import Dropdown from "./components/Dropdown/Dropdown";
import Home from "./components/Home/Home";
import Stack from "./components/Stack/Stack";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [activeDropdown, setActiveDropdown] = useState(false);

  return (
    <main className="App">
      <header>
        <Banner darkMode={darkMode} setDarkMode={setDarkMode} activeDropdown={activeDropdown} setActiveDropdown={setActiveDropdown}/>
        <Dropdown activeDropdown={activeDropdown} setactiveDropdown={activeDropdown} />
      </header>
      <Home />
      <Particles id="tsparticles" params={particlesOptions}></Particles>
      <Stack />
      <Contact />
      <Footer />
    </main>
  );
}

export default App;
