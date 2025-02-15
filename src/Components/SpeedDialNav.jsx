import { SpeedDial, SpeedDialAction } from "@mui/material";
import { Menu, Info, Work, Star, Mail } from "@mui/icons-material";
import { useMediaQuery, useTheme } from "@mui/material";

const navItems = [
  { icon: <Info />, name: "About", href: "#about" },
  { icon: <Work />, name: "Services", href: "#services" },
  { icon: <Star />, name: "Work", href: "#work" },
  { icon: <Mail />, name: "Contact", href: "#contact" },
];

function SpeedDialNav() {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("md")); // Detects mobile & tablets

  if (!isSmallScreen) return null; // Only render Speed Dial on small screens

  return (
    <SpeedDial
      ariaLabel="Navigation"
      sx={{ position: "fixed", bottom: 20, right: 20 }}
      icon={<Menu />}
    >
      {navItems.map((item) => (
        <SpeedDialAction
          key={item.name}
          icon={item.icon}
          tooltipTitle={item.name}
          href={item.href}
        />
      ))}
    </SpeedDial>
  );
}

export default SpeedDialNav;
