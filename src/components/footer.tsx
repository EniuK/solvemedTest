import { Box, Link, Typography } from "@mui/material";
import Image from "next/image";

const Footer = () => (
  <Box>
    <Image src="/icons/logo-small.svg" alt="logo" width="35" height="46" />

    <Typography color="primary.light" variant="body6Wide" mt={3}>
      &copy; 2022 Solvemed Group
    </Typography>
    <Typography color="primary.light" variant="body6Wide">
      All Rights reserved
    </Typography>

    <Box display="flex" flexDirection={{ xs: "column", sm: "row" }} justifyContent="space-between" alignItems={{ xs: "flex-start", sm: "center" }} mt={3.5}>
      <div>
        <Link href="#" underline="none" color="primary.light" variant="body6Wide" mr="29px">
          Privacy Policy
        </Link>
        <Link href="#" underline="none" color="primary.light" variant="body6Wide" mr="29px">
          Terms of Use
        </Link>
        <Link href="#" underline="none" color="primary.light" variant="body6Wide">
          Cookie Policy
        </Link>
      </div>

      <Box display="flex" flexDirection="row" mt={{ xs: 2, sm: 0 }}>
        <Link href="https://www.linkedin.com/" display="flex" flexDirection="row" target="_blank" rel="noopener">
          <Typography variant="body2Wide" color="primary.light" mr={1}>
            Linkedin
          </Typography>
          <Image src="/icons/linkedin.svg" alt="linkedin" width="23" height="23" />
        </Link>

        <Link href="https://twitter.com/" display="flex" flexDirection="row" ml={5} target="_blank" rel="noopener">
          <Typography variant="body2Wide" color="primary.light" mr={1}>
            Twitter
          </Typography>
          <Image src="/icons/twitter.svg" alt="twitter" width="23" height="23" />
        </Link>
      </Box>
    </Box>
  </Box>
);

export default Footer;
