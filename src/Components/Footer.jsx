import { Box, Typography, Button } from "@mui/material";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";

function Footer() {
  // Scroll to top smoothly
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <Box
      sx={{
        backgroundColor: "#000",
        color: "#fff",
        textAlign: "center",
        padding: "20px",
        marginTop: "40px",
        position: "relative",
      }}
    >
      <Typography variant="body2" sx={{ mb: 1 }}>
        &copy; {new Date().getFullYear()} For The Record Productions | All Rights Reserved
      </Typography>
      <Typography variant="body2" sx={{ fontStyle: "italic", mb: 2 }}>
        Elevating Artists Worldwide &mdash; From Concept to Final Master
      </Typography>

      {/* To Top Button */}
      <Button
        onClick={handleScrollToTop}
        variant="contained"
        sx={{
          backgroundColor: "#990A0A",
          color: "#FFFFFF",
          fontWeight: 600,
          "&:hover": { backgroundColor: "#000000" },
          mt: 2,
        }}
        startIcon={<ArrowUpwardIcon />}
      >
        To Top
      </Button>
    </Box>
  );
}

export default Footer;
