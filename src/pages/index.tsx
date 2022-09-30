import { Box, Grid, Typography } from "@mui/material";
import type { NextPage } from "next";
import Link from "next/link";
import styles from "./index.module.css";

const Home: NextPage = () => {
  return (
    <Box>
      <Box position="relative">
        <img src="/images/pink4.svg" alt="Background pink" className={styles.bg3} />
        <img src="/images/green5.svg" alt="Background green" className={styles.bg5} />

        <Typography variant="h1" align="center">
          Meet breakthrough digital technology for brain health.
        </Typography>

        <img src="/images/brainWithHand.png" alt="Intro image" className={styles.introImage} />
        <img src="/images/blue7.svg" alt="Background blue" className={styles.bg7} />
      </Box>

      <Box width={{ xs: "100%", sm: "80%", md: "50%" }} margin="auto">
        <Typography variant="h4" mb={5}>
          Solvemed's health evaluation tools are designed to complement existing assessments by making patient data collection easier and more frequent.
        </Typography>
        <Typography variant="h4">
          They also improve the quality of care by empowering and connecting patients, clinicians, and researchers and outside of clinical settings.
        </Typography>
      </Box>

      <Grid container mb="120px" mt="96px" justifyContent="space-between">
        <Grid item xs={12} md={6} position="relative" marginBottom={{ xs: 20, md: 0 }}>
          <img src="/images/women.png" alt="Women" className={styles.womenImg} />
          <img src="/images/blue5.svg" alt="Background blue" className={styles.bg4} />
          <img src="/images/blue6.svg" alt="Background blue" className={styles.bg2} />
          <img src="/images/pink4.svg" alt="Background pink" className={styles.bg6} />
        </Grid>
        <Grid item xs={12} md={4} display="flex" flexDirection="column" justifyContent="center">
          <Typography variant="body1">Metric</Typography>
          <Typography variant="h4" mt="20px" mb="56px">
            Oculomotor apraxia
          </Typography>
          <Typography variant="body1">Target</Typography>
          <Typography variant="h4" mt="20px" mb="56px">
            Parietal lobe
          </Typography>
          <Typography variant="body1">Diagnosis</Typography>
          <Typography variant="h4" mt="20px" mb="56px">
            Alzheimer's
          </Typography>
        </Grid>
      </Grid>

      <Box display="flex" flexDirection={{ xs: "column", sm: "row" }} width={{ xs: "100%", md: "80%" }} margin="auto">
        <Typography fontSize="21px" lineHeight="28.4px" mr={{ xs: 0, md: 3 }} mb={{ xs: 3, md: 0 }}>
          Assessment of the eye can provide important diagnostic information to the clinician about ophthalmic or neurological health.
        </Typography>
        <Typography fontSize="21px" lineHeight="28.4px">
          However, in the past it has only been possible to measure the eye movements using specialist equipment that is not available to.
        </Typography>
      </Box>

      <Box position="relative" textAlign="center">
        <img src="/images/yellow2.svg" alt="Background yellow" className={styles.bg} />

        <Typography variant="h5" fontWeight="600" mb="22px" mt="160px">
          Our Research and Development
        </Typography>
        <Typography variant="body1" width={{ xs: "100%", md: "50%" }} mx="auto" mb={4} color="primary.light">
          We are rapidly evolving our internal Research and Development team relying on synergy between AI, neuroscience and imaging expertise, to deliver unique portfolio of
          diagnostic with health evaluation methods for neurological disorders.
        </Typography>

        <Link href="/science">
          <a className={styles.scienceLink}>View Science</a>
        </Link>
      </Box>
    </Box>
  );
};

export default Home;
