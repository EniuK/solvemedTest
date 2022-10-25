import React from "react";
import { NextPage } from "next";
import Image from "next/image";
import { Box, Grid, Hidden, Typography } from "@mui/material";
import styles from "./applications.module.css";
import ApplicationsInfoGraphic from "../components/ApplicationsInfoGraphic/ApplicationsInfoGraphic";
import Head from "next/head";
import AnimatedButton from "../components/AnimatedButton/AnimatedButton";
import { motion } from "framer-motion";

const Applications: NextPage = () => (
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
      <Typography
        component={motion.p}
        variant="h2"
        align="center"
        mb={{ xs: 5.5, md: 2.5 }}
        variants={{ initial: { opacity: 0, y: 50 }, animate: { opacity: 1, y: 0 } }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        Applications
      </Typography>

      <ApplicationsInfoGraphic />

      <Grid id="clinicians" container mt={10}>
        <Grid item container xs={12} sm={12} md={12} alignItems="center" columnSpacing={2} rowSpacing={4}>
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
            <Image src="/images/applications1.png" alt="applications1" height="608px" width="423px" />
            <Grid item xs={10} sm={10} md={10} lg={8}>
              <Typography variant="body3" letterSpacing="-0.04em" mb="30px">
                For intensive care specialists, paramedics, ophthalmologists, neurologists, among others.
              </Typography>
              <Hidden only="xs">
                <AnimatedButton url="/contact" variant="filled">
                  Get early access to Solvemed&apos;s medical devices
                </AnimatedButton>
              </Hidden>
            </Grid>
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
            <Hidden smUp>
              <AnimatedButton url="/contact" variant="filled">
                Get early access to Solvemed&apos;s medical devices
              </AnimatedButton>
            </Hidden>
          </Grid>
        </Grid>

        <Grid id="research" item xs={12}>
          <Box marginY={{ xs: "38px", sm: "98px", md: "138px" }} width="100%" height={33} position="relative">
            <Image src="/icons/divider.svg" alt="divider" layout="fill" />
          </Box>
        </Grid>

        <Grid item container xs={12} alignItems="center" columnSpacing={2} rowSpacing={4}>
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
            <img src="/images/applications2.png" alt="applications2" style={{ width: "100%" }} />

            <Grid item xs={10} sm={10} md={10} lg={8} mt={9.5}>
              <Typography variant="body3" letterSpacing="-0.04em" mb="30px">
                For intensive care specialists, paramedics, neuro-ophthalmologists, neurologists, among others.
              </Typography>
              <AnimatedButton url="/contact" variant="filled">
                Get early access to Solvemed&apos;s medical devices
              </AnimatedButton>
            </Grid>
          </Grid>
        </Grid>

        <Grid id="pharma" item xs={12}>
          <Box marginY={{ xs: "38px", sm: "98px", md: "138px" }} width="100%" height={33} position="relative">
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
            <img src="/images/applications3.png" alt="applications3" style={{ width: "100%", transform: "translateX(-10%)" }} />

            <Grid item xs={10} sm={10} md={10} lg={8} mt={9.5}>
              <Typography variant="body3" letterSpacing="-0.04em" mb="30px">
                For research-based life science companies active in neurology and ophthalmology.
              </Typography>
              <Hidden only="xs">
                <AnimatedButton url="/contact" variant="filled">
                  Get early access to Solvemed&apos;s medical devices
                </AnimatedButton>
              </Hidden>
            </Grid>
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
            <Hidden smUp>
              <AnimatedButton url="/contact" variant="filled">
                Get early access to Solvemed&apos;s medical devices
              </AnimatedButton>
            </Hidden>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  </>
);

export default Applications;
