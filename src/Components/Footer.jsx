import { Box, Typography } from "@mui/material";

function Footer() {
  return (
    <Box
      sx={{
        backgroundColor: "#000",
        color: "#fff",
        textAlign: "center",
        padding: "20px",
        marginTop: "40px",
      }}
    >
      <Typography>&copy; 2025 Your Music Business | All Rights Reserved</Typography>
    </Box>
  );
}

export default Footer;
