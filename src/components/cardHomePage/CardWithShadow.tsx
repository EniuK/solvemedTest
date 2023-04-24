import { Box, Link, Typography, Input, Button, useMediaQuery } from "@mui/material";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { theme } from "../../config/theme";

const CardWithShadow = () => {
  const isMobileView = useMediaQuery(theme.breakpoints.down("sm"));
  const cardData = [
    {
      title: "HIPPA  complained",
      description: "Designed for privacy and security. ",
      src: "/images/homePage/security.png",
    },
    {
      title: "Sustainable ",
      description: "Designed with the planet in mind.",
      src: "/images/homePage/leaf.png",
    },
    {
      title: "AI Driven ",
      description: "Examination precision proved clinically.",
      src: "/images/homePage/Ai.png",
    },
    {
      title: "Sustainable ",
      description: "Designed with the planet in mind.",
      src: "/images/homePage/leaf.png",
    },
    {
      title: "AI Driven ",
      description: "Examination precision proved clinically.",
      src: "/images/homePage/Ai.png",
    },
    {
      title: "Sustainable ",
      description: "Designed with the planet in mind.",
      src: "/images/homePage/leaf.png",
    },
  ];
  return (
    <Box>
      {isMobileView ? (
        <Box width={"180vw"}>
          <Box></Box>
        </Box>
      ) : (
        <Box width={"100%"}>
          {cardData.map((element, idx: number) => {
            return (
              <Box key={idx} width={"100%"} display={"flex"} justifyContent={idx % 2 === 0 ? "flex-start" : "flex-end"} alignItems={"center"}>
                <Box bgcolor={"#FFFFFF"} borderRadius={"10px"} p={2} pr={4} border={"1px solid #F5F5F7"} boxShadow={"0px 8px 32px rgba(27, 37, 74, 0.08)"} maxWidth={"310px"}>
                  <Image src={element.src} width="24px" height={"24px"} alt={element.title} />
                  <Box mt={2}>
                    <Typography fontFamily={"FinancierDisplay"} fontSize={"28px"} variant="body1">
                      {element.title}
                    </Typography>
                  </Box>
                  <Box mt={1} width={"70%"}>
                    <Typography variant="body6">{element.description}</Typography>
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

export default CardWithShadow;
