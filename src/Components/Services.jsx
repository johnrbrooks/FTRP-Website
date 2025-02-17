// src/components/Services.jsx
import { useState } from "react";
import { Box, Card, CardContent, CardMedia, Typography, Grid } from "@mui/material";
import DeskLeftSideMidSmaller from "../assets/DeskLeftSideMidSmaller.jpg";
import FadersClose from "../assets/fadersClose.jpg";
import GearPic from "../assets/GearPic.jpg";

const services = [
  {
    title: "Production",
    details: `At For the Record Productions, we specialize in high-quality, end-to-end music 
      production that stays true to your artistic vision and originality. Whether you're an 
      emerging artist or established, our expertise in live-band and instrument-driven production 
      ensures your music is rich, dynamic, and authentic. Need a fully produced track to sing over? 
      We’ve got you covered—delivering radio-ready compositions that bring your ideas to life.`,
    image: DeskLeftSideMidSmaller,
  },
  {
    title: "Mixing",
    details: `A great mix can transform a song. Specializing in pop, rock, and country, our 
      professional mixing services craft clear, punchy, and energetic mixes that cut through 
      speakers with depth and emotion. Using state-of-the-art tools, we blend vocals, instruments, 
      and effects seamlessly for a polished, industry-standard sound.`,
    image: FadersClose,
  },
  {
    title: "Mastering",
    details: `Mastering is the final step in music production, ensuring your song competes on 
      every platform. Our mastering services enhance punch, warmth, and clarity—meeting the sonic 
      standards of major streaming platforms and radio. Whether it's a single or full album, 
      we'll fine-tune your sound for maximum impact.`,
    image: GearPic,
  },
];

function Services() {
  const [hovered, setHovered] = useState(-1);

  return (
    <Box
      id="services"
      sx={{
        width: "100%",
        padding: "60px 20px",
        textAlign: "center",
        backgroundColor: "#000",
        color: "#FFF",
      }}
    >
      <Typography variant="h3" gutterBottom>
        My Services
      </Typography>
      <Typography variant="body1" sx={{ maxWidth: 600, margin: "0 auto", mb: 4 }}>
        Explore my range of professional music services, from full-scale production to final mastering.
      </Typography>

      {/* Responsive Grid Layout for Cards */}
      <Grid container spacing={4} justifyContent="center">
        {services.map((service, index) => (
          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            key={index}
            sx={{ display: "flex", justifyContent: "center" }}
          >
            <Card
              onMouseEnter={() => setHovered(index)}
              onMouseLeave={() => setHovered(-1)}
              sx={{
                width: "100%",
                maxWidth: 380,
                height: "auto",
                backgroundColor: "#DBDBDE",
                color: "#000",
                boxShadow: hovered === index ? "0px 8px 20px rgba(0,0,0,0.4)" : "0px 4px 10px rgba(255,255,255,0.2)",
                borderRadius: "10px",
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
                transform: hovered === index ? "scale(1.02)" : "scale(1)",
              }}
            >
              <CardMedia
                sx={{
                  height: 220,
                  objectFit: "cover",
                }}
                image={service.image}
                title={`${service.title} service`}
              />
              <CardContent>
                <Typography variant="h5" fontWeight="600" gutterBottom>
                  {service.title}
                </Typography>
                <Typography variant="body2" sx={{ color: "#333", lineHeight: 1.6 }}>
                  {service.details}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default Services;
