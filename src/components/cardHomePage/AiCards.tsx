import { Box, Link, Typography, Input, Button, useMediaQuery } from "@mui/material";
import Image from "next/image";
import React from "react";
import { useEffect, useRef, useState } from "react";
import { theme } from "../../config/theme";

const AiCards = () => {
  const isMobileView = useMediaQuery(theme.breakpoints.down("md"));
  const cardData = [
    {
      title: "Neurology",
      description: "",
    },
    {
      title: "Anaesthesiology",
      description: "AI-driven pupillometer for advanced light reflex.",
    },
    {
      title: "Opthalmology",
      description: "Mobile point of convergence meter.",
    },
    {
      title: "Nursing",
      description: "Mobile pupil diameter measurement.",
    },
    {
      title: "Critical care",
      description: "Mobile Video Oculography.",
    },
    {
      title: "Sport Medicine",
      description: "Mobile Video Oculography.",
    },
  ];
  return (
    <Box width={"100%"}>
      {isMobileView ? (
        <Box width={"100%"} display={"flex"} justifyContent={"flex-end"} flexDirection={"column"} alignItems={"flex-end"}>
          <Box>
            {cardData.map((e, idx) => {
              return (
                <Box key={idx}>
                  <Box
                    border={"1px solid #F5F5F7"}
                    boxShadow={"0px 8px 32px rgba(27, 37, 74, 0.08)"}
                    borderRadius={"14px"}
                    p={3}
                    mt={4}
                    width={"270px"}
                    height={"158px"}
                    display={"flex"}
                    justifyContent={"flex-end"}
                    flexDirection={"column"}
                    alignItems={"center"}
                  >
                    <Box fontSize={"21px"} fontWeight={500} mb={3} fontFamily={"SuisseIntl"} width={"100%"} textAlign={"left"}>
                      {e.title}
                    </Box>
                    <Box width={"100%"} fontSize={"15px"} fontWeight={300} color={"#5E5E5E"} fontFamily={"SuisseIntl"}>
                      {e.description}
                    </Box>
                  </Box>
                </Box>
              );
            })}
          </Box>
        </Box>
      ) : (
        <Box width={"100%"} display={"flex"} justifyContent={"space-between"} alignItems={"center"}>
          <Box>
            {cardData.map((e, idx) => {
              return (
                <Box key={idx}>
                  {idx % 2 == 0 ? (
                    <Box
                      border={"1px solid #F5F5F7"}
                      boxShadow={"0px 8px 32px rgba(27, 37, 74, 0.08)"}
                      borderRadius={"14px"}
                      p={3}
                      mt={4}
                      width={"270px"}
                      height={"158px"}
                      display={"flex"}
                      justifyContent={"flex-end"}
                      flexDirection={"column"}
                      alignItems={"center"}
                    >
                      <Box fontSize={"21px"} fontWeight={500} mb={3} fontFamily={"SuisseIntl"} width={"100%"} textAlign={"left"}>
                        {e.title}
                      </Box>
                      <Box width={"100%"} fontSize={"15px"} fontWeight={300} color={"#5E5E5E"} fontFamily={"SuisseIntl"}>
                        {e.description}
                      </Box>
                    </Box>
                  ) : null}
                </Box>
              );
            })}
          </Box>
          <Box>
            {cardData.map((e, idx) => {
              return (
                <Box key={idx}>
                  {idx % 2 == 1 ? (
                    <Box
                      border={"1px solid #F5F5F7"}
                      boxShadow={"0px 8px 32px rgba(27, 37, 74, 0.08)"}
                      borderRadius={"14px"}
                      p={3}
                      mt={4}
                      width={"270px"}
                      height={"158px"}
                      display={"flex"}
                      justifyContent={"flex-end"}
                      flexDirection={"column"}
                      alignItems={"center"}
                    >
                      <Box fontSize={"21px"} fontWeight={500} mb={3} fontFamily={"SuisseIntl"} width={"100%"} textAlign={"left"}>
                        {e.title}
                      </Box>
                      <Box width={"100%"} fontSize={"15px"} fontWeight={300} color={"#5E5E5E"} fontFamily={"SuisseIntl"}>
                        {e.description}
                      </Box>
                    </Box>
                  ) : null}
                </Box>
              );
            })}
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default AiCards;
