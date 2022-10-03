import { ReactNode } from "react";
import { Box } from "@mui/material";
import Footer from "./footer";
import Header from "./header";

const Layout = ({ children }: { children: ReactNode }) => (
  <Box paddingY={4.75} maxWidth="1467px" mx="auto" paddingX={{ xs: 3, md: 6.25 }} overflow="visible">
    <Header />
    <main>{children}</main>
    <Footer />
  </Box>
);

export default Layout;
