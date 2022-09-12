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
    phone: "+44 7857823182",
    address: "C/O Stone King Llp Bateman House, 82-88 Hills Road, Cambridge, United Kingdom, CB2 1LQ",
    email: "cam@solvemed.ai",
  },
  {
    city: "Warsaw, Poland",
    phone: "+48 795496397",
    address: "Święty Marcin 29 / 8, 61-806 Poznan, Polska",
    email: "ws@solvemed.ai",
  },
];

const Contact = () => (
  <Grid container mt={32} mb={13} justifyContent="space-between">
    {contactData.map((item, idx) => (
      <Grid key={idx} item xs={12} md={4} mb={{ xs: 6, md: 0 }} display="flex" flexDirection="row" alignItems="flex-start">
        <Image src="/icons/location.svg" alt="location" width="15" height="18" />

        <Box display="flex" flexDirection="column" justifyContent="flex-start" ml={2}>
          <Typography fontSize="1.875rem" fontWeight="300" color="primary" mb={5} mt={-1}>
            {item.city}
          </Typography>

          <Link href={`tel:${item.phone}`} underline="hover" fontSize="1.125rem" color="primary.light">
            {item.phone}
          </Link>

          <Typography fontSize="1.125rem" color="primary.light" my={3.75} width="70%">
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
