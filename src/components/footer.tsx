import { Box, Link, Typography, Grid } from "@mui/material";
import Image from "next/image";
import styles from "./footer.module.css";

const contactData = [
  {
    city: "London",
    address: ["Millbank Tower", "21-24 Millbank", " London SW1P 4QP", "UK"],
    enquiries: "For all London enquiries",
    email: ["ldn@huma.com"],
  },
  {
    city: "New York",

    address: ["The Genome Center", "101 6th Avenue", " New Your NY 10013", "USA"],
    enquiries: "For all New York enquiries",
    email: ["nyc@huma.com"],
  },
  {
    city: "Shanghai",
    address: ["Room 123, 13th floor", "Shanghai Tower", "No. 501 Yincheng Middle", " Road", "China"],
    enquiries: "For all China enquiries",
    email: ["shg@huma.com"],
  },
  {
    city: "Hamburg",

    address: ["(DACH-Region)", "Huma Therapeutics Gmhb", "Raboisen 32", "20095 Hamburg"],
    enquiries: "For all enquiries",
    email: ["germany@huma.com", "austria@huma.com", "switzerland@huma.com"],
  },
];



const Footer = () => (
  <>
    <Box textAlign="center" >
      <img src="/images/pink1.svg" alt="Background pink" className={styles.bg} />
      <img src="/images/pink2.svg" alt="Background pink" className={styles.bg} />
    </Box>
    <Grid container mt={32} mb={13} justifyContent="space-between" columnSpacing={2} rowSpacing={8}>
      {contactData.map((item, idx) => (
        <Grid key={idx} item xs={12} sm={6} lg={2.5}>
          <Typography fontSize="1.562rem" fontWeight="300" color="primary" mb={7.5}>
            {item.city}
          </Typography>

          <Box display="flex" alignItems="flex-start">
            <img src="/icons/location.svg" alt="Location" />
            <Box ml={0.75}>
              {item.address.map((text: any, inx: any) => {
                return (
                  <Typography fontSize="0.937rem" marginBottom="0" color="primary.light" mb={4.75} mt={-0.2} key={inx} className="p">
                    {text}
                  </Typography>
                );
              })}
              {item.email.map((em, indx) => {
                return (
                  <Link href={`mailto:${em}`} fontSize="0.937rem" color="primary.light" display="block" key={indx}>
                    {em}
                  </Link>
                );
              })}
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
