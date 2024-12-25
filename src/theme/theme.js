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
    fontFamily: "'Reddit Sans', sans-serif",

    // Headings customization (h1 to h6)
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
    h3: {
      fontSize: "2rem",
      fontWeight: 700,
      lineHeight: 1.4,
      [breakpoints.lg]: { fontSize: "1.75rem" },
      [breakpoints.md]: { fontSize: "1.5rem" },
      [breakpoints.sm]: { fontSize: "1.3rem" },
      [breakpoints.xs]: { fontSize: "1.2rem" },
    },
    h4: {
      fontSize: "1.75rem",
      fontWeight: 600,
      lineHeight: 1.5,
      [breakpoints.lg]: { fontSize: "1.6rem" },
      [breakpoints.md]: { fontSize: "1.4rem" },
      [breakpoints.sm]: { fontSize: "1.25rem" },
      [breakpoints.xs]: { fontSize: "1.1rem" },
    },
    h5: {
      fontSize: "1.5rem",
      fontWeight: 600,
      lineHeight: 1.6,
      [breakpoints.lg]: { fontSize: "1.4rem" },
      [breakpoints.md]: { fontSize: "1.25rem" },
      [breakpoints.sm]: { fontSize: "1.1rem" },
      [breakpoints.xs]: { fontSize: "1rem" },
    },
    h6: {
      fontSize: "1.25rem",
      fontWeight: 500,
      lineHeight: 1.7,
      [breakpoints.lg]: { fontSize: "1.125rem" },
      [breakpoints.md]: { fontSize: "1rem" },
      [breakpoints.sm]: { fontSize: "0.9rem" },
      [breakpoints.xs]: { fontSize: "0.8rem" },
    },

    // Body Text customization

    body1: {
      fontSize: "1rem",
      fontWeight: 400,
      lineHeight: 1.6,
      [breakpoints.lg]: { fontSize: "0.95rem" },
      [breakpoints.md]: { fontSize: "0.9rem" },
      [breakpoints.sm]: { fontSize: "0.875rem" },
      [breakpoints.xs]: { fontSize: "0.85rem" },
    },

    body2: {
      fontSize: "0.875rem",
      fontWeight: 400,
      lineHeight: 1.5,
      [breakpoints.lg]: { fontSize: "0.8rem" },
      [breakpoints.md]: { fontSize: "0.75rem" },
      [breakpoints.sm]: { fontSize: "0.7rem" },
      [breakpoints.xs]: { fontSize: "0.65rem" },
    },

    // Subtitle Text customization
    subtitle1: {
      fontSize: "1.125rem",
      fontWeight: 400,
      lineHeight: 1.5,
      [breakpoints.lg]: { fontSize: "1rem" },
      [breakpoints.md]: { fontSize: "0.95rem" },
      [breakpoints.sm]: { fontSize: "0.875rem" },
      [breakpoints.xs]: { fontSize: "0.8rem" },
    },
    subtitle2: {
      fontSize: "1rem",
      fontWeight: 400,
      lineHeight: 1.4,
      [breakpoints.lg]: { fontSize: "0.95rem" },
      [breakpoints.md]: { fontSize: "0.875rem" },
      [breakpoints.sm]: { fontSize: "0.8rem" },
      [breakpoints.xs]: { fontSize: "0.75rem" },
    },
  },
  components: {
    // Button typography customization
    MuiButton: {
      styleOverrides: {
        root: {
          fontFamily: "'Reddit Sans', sans-serif",
        },
      },
    },
  },
  palette: {
    charcoalBlue: { main: "#0C1E2C" }, //all background color
    blackPearl: { main: "#001219" }, //hover button color

    crimson: { main: "#DC143C" }, // Change 'Crimson' to 'crimson'
  },
});
export default theme;
