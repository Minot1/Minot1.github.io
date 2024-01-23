import { createTheme } from "@mui/material";
import { COLORS } from "./pages/colors";

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
          boxShadow: "none",
        },
      },
    },
  },
});

export default theme;
