import { Box, IconButton, Typography } from "@mui/material";
import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";

function Footer() {
  return (
    <footer>
      <Box
        sx={{
          display: "flex",
          flexGrow: 1,
          flexDirection: "row",
          backgroundColor: "#eeeeee",
          justifyContent: "center",
          p: 2,
          alignItems: "center",
        }}
      >
        <Typography variant="caption">Minot - 2023</Typography>
        <IconButton href="mailto:dincer.taner123@gmail.com">
          <EmailIcon />
        </IconButton>
        <IconButton href="https://github.com/Minot1" target="_blank">
          <GitHubIcon />
        </IconButton>
      </Box>
    </footer>
  );
}

export default Footer;
