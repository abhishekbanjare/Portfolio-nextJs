// theme.jsx
"use client";
import { createTheme } from "@mui/material";
const breakpoints = {
  lg: "@media (max-width: 1280px)",
  md: "@media (max-width: 1024px)",
  sm: "@media (max-width: 600px)",
  xs: "@media (max-width: 400px)",
};
const theme = createTheme({
  typography: {
    fontFamily: "'Roboto', sans-serif",
    h1: {
      fontSize: "3rem",
      fontWeight: 700,
      lineHeight: 1.2,
      [breakpoints.lg]: { fontSize: "2.8rem" },
      [breakpoints.md]: { fontSize: "2.6rem" },
      [breakpoints.sm]: { fontSize: "2.2rem" },
      [breakpoints.xs]: { fontSize: "2rem" },
    },
    h2: {
      fontSize: "2.5rem",
      fontWeight: 700,
      lineHeight: 1.3,
      [breakpoints.lg]: { fontSize: "2.2rem" },
      [breakpoints.md]: { fontSize: "2rem" },
      [breakpoints.sm]: { fontSize: "1.75rem" },
      [breakpoints.xs]: { fontSize: "1.5rem" },
    },
    // Remaining styles are unchanged
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          fontFamily: "'Roboto', sans-serif",
        },
      },
    },
  },
  palette: {
    charcoalBlue: { main: "#0C1E2C" },
    blackPearl: { main: "#001219" },
    crimson: { main: "#DC143C" },
  },
});
export default theme;
