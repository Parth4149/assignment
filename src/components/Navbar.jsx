import { useState } from "react";
import {
  Box,
  Drawer,
  useMediaQuery,
  AppBar,
  Toolbar,
  IconButton,
  Typography,
} from "@mui/material";
import Sidebar from "./Sidebar";
import { Menu, AccountCircle } from "@mui/icons-material";
const Navbar = ({ theme }) => {
  const isMobile = useMediaQuery("(max-width:480px)");
  const [mobileOpen, setMobileOpen] = useState(false);
  return (
    <>
      <AppBar position="fixed" sx={{ background: "#f1f5f9" }}>
        <Toolbar className="toolbar">
          <IconButton
            onClick={() => setMobileOpen((prevMobileOpen) => !prevMobileOpen)}
            color="inherit"
            sx={{ [theme.breakpoints.up("sm")]: { display: "none" } }}
          >
            <Menu />
          </IconButton>
          <div className="account__icon">
            <IconButton color="primary">
              <AccountCircle />
            </IconButton>
            <Typography variant="p" color="GrayText">
              Name
            </Typography>
          </div>
        </Toolbar>
      </AppBar>
      <Box>
        {isMobile ? (
          <Drawer
            variant="temporary"
            anchor="left"
            open={mobileOpen}
            className="drawer__paper"
            ModalProps={{ keepMounted: true }}
            onClose={() => setMobileOpen((prevMobileOpen) => !prevMobileOpen)}
          >
            <Sidebar theme={theme} setMobileOpen={setMobileOpen} />
          </Drawer>
        ) : (
          <Drawer className="drawer__paper" variant="permanent" open>
            <Sidebar theme={theme} setMobileOpen={setMobileOpen} />
          </Drawer>
        )}
      </Box>
    </>
  );
};

export default Navbar;
