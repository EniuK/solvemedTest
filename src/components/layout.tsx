import { Box } from "@mui/material";
import { ReactNode } from "react";
import Contact from "./contact";
import Footer from "./footer/footer";
import Header from "./header";

const Layout = ({ children }: { children: ReactNode }) => (
  <Box paddingY={4.75}>
    <Header />
    <main>{children}</main>
    <Contact />
    <Footer />
  </Box>
);

export default Layout;
