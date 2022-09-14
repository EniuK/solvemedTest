import { createTheme } from "@mui/material";

export const theme = createTheme({
  palette: {
    primary: {
      light: "#494763",
      main: "#141415",
      dark: "#000000",
    },
    secondary: {
      light: "#4A4B4D",
      main: "#5242EE",
      dark: "#312937",
    },
    info: {
      light: "#F4F4F4",
      main: "#FFEDED",
      dark: "#FBEDFF",
    },
  },
  typography: {
    h1: {
      fontSize: "124px",
      fontWeight: "300",
      "@media (max-width:900px)": {
        fontSize: "96px",
      },
      "@media (max-width:600px)": {
        fontSize: "64px",
      },
    },
    h2: {
      fontSize: "100px",
      fontWeight: "300",
      "@media (max-width:900px)": {
        fontSize: "96px",
      },
      "@media (max-width:600px)": {
        fontSize: "64px",
      },
    },
    h3: {
      fontSize: "92px",
      fontWeight: "300",
      "@media (max-width:900px)": {
        fontSize: "64px",
      },
    },
    h4: {
      fontSize: "42px",
      fontWeight: "300",
      lineHeight: "46.2px",
      "@media (max-width:900px)": {
        fontSize: "30px",
        lineHeight: "36px",
      },
    },
    h5: {
      fontSize: "30px",
      lineHeight: "36px",
      fontWeight: "600",
    },
    h6: {
      fontSize: "18px",
      lineHeight: "24.3px",
    },
    body1: {
      fontSize: "21px",
      lineHeight: "24px",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: "100px",
        },
        contained: {
          backgroundColor: "#5242EE",
          fontSize: "0.813rem",
          fontWeight: "600",
          boxShadow: "none",
        },
        outlined: {
          border: "1px solid rgba(82, 66, 238, 0.2)",
          fontSize: "0.75rem",
          fontWeight: "600",
          color: "#5242EE",
        },
      },
    },
  },
});