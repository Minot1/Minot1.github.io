import React from "react";
import CustomAppBar from "./CustomAppBar";
import Footer from "./Footer";
import { Box, Button } from "@mui/material";

function BasePage({ children }) {
  return (
    <Box
      height="100vh"
      display="flex"
      flexDirection="column"
      justifyContent="space-between"
      sx={{
        backgroundImage: "url(/bgTheme.png)",
        backgroundColor: "rgb(6, 0, 0)",
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
        backgroundRepeat: "repeat",
        backgroundBlendMode: "screen",
        overflowY: "auto",
      }}
    >
      <Box>
        <CustomAppBar></CustomAppBar>
        <Box sx={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
          <div style={{ maxWidth: "75vw" }}>{children}</div>
        </Box>
      </Box>
      <Footer />
    </Box>
  );
}

export default BasePage;
