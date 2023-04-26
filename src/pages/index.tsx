import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { Box, Stack, Typography, Divider, Button, useMediaQuery } from "@mui/material";
import styles from "./index.module.css";
import "animate.css";
import { motion } from "framer-motion";
import Image from "next/image";
import CardWithShadow from "../components/cardHomePage/CardWithShadow";
import AiCards from "../components/cardHomePage/AiCards";
import TeamCarousel from "../components/HomeCarousels/TeamCarousel";
import AppCards from "../components/HomeCarousels/AppCards";
import { theme } from "../config/theme";
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
          <Typography
            component={motion.p}
            variant="h2"
            align="center"
            marginX="auto"
            width={{ xs: "100%", md: "80%", lg: "70%" }}
            variants={{ initial: { opacity: 0, y: 100 }, animate: { opacity: 1, y: 0 } }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            Pupillometers are now objective and AI-enabled.
          </Typography>
        </Box>
        <Box width={"100vw"} display={"flex"} justifyContent={"center"} alignContent={"center"} pr={15}>
          <Image src={"/images/homePage/phone.png"} width={"400px"} height={"1000px"} alt={"kitty"} />
        </Box>
        {isMobileView ? (
          <Box mt={100} display={"flex"} flexDirection={"column"} width={"100%"} mb={10}>
            <Typography fontSize={"64px"} fontFamily={"FinancierDisplay"} mb={5} textAlign={"center"}>
              mPenlight
            </Typography>
            <Typography fontSize={"14px"} textAlign={"center"}>
              Solvemed{"'"}s smartphone-based software medical device enables pupil dilation measurement in the quantifiable manner without any external hardware needed. <br />
              <br /> This FDA-listed product takes pupil evaluation on the new - quantified and AI driven level.
            </Typography>
          </Box>
        ) : (
          <Box mt={100} mb={100} display={"flex"} flexDirection={"column"} maxWidth={"300px"} ml={10}>
            <Typography fontSize={"64px"} fontFamily={"FinancierDisplay"} mb={5}>
              mPenlight
            </Typography>
            <Typography fontSize={"17px"}>
              Solvemed{"'"}s smartphone-based software medical device enables pupil dilation measurement in the quantifiable manner without any external hardware needed. <br />
              <br /> This FDA-listed product takes pupil evaluation on the new - quantified and AI driven level.{" "}
            </Typography>
          </Box>
        )}

        <CardWithShadow />
        <Box
          pt={30}
          pb={30}
          style={{
            backgroundImage: `url('/images/bg/gradient.png')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <Typography
            component={motion.p}
            variant="h3"
            align="center"
            marginX="auto"
            width={{ xs: "100%", md: "80%", lg: "70%" }}
            variants={{ initial: { opacity: 0, y: 100 }, animate: { opacity: 1, y: 0 } }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            {/* ogarnac linear gradient text */}
            Designed for{" "}
            <Typography
              sx={{ background: `linear-gradient(to right, rgba(114, 84, 220, 1), rgba(112, 141, 245, 1))`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}
              variant="h3"
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              practitioners
            </Typography>{" "}
            looking to end the era of subjective neuro-ophthalmic examination.
          </Typography>
        </Box>
        <AiCards />
        {isMobileView ? (
          <Box display={"flex"} width={"100vw"} ml={-3} mt={20} justifyContent={"center"} alignItems={"center"} flexDirection={"column"}>
            <Box width={"100%"}>
              <Typography variant="h3" fontSize={"32px"} textAlign={"center"}>
                Experts about our technology.
              </Typography>
            </Box>
            <Box width={"100%"} mt={6} pl={3} pr={3}>
              <Typography textAlign={"center"} fontSize={"14px"}>
                We bring to the world the most advanced smartphone-enabled data collection and analytical tools in the field of neurology and ophthalmology.
              </Typography>
            </Box>
          </Box>
        ) : (
          <Box display={"flex"} mt={20} justifyContent={"center"} alignItems={"center"} flexDirection={"column"}>
            <Box>
              <Typography variant="h3" fontSize={"64px"} textAlign={"center"}>
                Experts about our technology.
              </Typography>
            </Box>
            <Box width={"70%"} mt={6}>
              <Typography textAlign={"center"} fontSize={"18px"}>
                We bring to the world the most advanced smartphone-enabled data collection and analytical tools in the field of neurology and ophthalmology.
              </Typography>
            </Box>
          </Box>
        )}

        <TeamCarousel />
        {isMobileView ? (
          <Box mt={60} width={"100%"} display="flex" justifyContent={"center"} alignItems={"center"} flexShrink={1}>
            <Typography variant="h4" fontSize={"32px"} textAlign={"center"}>
              Solvemed transforms complex <b>eye evaluation processes </b> into one connected system to help you offer better, more efficient care.
            </Typography>
          </Box>
        ) : (
          <Box mt={60} pl={15} pr={15} width={"100%"} display="flex" justifyContent={"center"} alignItems={"center"} flexShrink={1}>
            <Typography variant="h4" fontSize={"64px"} textAlign={"center"}>
              Solvemed transforms complex <b>eye evaluation processes </b> into one connected system to help you offer better, more efficient care.
            </Typography>
          </Box>
        )}
        {/* czekam na zdjęcia ze strony by móc wrzucić je responsywnie */}
        <AppCards />
        {isMobileView ? (
          <Box mt={60} width={"100%"} display="flex" justifyContent={"center"} alignItems={"center"} flexDirection={"column"} flexShrink={1}>
            <Box>
              <Typography variant="h4" fontSize={"64px"} textAlign={"center"}>
                Testing pupil is now simple, objective and <b>AI-enabled.</b>
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
                sx={{ backgroundColor: "black", fontSize: "14px", fontWeight: 100, marginRight: 0, padding: 2, pl: 4, pr: 4 }}
                variant="contained"
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
                We bring to the world the most advanced smartphone-enabled data collection and analytical tools in the field of neurology and ophthalmology.
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
            <Box display={"flex"} justifyContent={"center"} alignItems={"center"} flexWrap={"wrap"}>
              {logos.map((e, idx) => {
                return (
                  <Box key={idx} width={"50%"} mt={3} justifyContent={"center"} alignItems={"center"}>
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
        <Divider sx={{ width: "100vw", ml: -6, mt: 20 }} />
      </Box>
    </>
  );
};

export default Home;
