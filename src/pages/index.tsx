import type { NextPage } from "next";
import Head from "next/head";
import { Box, Typography, useMediaQuery } from "@mui/material";
import "animate.css";
import { motion } from "framer-motion";
import Image from "next/image";
import CardWithShadow from "../components/cardHomePage/CardWithShadow";
import { theme } from "../config/theme";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Sticky, StickyContainer } from "react-sticky";
import dynamic from "next/dynamic";

const Logos = dynamic(() => import("../components/Logos"), { ssr: false });
const More = dynamic(() => import("../components/More"), { ssr: false });
const WhatExperts = dynamic(() => import("../components/WhatExperts"), { ssr: false });
const Pupil = dynamic(() => import("../components/Pupil"), { ssr: false });
const Penlight = dynamic(() => import("../components/Penlight"), { ssr: false });

const Home: NextPage = () => {
  const isMobileView = useMediaQuery(theme.breakpoints.down("md"));

  useEffect(() => {
    if (typeof window === "undefined") return;

    AOS.init({
      duration: 1000,
      once: true,
      delay: 600,
      anchorPlacement: "center",
    });

    console.log("aos init");

    return () => {
      AOS.refresh();
    };
  }, []);

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
        <Box mt={-10}>
          <Typography
            component={motion.p}
            variant={"fin100"}
            align="center"
            marginX="auto"
            width={{ xs: "80%", md: "80%", lg: "60%" }}
            variants={{ initial: { opacity: 0, y: 100 }, animate: { opacity: 1, y: 0 } }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            Pupil reactivity testing. Now in your smartphone.
          </Typography>
        </Box>
        {isMobileView ? (
          // mobile
          <div>
            <StickyContainer>
              <Sticky>
                {({ style }: any) => (
                  <div id="fixedElement" style={{ ...style, zIndex: 3, marginTop: "40px", display: "flex", justifyContent: "center", alignItems: "center" }}>
                    <Box mt={12} width={"264.63px"} height={"567.63px"} zIndex={3}>
                      <video controls={false} poster={"/images/homePage/phoneMobile.png"} autoPlay muted loop playsInline width="100%" height={"100%"}>
                        <source src={"https://strapi-s3-solvemed-public-images.s3.amazonaws.com/iPhone+animation+looped.mov"} type="video/mp4" />
                      </video>
                    </Box>
                  </div>
                )}
              </Sticky>
              <Box zIndex={-1} position={"absolute"} top={300}>
                <Image
                  src={"/images/bg/homegradient1.png"}
                  width={767.36}
                  height={756.02}
                  alt={"gradient"}
                  priority
                  style={{
                    maxWidth: "100%",
                    height: "auto",
                  }}
                />
              </Box>
              <Box mt={60} mb={100} textAlign={"center"} position={"relative"} data-aos="fade-up" width={{ xs: "100%" }}>
                <Typography variant="fin64">
                  Forget about forgetting <br /> your penlight.
                </Typography>
                <br />
                <Box mt={3}>
                  <Typography variant="sus18_300" color={"#5E5E5E"}>
                    We bring the most advanced smartphone-enabled <br /> data collection and analytical tools in the world to the <br /> field of neurology and ophthalmology.
                  </Typography>
                </Box>
              </Box>

              <Box height={10}></Box>
            </StickyContainer>
            <Box width={"100%"} textAlign={"center"} display={"flex"} flexDirection={"column"} justifyContent={"center"} alignItems={"center"}>
              <Box width={"90%"} mb={10}>
                <Typography variant="fin64">mPenlight</Typography>
                <br />
                <Typography variant="sus17_300" color={"#5E5E5E"}>
                  Solvemed{"'"}s smartphone-based software medical device enables pupil reactivity measurement in the quantifiable manner without any external hardware needed.{" "}
                </Typography>
              </Box>
            </Box>
            <CardWithShadow />
          </div>
        ) : (
          // desktop
          <div>
            <StickyContainer>
              <Sticky>
                {({ style }: any) => (
                  <div style={{ ...style, zIndex: 3, display: "flex", justifyContent: "center", alignItems: "center" }}>
                    <Box mt={25} maxWidth={"426.92px"} maxHeight={"750px"} zIndex={3}>
                      <video controls={false} poster={"/images/homePage/phone.png"} autoPlay muted loop playsInline width="100%" height={"629.65px"} style={{ zIndex: 3 }}>
                        <source src={"https://strapi-s3-solvemed-public-images.s3.amazonaws.com/iPhone+animation+looped.mov"} type="video/mp4" />
                      </video>
                    </Box>
                  </div>
                )}
              </Sticky>
              <Box zIndex={-1} position={"absolute"} top={350} left={"20%"}>
                <Image
                  src={"/images/bg/homegradient1.png"}
                  width={767.36}
                  height={756.02}
                  alt={"gradient"}
                  priority
                  style={{
                    maxWidth: "100%",
                    height: "auto",
                  }}
                />
              </Box>
              <Box mt={100} textAlign={"center"} position={"relative"} data-aos="fade-up" width={{ xs: "100%" }} mb={100}>
                <Typography variant="fin64">Forget about forgetting your penlight.</Typography>
                <br />
                <Box mt={3}>
                  <Typography variant="sus18_300">
                    We bring the most advanced smartphone-enabled data collection and analytical <br /> tools in the world to the field of neurology and ophthalmology.
                  </Typography>
                </Box>
              </Box>
              <Box mt={100} mb={100} ml={"131.53px"}>
                <Box textAlign={"left"}>
                  <Typography variant="fin64">mPenlight</Typography>
                  <Box textAlign={"left"} maxWidth={"25%"}>
                    <Typography variant="sus17_300">
                      Solvemed{"'"}s smartphone-based software medical device enables pupil reactivity measurement in a quantifiable manner without any external hardware needed.
                    </Typography>
                  </Box>
                </Box>
              </Box>
              <Box width={"100vw"}>
                <CardWithShadow />
              </Box>
            </StickyContainer>
          </div>
        )}

        <More isMobileView={isMobileView} />

        <WhatExperts isMobileView={isMobileView} />

        <Pupil isMobileView={isMobileView} />

        <Penlight isMobileView={isMobileView} />

        <Logos isMobileView={isMobileView} />
      </Box>
    </>
  );
};

export default Home;
