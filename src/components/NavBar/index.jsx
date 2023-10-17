import React, { useState } from "react";
import { Box, IconButton, Drawer, Button } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import NavListDrawer from "../NavListDrawer";
import HomeIcon from "@mui/icons-material/Home";
import ArticleIcon from "@mui/icons-material/Article";
import PersonIcon from "@mui/icons-material/Person";
import { Link } from "react-router-dom";

const navLinks = [
  { title: "Inicio", path: "/#", icon: <HomeIcon /> },
  { title: "Documentacion", path: "/docs", icon: <ArticleIcon /> },
  { title: "Desarrollador", path: "/dev", icon: <PersonIcon /> },
];

const NavBar = () => {
  const [drawer, setDrawer] = useState(false);
  return (
    <Box>
      <Box sx={{ display: { xs: "block", md: "none" } }}>
        <IconButton size="large" onClick={() => setDrawer(true)}>
          <MenuIcon fontSize="large" sx={{ fill: "#FFFFFF" }} />
        </IconButton>
      </Box>

      <Box sx={{ display: { xs: "none", md: "block" } }}>
        {navLinks.map((item) => (
          <Button
            label="Name"
            aria-labelledby="menu"
            component={Link}
            to={item.path}
            sx={{ color: "#FFFFFF" }}
            key={item.title}
          >
            {item.title}
          </Button>
        ))}
      </Box>

      <Drawer open={drawer} anchor="top" onClose={() => setDrawer(false)}>
        <NavListDrawer navLinks={navLinks} />
      </Drawer>
    </Box>
  );
};

export default NavBar;
