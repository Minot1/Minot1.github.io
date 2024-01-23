import { AppBar, Box, Button, Toolbar, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import { COLORS } from "../pages/colors";

function CustomAppBar() {
  const navigate = useNavigate();

  return (
    <Box sx={{ flexGrow: 1, flexDirection: "row" }}>
      <AppBar position="fixed" sx={{ backgroundColor: COLORS.navBarBgColor }}>
        <Toolbar variant="dense" sx={{ backgroundColor: COLORS.navBarBgColor }}>
          <Box
            sx={{
              display: { xs: "none", sm: "block" },
            }}
          >
            <Button
              onClick={() => navigate("/")}
              sx={{ color: COLORS.menuTextColor }}
            >
              Home
            </Button>
          </Box>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1 }}
          ></Typography>
        </Toolbar>
      </AppBar>
      <Toolbar variant="dense" />
    </Box>
  );
}

export default CustomAppBar;
