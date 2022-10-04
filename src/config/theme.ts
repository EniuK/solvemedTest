import { createTheme } from "@mui/material";

declare module "@mui/material/styles" {
  interface TypographyVariants {
    subtitle3: React.CSSProperties;
    body3: React.CSSProperties;
    body4: React.CSSProperties;
    body5: React.CSSProperties;
    body6: React.CSSProperties;
    body1Wide: React.CSSProperties;
    body2Wide: React.CSSProperties;
    body4Wide: React.CSSProperties;
    body6Wide: React.CSSProperties;
  }
  interface TypographyVariantsOptions {
    subtitle3?: React.CSSProperties;
    body3?: React.CSSProperties;
    body4?: React.CSSProperties;
    body5?: React.CSSProperties;
    body6?: React.CSSProperties;
    body1Wide?: React.CSSProperties;
    body2Wide?: React.CSSProperties;
    body4Wide?: React.CSSProperties;
    body6Wide?: React.CSSProperties;
  }
}
declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    subtitle3: true;
    body3: true;
    body4: true;
    body5: true;
    body6: true;
    body1Wide: true;
    body2Wide: true;
    body4Wide: true;
    body6Wide: true;
  }
}

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
    fontFamily: "FinancierDisplay",
    h1: {
      fontSize: "124px",
      fontWeight: "300",
      letterSpacing: "-0.03em",
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
      letterSpacing: "-0.02em",
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
      letterSpacing: "-0.02em",
      "@media (max-width:900px)": {
        fontSize: "64px",
      },
    },
    subtitle1: {
      fontSize: "42px",
      lineHeight: "46.2px",
      fontWeight: "300",
      letterSpacing: "-0.02em",
      "@media (max-width:900px)": {
        fontSize: "30px",
        lineHeight: "36px",
      },
    },
    subtitle2: {
      fontSize: "30px",
      lineHeight: "33px",
      fontWeight: "300",
      letterSpacing: "-0.02em",
    },
    subtitle3: {
      fontFamily: "SuisseIntl",
      fontSize: "30px",
      lineHeight: "36px",
      fontWeight: "600",
      letterSpacing: "-0.02em",
    },
    body1: {
      fontFamily: "SuisseIntl",
      fontSize: "21px",
      lineHeight: "28.14px",
      letterSpacing: "-0.02em",
      fontWeight: "400",
    },
    body1Wide: {
      fontFamily: "SuisseIntl",
      fontSize: "21px",
      lineHeight: "24px",
      letterSpacing: "-0.04em",
      fontWeight: "400",
    },
    body2: {
      fontFamily: "SuisseIntl",
      fontSize: "18px",
      lineHeight: "24.3px",
      letterSpacing: "-0.02em",
      fontWeight: "400",
    },
    body2Wide: {
      fontFamily: "SuisseIntl",
      fontSize: "18px",
      lineHeight: "24.3px",
      letterSpacing: "-0.04em",
      fontWeight: "400",
    },
    body3: {
      fontFamily: "SuisseIntl",
      fontSize: "16px",
      lineHeight: "21.6px",
      letterSpacing: "-0.01em",
      fontWeight: "400",
    },
    body4: {
      fontFamily: "SuisseIntl",
      fontSize: "14px",
      lineHeight: "15.93px",
      letterSpacing: "-0.01em",
      fontWeight: "400",
    },
    body4Wide: {
      fontFamily: "SuisseIntl",
      fontSize: "14px",
      lineHeight: "18.2px",
      letterSpacing: "-0.04em",
      fontWeight: "400",
    },
    body5: {
      fontFamily: "SuisseIntl",
      fontSize: "13px",
      lineHeight: "15.6px",
      fontWeight: "600",
    },
    body6: {
      fontFamily: "SuisseIntl",
      fontSize: "12px",
      lineHeight: "16.32px",
      fontWeight: "400",
    },
    body6Wide: {
      fontFamily: "SuisseIntl",
      fontSize: "12px",
      lineHeight: "14.4px",
      fontWeight: "400",
      letterSpacing: "-0.01em",
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
        @font-face {
          font-family: 'FinancierDisplay';
          font-style: normal;
          font-weight: 300;
          src: url('/fonts/Financier-Display-Light.woff2');
        }
        @font-face {
          font-family: 'SuisseIntl';
          font-style: normal;
          font-weight: 400;
          src: url('/fonts/SuisseIntl-Regular.ttf');
        }
        @font-face {
          font-family: 'SuisseIntl';
          font-style: normal;
          font-weight: 600;
          src: url('/fonts/SuisseIntl-SemiBold.ttf');
        }
      `,
    },
    MuiTypography: {
      defaultProps: {
        variant: "h1",
        variantMapping: {
          subtitle3: "h6",
          body3: "p",
          body4: "p",
          body5: "p",
          body6: "p",
          body1Wide: "p",
          body2Wide: "p",
          body4Wide: "p",
          body6Wide: "p",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: "100px",
          fontFamily: "SuisseIntl",
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
