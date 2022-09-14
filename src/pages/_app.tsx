import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ThemeProvider } from "@mui/material";
import Layout from "../components/layout";
import { theme } from "../config/theme";
import { ParallaxProvider } from "react-scroll-parallax";

const MyApp = ({ Component, pageProps }: AppProps) => (
  <ThemeProvider theme={theme}>
    <ParallaxProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ParallaxProvider>
  </ThemeProvider>
);

export default MyApp;
