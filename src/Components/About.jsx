import { Box, Typography } from "@mui/material";

function About() {
  return (
    <Box
      id="about"
      sx={{
        width: "100%",
        height: "100vh",
        padding: "60px 20px",
        textAlign: "center",
        backgroundColor: "#FFFFFF",
        color: "#000000",
      }}
    >
      <Typography variant="h4" gutterBottom>About Us</Typography>
      <Typography variant="body1" sx={{ maxWidth: "600px", margin: "0 auto" }}>
        We are a professional music production team dedicated to creating high-quality sound.
        From mixing and mastering to full production, we ensure your music is ready for the industry.
      </Typography>
    </Box>
  );
}

export default About;
