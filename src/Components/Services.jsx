import { Box, Card, CardContent, Typography, Button, Collapse } from "@mui/material";
import { useState } from "react";

const services = [
  { title: "Mixing", details: "High-quality mixing to bring your tracks to life." },
  { title: "Mastering", details: "Professional mastering for a radio-ready sound." },
  { title: "Production", details: "Custom beats and full track production." },
];

function Services() {
  const [expanded, setExpanded] = useState(null);

  return (
    <Box id="services" sx={{ padding: "40px 0", textAlign: "center", height: "100vh" }}>
      <Typography variant="h4" gutterBottom>Our Services</Typography>
      {services.map((service, index) => (
        <Card key={index} sx={{ maxWidth: 400, margin: "20px auto" }}>
          <CardContent>
            <Typography variant="h6">{service.title}</Typography>
            <Button onClick={() => setExpanded(expanded === index ? null : index)}>
              {expanded === index ? "Hide Details" : "More Info"}
            </Button>
            <Collapse in={expanded === index}>
              <Typography>{service.details}</Typography>
            </Collapse>
          </CardContent>
        </Card>
      ))}
    </Box>
  );
}

export default Services;
