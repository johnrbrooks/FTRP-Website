import { Box, Card, CardContent, Typography } from "@mui/material";

const testimonials = [
  { name: "John Doe", review: "Amazing production quality! My track sounds incredible." },
  { name: "Jane Smith", review: "Highly professional and easy to work with. 5 stars!" },
  { name: "Mike Johnson", review: "Best mixing and mastering services I've ever used!" },
];

function Testimonials() {
  return (
    <Box
      id="testimonials"
      sx={{
        width: "100%",
        padding: "60px 20px",
        textAlign: "center",
        backgroundColor: "#DBDBDE",
      }}
    >
      <Typography variant="h4" gutterBottom>What Our Clients Say</Typography>
      <Box sx={{ display: "flex", justifyContent: "center", flexWrap: "wrap", gap: "20px" }}>
        {testimonials.map((testimonial, index) => (
          <Card key={index} sx={{ maxWidth: 300, backgroundColor: "#FFFFFF" }}>
            <CardContent>
              <Typography variant="h6">{testimonial.name}</Typography>
              <Typography variant="body2">{testimonial.review}</Typography>
            </CardContent>
          </Card>
        ))}
      </Box>
    </Box>
  );
}

export default Testimonials;
