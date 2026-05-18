import React from "react";
import { Navbar } from "./components/Navbar";
import { About } from "./pages/About";
import { Experience } from "./pages/Experience";
import { Home } from "./pages/home";
import { Projects } from "./pages/Projects";

function App() {
  return (
    <div className="App">
      <Navbar>
        <Home />
        <Experience />
        <Projects />
        <About />
      </Navbar>
    </div>
  );
}

export default App;
