// src/components/Services.jsx
import { useState } from "react";
import { Box, Card, CardContent, CardMedia, Typography, Grid } from "@mui/material";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

import DeskLeftSideMidSmaller from "../assets/DeskLeftSideMidSmaller.jpg";
import FadersClose from "../assets/fadersClose.jpg";
import GearPic from "../assets/GearPic.jpg";

// Same data, no changes
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

// Container-level animation (stagger each card)
const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2, // Each card animates sequentially
    },
  },
};

// Each card “drops in” from the left
const cardVariants = {
  hidden: { opacity: 0, x: -50 },
  show: { opacity: 1, x: 0 },
};

function Services() {
  const [hovered, setHovered] = useState(-1);
  
  // Intersection Observer to re-trigger each time in view
  const { ref, inView } = useInView({ triggerOnce: false, threshold: 0.2 });

  return (
    <Box
      id="services"
      // Attach ref so it re-checks "inView" each time
      ref={ref}
      sx={{
        width: "100%",
        padding: "60px 20px",
        textAlign: "center",
        backgroundColor: "#000",
        color: "#FFF",
      }}
    >
      <Typography variant="h3" gutterBottom>
        Our Services
      </Typography>
      <Typography variant="body1" sx={{ maxWidth: 600, margin: "0 auto", mb: 4 }}>
        Explore our range of professional music services, from full-scale production to final mastering.
      </Typography>

      {/* Original Grid with spacing, now made into a motion container */}
      <Grid
        container
        spacing={4}
        justifyContent="center"
        component={motion.div}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "show" : "hidden"}
      >
        {services.map((service, index) => (
          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            key={index}
            sx={{ display: "flex", justifyContent: "center" }}
            // Each Grid item is a motion child
            component={motion.div}
            variants={cardVariants}
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
                boxShadow:
                  hovered === index
                    ? "0px 8px 20px rgba(0,0,0,0.4)"
                    : "0px 4px 10px rgba(255,255,255,0.2)",
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
