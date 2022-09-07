import { Box, Grid, Link, Typography } from "@mui/material";
import Image from "next/image";

const contactData = [
  {
    city: "Palo Alto, USA",
    phone: "(866) 898-9087",
    address: "Coming soon!",
    email: "pa@solvemed.ai",
  },
  {
    city: "Cambridge, UK",
    phone: "+48 22 621 10 31",
    address: "26 Russell Ct, Cambridge CB2 1HW, United Kingdom",
    email: "cam@solvemed.ai",
  },
  {
    city: "Warsaw, Poland",
    phone: "+48 22 621 10 31",
    address: "Oboźna 9/105, 00-332 Warszawa, Poland",
    email: "ws@solvemed.ai",
  },
];

const Contact = () => (
  <Grid container paddingX={6.25} mt={32} mb={13} justifyContent="center">
    {contactData.map((item, idx) => (
      <Grid item xs={12} md={3} key={idx} display="flex" flexDirection="row" alignItems="flex-start">
        <Image src="/icons/location.svg" alt="location" width="15" height="18" />

        <Box ml={2.5}>
          <Typography fontSize="1.875rem" fontWeight="300" color="primary" mb={5} mt={-1}>
            {item.city}
          </Typography>

          <Link href={`tel:${item.phone}`} underline="hover" fontSize="1.125rem" color="primary.light">
            {item.phone}
          </Link>

          <Typography fontSize="1.125rem" color="primary.light" mb={3.75} mt={3.75}>
            {item.address}
          </Typography>

          <Link href={`mailto:${item.email}`} fontSize="1.125rem" color="primary.light">
            {item.email}
          </Link>
        </Box>
      </Grid>
    ))}
  </Grid>
);

export default Contact;
