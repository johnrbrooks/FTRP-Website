import { Box, Typography } from "@mui/material";

function Work() {
  return (
    <Box id="work" sx={{ padding: "40px 0", textAlign: "center", height: "100vh"}}>
      <Typography variant="h4" gutterBottom>Our Work</Typography>
      <iframe
        title="Spotify Playlist"
        src="https://open.spotify.com/embed/playlist/YOUR_SPOTIFY_PLAYLIST_ID"
        width="100%"
        height="380"
        frameBorder="0"
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
      ></iframe>
    </Box>
  );
}

export default Work;
