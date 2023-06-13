import React from "react";
import CustomAppBar from "./CustomAppBar";
import Footer from "./Footer";
import { Box } from "@mui/material";

function BasePage({ children }) {
  return (
    <Box height="100vh" display="flex" flexDirection="column" justifyContent="space-between">
      <Box>
        <CustomAppBar></CustomAppBar>
        <Box sx={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
          <div style={{ maxWidth: "45vw" }}>{children}</div>
        </Box>
      </Box>
      <Footer />
    </Box>
  );
}

export default BasePage;
