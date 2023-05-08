import React, { Fragment } from "react";
import { NextPage } from "next";
import { Box, Grid, Typography, useMediaQuery } from "@mui/material";
import styles from "./careers.module.css";
import Head from "next/head";
import AnimatedButton from "../components/AnimatedButton/AnimatedButton";
import { motion } from "framer-motion";
import { theme } from "../config/theme";
import Image from "next/image";

const careers = [
  {
    category: "Operations",
    positions: [
      {
        title: "Head of Research ",
        description: "Remote (preferred locations for the remote role: Boston, MA; San Francisco Bay Area)",
        url: "/contact",
      },
      {
        title: "Head of R&D Partnerships ",
        description: "Remote (preferred locations for the remote role: London , UK; Boston, MA; San Francisco Bay Area)",
        url: "/contact",
      },
    ],
  },
  {
    category: "Neuroscience",
    positions: [
      {
        title: "Head of Research",
        description: "Remote (preferred locations for the remote role: Boston, MA; San Francisco Bay Area)",
        url: "/contact",
      },
      {
        title: "Head of R&D Partnerships ",
        description: "Remote (preferred locations for the remote role: London , UK; Boston, MA; San Francisco Bay Area)",
        url: "/contact",
      },
    ],
  },
];

const Careers: NextPage = () => {
  const isMobileView = useMediaQuery(theme.breakpoints.down("md"));

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
        {isMobileView ? (
          <Grid item xs={10} textAlign="center">
            <Typography
              component={motion.p}
              variant="h3"
              mb={{ xs: "60px", lg: "80px" }}
              variants={{ initial: { opacity: 0, y: 100 }, animate: { opacity: 1, y: 0 } }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              fontFamily={"FinancierDisplay"}
              fontWeight={300}
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
              fontFamily={"FinancierDisplay"}
              fontWeight={300}
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
              fontFamily={"FinancierDisplay"}
              fontWeight={300}
              color={"rgba(89, 93, 98, 1)"}
              fontSize={"18"}
            >
              We are looking to hire a wide range of people with diverse engineering, scientific, and operations expertise.
            </Typography>
            <Box>
              <Image src="/images/career/eye.png" width={"652px"} height={"381px"} alt="Eye" className={styles.eyeImg} />
            </Box>
          </Grid>
        ) : (
          <Grid item textAlign="left" width={"100%"} ml={3}>
            <Box display={"flex"} justifyContent={"flex-start"} alignItems={"flex-start"}>
              <Box width={"40%"}>
                <Typography
                  component={motion.p}
                  variant="h3"
                  margin="0 auto 30px auto"
                  mb={"40px"}
                  width={"100%"}
                  variants={{ initial: { opacity: 0, y: 100 }, animate: { opacity: 1, y: 0 } }}
                  transition={{ duration: 0.7, ease: "easeOut" }}
                  textAlign={"left"}
                >
                  Career
                </Typography>
                <Typography
                  component={motion.p}
                  variant="subtitle1"
                  width={"100%"}
                  margin="0 auto 30px auto"
                  variants={{ initial: { opacity: 0, y: 50 }, animate: { opacity: 1, y: 0 } }}
                  transition={{ duration: 0.7, ease: "easeOut" }}
                  textAlign={"left"}
                >
                  We are looking for experts.
                </Typography>
                <Typography
                  component={motion.p}
                  variant="body2"
                  width={"100%"}
                  margin="auto"
                  mb={"80px"}
                  variants={{ initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 } }}
                  transition={{ duration: 0.7, ease: "easeOut" }}
                  textAlign={"left"}
                >
                  We are looking to hire a wide range of people with diverse engineering, scientific, operations expertise.
                </Typography>
              </Box>
              <Box width={"60%"}>
                <Image src={"/images/career/gradient.png"} layout={"fill"} alt={"bg"} />

                <img src="/images/career/eye.png" alt="Eye" className={styles.eyeImg} />
              </Box>
            </Box>
          </Grid>
        )}
        <Box mt={20} ml={-9}>
          <Box
            pt={10}
            pb={10}
            mt={-10}
            mb={-10}
            width={"500px"}
            style={{
              backgroundImage: `url('/images/career/gradient2.png')`,
              backgroundSize: "333.83px 333.83px",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
            }}
          >
            <Typography ml={10} fontSize={isMobileView ? "42px" : "64px"}>
              Open Positions
            </Typography>
          </Box>

          {careers.map((sectionItem) => (
            <Fragment key={sectionItem.category}>
              <Box ml={10}>
                <Grid item xs={10} mt="100px" mb="42px">
                  <Typography variant="body3" fontSize={"20px"}>
                    {sectionItem.category}
                  </Typography>
                </Grid>

                {sectionItem.positions.map((item, idx) => (
                  <Fragment key={item.title}>
                    {idx === 0 && (
                      <Grid item xs={10} marginY="30px">
                        <Box height="1px" bgcolor="rgba(0, 0, 0, 0.2)" />
                      </Grid>
                    )}
                    {isMobileView ? (
                      <Box display={"flex"} flexDirection={"column"}>
                        <Box>
                          <Typography variant="h3" fontSize={"28px"} fontWeight="600">
                            {item.title}
                          </Typography>
                        </Box>
                        <Box mt={3} width={"100%"} display={"flex"} flexDirection={"column"}>
                          <Box width={"100%"}>
                            <Typography variant="body2" paragraph>
                              {item.description}
                            </Typography>
                          </Box>

                          <Box width={"100%"} justifyContent={"flex-end"} alignItems={"flex-end"}>
                            <AnimatedButton url={item.url}>Contact us</AnimatedButton>
                          </Box>
                        </Box>
                      </Box>
                    ) : (
                      <Box display={"flex"} flexDirection={"column"}>
                        <Box>
                          <Typography variant="h3" fontSize={"28px"} fontWeight="600">
                            {item.title}
                          </Typography>
                        </Box>
                        <Box mt={3} width={"100%"} display={"flex"}>
                          <Box width={"80%"}>
                            <Typography variant="body2" paragraph>
                              {item.description}
                            </Typography>
                          </Box>

                          <Box width={"20%"}>
                            <AnimatedButton url={item.url}>Contact us</AnimatedButton>
                          </Box>
                        </Box>
                      </Box>
                    )}

                    <Grid item xs={10} marginY="30px">
                      <Box height="1px" bgcolor="rgba(0, 0, 0, 0.2)" />
                    </Grid>
                  </Fragment>
                ))}
              </Box>
            </Fragment>
          ))}
        </Box>
      </Grid>
    </>
  );
};

export default Careers;
