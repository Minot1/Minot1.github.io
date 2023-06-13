import { AppBar, Box, Button, Toolbar, Typography } from "@mui/material";
import React from "react";

function CustomAppBar() {
  return (
    <Box sx={{ flexGrow: 1, flexDirection: "row" }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Minot
          </Typography>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            <Button href="/" sx={{ color: "#fff" }}>
              Home
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
      {/* <Toolbar /> */}
    </Box>
  );
}

export default CustomAppBar;
