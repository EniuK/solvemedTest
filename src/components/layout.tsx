import { ReactNode } from "react";
import { Box } from "@mui/material";
import Contact from "./contact";
import Footer from "./footer/footer";

const Layout = ({ children }: { children: ReactNode }) => (
  <Box paddingY={4.75} paddingX={6.25}>
    <main>{children}</main>
    <Contact />
    <Footer />
  </Box>
);

export default Layout;
