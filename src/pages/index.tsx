import type { NextPage } from "next";
import Head from "next/head";
import { Box, Typography, Divider, Button, useMediaQuery, Link } from "@mui/material";
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

const Home: NextPage = () => {
  const isMobileView = useMediaQuery(theme.breakpoints.down("md"));

  const elementRef = useRef(null);
  const sectionMobileRef = useRef(null);
  const sectionDesktopRef = useRef(null);

  const [videoStickinessMode, setVideoStickinessMode] = useState(1);
  // 1 nic
  // 2 - sticky
  // 3 - section reached

  useEffect(() => {
    const handleScroll = () => {
      if ((sectionMobileRef?.current || sectionDesktopRef?.current) && elementRef.current) {
        const sectionMobile = sectionMobileRef?.current?.getBoundingClientRect?.();
        const sectionDesktop = sectionDesktopRef?.current?.getBoundingClientRect?.();
        const element = elementRef.current?.getBoundingClientRect?.();

        const calculateSection = isMobileView ? sectionMobile : sectionDesktop;

        const xSectionReached = calculateSection && calculateSection.bottom <= calculateSection.height && calculateSection.bottom - element.height <= 0;
        const xIsSticky = calculateSection && calculateSection.bottom <= calculateSection.height && element.top <= 0;

        const mode = xIsSticky && !xSectionReached ? 2 : xSectionReached ? 3 : 1;
        setVideoStickinessMode(mode);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isMobileView]);

  useEffect(() => {
    console.log({ videoStickinessMode });
  }, [videoStickinessMode]);

  const logos = [
    { src: "/images/homePage/logos/NASA.svg", w: "140px", h: "40px" },
    { src: "/images/homePage/logos/apple.svg", w: "140px", h: "40px" },
    { src: "/images/homePage/logos/stanford.svg", w: "140px", h: "40px" },
    { src: "/images/homePage/logos/cambridge.svg", w: "140px", h: "40px" },
    { src: "/images/homePage/logos/nhs.svg", w: "140px", h: "40px" },
    { src: "/images/homePage/logos/honkong.svg", w: "140px", h: "40px" },
  ];

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
          {isMobileView ? (
            <Typography
              component={motion.p}
              fontWeight={200}
              fontFamily={"FinancierDisplay"}
              lineHeight={"120%"}
              align="center"
              marginX="auto"
              fontSize={"44px"}
              width={{ xs: "100%", md: "80%", lg: "75%" }}
              variants={{ initial: { opacity: 0, y: 100 }, animate: { opacity: 1, y: 0 } }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              Pupil reactivity testing. Now in your smartphone.
            </Typography>
          ) : (
            <Typography
              component={motion.p}
              fontWeight={200}
              fontFamily={"FinancierDisplay"}
              fontSize={"100px"}
              lineHeight={"120%"}
              align="center"
              marginX="auto"
              width={{ xs: "100%", md: "80%", lg: "70%" }}
              variants={{ initial: { opacity: 0, y: 100 }, animate: { opacity: 1, y: 0 } }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              Pupil reactivity testing. Now in your smartphone.
            </Typography>
          )}
        </Box>
        {isMobileView ? (
          <>
            <Box width={"100vw"} display={"flex"} justifyContent={"center"} alignContent={"center"} pr={5} pb={600} ref={sectionMobileRef} position={"relative"}>
              <Box
                zIndex={2}
                className={`${styles.video} ${videoStickinessMode === 2 ? styles.videoFloating : videoStickinessMode === 3 ? styles.videoSticky : ""}`}
                ref={elementRef}
              >
                <video controls={false} autoPlay loop width="100%">
                  <source src={"https://strapi-s3-solvemed-public-images.s3.amazonaws.com/iPhone+animation+looped.mov"} type="video/mp4" />
                </video>
              </Box>
              <Box position={"absolute"} zIndex={1} width="100%" height="100%" top={0} left={0}>
                <Image src={"/images/bg/homegradient1.png"} width={"767.36px"} height={"756.02px"} alt={"gradient"} style={{ objectFit: "cover" }} />
              </Box>
            </Box>

            <Box display={"flex"} flexDirection={"column"} width={"100%"} mb={10}>
              <Typography fontSize={"32px"} fontWeight={300} color={"black"} fontFamily={"FinancierDisplay"} mb={2} textAlign={"center"}>
                mPenlight
              </Typography>
              <Typography
                fontSize={"14px"}
                fontWeight={300}
                style={{ fontFamily: "SuisseIntl", opacity: 0.8, lineHeight: "140%", fontStyle: "normal", fontStretch: "ultra-condensed", color: "#5E5E5E" }}
                textAlign={"center"}
              >
                Solvemed{"'"}s smartphone-based software medical device enables pupil reactivity measurement in the quantifiable manner without any external hardware needed.{" "}
              </Typography>
            </Box>
            <CardWithShadow />
          </>
        ) : (
          <div style={{ position: "relative" }} ref={sectionDesktopRef}>
            <Box display={"flex"} pt={1} justifyContent={"center"} alignContent={"center"} pr={5} pb={100} ref={elementRef}>
              <Box zIndex={2} mt={-6} className={`${styles.video} ${videoStickinessMode === 2 ? styles.videoFloating : videoStickinessMode === 3 ? styles.videoSticky : ""}`}>
                <video controls={false} autoPlay loop width="100%" height={"100%"}>
                  <source src={"https://strapi-s3-solvemed-public-images.s3.amazonaws.com/iPhone+animation+looped.mov"} type="video/mp4" />
                </video>
              </Box>
              <Box zIndex={1} position={"absolute"}>
                <Image src={"/images/bg/homegradient1.png"} width={"767.36px"} height={"756.02px"} alt={"gradient"} />
              </Box>
            </Box>

            <Box mt={100} mb={100} display={"flex"} flexDirection={"column"} maxWidth={"300px"} ml={10}>
              <Typography fontSize={"64px"} style={{ fontFamily: "FinancierDisplay", lineHeight: "25.5px", fontWeight: 200 }} mb={5}>
                mPenlight
              </Typography>
              <Box mt={1}>
                <Typography fontSize={"17px"} style={{ opacity: 0.8, fontFamily: "SuisseIntl", lineHeight: "25.5px", fontStretch: "ultra-condensed", color: "#5E5E5E" }}>
                  Solvemed{"'"}s smartphone-based software medical device enables pupil reactivity measurement in the quantifiable manner without any external hardware needed.{" "}
                </Typography>
              </Box>
            </Box>
            <CardWithShadow />
          </div>
        )}

        <Box
          pt={30}
          pb={30}
          ml={-6}
          pl={6}
          style={{
            backgroundImage: `url('/images/bg/homegradient2.png')`,
            backgroundSize: "auto",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
        >
          {isMobileView ? (
            <Typography
              component={motion.p}
              align="center"
              marginX="auto"
              width={{ xs: "100%", md: "80%", lg: "70%" }}
              fontSize={"32px"}
              fontWeight={200}
              variants={{ initial: { opacity: 0, y: 100 }, animate: { opacity: 1, y: 0 } }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              Designed for{" "}
              <motion.span className={styles.gradient_text} key={text1} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }}>
                {text1}
              </motion.span>{" "}
              looking to end the era of subjective neuro-ophthalmic examination.{" "}
            </Typography>
          ) : (
            <Typography
              component={motion.p}
              align="center"
              variant="h3"
              marginX="auto"
              width={{ xs: "100%", md: "80%", lg: "70%" }}
              fontSize={"64px"}
              variants={{ initial: { opacity: 0, y: 100 }, animate: { opacity: 1, y: 0 } }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              <span style={{ whiteSpace: "nowrap" }}>
                Designed for{" "}
                <motion.span className={styles.gradient_text} key={text1} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }}>
                  {text1}
                </motion.span>{" "}
                looking to
              </span>{" "}
              <br />
              end the era of subjective pupil <br /> reactivity examination.
            </Typography>
          )}
        </Box>
        <Box
          pt={5}
          mt={5}
          style={{
            backgroundImage: `url('/images/bg/medicalSpecialities.png')`,
            backgroundSize: "843px 680px",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "bottom ",
          }}
        >
          {isMobileView ? (
            <Box display={"flex"} width={"100vw"} ml={-3} mt={20} justifyContent={"center"} alignItems={"center"} flexDirection={"column"}>
              <Box width={"100%"}>
                <Typography style={{ fontFamily: "FinancierDisplay", fontWeight: 400 }} fontSize={"32px"} textAlign={"center"}>
                  Medical specialties we empower
                </Typography>
              </Box>
              <Box width={"100%"} mt={4} pl={4} mb={2} pr={4}>
                <Typography textAlign={"center"} style={{ opacity: 0.7, fontFamily: "SuisseIntl", fontWeight: 300, lineHeight: "150%", alignSelf: "stretch" }} fontSize={"18px"}>
                  We are proud to satisfy the needs of world{"'"}s leading practitioners across the spectrum of care.{" "}
                </Typography>
              </Box>
            </Box>
          ) : (
            <Box display={"flex"} mt={20} justifyContent={"center"} alignItems={"center"} flexDirection={"column"}>
              <Box>
                <Typography fontSize={"64px"} fontFamily="FinancierDisplay" textAlign={"center"}>
                  Medical specialties we empower
                </Typography>
              </Box>
              <Box width={"70%"} mt={isMobileView ? 2 : 6} style={{ opacity: 0.8 }}>
                <Typography textAlign={"center"} fontFamily={"SuisseIntl"} color={"#5E5E5E"} lineHeight={"150%"} fontWeight={200} fontSize={"18px"}>
                  We are proud to satisfy the needs of world{"'"}s leading practitioners across the <br /> spectrum of care.{" "}
                </Typography>
              </Box>
            </Box>
          )}

          <AiCards />
        </Box>
        {isMobileView ? (
          <Box display={"flex"} width={"100vw"} ml={-3} mt={20} justifyContent={"center"} alignItems={"center"} flexDirection={"column"}>
            <Box width={"100%"}>
              <Typography style={{ fontFamily: "FinancierDisplay", fontWeight: 400 }} fontSize={"32px"} textAlign={"center"}>
                What experts say
              </Typography>
            </Box>
            <Box width={"100%"} mt={4} pl={8} pr={8}>
              <Typography textAlign={"center"} style={{ fontFamily: "FinancierDisplay", fontWeight: 200, lineHeight: "150%", alignSelf: "stretch" }} fontSize={"14px"}>
                We have worked closely with clinicians to develop game-changing tools that reshape practice and clinical research.{" "}
              </Typography>
            </Box>
          </Box>
        ) : (
          <Box display={"flex"} mt={20} justifyContent={"center"} alignItems={"center"} flexDirection={"column"}>
            <Box>
              <Typography fontSize={"64px"} fontFamily="FinancierDisplay" textAlign={"center"}>
                What experts say
              </Typography>
            </Box>
            <Box width={"70%"} mt={isMobileView ? 2 : 6} style={{ opacity: 0.8 }}>
              <Typography textAlign={"center"} fontFamily={"SuisseIntl"} color={"#5E5E5E"} lineHeight={"150%"} fontWeight={200} fontSize={"18px"}>
                We have worked closely with clinicians to develop game-changing tools that <br /> reshape practice and clinical research.
              </Typography>
            </Box>
          </Box>
        )}

        <TeamCarousel />
        <Box
          pt={30}
          pb={30}
          ml={-6}
          pl={6}
          mr={-6}
          pr={6}
          style={{
            backgroundImage: `url('/images/bg/eyeEvaluation.png')`,
            backgroundSize: "auto",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
        >
          {isMobileView ? (
            <Box mt={60} px={1} width={"100%"} display="flex" justifyContent={"center"} alignItems={"center"} flexShrink={1}>
              <Typography fontWeight={200} fontFamily="FinancierDisplay" lineHeight={"130%"} fontSize={"32px"} textAlign={"center"}>
                Solvemed transforms <span className={styles.gradient_text}>complex eye evaluation </span> processes into one connected system to help you offer better, more
                efficient care.
              </Typography>
            </Box>
          ) : (
            <Box mt={60} pl={15} pr={15} width={"100%"} display="flex" justifyContent={"center"} alignItems={"center"} flexShrink={1}>
              <Typography variant="h4" fontSize={"64px"} textAlign={"center"}>
                Solvemed transforms complex <span className={styles.gradient_text}>eye evaluation processes</span> into one connected system to help you offer better, more
                efficient care.{" "}
              </Typography>
            </Box>
          )}
          <AppCards />
        </Box>
        <Box
          pt={30}
          pb={30}
          ml={-6}
          pl={6}
          mr={-6}
          pr={6}
          style={{
            backgroundImage: `url('/images/bg/aiEnabled.png')`,
            backgroundSize: "auto",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
        >
          {isMobileView ? (
            <Box mt={60} width={"100%"} display="flex" justifyContent={"center"} alignItems={"center"} flexDirection={"column"} flexShrink={1}>
              <Box>
                <Typography lineHeight={"120%"} fontSize={"32px"} fontFamily="FinancierDisplay" textAlign={"center"}>
                  Testing pupil is now <br /> simple, objective and <br />{" "}
                  <span className={styles.gradient_text}>
                    {" "}
                    <b>AI-enabled.</b>
                  </span>
                </Typography>
              </Box>
              <Box mt={4}>
                <Typography variant="body4" fontFamily={"SuisseIntl"} fontSize={"18px"} color={"rgba(94, 94, 94, 1)"} textAlign={"center"}>
                  We bring to the world the most advanced smartphone-enabled data collection and analytical tools in the field of neurology and ophthalmology.
                </Typography>
              </Box>
              <Box justifyContent={"center"} alignItems={"center"} mt={10}>
                <Button
                  color="secondary"
                  sx={{ backgroundColor: "black", fontSize: "14px", fontWeight: 100, marginRight: 0, padding: 1, pl: 4, pr: 4 }}
                  variant="contained"
                  style={{ textTransform: "none" }}
                  size="small"
                >
                  Get access!
                </Button>
              </Box>
            </Box>
          ) : (
            <Box mt={60} pl={15} pr={15} width={"100%"} display="flex" justifyContent={"center"} alignItems={"center"} flexDirection={"column"} flexShrink={1}>
              <Box>
                <Typography fontFamily="FinancierDisplay" lineHeight={"110%"} fontSize={"64px"} textAlign={"center"}>
                  Testing pupil is now <br /> simple, objective and <span className={styles.gradient_text}>AI-enabled.</span>
                </Typography>
              </Box>
              <Box mt={4}>
                <Typography fontFamily={"SuisseIntl"} lineHeight={"150%"} fontSize={"18px"} color={"rgba(94, 94, 94, 1)"} textAlign={"center"}>
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
                    sx={{ backgroundColor: "black", fontSize: "14px", fontWeight: 100, marginRight: 0, height: "44px", paddingX: 5, paddingY: 1 }}
                  >
                    <Typography fontSize={"14px"} variant="body1" fontStyle={"SuisseIntl"} fontWeight={400}>
                      Get access!
                    </Typography>
                  </Button>
                </Link>
              </Box>
            </Box>
          )}
        </Box>
        <Box mt={20}>
          <Box width={"100%"} display={"flex"} alignItems={"center"} justifyContent={"center"} mb={5} fontSize={"15px"} color={"rgba(94, 94, 94, 1)"}>
            Our team comes from
          </Box>
          {isMobileView ? (
            <Box display={"flex"} justifyContent={"center"} width={"100%"} alignItems={"center"} flexWrap={"wrap"}>
              {logos.map((e, idx) => {
                return (
                  <Box key={idx} width={"50%"} mb={6} display={"flex"} justifyContent={"center"} alignItems={"center"}>
                    <Image src={e.src} width={e.w} height={e.h} alt={"company"} />
                  </Box>
                );
              })}
            </Box>
          ) : (
            <Box display={"flex"} justifyContent={"center"} alignItems={"center"}>
              {logos.map((e, idx) => {
                return (
                  <Box key={idx} mr={6}>
                    <Image src={e.src} width={e.w} height={e.h} alt={"company"} />
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
