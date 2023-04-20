import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { Box, Stack, Typography } from "@mui/material";
import styles from "./index.module.css";
import "animate.css";
import { motion } from "framer-motion";
import { useState } from "react";
const Home: NextPage = () => {
  return (
    <>
      <div>
        <Head>
          <title>Solvemed</title>
          <meta property="og:title" content="Solvemed" />
          <meta property="og:type" content="website" />
          <meta
            name="description"
            content="Decoding neurology. In the blink of AI. Solvemed is a VC-backed Neuroscience AI company working to redefine neurology care and drug development. With neurodegenerative diseases (dementias) as the primary focus area, Solvemed leverages its proprietary machine learning technology to develop first-in-class digital biomarkers to support development of neurological drugs and establish affordable clinical examination and remote monitoring tools."
          />
        </Head>
      </div>
      <Box>
        <Box>
          <Typography
            component={motion.p}
            variant="h1"
            align="center"
            marginX="auto"
            width={{ xs: "100%", md: "80%", lg: "70%" }}
            variants={{ initial: { opacity: 0, y: 100 }, animate: { opacity: 1, y: 0 } }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            Meet breakthrough digital technology for brain health.
          </Typography>

          <img src="/images/brainWithHand.png" alt="Intro image" className={styles.brainImg} />
        </Box>

        <Box width={{ xs: "100%", sm: "60%", md: "50%", xl: "40%" }} margin="auto">
          <Typography variant="subtitle1" mb={5}>
            Solvemed&apos;s health evaluation tools are designed to complement existing assessments by making the patient data more precise and objective, and the data collection
            easier and more frequent.
          </Typography>
          <Typography variant="subtitle1">
            They also improve the quality of neurological care by empowering and connecting patients, clinicians, and researchers inside and outside of clinical settings.
          </Typography>
        </Box>

        <Box position="relative">
          <Stack mb="120px" mt="96px" flexDirection="row" alignItems="center" justifyContent="stretch" className={styles.animationWrapper}>
            <div className={styles.womenImgWrapper}>
              <img src="/images/women.png" alt="Women" className={styles.womenImg} />
            </div>

            <div>
              <Typography variant="body1">Metric</Typography>
              <Typography
                whiteSpace="pre-line"
                variant="subtitle1"
                mt={{ xs: "10px", sm: "20px" }}
                mb={{ xs: 3, sm: 7 }}
                className="animate__animated animate__fadeIn animate__slower"
              >
                Internuclear <br />
                ophthalmoplegia
              </Typography>
              <Typography variant="body1">Target</Typography>
              <Typography
                whiteSpace="pre-line"
                variant="subtitle1"
                mt={{ xs: "10px", sm: "20px" }}
                mb={{ xs: 3, sm: 7 }}
                className="animate__animated animate__fadeIn animate__slower"
              >
                Medial longitudinal <br />
                fasciculus
              </Typography>
              <Typography variant="body1">Diagnosis</Typography>
              <Typography whiteSpace="pre-line" variant="subtitle1" mt={{ xs: "10px", sm: "20px" }} className="animate__animated animate__fadeIn animate__slower">
                Multiple sclerosis <br />
                (MS)
              </Typography>
            </div>
          </Stack>

          <img src="/images/overlay.png" alt="Women overlay" className={styles.womenImgOverlay} />
        </Box>

        <Box display="flex" flexDirection={{ xs: "column", sm: "row" }} justifyContent="space-between" width={{ xs: "100%", md: "80%", lg: "70%" }} margin="auto">
          <Typography variant="body1" pr={{ xs: 0, sm: 3 }} mb={{ xs: 3, md: 0 }}>
            Assessment of the eye can provide important information to the clinician about the patient’s ophthalmological and neurological health.
          </Typography>
          <Typography variant="body1">However, up till now precise ocular measurements have required specialist equipment not available to most clinicians.</Typography>
        </Box>

        <Box textAlign="center">
          <Typography variant="subtitle3" mb="22px" mt="160px">
            Our Research and Development
          </Typography>
          <Typography variant="body1" width={{ xs: "100%", md: "50%" }} mx="auto" mb={4} color="primary.light">
            We are constantly developing our internal Research and Development capabilities leveraging the synergy between AI, neuroscience, and optical physics, to build a unique
            portfolio of health evaluation tools for some of the most challenging neurological disorders.
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
