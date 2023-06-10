import React, { Fragment, useEffect } from "react";
import { NextPage } from "next";
import { Box, Grid, Typography, useMediaQuery } from "@mui/material";
import styles from "./careers.module.css";
import Head from "next/head";
import AnimatedButton from "../components/AnimatedButton/AnimatedButton";
import { motion } from "framer-motion";
import { theme } from "../config/theme";
import Image from "next/legacy/image";
import AOS from "aos";
import "aos/dist/aos.css";
const careers = [
  {
    category: "OPERATIONS",
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
    category: "NEUROSCIENCE",
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

  useEffect(() => {
    AOS.init();

    return () => {
      AOS.refresh();
    };
  }, []);
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

      <Grid
        container
        item
        xs={10}
        lg={8}
        columns={10}
        style={isMobileView ? { margin: "0", alignItems: "center", display: "flex", justifyContent: "center" } : { margin: "0 auto", alignItems: "center" }}
      >
        {isMobileView ? (
          <Grid item xs={10} textAlign="center">
            <Box position={"absolute"} width={"100vw"} pr={5} pb={20} height={"50%"} display={"flex"} justifyContent={"center"} alignItems={"center"}>
              <img src={"/images/career/gradient.png"} width={"400"} height={"370"} alt={"bg"} />
            </Box>
            <Typography
              component={motion.p}
              variant="h3"
              width={{ xs: "100%", sm: "100%" }}
              mb={{ xs: "30px", lg: "80px" }}
              variants={{ initial: { opacity: 0, y: 100 }, animate: { opacity: 1, y: 0 } }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              fontFamily={"FinancierDisplay"}
              fontWeight={300}
            >
              Career
            </Typography>

            <Typography
              mb={3}
              component={motion.p}
              width={{ xs: "100%", sm: "100%" }}
              variants={{ initial: { opacity: 0, y: 50 }, animate: { opacity: 1, y: 0 } }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              fontFamily={"FinancierDisplay"}
              fontWeight={300}
              letterSpacing={"-0.02em"}
            >
              We are looking for experts.
            </Typography>
            <Typography
              component={motion.p}
              width={{ xs: "100%", sm: "100%" }}
              mb={{ xs: "60px", lg: "80px" }}
              variants={{ initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 } }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              fontFamily={"SuisseIntl"}
              fontWeight={300}
              color={"rgba(89, 93, 98, 1)"}
              fontSize={"16px"}
              lineHeight={"180%"}
            >
              We are looking to hire a wide range of people <br /> with diverse engineering, scientific, operations <br /> expertise.
            </Typography>

            {/* <Box>
              <Image src="/images/career/eye.png" width={"652px"} height={"381px"} alt="Eye" className={styles.eyeImg} />
            </Box> */}
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
                  fontFamily={"SuisseIntl"}
                  fontWeight={300}
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
        <Box mt={20} style={isMobileView ? {} : { marginLeft: -70 }}>
          <Box
            pt={10}
            pb={10}
            mt={-10}
            mb={-10}
            pl={2}
            width={"500px"}
            style={{
              backgroundImage: `url('/images/career/gradient2.png')`,
              backgroundSize: "333.83px 333.83px",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
            }}
          >
            <Typography ml={10} fontFamily={"FinancierDisplay"} fontWeight={300} fontSize={isMobileView ? "42px" : "64px"}>
              Open Positions
            </Typography>
          </Box>

          {careers.map((sectionItem) => (
            <Fragment key={sectionItem.category}>
              <Box pl={12} pr={12} width={"100%"}>
                <Grid item xs={10} mt="100px" mb="42px">
                  <Box data-aos="fade-up" data-aos-duration="1000">
                    <Typography fontFamily={"SuisseIntl"} fontWeight={300} letterSpacing={"-0.02em"} style={{ opacity: 0.6 }} fontSize={"20px"}>
                      {sectionItem.category}
                    </Typography>
                  </Box>
                </Grid>

                {sectionItem.positions.map((item, idx) => (
                  <Fragment key={item.title}>
                    {idx === 0 && (
                      <Grid item xs={10} marginY="30px">
                        <Box height="1px" bgcolor="rgba(0, 0, 0, 0.2)" data-aos="fade-up" data-aos-duration="1000" data-aos-anchor-placement="top" />
                      </Grid>
                    )}
                    {isMobileView ? (
                      <Box display={"flex"} flexDirection={"column"}>
                        <Box data-aos="fade-up" data-aos-duration="1000" data-aos-anchor-placement="top">
                          <Typography fontFamily={"FinancierDisplay"} fontSize={"28px"} fontWeight="300">
                            {item.title}
                          </Typography>
                        </Box>
                        <Box mt={3} width={"100%"} display={"flex"} flexDirection={"column"}>
                          <Box data-aos="fade-up" data-aos-duration="1000" width={"100%"} data-aos-anchor-placement="top">
                            <Typography fontFamily={"SuisseIntl"} fontWeight={300} fontSize={"14px"} paragraph>
                              {item.description}
                            </Typography>
                          </Box>

                          <Box width={"100%"} justifyContent={"flex-end"} alignItems={"flex-end"} data-aos="fade-up" data-aos-duration="1000" data-aos-anchor-placement="top">
                            <AnimatedButton url={item.url}>Contact us</AnimatedButton>
                          </Box>
                        </Box>
                      </Box>
                    ) : (
                      <Box display={"flex"} flexDirection={"column"}>
                        <Box data-aos="fade-up" data-aos-duration="1000" data-aos-anchor-placement="top">
                          <Typography fontFamily={"FinancierDisplay"} fontWeight={300} fontSize={"28px"}>
                            {item.title}
                          </Typography>
                        </Box>
                        <Box mt={3} width={"100%"} display={"flex"}>
                          <Box width={"80%"} data-aos="fade-up" data-aos-duration="1000" data-aos-anchor-placement="top">
                            <Typography fontFamily={"SuisseIntl"} fontWeight={300} fontSize={"14px"} paragraph>
                              {item.description}
                            </Typography>
                          </Box>

                          <Box width={"20%"} data-aos="fade-up" data-aos-duration="1000" data-aos-anchor-placement="top">
                            <AnimatedButton url={item.url}>Contact us</AnimatedButton>
                          </Box>
                        </Box>
                      </Box>
                    )}

                    <Grid item xs={10} marginY="30px">
                      <Box height="1px" bgcolor="rgba(0, 0, 0, 0.2)" data-aos="fade-up" data-aos-duration="1000" data-aos-anchor-placement="top" />
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
