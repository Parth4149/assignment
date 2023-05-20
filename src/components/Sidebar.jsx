import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Divider,
  Typography,
  List,
  ListItemButton,
  ListItemIcon,
  Box,
  ListItemText,
} from "@mui/material";
import { GridView, NoteAdd, Payments } from "@mui/icons-material";

const Sidebar = ({ setMobileOpen }) => {
  const [selectedIndex, setSelectedIndex] = useState(1);
  return (
    <Box className="sidebar">
      <Link to="/" className="logo_container">
        <Typography
          sx={{ m: "1rem 0", p: "0 1rem" }}
          className="white"
          variant="h4"
        >
          React Test
        </Typography>
      </Link>
      <Divider sx={{ width: "80%", m: "auto" }} color="white" />
      <List>
        <ListItemButton
          selected={selectedIndex === 0}
          onClick={() => {
            setSelectedIndex(0);
            setMobileOpen(false);
          }}
        >
          <ListItemIcon>
            <GridView className="white" />
          </ListItemIcon>
          <ListItemText primary="Dashboard" className="white" />
        </ListItemButton>
        <ListItemButton
          selected={selectedIndex === 1}
          onClick={() => setSelectedIndex(1)}
        >
          <ListItemIcon>
            <NoteAdd className="white" />
          </ListItemIcon>
          <ListItemText primary="Montages" className="white" />
        </ListItemButton>
        <ListItemButton
          selected={selectedIndex === 2}
          onClick={() => setSelectedIndex(2)}
        >
          <ListItemIcon>
            <Payments className="white" />
          </ListItemIcon>
          <ListItemText primary="Credits" className="white" />
        </ListItemButton>
      </List>
    </Box>
  );
};

export default Sidebar;
