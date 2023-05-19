import { useState } from "react";
import { Box, Drawer, useMediaQuery } from "@mui/material";
import Sidebar from "./Sidebar";

const Navbar = ({ theme }) => {
  const isMobile = useMediaQuery("(max-width:480px)");
  const [mobileOpen, setMobileOpen] = useState(false);
  return (
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
  );
};

export default Navbar;
