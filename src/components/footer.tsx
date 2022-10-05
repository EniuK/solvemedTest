import { Box, Link, Typography, Grid } from "@mui/material";
import Image from "next/image";
import styles from "./footer.module.css";

const contactData = [
  {
    city: "Palo Alto, USA",
    phone: "+1 (866) 898-9087",
    address: "Coming soon!",
    email: "pa@solvemed.ai",
  },
  {
    city: "Cambridge, UK",
    phone: "+44 7857823182",
    address: "82-88 Hills Rd, Cambridge, United Kingdom, CB2 1LQ",
    email: "cam@solvemed.ai",
  },
  {
    city: "Warsaw, Poland",
    phone: "+48 795496397",
    address: "Święty Marcin 29 / 8, 61-806 Poznan, Polska",
    email: "ws@solvemed.ai",
  },
  {
    city: "Hong Kong",
    phone: "+44 7857823182",
    address: "Coming soon!",
    email: "hk@solvemed.ai",
  },
];



const Footer = () => (
  <>
    <Box textAlign="center">
      <img src="/images/pink1.svg" alt="Background pink" className={styles.bg} />
      <img src="/images/pink2.svg" alt="Background pink" className={styles.bg} />
    </Box>
    <Grid container mt={32} mb={13} justifyContent="space-between" columnSpacing={2} rowSpacing={8}>
      {contactData.map((item, idx) => (
        <Grid key={idx} item xs={12} sm={6} lg={2.5} style={{ margin: "0 auto" }}>
          <Typography variant="subtitle2" color="primary" mb={2}>
            <img src="/icons/location.svg" alt="Location" /> {item.city}
          </Typography>

          <Box display="flex" alignItems="flex-start">
            <Box ml={3}>
              <Typography variant="body3" color="primary.light" mb={4.75} mt={-0.2}>
                {item.address}
              </Typography>

              <Link href={`tel:${item.phone}`} underline="hover" color="primary.light" display="block" variant="body3">
                {item.phone}
              </Link>

              <Link href={`mailto:${item.email}`} color="primary.light" display="block" variant="body3" mb={4.75}>
                {item.email}
              </Link>
            </Box>
          </Box>
        </Grid>
      ))}
    </Grid>
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
          <Link href="https://www.linkedin.com/company/solvemed-group/" display="flex" flexDirection="row" target="_blank" rel="noopener">
            <Typography variant="body2Wide" color="primary.light" mr={1}>
              Linkedin
            </Typography>
            <Image src="/icons/linkedin.svg" alt="linkedin" width="23" height="23" />
          </Link>

          <Link href="https://twitter.com/solvemed" display="flex" flexDirection="row" ml={5} target="_blank" rel="noopener">
            <Typography variant="body2Wide" color="primary.light" mr={1}>
              Twitter
            </Typography>
            <Image src="/icons/twitter.svg" alt="twitter" width="23" height="23" />
          </Link>
        </Box>
      </Box>
    </Box>
  </>
);

export default Footer;
