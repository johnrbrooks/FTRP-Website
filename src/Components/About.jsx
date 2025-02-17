import { Box, Typography, Grid, Card, CardMedia } from "@mui/material";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

import JohnGuitarImage from "../assets/JohnGuitarImage.jpg";
import JohnDrumImage from "../assets/JohnDrumImage.jpg";
import JohnStudioImage from "../assets/JohnStudioImage.jpg";

// Container-level variants (stagger children)
const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

// Image card variants (slide from left)
const imageVariants = {
  hidden: { opacity: 0, x: -100 },
  show: { opacity: 1, x: 0 },
};

// Text column slides from right
const textVariants = {
  hidden: { opacity: 0, x: 100 },
  show: { opacity: 1, x: 0 },
};

function About() {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });

  return (
    <Box
      id="about"
      sx={{
        width: "100%",
        minHeight: "100vh",
        padding: { xs: "40px 20px", md: "80px 40px" },
        backgroundImage: "linear-gradient(to bottom right, #990A0A, #6B0404)", // ✅ FIXED GRADIENT
        color: "#FFFFFF",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        overflowX: "hidden",
      }}
      ref={ref}
    >
      <Box
        sx={{
          maxWidth: "1200px",
          margin: "0 auto",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
          gap: 4,
        }}
      >
        <Typography variant="h3" gutterBottom fontWeight="700" color="#FFFFFF">
          Meet John Brooks
        </Typography>

        <Grid
          container
          spacing={4}
          sx={{
            alignItems: "center",
            flexDirection: { xs: "column-reverse", md: "row" },
            justifyContent: "center",
          }}
        >
          {/* Left Column - Images */}
          <Grid item xs={12} md={6}>
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate={inView ? "show" : "hidden"}
            >
              <Grid container spacing={2} justifyContent="center">
                <Grid item xs={6}>
                  <motion.div variants={imageVariants}>
                    <Card sx={{ backgroundColor: "#DBDBDE" }}>
                      <CardMedia
                        component="img"
                        image={JohnGuitarImage}
                        alt="John Brooks playing guitar"
                        sx={{
                          width: "100%",
                          height: { xs: "120px", md: "200px" },
                          objectFit: "cover",
                        }}
                      />
                    </Card>
                  </motion.div>
                </Grid>

                <Grid item xs={6}>
                  <motion.div variants={imageVariants}>
                    <Card sx={{ backgroundColor: "#DBDBDE" }}>
                      <CardMedia
                        component="img"
                        image={JohnDrumImage}
                        alt="John Brooks playing drums"
                        sx={{
                          width: "100%",
                          height: { xs: "120px", md: "200px" },
                          objectFit: "cover",
                        }}
                      />
                    </Card>
                  </motion.div>
                </Grid>

                <Grid item xs={12}>
                  <motion.div variants={imageVariants}>
                    <Card sx={{ backgroundColor: "#DBDBDE" }}>
                      <CardMedia
                        component="img"
                        image={JohnStudioImage}
                        alt="John Brooks working in the studio"
                        sx={{
                          width: "100%",
                          height: { xs: "200px", md: "300px" },
                          objectFit: "cover",
                        }}
                      />
                    </Card>
                  </motion.div>
                </Grid>
              </Grid>
            </motion.div>
          </Grid>

          {/* Right Column - Bio Text */}
          <Grid item xs={12} md={6}>
            <motion.div
              variants={textVariants}
              initial="hidden"
              animate={inView ? "show" : "hidden"}
              transition={{ duration: 1 }}
            >
              <Typography
                variant="body1"
                sx={{
                  lineHeight: 1.7,
                  fontSize: { xs: "1rem", md: "1.1rem" },
                  textAlign: "justify",
                  maxWidth: "100%",
                  color: "#FFFFFF",
                }}
              >
                Music is more than just sound—it's a story, an emotion, and an experience.
                At For The Record Productions, I bring over 15 years of playing, writing, producing,
                and mixing to help artists shape their sonic identity.
                <br /><br />
                I'm John Brooks, a multi-instrumentalist (guitar, bass, drums, with a touch of keys)
                and an audio engineer with over a decade of experience. My passion for sound was
                sparked early, and I’ve spent years mastering the craft of making records that hit
                just as hard as the pros.
                <br /><br />
                Whether it’s polishing an indie track, engineering a full-band production, or
                sculpting mixes that feel massive and alive, I approach every project with the same
                dedication, attention to detail, and creative energy. I’ve worked with countless
                talented artists—many of whom I now consider close friends—and nothing excites me more
                than collaborating to bring a musical vision to life.
                <br /><br />
                With top-tier gear, an ear for detail, and years of hands-on experience, I know how
                to dial in the exact sounds you hear on your favorite records. Every song I mix is
                unique, and some of my favorite music to listen to is the work I’ve created alongside
                artists in my studio.
                <br /><br />
                If you’re looking for a producer and mixer who is as passionate about your music
                as you are, let’s connect and make something incredible together.
              </Typography>
            </motion.div>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}

export default About;
