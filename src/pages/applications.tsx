import React from "react";
import { NextPage } from "next";
import Image from "next/image";
import { Box, Grid, Typography, Link as LinkMUI, Button } from "@mui/material";
import styles from "./applications.module.css";
import { useParallax } from "react-scroll-parallax";
import { ParallaxProps } from "react-scroll-parallax/dist/components/Parallax/types";
import ApplicationsInfoGraphic from "../components/ApplicationsInfoGraphic/ApplicationsInfoGraphic";
import Head from "next/head";

const Applications: NextPage = () => {
  const parallaxSettings: ParallaxProps = { speed: -50, translateY: [0, -30] };

  const parallax1 = useParallax<HTMLDivElement>(parallaxSettings);
  const parallax2 = useParallax<HTMLDivElement>(parallaxSettings);
  const parallax3 = useParallax<HTMLDivElement>(parallaxSettings);

  return (
    <>
      <div>
        <Head>
          <title>Solvemed Applications</title>
          <meta property="og:title" content="Solvemed Applications" />
          <meta property="og:type" content="website" />
          <meta
            name="description"
            content="Decoding neurology. In the blink of AI. Solvemed is a VC-backed Neuroscience AI company working to redefine neurology care and drug development. With neurodegenerative diseases (dementias) as the primary focus area, Solvemed leverages its proprietary machine learning technology to develop first-in-class digital biomarkers to support development of neurological drugs and establish affordable clinical examination and remote monitoring tools."
          />
        </Head>
      </div>
      <Box>
        <Typography variant="h2" align="center" mb="20px">
          Applications
        </Typography>

        <ApplicationsInfoGraphic />

        <Grid id="clinicians" container>
          <Grid item container xs={12} sm={12} md={12} alignItems="center" columnSpacing={2} rowSpacing={4} position="relative">
            <Grid item xs={12} md={2}>
              <ol className={styles.list}>
                <li className={styles.listItem}>
                  <a href="#clinicians">Clinicians </a>
                </li>
                <li className={styles.listItemInactive}>
                  <a href="#research">
                    Research <br />
                    community
                  </a>
                </li>
                <li className={styles.listItemInactive}>
                  <a href="#pharma">
                    Pharma & <br />
                    biotechs
                  </a>
                </li>
              </ol>
            </Grid>

            <Grid item container xs={12} sm={7} md={5} justifyContent="center" mt={{ xs: 8, sm: 0 }}>
              <div ref={parallax1.ref}>
                <Image src="/images/applications1.png" alt="applications1" height="608px" width="423px" />
              </div>
              <Grid item xs={10} sm={10} md={10} lg={8}>
                <Typography variant="body3" letterSpacing="-0.04em" mb="30px">
                  For intensive care specialists, paramedics, ophthalmologists, neurologists, among others.
                </Typography>
              </Grid>
              <LinkMUI href="/contact" rel="noopener" className={styles.externalLinkContainer}>
                <Button color="primary" variant="contained" size="large">
                  Get early access to Solvemed&apos;s medical devices
                </Button>
              </LinkMUI>
            </Grid>

            <Grid item xs={12} sm={5} md={4} mt={{ xs: 8, sm: 0 }}>
              <Typography variant="body1Wide" mb="60px">
                Clinicians
              </Typography>
              <Typography variant="subtitle1" mb="60px">
                Solvemed champions digital-first care, where cutting-edge technology supports clinicians and empowers patients.
              </Typography>
              <ul>
                <li className={styles.listItemRow}>
                  <Typography variant="body2">Replace expensive equipment with cost-effective camera-enabled tools</Typography>
                </li>
                <li className={styles.listItemRow}>
                  <Typography variant="body2">Improve clinical decision-making with data analytics and visualisation platform</Typography>
                </li>
                <li className={styles.listItemRow}>
                  <Typography variant="body2">Enable remote patient monitoring</Typography>
                </li>
              </ul>
            </Grid>
          </Grid>

          <Grid id="research" item xs={12}>
            <Box marginY="138px" width="100%" height={33} position="relative">
              <Image src="/icons/divider.svg" alt="divider" layout="fill" />
            </Box>
          </Grid>

          <Grid item container xs={12} alignItems="center" columnSpacing={2} rowSpacing={4} position="relative">
            <img src="/images/blue6.svg" alt="Background blue" className={styles.bg} />
            <img src="/images/green5.svg" alt="Background green" className={styles.bg3} />
            <img src="/images/pink4.svg" alt="Background pink" className={styles.bg2} />

            <Grid item xs={12} md={2}>
              <ol className={styles.list}>
                <li className={styles.listItemInactive}>
                  <a href="#clinicians">Clinicians </a>
                </li>
                <li className={styles.listItem}>
                  <a href="#research">
                    Research <br />
                    community
                  </a>
                </li>
                <li className={styles.listItemInactive}>
                  <a href="#pharma">
                    Pharma & <br />
                    biotechs
                  </a>
                </li>
              </ol>
            </Grid>

            <Grid item xs={12} sm={5} md={4} mt={{ xs: 8, sm: 0 }}>
              <Typography variant="body1Wide" mb="60px">
                Research community
              </Typography>
              <Typography variant="subtitle1" mb="60px">
                Solvemed offers tailor-made research tools, including data capture devices and specialised machine learning capabilities.
              </Typography>
              <ul>
                <li className={styles.listItemRow}>
                  <Typography variant="body2">Strengthen research design by collecting and validating novel biomarkers</Typography>
                </li>
                <li className={styles.listItemRow}>
                  <Typography variant="body2">Expand data potential and discover new insights</Typography>
                </li>
                <li className={styles.listItemRow}>
                  <Typography variant="body2">Understand and stratify diseases</Typography>
                </li>
              </ul>
            </Grid>

            <Grid item container xs={12} sm={7} md={5} justifyContent="center" mt={{ xs: 8, sm: 0 }}>
              <div ref={parallax2.ref}>
                <img src="/images/applications2.png" alt="applications2" style={{ width: "100%" }} />
              </div>

              <Grid item xs={10} sm={10} md={10} lg={8}>
                <Typography variant="body3" letterSpacing="-0.04em" mb="30px">
                  For intensive care specialists, paramedics, neuro-ophthalmologists, neurologists, among others.
                </Typography>
              </Grid>
              <LinkMUI href="/contact" rel="noopener" className={styles.externalLinkContainer}>
                <Button color="primary" variant="contained" size="large">
                  Get early access to Solvemed&apos;s medical devices
                </Button>
              </LinkMUI>
            </Grid>
          </Grid>

          <Grid id="pharma" item xs={12}>
            <Box marginY="138px" width="100%" height={33} position="relative">
              <Image src="/icons/divider.svg" alt="divider" layout="fill" />
            </Box>
          </Grid>

          <Grid item container xs={12} alignItems="center" columnSpacing={2} rowSpacing={4}>
            <Grid item xs={12} md={2}>
              <ol className={styles.list}>
                <li className={styles.listItemInactive}>
                  <a href="#clinicians">Clinicians </a>
                </li>
                <li className={styles.listItemInactive}>
                  <a href="#research">
                    Research <br />
                    community
                  </a>
                </li>
                <li className={styles.listItem}>
                  <a href="#pharma">
                    Pharma & <br />
                    biotechs
                  </a>
                </li>
              </ol>
            </Grid>

            <Grid item container xs={12} sm={7} md={5} justifyContent="center" mt={{ xs: 8, sm: 0 }}>
              <div ref={parallax3.ref}>
                <img src="/images/applications3.png" alt="applications3" style={{ width: "100%", transform: "translateX(-10%)" }} />
              </div>

              <Grid item xs={10} sm={10} md={10} lg={8}>
                <Typography variant="body3" letterSpacing="-0.04em" mb="30px">
                  For research-based life science companies active in neurology and ophthalmology.
                </Typography>
              </Grid>
              <LinkMUI href="/contact" rel="noopener" className={styles.externalLinkContainer}>
                <Button color="primary" variant="contained" size="large">
                  Get early access to Solvemed&apos;s medical devices
                </Button>
              </LinkMUI>
            </Grid>

            <Grid item xs={12} sm={5} md={4} mt={{ xs: 8, sm: 0 }}>
              <Typography variant="body1Wide" mb="60px">
                Pharma and biotechs
              </Typography>
              <Typography variant="subtitle1" mb="60px">
                Solvemed addresses some of most pressing challenges of the neuroscience pharma industry.
              </Typography>
              <ul>
                <li className={styles.listItemRow}>
                  <Typography variant="body2">De-risk clinical development and reduce trial duration and costs</Typography>
                </li>
                <li className={styles.listItemRow}>
                  <Typography variant="body2">Track disease progression and demonstrate drug efficacy</Typography>
                </li>
                <li className={styles.listItemRow}>
                  <Typography variant="body2">Use novel endpoints and stratify patient cohorts</Typography>
                </li>
              </ul>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default Applications;
