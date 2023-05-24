import type { NextPage } from "next";
import Head from "next/head";
import { Box, Typography, Button, useMediaQuery, Link } from "@mui/material";
import "animate.css";
import { motion } from "framer-motion";
import Image from "next/image";
import CardWithShadow from "../components/cardHomePage/CardWithShadow";
import AiCards from "../components/cardHomePage/AiCards";
import TeamCarousel from "../components/HomeCarousels/TeamCarousel";
import AppCards from "../components/HomeCarousels/AppCards";
import { theme } from "../config/theme";
import styles from "./index.module.css";
import { useEffect, useRef, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { LazyLoadComponent } from "react-lazy-load-image-component";
import { Sticky, StickyContainer } from "react-sticky";

const logos = [
  { src: "/images/homePage/logos/NASA.svg", w: "140px", h: "40px" },
  { src: "/images/homePage/logos/apple.svg", w: "140px", h: "40px" },
  { src: "/images/homePage/logos/stanford.svg", w: "140px", h: "40px" },
  { src: "/images/homePage/logos/cambridge.svg", w: "140px", h: "40px" },
  { src: "/images/homePage/logos/nhs.svg", w: "140px", h: "40px" },
  { src: "/images/homePage/logos/honkong.svg", w: "140px", h: "40px" },
];
const logosMobile = [
  { src: "/images/homePage/logos/apple.svg", w: "140px", h: "40px" },
  { src: "/images/homePage/logos/NASA.svg", w: "140px", h: "40px" },
  { src: "/images/homePage/logos/stanford.svg", w: "140px", h: "40px" },
  { src: "/images/homePage/logos/cambridge.svg", w: "140px", h: "40px" },
  { src: "/images/homePage/logos/nhs.svg", w: "140px", h: "40px" },
  { src: "/images/homePage/logos/honkong.svg", w: "140px", h: "40px" },
];

const Home: NextPage = () => {
  const isMobileView = useMediaQuery(theme.breakpoints.down("md"));

  const [elementheight, setElementHeight] = useState("");
  // start text

  //end test

  // gradient text handler
  const gradientText1 = ["practitioners", "students", "nurses", "researchers"];

  const [text1, setText1] = useState(gradientText1[0]);

  useEffect(() => {
    const interval = setInterval(() => {
      setText1((prevText) => {
        const currentIndex = gradientText1.indexOf(prevText);
        const nextIndex = (currentIndex + 1) % gradientText1.length;
        return gradientText1[nextIndex];
      });
    }, 5000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  useEffect(() => {
    AOS.init({
      duration: 1200,
    });

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
        <Box>
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
          // mobile
          <div>
            <StickyContainer>
              <Sticky>
                {({ style }: any) => (
                  <div style={{ ...style, zIndex: 3, display: "flex", justifyContent: "center", alignItems: "center" }}>
                    <LazyLoadComponent visibleByDefault={true}>
                      <Box mt={-7} width={"264.63px"} height={"567.63px"} zIndex={3}>
                        <video controls={false} autoPlay muted loop playsInline width="100%" height={"100%"}>
                          <source src={"https://strapi-s3-solvemed-public-images.s3.amazonaws.com/iPhone+animation+looped.mov"} type="video/mp4" />
                        </video>
                      </Box>
                    </LazyLoadComponent>
                  </div>
                )}
              </Sticky>
              <Box zIndex={-1} position={"absolute"} top={300}>
                <Image src={"/images/bg/homegradient1.png"} width={"767.36px"} height={"756.02px"} alt={"gradient"} priority />
              </Box>
              <Box mt={150} mb={100} textAlign={"center"} position={"relative"} data-aos="fade-up" data-aos-duration="1000" data-aos-once="true" width={{ xs: "100%" }}>
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
                    <LazyLoadComponent visibleByDefault={true}>
                      <Box mt={-7} maxWidth={"426.92px"} maxHeight={"750px"} zIndex={3}>
                        <video controls={false} autoPlay muted loop playsInline width="100%" height={"100%"} style={{ zIndex: 3 }}>
                          <source src={"https://strapi-s3-solvemed-public-images.s3.amazonaws.com/iPhone+animation+looped.mov"} type="video/mp4" />
                        </video>
                      </Box>
                    </LazyLoadComponent>
                  </div>
                )}
              </Sticky>
              <Box zIndex={-1} position={"absolute"} top={350} left={"20%"}>
                <Image src={"/images/bg/homegradient1.png"} width={"767.36px"} height={"756.02px"} alt={"gradient"} priority />
              </Box>
              <Box mt={100} textAlign={"center"} position={"relative"} data-aos="fade-up" data-aos-duration="1000" data-aos-once="true" width={{ xs: "100%" }} mb={100}>
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

        <Box mt={{ lg: 50, md: 100 }}>
          <Box style={{ position: "absolute", margin: "90px auto ", rotate: "180deg", left: "30%" }}>
            <Image src={"/images/bg/medicalSpecialities.png"} width={"428.33px"} height={"434.42px"} alt={"gradientBackground"} priority />
          </Box>
          <Box pt={30} pb={10}>
            <Box>
              <Typography
                component={motion.p}
                align="center"
                marginX="auto"
                width={{ xs: "90%", md: "80%", lg: "60%" }}
                variant={"fin64"}
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-once="true"
              >
                Designed for{" "}
                <motion.span className={styles.gradient_text} key={text1} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }}>
                  {text1}
                </motion.span>{" "}
                looking to end the era of subjective pupil reactivity examination.{" "}
              </Typography>
            </Box>
          </Box>
        </Box>
        <Box pt={5}>
          <Box
            display={"flex"}
            width={"100%"}
            mt={20}
            pr={2}
            justifyContent={"center"}
            alignItems={"center"}
            flexDirection={"column"}
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-once="true"
          >
            <Box width={{ lg: "100%", xs: "60%" }} textAlign={"center"}>
              <Typography variant="fin64">Medical specialties we empower</Typography>
            </Box>
            <Box width={"100%"} mt={"12px"} pl={3} mb={2} pr={3}>
              <Typography
                textAlign={"center"}
                lineHeight={"150%"}
                style={{ opacity: 0.7, fontFamily: "SuisseIntl", fontWeight: 300, lineHeight: "150%", alignSelf: "stretch" }}
                fontSize={"18px"}
              >
                We are proud to satisfy the needs of the world{"'"}s leading practitioners across <br /> the spectrum of care.{" "}
              </Typography>
            </Box>
          </Box>

          <AiCards />
        </Box>
        {isMobileView && (
          <Box>
            <Box style={{ position: "absolute", margin: "90px auto ", rotate: "180deg", left: "20%" }}>
              <Image src={"/images/bg/medicalSpecialities.png"} width={"428.33px"} height={"434.42px"} alt={"gradientBackground"} priority />
            </Box>
            <Box pt={30} pb={30}>
              <Box>
                <Typography
                  component={motion.p}
                  align="center"
                  marginX="auto"
                  width={{ xs: "100%", md: "80%", lg: "70%" }}
                  variant={"fin64"}
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  data-aos-once="true"
                >
                  Designed for{" "}
                  <motion.span className={styles.gradient_text} key={text1} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }}>
                    {text1}
                  </motion.span>{" "}
                  <br /> looking to end the era of <br /> subjective neuro-ophthalmic <br /> examination.
                </Typography>
              </Box>
            </Box>
          </Box>
        )}
        <Box
          display={"flex"}
          width={"100%"}
          ml={-1}
          mt={20}
          justifyContent={"center"}
          alignItems={"center"}
          flexDirection={"column"}
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-once="true"
        >
          <Box margin={"0 auto"}>
            <Typography variant="fin64" lineHeight={isMobileView ? "120%" : "134%"} textAlign={"center"}>
              What experts say
            </Typography>
          </Box>
          <Box margin={"0 auto"} mt={"12px"} textAlign={"center"}>
            {isMobileView ? (
              <Typography textAlign={"center"} variant="sus18_300" color={"#5E5E5E"}>
                We are proud to satisfy the needs of the world{"'"}s <br /> leading practitioners across the spectrum of care.{" "}
              </Typography>
            ) : (
              <Typography variant="sus18_300" color={"#5E5E5E"}>
                We have worked closely with clinicians to develop game-changing tools that <br /> reshape practice and clinical research.{" "}
              </Typography>
            )}
          </Box>
        </Box>
        <Box style={isMobileView ? { marginLeft: "16px" } : { marginLeft: "131.53px" }}>
          <TeamCarousel />
        </Box>
        <Box pt={30} pb={30}>
          {isMobileView ? (
            <Box
              mt={10}
              width={"100%"}
              display="flex"
              justifyContent={"center"}
              alignItems={"center"}
              flexShrink={1}
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-once="true"
            >
              <Typography lineHeight={"120%"} fontSize={"32px"} fontFamily="FinancierDisplay" textAlign={"center"}>
                Testing pupil is now <br /> simple, objective and <br />{" "}
                <span className={styles.gradient_text}>
                  {" "}
                  <b>AI-enabled.</b>
                </span>
              </Typography>
            </Box>
          ) : (
            <Box
              mt={10}
              width={"100%"}
              display="flex"
              justifyContent={"center"}
              alignItems={"center"}
              flexShrink={1}
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-once="true"
            >
              <Typography variant="h4" fontSize={"64px"} textAlign={"center"}>
                Pupil testing is now <br /> simple, objective and{" "}
                <span className={styles.gradient_text}>
                  {" "}
                  <b>AI-enabled.</b>
                </span>
              </Typography>
            </Box>
          )}
          <Box style={isMobileView ? { marginLeft: "16px" } : { marginLeft: "131.53px" }}>
            <AppCards />
          </Box>
        </Box>
        <Box pt={30} pl={6} pr={6} pb={15}>
          {isMobileView ? (
            <Box
              mt={10}
              width={"100%"}
              display="flex"
              justifyContent={"center"}
              alignItems={"center"}
              flexDirection={"column"}
              flexShrink={1}
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-once="true"
            >
              <Box>
                <Typography fontWeight={200} fontFamily="FinancierDisplay" lineHeight={"130%"} fontSize={"32px"} textAlign={"center"}>
                  Decoding neurology. <br /> In the blink of <span className={styles.gradient_text}>AI</span>.
                </Typography>
              </Box>
              <Box style={{ position: "absolute", margin: "0 0 150px 0", rotate: "180deg" }} width={"100%"} zIndex={-1}>
                <Image src={"/images/bg/aiEnabled.png"} width={"880px"} height={"489px"} alt="gradientBackground" priority />
              </Box>
              <Box mt={4} width={"85vw"}>
                <Typography fontFamily={"SuisseIntl"} fontWeight={300} lineHeight={"150%"} fontSize={"14px"} color={"rgba(94, 94, 94, 1)"} textAlign={"center"}>
                  mPenlight is the pupil reactivity testing app of choice for world{"'"}s top practitioners.
                </Typography>
              </Box>
              <Box justifyContent={"center"} alignItems={"center"} mt={5}>
                <Link href={"/GetAccess"}>
                  <Button
                    color="secondary"
                    sx={{ backgroundColor: "black", fontSize: "14px", fontWeight: 100, marginRight: 0, padding: "12px 22px" }}
                    variant="contained"
                    style={{ textTransform: "none" }}
                    size="small"
                  >
                    Get access!
                  </Button>
                </Link>
              </Box>
            </Box>
          ) : (
            <Box
              mt={10}
              pl={15}
              pr={15}
              width={"100%"}
              display="flex"
              justifyContent={"center"}
              alignItems={"center"}
              flexDirection={"column"}
              flexShrink={1}
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-once="true"
            >
              <Box>
                <Typography fontFamily="FinancierDisplay" lineHeight={"110%"} fontSize={"64px"} textAlign={"center"}>
                  Decoding neurology. In the blink of <span className={styles.gradient_text}>AI</span>.
                </Typography>
              </Box>
              <Box mt={4}>
                <Typography fontFamily={"SuisseIntl"} lineHeight={"150%"} fontWeight={300} fontSize={"18px"} color={"rgba(94, 94, 94, 1)"} textAlign={"center"}>
                  mPenlight is the pupil reactivity testing app of choice for world{"'"}s top practitioners.{" "}
                </Typography>
              </Box>
              <Box ml={2} mt={8} justifyContent={"center"} alignItems={"center"}>
                <Link href={"/GetAccess"}>
                  <Button
                    color="secondary"
                    style={{ textTransform: "none" }}
                    variant="contained"
                    size="small"
                    sx={{ backgroundColor: "black", fontSize: "14px", fontFamily: "SuisseIntl", fontWeight: 400, marginRight: 0, height: "44px", paddingX: 5, paddingY: 1 }}
                  >
                    <Typography fontSize={"14px"} variant="body1" fontStyle={"SuisseIntl"} fontWeight={400}>
                      Get access!
                    </Typography>
                  </Button>
                </Link>
              </Box>
            </Box>
          )}
          {!isMobileView && (
            <Box style={{ position: "absolute", left: "20%" }} zIndex={-1}>
              <Image src={"/images/bg/aiEnabled.png"} width={"880px"} height={"489px"} alt="gradientBackground" priority />
            </Box>
          )}
        </Box>
        <Box>
          <Box
            width={"100%"}
            display={"flex"}
            alignItems={"center"}
            fontWeight={300}
            fontStyle={"SuisseIntl"}
            justifyContent={"center"}
            mb={5}
            fontSize={"15px"}
            color={"rgba(94, 94, 94, 1)"}
          >
            Our team comes from
          </Box>
          {isMobileView ? (
            <Box display={"flex"} justifyContent={"center"} width={"100%"} alignItems={"center"} flexWrap={"wrap"}>
              {logosMobile.map((e, idx) => {
                return (
                  <Box
                    key={idx}
                    width={"50%"}
                    mb={6}
                    display={"flex"}
                    justifyContent={"center"}
                    alignItems={"center"}
                    data-aos="fade-up"
                    data-aos-duration="2000"
                    data-aos-anchor-placement="bottom"
                    data-aos-once={"true"}
                  >
                    <Image src={e.src} width={e.w} height={e.h} alt={"company"} priority />
                  </Box>
                );
              })}
            </Box>
          ) : (
            <Box display={"flex"} justifyContent={"center"} alignItems={"center"}>
              {logos.map((e, idx) => {
                return (
                  <Box key={idx} mr={6} data-aos="fade-up" data-aos-duration="1000" data-aos-anchor-placement="top">
                    <Image src={e.src} width={e.w} height={e.h} alt={"company"} priority />
                  </Box>
                );
              })}
            </Box>
          )}
        </Box>
      </Box>
    </>
  );
};

export default Home;
