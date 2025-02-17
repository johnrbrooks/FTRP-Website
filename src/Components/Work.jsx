// src/components/Work.jsx
import { Box, Typography } from "@mui/material";

function Work() {
  return (
    <Box
      id="work"
      sx={{
        padding: "60px 20px",
        textAlign: "center",
        backgroundColor: "#990A0A",
        color: "#FFFFFF",
      }}
    >
      <Typography variant="h3" gutterBottom>
        Our Work
      </Typography>
      <Typography variant="body1" sx={{ maxWidth: "600px", margin: "0 auto", paddingBottom: "20px" }}>
        Listen to our latest productions, featuring a variety of genres and styles that showcase our versatile approach.
      </Typography>

      <iframe
        title="Spotify Playlist - For The Record Productions"
        src="https://open.spotify.com/embed/playlist/7CBem0oTajfSpE660vdCp8?utm_source=generator&theme=0"
        width="100%"
        height="600px"
        frameBorder="0"
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        style={{ borderRadius: "10px", maxWidth: "800px", margin: "0 auto" }}
      ></iframe>
    </Box>
  );
}

export default Work;
