import { Box, Typography, Button } from "@mui/material";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import fadersClose from "../assets/fadersClose.jpg";

// Smooth scroll helper
function scrollToSection(id) {
  const navbarOffset = 80; // Adjust to your navbar height
  const el = document.getElementById(id);
  if (el) {
    const y = el.getBoundingClientRect().top + window.pageYOffset - navbarOffset;
    window.scrollTo({ top: y, behavior: "smooth" });
  }
}

function Landing() {
  return (
    <Box
      id="landing"
      sx={{
        width: "100%",
        height: "calc(100vh - 80px)", // Adjusted height
        margin: 0,
        padding: 0,
        boxSizing: "border-box",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        textAlign: "center",
        position: "relative",
        color: "#FFFFFF",
        overflow: "hidden",
      }}
    >
      {/* Lazy Loaded Background Image */}
      <LazyLoadImage
        src={fadersClose}
        alt="Music production console background"
        effect="blur"
        visibleByDefault
        threshold={0}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          zIndex: -1,
        }}
      />

      {/* Dark Overlay */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.8)", // Lighter overlay
          zIndex: 0,
        }}
      />

      {/* Text Content */}
      <Typography
        variant="h2"
        sx={{
          position: "relative",
          zIndex: 1,
          fontWeight: 700,
          mb: 1,
          fontSize: { xs: "2.5rem", sm: "2.5rem", md: "3rem", lg: "3.5rem" },
        }}
      >
        For The Record Productions
      </Typography>

      <Typography
        variant="h5"
        sx={{
          position: "relative",
          zIndex: 1,
          maxWidth: "600px",
          mb: 2,
          fontSize: { xs: "1rem", sm: "1.3rem", md: "1.5rem" },
        }}
      >
        Your One-Stop Shop for Professional Music Production, Mixing & Mastering
      </Typography>

      {/* Smooth Scroll Button */}
      <Button
        variant="contained"
        onClick={() => scrollToSection("services")} // <-- Use our helper
        sx={{
          zIndex: 1,
          backgroundColor: "#990A0A",
          color: "#FFFFFF",
          fontWeight: 600,
          padding: "10px 20px",
          fontSize: { xs: "0.9rem", sm: "1rem" },
          "&:hover": { backgroundColor: "#000000" },
        }}
      >
        Explore Our Services
      </Button>
    </Box>
  );
}

export default Landing;
