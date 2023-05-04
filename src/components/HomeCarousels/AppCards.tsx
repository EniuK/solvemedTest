import { Box, Link, Typography, Input, Button, useMediaQuery, Avatar } from "@mui/material";
import Image from "next/image";
import React from "react";
import { useEffect, useRef, useState } from "react";
import { theme } from "../../config/theme";
const AppCards = () => {
  const isMobileView = useMediaQuery(theme.breakpoints.down("sm"));
  const appData = [
    {
      title: "Constant patient monitoring",
      description: "Data driven medical results ",
      src: "/images/homePage/appPhotos/phone.png",
    },
    {
      title: "Reducing the risk of human error",
      description: "Data driven medical results ",
      src: "/images/homePage/appPhotos/brain.png",
    },
    {
      title: "Quality assurance & standardisation.",
      description: "Data driven medical results ",
      src: "/images/homePage/appPhotos/cells.png",
    },
  ];

  return (
    <Box display={"flex"} justifyContent={"center"} alignItems={"center"} mt={15}>
      {appData.map((e, idx) => {
        return (
          <Box
            width={"350px"}
            minWidth={"280px"}
            maxHeight={"523px"}
            overflow={"hidden"}
            key={idx}
            mr={4}
            border={"1px solid #F5F5F7"}
            boxShadow={"0px 8px 32px rgba(27, 37, 74, 0.08)"}
            borderRadius={"14px"}
          >
            <Box width={"100%"} height={"137px"} pl={3} pr={3} pt={3} textAlign={"left"}>
              <Box fontSize={"20px"} display={"flex"} justifyContent={"flex-end"} alignItems="flex-end">
                {e.title}
              </Box>
              <Box fontSize={"15px"} color={"#5E5E5E"} display={"flex"} justifyContent={"flex-start"} alignItems="flex-start">
                {e.description}
              </Box>
            </Box>

            <Box>
              <Image src={e.src} width={"350px"} height={"360px"} alt={e.title} />
            </Box>
          </Box>
        );
      })}
    </Box>
  );
};

export default AppCards;
