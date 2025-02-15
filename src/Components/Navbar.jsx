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
import "react-lazy-load-image-component/src/effects/blur.css"; // Blur effect
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
      <AppBar position="sticky" sx={{ backgroundColor: "#990A0A", padding: "20px" }}>
        <Toolbar sx={{ minHeight: "80px", justifyContent: "space-between" }}>
          {/* Logo with Lazy Loading */}
          <Box sx={{ flexGrow: 1 }}>
            <LazyLoadImage
              src={logo}
              alt="Logo"
              effect="blur" // Smooth blur effect while loading
              height="100px"
            />
          </Box>

          {/* Desktop Nav Links */}
          <Box sx={{ display: { xs: "none", md: "flex" }, gap: 2 }}>
            {navLinks.map((link) => (
              <Button key={link.text} href={link.href} sx={{ color: "#FFFFFF", fontSize: "1.2rem", "&:hover": { color: "#000000" } }}>
                {link.text}
              </Button>
            ))}
          </Box>

          {/* Social Icons */}
          <Box sx={{ display: { xs: "none", md: "flex" }, gap: 1 }}>
            <Button sx={{ color: "#FFFFFF", "&:hover": { color: "#000000" } }} href="https://instagram.com" target="_blank">
              <Instagram />
            </Button>
            <Button sx={{ color: "#FFFFFF", "&:hover": { color: "#000000" } }} href="https://facebook.com" target="_blank">
              <Facebook />
            </Button>
          </Box>

          {/* Mobile Menu Button */}
          <IconButton
            sx={{ display: { xs: "flex", md: "none" }, color: "#FFFFFF" }}
            onClick={() => setMobileOpen(true)}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* Mobile Drawer Menu */}
      <Drawer anchor="right" open={mobileOpen} onClose={() => setMobileOpen(false)}>
        <List sx={{ width: 250 }}>
          {navLinks.map((link) => (
            <ListItem button key={link.text} onClick={() => setMobileOpen(false)} component="a" href={link.href}>
              <ListItemText primary={link.text} />
            </ListItem>
          ))}
        </List>
      </Drawer>
    </>
  );
}

export default Navbar;
