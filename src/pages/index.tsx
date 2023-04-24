import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { Box, Stack, Typography } from "@mui/material";
import styles from "./index.module.css";
import "animate.css";
import { motion } from "framer-motion";
import Image from "next/image";
import CardWithShadow from "../components/cardHomePage/CardWithShadow";
const Home: NextPage = () => {
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
        <Box mt={100} mb={100} display={"flex"} flexDirection={"column"} maxWidth={"300px"} ml={10}>
          <Typography fontSize={"64px"} fontFamily={"FinancierDisplay"} mb={5}>
            mPenlight
          </Typography>
          <Typography fontSize={"17px"}>
            Solvemed{"'"}s smartphone-based software medical device enables pupil dilation measurement in the quantifiable manner without any external hardware needed. <br />
            <br /> This FDA-listed product takes pupil evaluation on the new - quantified and AI driven level.{" "}
          </Typography>
        </Box>
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
            Designed for practitioners looking to end the era of subjective neuro-ophthalmic examination.
          </Typography>
        </Box>
      </Box>
    </>
  );
};

export default Home;
