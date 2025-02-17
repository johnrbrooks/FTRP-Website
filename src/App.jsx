// src/App.jsx
import React from "react";
import { CssBaseline } from "@mui/material";
import Navbar from "./components/Navbar";
import Landing from "./components/Landing";
import About from "./components/About";
import Services from "./components/Services";
import Work from "./components/Work";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

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
