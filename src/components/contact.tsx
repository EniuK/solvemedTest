import { Box, Grid, Link, Typography } from "@mui/material";

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
    address: "C/O Stone King Llp Bateman House, 82-88 Hills Road, Cambridge, United Kingdom, CB2 1LQ",
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
    address: "C/O Stone King Llp Bateman House, 82-88 Hills Road, Cambridge, United Kingdom, CB2 1LQ",
    email: "hk@solvemed.ai",
  },
];

const Contact = () => (
  <Grid container mt={32} mb={13} justifyContent="space-between" columnSpacing={2} rowSpacing={8}>
    {contactData.map((item, idx) => (
      <Grid key={idx} item xs={12} sm={6} lg={2.5}>
        <Typography fontSize="1.875rem" fontWeight="300" color="primary" mb={7.5}>
          {item.city}
        </Typography>

        <Box display="flex" alignItems="flex-start">
          <img src="/icons/location.svg" alt="Location" />
          <Box ml={0.75}>
            <Typography fontSize="1.125rem" color="primary.light" mb={4.75} mt={-0.2}>
              {item.address}
            </Typography>

            <Link href={`tel:${item.phone}`} underline="hover" fontSize="1.125rem" color="primary.light" display="block">
              {item.phone}
            </Link>

            <Link href={`mailto:${item.email}`} fontSize="1.125rem" color="primary.light" display="block">
              {item.email}
            </Link>
          </Box>
        </Box>
      </Grid>
    ))}
  </Grid>
);

export default Contact;
