import React, { Fragment } from "react";
import { NextPage } from "next";
import { Box, Grid, Link, Typography } from "@mui/material";
import Image from "next/image";
import styles from "./careers.module.css";
import { useParallax } from "react-scroll-parallax";
import Head from "next/head";

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

const Careers: NextPage = () => {
  const parallax = useParallax<HTMLDivElement>({ speed: -20, translateY: [10, -50] });

  return (
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
        <Grid item xs={10} textAlign="center" position="relative" mb={-20}>
          <img src="/images/green1.svg" alt="Background green" className={styles.bg} />
          <img src="/images/green2.svg" alt="Background green" className={styles.bg} />

          <img src="/images/pink1.svg" alt="Background pink" className={styles.bg2} />
          <img src="/images/pink2.svg" alt="Background pink" className={styles.bg2} />

          <img src="/images/blue3.svg" alt="Background blue" className={styles.bg3} />

          <Typography variant="h3" mb="80px">
            Join Solvemed
          </Typography>
          <Typography variant="subtitle1" width={{ xs: "100%", sm: "70%" }} margin="0 auto 30px auto">
            Digital mapping of the human brain is an interdisciplinary challenge.
          </Typography>
          <Typography variant="body2" width={{ xs: "100%", sm: "70%", md: "50%" }} margin="auto">
            We are looking to hire a wide range of people with diverse engineering, scientific, and operations expertise.
          </Typography>

          <div ref={parallax.ref}>
            <img src="/images/eye.png" alt="Eye" className={styles.eyeImg} />
          </div>
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
                  <Link
                    href={item.url}
                    border="1px solid rgba(82, 66, 238, 0.2)"
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
                    <Typography color="#5242EE" variant="body6" fontWeight="600" textTransform="uppercase" mr="18px">
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
    </>
  );
};

export default Careers;
