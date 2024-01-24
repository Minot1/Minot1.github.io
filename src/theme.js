import { createTheme } from "@mui/material";
import COLORS from "./colors";

const theme = createTheme({
  palette: {
    mode: "dark",
    background: {
      default: COLORS.appBgColor,
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
