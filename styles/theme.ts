import { createTheme } from "@mui/material";

const theme = createTheme({
  typography: {
    h2: {
      fontFamily: "Playfair Display",
      fontWeight: "700",
      fontSize: "clamp(1rem, 3.333vw, 64px)",
      lineHeight: 1.3,
    },
    h4: {
      fontFamily: "Playfair Display",
      fontWeight: "700",
      fontSize: "clamp(26px,5vw, 64px)",
      lineHeight: 1.5,
      wordWrap: "break-word",
    },
    h5: {
      fontSize: "clamp(0.875rem, 0.5179rem + 1.5238vw, 1.375rem)",
      fontFamily: "Manrope",
      fontWeight: "100",
      lineHeight: 2,
    },
    h6: {
      fontFamily: "Manrope",
      fontWeight: "400",
      lineHeight: 2,
      fontSize: "clamp(0.7rem, 1.042vw, 24px)",
    },
  },

  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1920,
    },
  },
});

export default theme;
