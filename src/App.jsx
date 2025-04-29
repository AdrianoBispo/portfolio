import { BrowserRouter } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import Intro from "./components/Intro/Intro";
import About from "./components/About/About";
import Experience from "./components/Experience/Experience";
import Tech from "./components/Tech/Tech";
import Projects from "./components/Projects/Projects";
import Certifications from "./components/Certifications/Certifications";
import Contact from "./components/Contact/Contact";
import StarsCanvas from "./components/Canvas/Stars";

export function App() {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Intro />
          <About />
          <Tech />
        </div>
        <Experience />
        <Projects />
        <Certifications />
        <div className="relative z-0">
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  );
}
