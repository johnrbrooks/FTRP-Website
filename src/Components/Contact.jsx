import { Box, TextField, Button, Typography } from "@mui/material";
import { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // You can integrate this with an API or email service
    setFormData({ name: "", email: "", message: "" }); // Reset form
  };

  return (
    <Box
      id="contact"
      sx={{
        padding: "60px 20px",
        textAlign: "center",
        backgroundColor: "#fff",
      }}
    >
      <Typography variant="h4" gutterBottom>Contact Us</Typography>
      <Typography variant="body1" sx={{ marginBottom: "20px" }}>
        Have questions or want to work together? Drop us a message!
      </Typography>
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{ maxWidth: "500px", margin: "0 auto", display: "flex", flexDirection: "column", gap: "15px" }}
      >
        <TextField
          label="Name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          fullWidth
        />
        <TextField
          label="Email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          required
          fullWidth
        />
        <TextField
          label="Message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          multiline
          rows={4}
          fullWidth
        />
        <Button type="submit" variant="contained" color="primary">
          Send Message
        </Button>
      </Box>
    </Box>
  );
}

export default Contact;
