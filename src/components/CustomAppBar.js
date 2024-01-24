import { AppBar, Box, Button, Toolbar, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import COLORS from "../colors";

function CustomAppBar() {
  const navigate = useNavigate();

  return (
    <Box sx={{ flexGrow: 1, flexDirection: "row" }}>
      <AppBar position="fixed">
        <Toolbar variant="dense" sx={{ backgroundColor: COLORS.navBarBgColor }}>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}></Typography>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            <Button onClick={() => navigate("/")}>Home</Button>
          </Box>
        </Toolbar>
      </AppBar>
      <Toolbar variant="dense" />
    </Box>
  );
}

export default CustomAppBar;
