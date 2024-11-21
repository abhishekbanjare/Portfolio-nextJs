"use client";
import { createTheme } from "@mui/material/styles";
import { Mukta } from "next/font/google";

// Import the Gupter font
const mukta = Mukta({ weight: "400", subsets: ["latin"] });

const theme = createTheme({
  typography: {
    fontFamily: mukta.style.fontFamily,
    htmlFontSize: 16, // Base font size for the html element
    fontSize: 18, // Default font size for Material-UI components
  },
});

export default theme;
