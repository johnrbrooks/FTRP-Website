// src/App.jsx
import React from "react";
import { CssBaseline } from "@mui/material";
import useScrollSpy from "./hooks/useScrollSpy"; // Implement from prior snippet
import Navbar from "./Components/Navbar";
import Landing from "./Components/Landing";
import About from "./Components/About";
import Services from "./Components/Services";
import Work from "./Components/Work";
import Testimonials from "./Components/Testimonials";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";

function App() {
  // If you want to update the path based on the visible section:
  useScrollSpy(["landing", "about", "services", "work", "testimonials", "contact"]);

  return (
    <>
      <CssBaseline />
      <Navbar />
      <Landing />
      <About />
      <Services />
      <Work />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
