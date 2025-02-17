// src/components/Contact.jsx
import { useState } from "react";
import { Box, TextField, Button, Typography, Alert } from "@mui/material";
import emailjs from "@emailjs/browser";

function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState({ success: null, message: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate form fields before sending
    if (!formData.name || !formData.email || !formData.message) {
      setStatus({ success: false, message: "All fields are required." });
      return;
    }

    // EmailJS Parameters
    const emailParams = {
      name: formData.name,
      email: formData.email,
      message: formData.message,
    };

    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID, 
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID, 
        emailParams, 
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        setStatus({ success: true, message: "Message sent successfully!" });
        setFormData({ name: "", email: "", message: "" }); // Reset form
      })
      .catch(() => {
        setStatus({ success: false, message: "Failed to send message. Please try again." });
      });
  };

  return (
    <Box
      id="contact"
      sx={{
        padding: "60px 20px",
        textAlign: "center",
        backgroundColor: "#FFFFFF",
      }}
    >
      <Typography variant="h3" gutterBottom>Contact Us</Typography>
      <Typography variant="body1" sx={{ maxWidth: "500px", margin: "0 auto", mb: 4 }}>
        Ready to elevate your sound? Drop us a line below, and let’s discuss your next project.
      </Typography>

      {status.message && (
        <Alert severity={status.success ? "success" : "error"} sx={{ maxWidth: "500px", margin: "0 auto", mb: 2 }}>
          {status.message}
        </Alert>
      )}

      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{ maxWidth: "500px", margin: "0 auto", display: "flex", flexDirection: "column", gap: "20px" }}
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
        <Button
          type="submit"
          variant="contained"
          sx={{
            backgroundColor: "#990A0A",
            "&:hover": { backgroundColor: "#000000" },
          }}
        >
          Send Message
        </Button>
      </Box>
    </Box>
  );
}

export default Contact;
