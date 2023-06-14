import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";
import Image from "next/image";
import styles from "../pages/index.module.css";
import AiCards from "./cardHomePage/AiCards";
import { useEffect, useState } from "react";

const More = ({ isMobileView }: {isMobileView:boolean}) => {
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
    }, 3000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <>
      <Box mt={{ lg: 50, md: 100 }}>
        <Box style={{ position: "absolute", margin: "90px auto ", rotate: "180deg", left: "30%" }}>
          <Image
            src={"/images/bg/medicalSpecialities.png"}
            width={428.33}
            height={434.42}
            alt={"gradientBackground"}
            priority
            style={{
              maxWidth: "100%",
              height: "auto",
            }}
          />
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
              <Image
                src={"/images/bg/medicalSpecialities.png"}
                width={428.33}
                height={434.42}
                alt={"gradientBackground"}
                priority
                style={{
                  maxWidth: "100%",
                  height: "auto",
                }}
              />
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
    </>
  );
};

export default More;
