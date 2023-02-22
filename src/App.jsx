import React, { useState } from "react";
import Particles from "react-tsparticles";
import particlesOptions from "../particlesOptions";
import Banner from "./components/Banner/Banner";
import Dropdown from "./components/Dropdown/Dropdown";
import Home from "./components/Home/Home";
import Portfolio from "./components/Portfolio/Portfolio";
import Stack from "./components/Stack/Stack";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import "./App.css";

function App() {
  const [deployed, setDeployed] = useState(false);

  return (
    <main className="App">
      <header>
        <Banner deployed={deployed} setDeployed={setDeployed} />
        <Dropdown deployed={deployed} setDeployed={setDeployed} />
      </header>
      <Home />
      <Particles id="tsparticles" params={particlesOptions}></Particles>
      <Portfolio />
      <Stack />
      <Contact />
      <Footer />
    </main>
  );
}

export default App;
