import { Box, useMediaQuery } from "@mui/material";
import Image from "next/image";
import React, { useEffect } from "react";
import { theme } from "../../config/theme";
import AOS from "aos";
import styles from "./cardWithShadow.module.css";
const AiCards = () => {
  const isMobileView = useMediaQuery(theme.breakpoints.down("md"));
  const cardDataBig = [
    {
      title: "Critical Care",
      src: "/images/homePage/aiCards/medic.png",
      w: 77,
      h: 100,
    },
    {
      title: "Anaesthesiology",
      src: "/images/homePage/aiCards/syringe.png",
      w: 160.18,
      h: 96.3,
    },
    {
      title: "Nursing",
      src: "/images/homePage/aiCards/pill.png",
      w: 100,
      h: 100,
    },

    {
      title: "Neurology",
      src: "/images/homePage/aiCards/brain.png",
      w: 120.62,
      h: 100,
    },
    {
      title: "Opthalmology",
      src: "/images/homePage/aiCards/eye.png",
      w: 116.39,
      h: 100,
      op: 0.6,
    },
    {
      title: "Optometry",
      src: "/images/homePage/aiCards/glasses.png",
      w: 137.04,
      h: 80,
      op: 0.6,
    },
    {
      title: "Neuro-ophthalmology",
      src: "/images/homePage/aiCards/eyev2.png",
      w: 150.05,
      h: 97.23,
    },
    {
      title: "Sport Medicine",
      src: "/images/homePage/aiCards/sport.png",
      w: 146.73,
      h: 90,
    },
  ];

  const cardDataSmall = [
    {
      title: "Critical Care",
      src: "/images/homePage/aiCards/medic.png",
      w: 46.2,
      h: 60,
    },
    {
      title: "Anaesthesiology",
      src: "/images/homePage/aiCards/syringe.png",
      w: 96.11,
      h: 57.78,
    },
    {
      title: "Nursing",
      src: "/images/homePage/aiCards/pill.png",
      w: 60,
      h: 60,
    },

    {
      title: "Neurology",
      src: "/images/homePage/aiCards/brain.png",
      w: 72.37,
      h: 60,
    },
    {
      title: "Opthalmology",
      src: "/images/homePage/aiCards/eye.png",
      w: 69.83,
      h: 60,
      op: 0.6,
    },
    {
      title: "Optometry",
      src: "/images/homePage/aiCards/glasses.png",
      w: 102.78,
      h: 60,
      op: 0.6,
    },
    {
      title: "Neuro-ophthalmology",
      src: "/images/homePage/aiCards/eyev2.png",
      w: 92.6,
      h: 60,
    },
    {
      title: "Sport Medicine",
      src: "/images/homePage/aiCards/sport.png",
      w: 97.82,
      h: 60,
    },
  ];
  useEffect(() => {
    AOS.init();

    return () => {
      AOS.refresh();
    };
  }, [AOS]);

  return (
    <Box width={"100%"}>
      <Box style={{ position: "absolute", margin: "0 auto 100px", rotate: "180deg", left: "20%", zIndex: -2 }} marginBottom={isMobileView ? 0 : 100}>
        <Image src={"/images/bg/medicalSpecialities.png"} width={isMobileView ? 300 : 880} height={isMobileView ? 600 : 843} alt={"gradientBackground"} priority />
      </Box>
      {isMobileView ? (
        <Box width={"100%"} display={"flex"} alignItems={"center"} justifyContent={"center"} flexWrap={"wrap"}>
          {cardDataSmall.map((e, idx) => {
            return (
              <Box key={idx} width={"50%"} display={"flex"} justifyContent={idx % 2 === 0 ? "flex-end" : "flex-start"} alignItems={idx % 2 === 0 ? "flex-end" : "flex-start"}>
                <Box
                  border={"1px solid #F5F5F7"}
                  boxShadow={"0px 8px 32px rgba(27, 37, 74, 0.08)"}
                  borderRadius={"14px"}
                  bgcolor={"white"}
                  mt={1}
                  p={"16px"}
                  style={idx % 2 === 0 ? { marginRight: "6px" } : { marginLeft: "6px" }}
                  width={"161.5px"}
                  height={"132px"}
                  display={"flex"}
                  justifyContent={"flex-end"}
                  alignItems={"center"}
                  flexDirection={"column"}
                  data-aos={"fade-up"}
                  data-aos-easing="ease-out"
                  data-aos-duration="1500"
                  data-aos-once="true"
                  data-aos-anchor-placement="top-bottom"
                >
                  <Box width={"100%"} height={"60%"} style={{ opacity: e.op || 1 }} display={"flex"} justifyContent={"flex-start"} alignItems={"center"} color={"#5E5E5E"}>
                    <Image src={e.src} width={e.w} height={e.h} alt={e.title} priority />
                  </Box>
                  <Box
                    fontSize={"15px"}
                    display={"flex"}
                    justifyContent={"flex-start"}
                    alignItems={"flex-end"}
                    fontWeight={600}
                    height={"60%"}
                    fontFamily={"SuisseIntl"}
                    width={"100%"}
                    textAlign={"left"}
                  >
                    {e.title}
                  </Box>
                </Box>
              </Box>
            );
          })}
        </Box>
      ) : (
        <Box width={"100%"} display={"flex"} alignItems={"center"} justifyContent={"center"} flexWrap={"wrap"}>
          {cardDataBig.map((e, idx) => {
            return (
              <Box key={idx}>
                <Box
                  border={"1px solid #F5F5F7"}
                  boxShadow={"0px 8px 32px rgba(27, 37, 74, 0.08)"}
                  borderRadius={"28px"}
                  bgcolor={"white"}
                  mt={4}
                  mr={3}
                  p={"24px"}
                  width={"270px"}
                  height={"224px"}
                  display={"flex"}
                  justifyContent={"flex-end"}
                  alignItems={"center"}
                  flexDirection={"column"}
                  data-aos={"fade-up"}
                  data-aos-easing="ease-out"
                  data-aos-duration="1500"
                  data-aos-once="true"
                  data-aos-anchor-placement="top-bottom"
                >
                  <Box width={"100%"} height={"60%"} style={{ opacity: e.op || 1 }} display={"flex"} justifyContent={"flex-start"} alignItems={"center"} color={"#5E5E5E"}>
                    <Image src={e.src} width={e.w} height={e.h} alt={e.title} priority />
                  </Box>
                  <Box
                    fontSize={"21px"}
                    display={"flex"}
                    justifyContent={"flex-start"}
                    alignItems={"flex-end"}
                    fontWeight={450}
                    height={"60%"}
                    fontFamily={"SuisseIntl"}
                    width={"100%"}
                    textAlign={"left"}
                  >
                    {e.title}
                  </Box>
                </Box>
              </Box>
            );
          })}
        </Box>
      )}
    </Box>
  );
};

export default AiCards;
