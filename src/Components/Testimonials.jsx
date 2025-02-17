// src/components/Testimonials.jsx

import React, { useState, useEffect } from "react";
import {
  Box,
  Card,
  CardContent,
  Typography,
  CardMedia,
} from "@mui/material";
import { useInView } from "react-intersection-observer";
import { motion, AnimatePresence } from "framer-motion";

import FarmToTable from "../assets/Farm_to_Table.png";
import Headfirst from "../assets/Headfirst.png";
import InBetween from "../assets/In_Between.png";
import NoLife from "../assets/No_Life.png";
import Suko from "../assets/Suko.png";
import Unsullied from "../assets/Unsullied.jpg";
import TheOtherSide from "../assets/The_Other_Side.png";

// Full reviews + covers
const allTestimonials = [
  {
    name: "Bartees Strange",
    review:
      "John Brooks is a sick engineer and producer I work with all the time - talented, trustworthy, great taste, and a really talented musician. Love the fool!",
    albumCover: FarmToTable,
  },
  {
    name: "Matt Rector",
    review:
      "John has recorded 23 songs for me in these last 4 years, and I wouldn’t go to anyone else. His expertise in Pro Tools, and his musical background makes him an unparalleled producer/engineer, in my opinion. If you let him, and listen to his ideas, John will elevate your songs to a level you will be shocked by. I am a better musician and songwriter because I met and have worked so many times with him.",
    albumCover: Suko,
  },
  {
    name: "Michael Richardson",
    review:
      "I’ve been working with John for about 5 years now, and I won’t go to anyone else. Not only is he an incredible producer, but his insight and skill is invaluable in the process of making a great end product. Would recommend him to anyone.",
    albumCover: InBetween,
  },
  {
    name: "Ryan Bishop (Knope)",
    review:
      "Great experience. Very accommodating and knows his stuff! He made our EP come to life in ways we didn’t think possible!",
    albumCover: NoLife,
  },
  {
    name: "Michael Pereira (Sub-Radio)",
    review:
      "I’ve been recording with John for years, he’s an absolute pleasure to work with and the end product is better than any other place I’ve been to in NoVA. Highly recommend!",
    albumCover: Headfirst,
  },
  {
    name: "Jory Luschinger (Unsullied)",
    review:
      "Worked with the owner John a few times now, and he’s wonderful. He’s got a great knowledge of gear and how to use it, as well as a good grasp on many different styles of music. Super easy to get along with and very cooperative in getting the sound in your head down on the track.",
    albumCover: Unsullied,
  },
  {
    name: "Rook Richards",
    review:
      "The dedication and work John puts into each track is outstanding. There’s not another engineer I’d rather be working with.",
    albumCover: TheOtherSide,
  },
];

// Two slides: first 4 testimonials, then 3
const slides = [allTestimonials.slice(0, 4), allTestimonials.slice(4, 7)];

// Container-level animation
const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

// Card animation: drops from above
const cardVariants = {
  hidden: { opacity: 0, y: -50 },
  show: { opacity: 1, y: 0 },
};

function Testimonials() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const { ref, inView } = useInView({ triggerOnce: false, threshold: 0.2 });

  // Automatic cycling every 6 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === 0 ? 1 : 0));
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  // Determine which group of testimonials to show
  const testimonialGroup = slides[currentSlide];

  return (
    <Box
      id="testimonials"
      ref={ref}
      sx={{
        width: "100%",
        padding: "60px 20px",
        backgroundColor: "#000",
        color: "#FFF",
        position: "relative",
        overflow: "hidden",
        // Enough height to accommodate both slides without resizing
        minHeight: "600px",
      }}
    >
      <Typography variant="h3" gutterBottom sx={{ textAlign: "center" }}>
        What Our Clients Say
      </Typography>
      <Typography
        variant="body1"
        sx={{ maxWidth: 600, margin: "0 auto", mb: 4, textAlign: "center" }}
      >
        Discover what fellow artists and clients have to say about our services.
      </Typography>

      <AnimatePresence mode="wait">
        {inView && (
          <motion.div
            key={`slide-${currentSlide}`}
            variants={containerVariants}
            initial="hidden"
            animate="show"
            exit="hidden"
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              gap: "20px",
              margin: "0 auto",
            }}
          >
            {testimonialGroup.map((testimonial, i) => (
              <motion.div
                key={i}
                variants={cardVariants}
                style={{
                  backgroundColor: "#DBDBDE",
                  color: "#000",
                  boxShadow: "0px 2px 8px rgba(0,0,0,0.1)",
                  borderRadius: "10px",
                  overflow: "hidden",
                  width: "100%",
                  maxWidth: "380px",
                  height: "450px", // Shorter than Services
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                {/* Image filling entire top portion */}
                <CardMedia
                  component="img"
                  image={testimonial.albumCover}
                  alt={`${testimonial.name} Album Cover`}
                  style={{
                    width: "100%",
                    height: "200px",
                    objectFit: "cover", // Fill entire image area
                    backgroundColor: "#fff", // any letterboxing areas remain white
                  }}
                />
                <CardContent
                  sx={{
                    flex: "1 1 auto",
                    textAlign: "left",
                    padding: 2,
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <Typography variant="h6" fontWeight="600" gutterBottom>
                    {testimonial.name}
                  </Typography>
                  <Box
                    sx={{
                      maxHeight: "120px", // Room for average text
                      overflowY: "auto",
                      "&::-webkit-scrollbar": { width: "6px" },
                      "&::-webkit-scrollbar-track": { background: "#f1f1f1" },
                      "&::-webkit-scrollbar-thumb": { background: "#ccc" },
                    }}
                  >
                    <Typography variant="body2" sx={{ color: "#555", lineHeight: 1.6 }}>
                      "{testimonial.review}"
                    </Typography>
                  </Box>
                </CardContent>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </Box>
  );
}

export default Testimonials;
