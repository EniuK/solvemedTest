import React, { Fragment } from "react";
import { NextPage } from "next";
import { Box, Grid, Typography } from "@mui/material";
import styles from "./careers.module.css";
import Head from "next/head";
import AnimatedButton from "../components/AnimatedButton/AnimatedButton";
import { motion } from "framer-motion";

const careers = [
  {
    category: "Neuroscience",
    positions: [
      {
        title: "Head of Research",
        description: "Remote (preferred locations for the remote role: Boston, MA; San Francisco Bay Area)",
        url: "/contact",
      },
      {
        title: "Computational Neuroscientist",
        description: "Remote (preferred locations for the remote role: Boston, MA; London & Oxbridge, UK)",
        url: "/contact",
      },
      {
        title: "Senior Biostatistician",
        description: "Remote (preferred locations for the remote role: Boston, MA; London & Oxbridge, UK)",
        url: "/contact",
      },
    ],
  },
  {
    category: "Commercial",
    positions: [
      {
        title: "Head of R&D Partnerships",
        description: "Remote (preferred locations for the remote role: Boston, MA; London & Oxbridge, UK)",
        url: "/contact",
      },
      {
        title: "Head of Commercial Partnerships",
        description: "Remote (preferred locations for the remote role: Boston, MA; London & Oxbridge, UK)",
        url: "/contact",
      },
      {
        title: "Strategy Researcher",
        description: "Remote (no preferences)",
        url: "/contact",
      },
    ],
  },
  {
    category: "Operations",
    positions: [
      {
        title: "Clinical Operations Manager",
        description: "Remote (preferred locations for the remote role: Boston, MA; London & Oxbridge, UK)",
        url: "/contact",
      },
    ],
  },
  {
    category: "Technical",
    positions: [
      {
        title: "Senior CV Researcher",
        description: "Remote (preferred locations for the remote role: US, UK, Poland, or Israel)",
        url: "/contact",
      },
      {
        title: "Senior NLP Researcher",
        description: "Remote (preferred locations for the remote role: US, UK, Poland, or Israel)",
        url: "/contact",
      },
      {
        title: "Senior Data Scientist",
        description: "Remote (preferred locations for the remote role: US, UK, Poland, or Israel)",
        url: "/contact",
      },
      {
        title: "Senior Clinical Data Scientist",
        description: "Remote (preferred locations for the remote role: US, UK, Poland, or Israel)",
        url: "/contact",
      },
      {
        title: "Mid Clinical Data Scientist",
        description: "Remote (preferred locations for the remote role: US, UK, Poland, or Israel)",
        url: "/contact",
      },
      {
        title: "Senior Software Engineer",
        description: "Remote (preferred locations for the remote role: US, UK, Poland, or Israel)",
        url: "/contact",
      },
    ],
  },
];

const Careers: NextPage = () => (
  <>
    <div>
      <Head>
        <title>Solvemed Careers</title>
        <meta property="og:title" content="Solvemed Careers" />
        <meta property="og:type" content="website" />
        <meta
          name="description"
          content="Decoding neurology. In the blink of AI. Solvemed is a VC-backed Neuroscience AI company working to redefine neurology care and drug development. With neurodegenerative diseases (dementias) as the primary focus area, Solvemed leverages its proprietary machine learning technology to develop first-in-class digital biomarkers to support development of neurological drugs and establish affordable clinical examination and remote monitoring tools."
        />
      </Head>
    </div>

    <Grid container item xs={10} lg={8} columns={10} margin="auto" alignItems="center">
      <Grid item xs={10} textAlign="center">
        <Typography
          component={motion.p}
          variant="h3"
          mb={{ xs: "60px", lg: "80px" }}
          variants={{ initial: { opacity: 0, y: 100 }, animate: { opacity: 1, y: 0 } }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          Join Solvemed
        </Typography>
        <Typography
          component={motion.p}
          variant="subtitle1"
          width={{ xs: "100%", sm: "70%" }}
          margin="0 auto 30px auto"
          variants={{ initial: { opacity: 0, y: 50 }, animate: { opacity: 1, y: 0 } }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          Digital mapping of the human brain is an interdisciplinary challenge.
        </Typography>
        <Typography
          component={motion.p}
          variant="body2"
          width={{ xs: "100%", sm: "70%", md: "50%" }}
          margin="auto"
          mb={{ xs: "60px", lg: "80px" }}
          variants={{ initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 } }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          We are looking to hire a wide range of people with diverse engineering, scientific, and operations expertise.
        </Typography>
        <img src="/images/eye.png" alt="Eye" className={styles.eyeImg} />
      </Grid>

      {careers.map((sectionItem) => (
        <Fragment key={sectionItem.category}>
          <Grid item xs={10} mt="100px" mb="42px">
            <Typography variant="subtitle3">{sectionItem.category}</Typography>
          </Grid>

          {sectionItem.positions.map((item, idx) => (
            <Fragment key={item.title}>
              <Grid item xs={10} sm={7} md={8} zeroMinWidth>
                <Typography variant="body1" fontWeight="600">
                  {item.title}
                </Typography>
                <Typography variant="body2" paragraph>
                  {item.description}
                </Typography>
              </Grid>

              <Grid item xs={10} sm={3} md={2}>
                <AnimatedButton url={item.url}>Apply now</AnimatedButton>
              </Grid>

              {idx !== sectionItem.positions.length - 1 && (
                <Grid item xs={10} marginY="30px">
                  <Box height="1px" bgcolor="rgba(0, 0, 0, 0.2)" />
                </Grid>
              )}
            </Fragment>
          ))}
        </Fragment>
      ))}
    </Grid>
  </>
);

export default Careers;
