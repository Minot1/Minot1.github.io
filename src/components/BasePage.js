import React from "react";
import CustomAppBar from "./CustomAppBar";
import Footer from "./Footer";
import { Box, Button } from "@mui/material";
import { COLORS } from "../pages/colors";

function BasePage({ children }) {
  return (
    <Box
      height="100vh"
      display="flex"
      flexDirection="column"
      justifyContent="space-between"
    >
      <Box>
        <CustomAppBar></CustomAppBar>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div style={{ maxWidth: "75vw" }}>{children}</div>
        </Box>
      </Box>
      <Footer />
    </Box>
  );
}

export default BasePage;
