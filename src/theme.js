import { createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    mode: "dark",
    background: {
      default: "rgb(25, 25, 25)",
    },
    text: {
      primary: "rgb(230, 230, 230)",
    },
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: "rgb(32, 0, 0)",
          boxShadow: "none",
        },
      },
    },
  },
});

export default theme;
