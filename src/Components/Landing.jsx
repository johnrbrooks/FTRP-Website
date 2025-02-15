import { Box, Typography } from "@mui/material";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import fadersClose from "../assets/fadersClose.jpg";

function Landing() {
  return (
    <Box
      id="landing"
      sx={{
        width: "100%",
        height: "calc(100vh - 120px)",
        margin: 0,
        padding: 0,
        boxSizing: "border-box",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        position: "relative",
        color: "#FFFFFF",
        overflow: "hidden",
      }}
    >
      {/* Lazy Loaded Background Image with forced visibility */}
      <LazyLoadImage
        src={fadersClose}
        alt="Background"
        effect="blur"
        visibleByDefault  // Force immediate visibility
        threshold={0}     // Trigger load even if slightly in view
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          zIndex: -1, // Places background behind text
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
          backgroundColor: "rgba(0, 0, 0, 0.6)",
          zIndex: 0,
        }}
      />

      {/* Text Content */}
      <Typography variant="h2" sx={{ position: "relative", zIndex: 1 }}>
        Professional Music Production
      </Typography>
    </Box>
  );
}

export default Landing;
