import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import React from "react";

const NavListDrawer = ({ navLinks }) => {
  return (
    <Box component="nav">
      <List>
        {navLinks.map((item) => (
          <ListItem key={item.title} disablePadding>
            <ListItemButton component="a" href={item.path}>
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText>{item.title}</ListItemText>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default NavListDrawer;
