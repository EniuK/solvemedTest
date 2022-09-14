import React from "react";
import { NextPage } from "next";
import Image from "next/image";
import { Box, Grid, Typography } from "@mui/material";
import styles from "./applications.module.css";
import { useParallax } from "react-scroll-parallax";
import { ParallaxProps } from "react-scroll-parallax/dist/components/Parallax/types";

const Applications: NextPage = () => {
  const parallaxSettings: ParallaxProps = { speed: -50, translateY: [0, -30] };

  const parallax1 = useParallax<HTMLDivElement>(parallaxSettings);
  const parallax2 = useParallax<HTMLDivElement>(parallaxSettings);
  const parallax3 = useParallax<HTMLDivElement>(parallaxSettings);

  return (
    <Box>
      <Typography variant="h2" align="center" mb="100px">
        Applications
      </Typography>

      <Grid container>
        <Grid item container xs={12} alignItems="center" columnSpacing={2} rowSpacing={4} position="relative">
          <img src="/images/blue6.svg" alt="Background blue" className={styles.bg} />

          <Grid item xs={12} md={2}>
            <ol className={styles.list}>
              <li className={styles.listItem}>Clinicians</li>
              <li className={styles.listItemInactive}>
                Research <br />
                community
              </li>
              <li className={styles.listItemInactive}>
                Pharma & <br />
                biotechs
              </li>
            </ol>
          </Grid>

          <Grid item container xs={12} sm={6} md={5} justifyContent="center">
            <div ref={parallax1.ref}>
              <Image src="/images/applications1.png" alt="applications1" height="608px" width="423px" />
            </div>

            <Typography fontSize="16px" lineHeight="19.04px" mb="30px">
              For intensive care specialists, paramedics, ophthalmologists, neurologists, among others.
            </Typography>

            <Box bgcolor="#5242EE" borderRadius="100px" py="20px" px="32px" textAlign="center">
              <Typography color="#fff" fontSize="13px" lineHeight="15.6px" fontWeight="600" textTransform="uppercase">
                Get early access to Solvemed medical devices
              </Typography>
            </Box>
          </Grid>

          <Grid item xs={12} sm={6} md={5} mt={{ xs: 8, sm: 0 }}>
            <Typography variant="h5" mb="60px">
              Clinicians
            </Typography>
            <Typography variant="h4" mb="60px">
              Solvemed champions digital-first care, where cutting-edge technology supports clinicians and empowers patients.
            </Typography>
            <ul>
              <li className={styles.listItemRow}>
                <Typography variant="h6">Replace expensive equipment with cost-effective camera-enabled tools with access to data directly from your phone.</Typography>
              </li>
              <li className={styles.listItemRow}>
                <Typography variant="h6">Improve clinical decision-making with data analytics and visualisation platform</Typography>
              </li>
              <li className={styles.listItemRow}>
                <Typography variant="h6">Enable remote patient monitoring</Typography>
              </li>
            </ul>
          </Grid>
        </Grid>

        <Grid item xs={12}>
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
              <li className={styles.listItemInactive}>Clinicians</li>
              <li className={styles.listItem}>
                Research <br />
                community
              </li>
              <li className={styles.listItemInactive}>
                Pharma & <br />
                biotechs
              </li>
            </ol>
          </Grid>

          <Grid item xs={12} sm={6} md={5} mt={{ xs: 8, sm: 0 }}>
            <Typography variant="h5" mb="60px">
              Research community
            </Typography>
            <Typography variant="h4" mb="60px">
              Solvemed offers tailor-made research tools, including smartphone-based data capture devices and machine learning analytical capabilities.
            </Typography>
            <ul>
              <li className={styles.listItemRow}>
                <Typography variant="h6">Strengthen research design by collecting and validating novel biomarkers</Typography>
              </li>
              <li className={styles.listItemRow}>
                <Typography variant="h6">Expand data potential and discover new insights</Typography>
              </li>
              <li className={styles.listItemRow}>
                <Typography variant="h6">Understand and stratify diseases</Typography>
              </li>
            </ul>
          </Grid>

          <Grid item container xs={12} sm={6} md={5} justifyContent="center">
            <div ref={parallax2.ref}>
              <img src="/images/applications2.png" alt="applications2" style={{ width: "100%" }} />
            </div>

            <Typography fontSize="16px" lineHeight="19.04px" mb="30px">
              For intensive care specialists, paramedics, neuro-ophthalmologists, neurologists, among others.
            </Typography>
            <Box bgcolor="#5242EE" borderRadius="100px" py="20px" px="32px" textAlign="center">
              <Typography color="#fff" fontSize="13px" lineHeight="15.6px" fontWeight="600" textTransform="uppercase">
                Get early access to Solvemed medical devices
              </Typography>
            </Box>
          </Grid>
        </Grid>

        <Grid item xs={12}>
          <Box marginY="138px" width="100%" height={33} position="relative">
            <Image src="/icons/divider.svg" alt="divider" layout="fill" />
          </Box>
        </Grid>

        <Grid item container xs={12} alignItems="center" columnSpacing={2} rowSpacing={4}>
          <Grid item xs={12} md={2}>
            <ol className={styles.list}>
              <li className={styles.listItemInactive}>Clinicians</li>
              <li className={styles.listItemInactive}>
                Research <br />
                community
              </li>
              <li className={styles.listItem}>
                Pharma & <br />
                biotechs
              </li>
            </ol>
          </Grid>

          <Grid item container xs={12} sm={6} md={5} justifyContent="center">
            <div ref={parallax3.ref}>
              <img src="/images/applications3.png" alt="applications3" style={{ width: "100%", transform: "translateX(-10%)" }} />
            </div>

            <Typography fontSize="16px" lineHeight="19.04px" mb="30px">
              For research-based life science companies active in neurology and ophthalmology.
            </Typography>
            <Box bgcolor="#5242EE" borderRadius="100px" py="20px" px="32px" textAlign="center">
              <Typography color="#fff" fontSize="13px" lineHeight="15.6px" fontWeight="600" textTransform="uppercase">
                Get early access to Solvemed medical devices
              </Typography>
            </Box>
          </Grid>

          <Grid item xs={12} sm={6} md={5} mt={{ xs: 8, sm: 0 }}>
            <Typography variant="h5" mb="60px">
              Pharma and biotechs
            </Typography>
            <Typography variant="h4" mb="60px">
              Solvemed addresses some of most pressing challenges of the neuroscience pharma industry.
            </Typography>
            <ul>
              <li className={styles.listItemRow}>
                <Typography variant="h6">De-risk clinical development and reduce trial duration and costs</Typography>
              </li>
              <li className={styles.listItemRow}>
                <Typography variant="h6">Track disease progression and demonstrate drug efficacy</Typography>
              </li>
              <li className={styles.listItemRow}>
                <Typography variant="h6">Use novel endpoints and stratify patient cohorts</Typography>
              </li>
            </ul>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Applications;
