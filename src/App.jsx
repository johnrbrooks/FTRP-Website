import { Container, CssBaseline } from "@mui/material";
import Navbar from "./Components/Navbar";
import SpeedDialNav from "./Components/SpeedDialNav";
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
      <CssBaseline />
      <Navbar />
      <Landing />
      <About />
      <Services />
      <Work />
      <Testimonials />
      <Contact />
      <SpeedDialNav />
      <Footer />
    </>
  );
}

export default App;
