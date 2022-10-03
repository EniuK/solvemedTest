import { Box, Grid, Typography } from "@mui/material";
import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import styles from "./index.module.css";

const Home: NextPage = () => {
  return (
    <>
      <div>
        <Head>
          <title>Solvemed</title>
          <meta property="og:title" content="Solvemed" key="title" />
          <meta name="description" content="Solvemed main page" key="title" />
        </Head>
      </div>
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
          <Typography variant="subtitle1" mb={5}>
            Solvemed&apos;s health evaluation tools are designed to complement existing assessments by making patient data collection easier and more frequent.
          </Typography>
          <Typography variant="subtitle1">
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
            <Typography variant="subtitle1" mt="20px" mb="56px">
              Oculomotor apraxia
            </Typography>
            <Typography variant="body1">Target</Typography>
            <Typography variant="subtitle1" mt="20px" mb="56px">
              Parietal lobe
            </Typography>
            <Typography variant="body1">Diagnosis</Typography>
            <Typography variant="subtitle1" mt="20px" mb="56px">
              Alzheimer&apos;s
            </Typography>
          </Grid>
        </Grid>

        <Box display="flex" flexDirection={{ xs: "column", sm: "row" }} width={{ xs: "100%", md: "80%" }} margin="auto">
          <Typography variant="body1" mr={{ xs: 0, md: 3 }} mb={{ xs: 3, md: 0 }}>
          Assessment of the eye can provide important information to the clinician about the patient’s ophthalmological and neurological health.
          </Typography>
          <Typography variant="body1">However, up till now precise ocular measurements have required specialist equipment not available to most clinicians.</Typography>
        </Box>

        <Box position="relative" textAlign="center">
          <img src="/images/yellow2.svg" alt="Background yellow" className={styles.bg} />

          <Typography variant="subtitle3" mb="22px" mt="160px">
            Our Research and Development
          </Typography>
          <Typography variant="body1" width={{ xs: "100%", md: "50%" }} mx="auto" mb={4} color="primary.light">
            We are constantly developing our internal Research and Development capabilities leveraging the synergy between AI, neuroscience, and optical physics, to build a unique portfolio of health evaluation tools for some of the most challenging neurological disorders.
          </Typography>

          <Link href="/science">
            <a className={styles.scienceLink}>View Science</a>
          </Link>
        </Box>
      </Box>
    </>
  );
};

export default Home;
