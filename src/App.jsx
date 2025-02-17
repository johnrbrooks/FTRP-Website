// src/App.jsx
import React from "react";
import { CssBaseline } from "@mui/material";
import Navbar from "./Components/Navbar";
import Landing from "./Components/Landing";
import About from "./Components/About";
import Services from "./Components/Services";
import Work from "./Components/Work";
import Testimonials from "./Components/Testimonials";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";

function App() {
  return (
    <>
      {/* Resets default browser styles for a cleaner look */}
      <CssBaseline />

      {/* Sticky navigation bar */}
      <Navbar />

      {/* Full-page hero section */}
      <Landing />

      {/* About section */}
      <About />

      {/* Services grid */}
      <Services />

      {/* Work/Spotify embed */}
      <Work />

      {/* Testimonials carousel/grid */}
      <Testimonials />

      {/* Contact form */}
      <Contact />

      {/* Site footer */}
      <Footer />
    </>
  );
}

export default App;
