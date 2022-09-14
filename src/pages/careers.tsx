import React, { Fragment } from "react";
import { NextPage } from "next";
import { Box, Grid, Link, Typography } from "@mui/material";
import Image from "next/image";
import styles from "./careers.module.css";
import { useParallax } from "react-scroll-parallax";

const careers = [
  {
    category: "Neuroscience",
    positions: [
      {
        title: "Head of Research",
        description: "Remote (preferred locations for the remote role: Boston, MA; San Francisco Bay Area)",
        url: "https://google.com",
      },
      {
        title: "Head of R&D Partnerships",
        description: "Remote (preferred locations for the remote role: London , UK; Boston, MA; San Francisco Bay Area)",
        url: "https://google.com",
      },
    ],
  },
  {
    category: "Operations",
    positions: [
      {
        title: "Head of Research",
        description: "Remote (preferred locations for the remote role: Boston, MA; San Francisco Bay Area)",
        url: "https://google.com",
      },
      {
        title: "Head of R&D Partnerships",
        description: "Remote (preferred locations for the remote role: London , UK; Boston, MA; San Francisco Bay Area)",
        url: "https://google.com",
      },
    ],
  },
  {
    category: "Commercial",
    positions: [
      {
        title: "Head of Research",
        description: "Remote (preferred locations for the remote role: Boston, MA; San Francisco Bay Area)",
        url: "https://google.com",
      },
      {
        title: "Head of R&D Partnerships",
        description: "Remote (preferred locations for the remote role: London , UK; Boston, MA; San Francisco Bay Area)",
        url: "https://google.com",
      },
    ],
  },
];

const Careers: NextPage = () => {
  const parallax = useParallax<HTMLDivElement>({ speed: -20, translateY: [10, -50] });

  return (
    <Grid container xs={10} lg={8} columns={10} margin="auto" alignItems="center">
      <Grid item xs={10} textAlign="center" position="relative">
        <img src="/images/green1.svg" alt="Background green" className={styles.bg} />
        <img src="/images/green2.svg" alt="Background green" className={styles.bg} />

        <img src="/images/pink1.svg" alt="Background pink" className={styles.bg2} />
        <img src="/images/pink2.svg" alt="Background pink" className={styles.bg2} />

        <img src="/images/blue3.svg" alt="Background blue" className={styles.bg3} />

        <Typography variant="h3" mb="80px">
          Join Solvemed
        </Typography>
        <Typography variant="h4" width={{ xs: "100%", sm: "70%" }} margin="0 auto 30px auto">
          Digital mapping of the human brain is an interdisciplinary challenge.
        </Typography>
        <Typography variant="h6" width={{ xs: "100%", sm: "70%", md: "50%" }} margin="auto">
          We are looking to hire a wide range of people with diverse engineering, scientific, operations expertise.
        </Typography>

        <div ref={parallax.ref}>
          <img src="/images/eye.png" alt="Eye" className={styles.eyeImg} />
        </div>
      </Grid>

      {careers.map((sectionItem) => (
        <Fragment key={sectionItem.category}>
          <Grid item xs={10} mt="100px" mb="42px">
            <Typography fontSize="30px" fontWeight="600">
              {sectionItem.category}
            </Typography>
          </Grid>

          {sectionItem.positions.map((item, idx) => (
            <Fragment key={item.title}>
              <Grid item xs={10} sm={7} md={8} zeroMinWidth>
                <Typography variant="body1" fontWeight="600">
                  Head of Research
                </Typography>
                <Typography variant="h6" paragraph>
                  Remote (preferred locations for the remote role: Boston, MA; San Francisco Bay Area)
                </Typography>
              </Grid>

              <Grid item xs={10} sm={3} md={2}>
                <Link
                  href={item.url}
                  border="1px solid #5242EE"
                  ml={{ xs: "0", sm: "auto" }}
                  borderRadius="100px"
                  height="54px"
                  width="151px"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  underline="none"
                  target="_blank"
                  rel="noopener"
                >
                  <Typography color="#5242EE" fontSize="12px" fontWeight="600" textTransform="uppercase" mr="18px">
                    Apply Now
                  </Typography>
                  <Image src="/icons/arrow-right.svg" alt="arrow right" width="10px" height="10px" />
                </Link>
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
  );
};

export default Careers;
