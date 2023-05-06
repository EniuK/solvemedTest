import { Box, useMediaQuery } from "@mui/material";
import Image from "next/image";
import React from "react";
import { theme } from "../../config/theme";

const AiCards = () => {
  const isMobileView = useMediaQuery(theme.breakpoints.down("md"));
  const cardDataBig = [
    {
      title: "Critical Care",
      src: "/images/homePage/aiCards/medic.png",
      w: "77px",
      h: "100px",
    },
    {
      title: "Anaesthesiology",
      src: "/images/homePage/aiCards/syringe.png",
      w: "160.18px",
      h: "96.3px",
    },
    {
      title: "Nursing",
      src: "/images/homePage/aiCards/pill.png",
      w: "100px",
      h: "100px",
    },

    {
      title: "Neurology",
      src: "/images/homePage/aiCards/brain.png",
      w: "120.62px",
      h: "100px",
    },
    {
      title: "Opthalmology",
      src: "/images/homePage/aiCards/eye.png",
      w: "116.39px",
      h: "100px",
      op: 0.6,
    },
    {
      title: "Optometry",
      src: "/images/homePage/aiCards/glasses.png",
      w: "137.04px",
      h: "80px",
      op: 0.6,
    },
    {
      title: "Neuro-ophthalmology",
      src: "/images/homePage/aiCards/eyev2.png",
      w: "150.05px",
      h: "97.23px",
    },
    {
      title: "Sport Medicine",
      src: "/images/homePage/aiCards/sport.png",
      w: "146.73px",
      h: "90px",
    },
  ];

  const cardDataSmall = [
    {
      title: "Critical Care",
      src: "/images/homePage/aiCards/medic.png",
      w: "46.2px",
      h: "60px",
    },
    {
      title: "Anaesthesiology",
      src: "/images/homePage/aiCards/syringe.png",
      w: "96.11px",
      h: "57.78px",
    },
    {
      title: "Nursing",
      src: "/images/homePage/aiCards/pill.png",
      w: "60px",
      h: "60px",
    },

    {
      title: "Neurology",
      src: "/images/homePage/aiCards/brain.png",
      w: "72.37px",
      h: "60px",
    },
    {
      title: "Opthalmology",
      src: "/images/homePage/aiCards/eye.png",
      w: "69.83px",
      h: "60px",
      op: 0.6,
    },
    {
      title: "Optometry",
      src: "/images/homePage/aiCards/glasses.png",
      w: "102.78px",
      h: "60px",
      op: 0.6,
    },
    {
      title: "Neuro-ophthalmology",
      src: "/images/homePage/aiCards/eyev2.png",
      w: "92.6px",
      h: "60px",
    },
    {
      title: "Sport Medicine",
      src: "/images/homePage/aiCards/sport.png",
      w: "97.82px",
      h: "60px",
    },
  ];
  return (
    <Box width={"100%"}>
      {isMobileView ? (
        <Box width={"100%"} display={"flex"} alignItems={"center"} justifyContent={"space-between"} flexWrap={"wrap"}>
          {cardDataSmall.map((e, idx) => {
            return (
              <Box key={idx} width={"48%"} display={"flex"} justifyContent={"center"} alignItems={"center"}>
                <Box
                  border={"1px solid #F5F5F7"}
                  boxShadow={"0px 8px 32px rgba(27, 37, 74, 0.08)"}
                  borderRadius={"14px"}
                  mt={1}
                  pt={3}
                  pl={1}
                  pb={2}
                  width={"161.5px"}
                  height={"132px"}
                  display={"flex"}
                  justifyContent={"flex-end"}
                  alignItems={"center"}
                  flexDirection={"column"}
                >
                  <Box width={"100%"} height={"60%"} style={{ opacity: e.op || 1 }} display={"flex"} justifyContent={"flex-start"} alignItems={"center"} color={"#5E5E5E"}>
                    <Image src={e.src} width={e.w} height={e.h} alt={e.title} />
                  </Box>
                  <Box
                    fontSize={"15px"}
                    display={"flex"}
                    pt={3}
                    justifyContent={"flex-start"}
                    alignItems={"flex-end"}
                    fontWeight={600}
                    height={"60%"}
                    fontFamily={"SuisseIntl"}
                    width={"100%"}
                    textAlign={"left"}
                    pr={2}
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
                  borderRadius={"14px"}
                  mt={4}
                  mr={3}
                  p={3}
                  width={"270px"}
                  height={"224px"}
                  display={"flex"}
                  justifyContent={"flex-end"}
                  alignItems={"center"}
                  flexDirection={"column"}
                >
                  <Box width={"100%"} height={"60%"} display={"flex"} justifyContent={"flex-start"} alignItems={"center"} color={"#5E5E5E"}>
                    <Image src={e.src} width={e.w} height={e.h} alt={e.title} />
                  </Box>
                  <Box
                    fontSize={"21px"}
                    display={"flex"}
                    justifyContent={"flex-start"}
                    alignItems={"flex-end"}
                    fontWeight={500}
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
