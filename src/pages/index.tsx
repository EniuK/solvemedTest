import type { NextPage } from "next";
import Head from "next/head";
import { Box, Typography, Divider, Button, useMediaQuery } from "@mui/material";
import "animate.css";
import { motion } from "framer-motion";
import Image from "next/image";
import CardWithShadow from "../components/cardHomePage/CardWithShadow";
import AiCards from "../components/cardHomePage/AiCards";
import TeamCarousel from "../components/HomeCarousels/TeamCarousel";
import AppCards from "../components/HomeCarousels/AppCards";
import { theme } from "../config/theme";
import styles from "./index.module.css";

// Wartości dla font-stretch to:

// ultra-condensed - bardzo cienki font
// extra-condensed - bardziej cienki font
// condensed - cienki font
// semi-condensed - pół-cienki font
// normal - normalny font
// semi-expanded - pół-gruby font
// expanded - gruby font
// extra-expanded - bardziej gruby font
// ultra-expanded - bardzo gruby font

const Home: NextPage = () => {
  const isMobileView = useMediaQuery(theme.breakpoints.down("md"));

  const logos = [
    { src: "/images/homePage/logos/apple.png", w: "32.56px", h: "40px" },
    { src: "/images/homePage/logos/NASA.png", w: "112.52px", h: "32px" },
    { src: "/images/homePage/logos/stanford.png", w: "106.08px", h: "33px" },
    { src: "/images/homePage/logos/cambridge.png", w: "137.38px", h: "33px" },
    { src: "/images/homePage/logos/oxford.png", w: "121.7px", h: "36px" },
    { src: "/images/homePage/logos/honkong.png", w: "126.36px", h: "36px" },
  ];

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
        <Box width={"100vw"} display={"flex"} justifyContent={"center"} alignContent={"center"} pr={15}>
          <Box>
            <Image src={"/images/homePage/phone.png"} width={"400px"} height={"1000px"} alt={"phone"} />
          </Box>
          <Box position={"absolute"}>
            <Image src={"/images/bg/homegradient1.png"} width={"767.36px"} height={"756.02px"} alt={"gradient"} />
          </Box>
        </Box>
        {isMobileView ? (
          <Box mt={100} display={"flex"} flexDirection={"column"} width={"100%"} mb={10}>
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
        ) : (
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
        )}

        <CardWithShadow />
        <Box
          pt={30}
          pb={30}
          ml={-6}
          pl={6}
          style={{
            backgroundImage: `url('/images/bg/homegradient2.png')`,
            backgroundSize: "cover",
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
              Designed for <span className={styles.gradient_text}>practitioners</span> looking to end the era of subjective neuro-ophthalmic examination.{" "}
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
              Designed for <span className={styles.gradient_text}>practitioners</span> looking to end the era of subjective neuro-ophthalmic examination.
            </Typography>
          )}
        </Box>
        <AiCards />
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
              <Typography fontSize={"64px"} textAlign={"center"}>
                What experts say
              </Typography>
            </Box>
            <Box width={"70%"} mt={6} style={{ opacity: 0.8 }}>
              <Typography textAlign={"center"} fontFamily={"SuisseIntl"} color={"#5E5E5E"} fontWeight={200} fontSize={"18px"}>
                We bring to the world the most advanced smartphone-enabled data collection and analytical tools in the field of neurology and ophthalmology.
              </Typography>
            </Box>
          </Box>
        )}

        <TeamCarousel />
        {isMobileView ? (
          <Box mt={60} width={"100%"} display="flex" justifyContent={"center"} alignItems={"center"} flexShrink={1}>
            <Typography fontWeight={200} fontSize={"32px"} textAlign={"center"}>
              Solvemed transforms <span className={styles.gradient_text}>complex eye evaluation </span> processes into one connected system to help you offer better, more efficient
              care.
            </Typography>
          </Box>
        ) : (
          <Box
            mt={60}
            pl={15}
            pr={15}
            width={"100%"}
            display="flex"
            justifyContent={"center"}
            alignItems={"center"}
            flexShrink={1}
            style={{
              backgroundImage: `url('/images/bg/gradient3.png')`,

              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
          >
            <Typography variant="h4" fontSize={"64px"} textAlign={"center"}>
              Solvemed transforms complex <span className={styles.gradient_text}>eye evaluation processes</span> into one connected system to help you offer better, more efficient
              care.{" "}
            </Typography>
          </Box>
        )}
        <AppCards />
        {/* zastosuj overflow: hidden */}
        {isMobileView ? (
          <Box mt={60} width={"100%"} display="flex" justifyContent={"center"} alignItems={"center"} flexDirection={"column"} flexShrink={1}>
            <Box>
              <Typography variant="h4" fontSize={"64px"} textAlign={"center"}>
                Testing pupil is now simple, objective and{" "}
                <span className={styles.gradient_text}>
                  {" "}
                  <b>AI-enabled.</b>
                </span>
              </Typography>
            </Box>
            <Box mt={4}>
              <Typography variant="body4" fontSize={"18px"} color={"rgba(94, 94, 94, 1)"} textAlign={"center"}>
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
              <Typography variant="h4" fontSize={"64px"} textAlign={"center"}>
                Testing pupil is now simple, objective and <b>AI-enabled.</b>
              </Typography>
            </Box>
            <Box mt={4}>
              <Typography variant="body4" fontSize={"18px"} color={"rgba(94, 94, 94, 1)"} textAlign={"center"}>
                mPenlight is the pupil reactivity testing app of choice for world{"'"}s top practitioners.{" "}
              </Typography>
            </Box>
            <Box justifyContent={"center"} alignItems={"center"} mt={20}>
              <Button
                color="secondary"
                sx={{ backgroundColor: "black", fontSize: "14px", fontWeight: 100, marginRight: 0, padding: 2, pl: 4, pr: 4 }}
                variant="contained"
                size="small"
              >
                Get access!
              </Button>
            </Box>
          </Box>
        )}

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
