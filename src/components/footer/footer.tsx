import { Box, Link, Typography } from "@mui/material";
import Image from "next/image";
import styles from "./Footer.module.css";

const Footer = () => (
  <div>
    <Image src="/icons/logo-small.svg" alt="logo" width="35" height="46" />

    <Typography color="primary.light" fontSize="0.75rem" mt={3}>
      &copy; 2022 Solvemed Group
    </Typography>
    <Typography color="primary.light" fontSize="0.75rem">
      All Rights reserved
    </Typography>

    <Box display="flex" justifyContent="space-between" alignItems="center" mt={3.5}>
      <div>
        <Link href="#" underline="none" color="primary.light" fontSize="0.75rem" mr={5}>
          Privacy Policy
        </Link>
        <Link href="#" underline="none" color="primary.light" fontSize="0.75rem" mr={5}>
          Terms of Use
        </Link>
        <Link href="#" underline="none" color="primary.light" fontSize="0.75rem" mr={5}>
          Cookie Policy
        </Link>
      </div>

      <div className={styles.socialIconsWrapper}>
        <Link href="https://www.linkedin.com/" className={styles.socialIconsWrapper} target="_blank" rel="noopener">
          <Typography fontSize="1.125rem" color="primary.light" mr={1}>
            Linkedin
          </Typography>
          <Image src="/icons/linkedin.svg" alt="linkedin" width="23" height="23" />
        </Link>

        <Link href="https://twitter.com/" className={styles.socialIconsWrapper} ml={5} target="_blank" rel="noopener">
          <Typography fontSize="1.125rem" color="primary.light" mr={1}>
            Twitter
          </Typography>
          <Image src="/icons/twitter.svg" alt="linkedin" width="23" height="23" />
        </Link>
      </div>
    </Box>
  </div>
);

export default Footer;
