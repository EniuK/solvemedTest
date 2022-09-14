import { ReactNode } from "react";
import { Box } from "@mui/material";
import Contact from "./Contact";
import Footer from "./Footer";
import Header from "./Header";

const Layout = ({ children }: { children: ReactNode }) => (
  <Box paddingY={4.75} maxWidth="1467px" mx="auto" paddingX={{ xs: 3, md: 6.25 }}>
    <Header />
    <main>{children}</main>
    <Contact />
    <Footer />
  </Box>
);

export default Layout;
