// src/components/Navbar.jsx
import { useState } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Button,
  Box,
} from "@mui/material";
import { Menu as MenuIcon } from "@mui/icons-material";
import { Instagram, Facebook } from "@mui/icons-material";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import logo from "../assets/FTRP_logo_large.png";

const navLinks = [
  { text: "About", href: "#about" },
  { text: "Services", href: "#services" },
  { text: "Work", href: "#work" },
  { text: "Testimonials", href: "#testimonials" },
  { text: "Contact", href: "#contact" },
];

function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      <AppBar position="sticky" sx={{ backgroundColor: "#DBDBDE", padding: "10px 20px" }}>
        <Toolbar sx={{ minHeight: "80px", justifyContent: "space-between" }}>
          {/* Logo with Lazy Loading */}
          <Box sx={{ flexGrow: 1 }}>
            <LazyLoadImage
              src={logo}
              alt="For The Record Productions - Music Production Logo"
              effect="blur"
              height="80px"
              style={{ cursor: "pointer" }}
            />
          </Box>

          {/* Desktop Nav Links */}
          <Box sx={{ display: { xs: "none", md: "flex" }, gap: 3 }}>
            {navLinks.map((link) => (
              <Button
                key={link.text}
                href={link.href}
                sx={{
                  color: "#000000",
                  fontSize: "1.1rem",
                  "&:hover": {
                    backgroundColor: "#990A0A",
                    color: "#FFFFFF",
                  },
                  transition: "all 0.3s ease-in-out",
                }}
              >
                {link.text}
              </Button>
            ))}
          </Box>

          {/* Social Icons (Desktop) */}
          <Box sx={{ display: { xs: "none", md: "flex" }, gap: 2 }}>
            <IconButton
              sx={{
                color: "#990A0A",
                "&:hover": { color: "#000000" },
              }}
              href="https://www.instagram.com/john_brooks_93/"
              target="_blank"
            >
              <Instagram />
            </IconButton>
            <IconButton
              sx={{
                color: "#990A0A",
                "&:hover": { color: "#000000" },
              }}
              href="https://www.facebook.com/fortherecordpro"
              target="_blank"
            >
              <Facebook />
            </IconButton>
          </Box>

          {/* Mobile Menu Button */}
          <IconButton
            sx={{
              display: { xs: "flex", md: "none" },
              color: "#990A0A",
            }}
            onClick={() => setMobileOpen(true)}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* Mobile Drawer Menu */}
      <Drawer anchor="right" open={mobileOpen} onClose={() => setMobileOpen(false)}>
        <List sx={{ width: 250, backgroundColor: "#DBDBDE", height: "100%" }}>
          {navLinks.map((link) => (
            <ListItem
              button
              key={link.text}
              onClick={() => setMobileOpen(false)}
              component="a"
              href={link.href}
              sx={{ color: "#990A0A"}}
            >
              <ListItemText primary={link.text} />
            </ListItem>
          ))}

          {/* Social Icons (Mobile) */}
          <Box sx={{ display: "flex", justifyContent: "center", gap: 2, mt: 2 }}>
            <IconButton
              sx={{
                color: "#990A0A",
                "&:hover": { color: "#000000" },
              }}
              href="https://www.instagram.com/john_brooks_93/"
              target="_blank"
            >
              <Instagram />
            </IconButton>
            <IconButton
              sx={{
                color: "#990A0A",
                "&:hover": { color: "#000000" },
              }}
              href="https://www.facebook.com/fortherecordpro"
              target="_blank"
            >
              <Facebook />
            </IconButton>
          </Box>
        </List>
      </Drawer>
    </>
  );
}

export default Navbar;
