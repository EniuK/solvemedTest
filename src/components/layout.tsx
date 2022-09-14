import { Box } from "@mui/material";
import { ReactNode } from "react";
import Contact from "./contact";
import Footer from "./footer";
import Header from "./header";

const Layout = ({ children }: { children: ReactNode }) => (
  <Box paddingY={4.75} maxWidth="1467px" mx="auto" paddingX={{ xs: 3, md: 6.25 }}>
    {/* <Box paddingY={4.75}> */}
    <Header />
    <main>{children}</main>
    <Contact />
    <Footer />
  </Box>
);

export default Layout;
