import { Box, Grid, Typography } from "@mui/material";
import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <Grid container xs={12} md={10} margin="auto" columnSpacing={2}>
      <Grid item xs={12} mb="100px">
        <Typography variant="h1" align="center">
          Meet breakthrough digital technology for brain health.
        </Typography>
      </Grid>

      <Grid item xs={12} mb="100px">
        <Box width={{ xs: "100%", sm: "80%", md: "50%" }} margin="auto">
          <Typography fontSize="42px" lineHeight="46.2px" fontWeight="300" mb={5}>
            Solvemed's health evaluation tools are designed to complement existing assessments by making patient data collection easier and more frequent.{" "}
          </Typography>
          <Typography fontSize="42px" lineHeight="46.2px" fontWeight="300">
            They also improve the quality of care by empowering and connecting patients, clinicians, and researchers and outside of clinical settings.
          </Typography>
        </Box>
      </Grid>

      <Grid item xs={12} sm={6} mb={{ xs: 3, md: 0 }}>
        <Typography fontSize="21px" lineHeight="28.4px">
          Assessment of the eye can provide important diagnostic information to the clinician about ophthalmic or neurological health.
        </Typography>
      </Grid>

      <Grid item xs={12} sm={6}>
        <Typography fontSize="21px" lineHeight="28.4px">
          However, in the past it has only been possible to measure the eye movements using specialist equipment that is not available to.
        </Typography>
      </Grid>

      <Grid item xs={12} md={6} mt="103px">
        <Typography fontSize="30px" fontWeight="600" mb="22px">
          Our Research and Development
        </Typography>
        <Typography fontSize="21px" lineHeight="28.4px">
          We are rapidly evolving our internal Research and Development team relying on synergy between AI, neuroscience and imaging expertise, to deliver unique portfolio of
          diagnostic with health evaluation methods for neurological disorders.
        </Typography>
      </Grid>
    </Grid>
  );
};

export default Home;
