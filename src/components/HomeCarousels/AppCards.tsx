import { Box, Link, Typography, Input, Button, useMediaQuery, Avatar } from "@mui/material";
import Image from "next/image";
import React from "react";
import { useEffect, useRef, useState } from "react";
import { theme } from "../../config/theme";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";

const AppCards = () => {
  const isMobileView = useMediaQuery(theme.breakpoints.down("lg"));
  const istabletView = useMediaQuery(theme.breakpoints.down("md"));
  const appData = [
    {
      title: "Reliable patient monitoring",
      description: "Data driven medical results ",
      src: "/images/homePage/appPhotos/phone.png",
    },
    {
      title: "Reducing the risk of human error",
      description: "Data driven medical results ",
      src: "/images/homePage/appPhotos/brain.png",
    },
    {
      title: "Lowers risk of litigation",
      description: "Using smartphone flashlight without FDA recognised Solvemed software, expose medics to the malpractice lawsuits.",
      src: "/images/homePage/appPhotos/interaction.png",
    },
    {
      title: "Quality assurance & standardisation.",
      description: "Data driven medical results ",
      src: "/images/homePage/appPhotos/cells.png",
    },
    {
      title: "Reducing the risk of human error",
      description: "Data driven medical results ",
      src: "/images/homePage/appPhotos/hgw.png",
    },
    {
      title: "Advanced analytics for demanding users",
      description: "Data driven medical results",
      src: "/images/homePage/appPhotos/phone2.png",
    },
  ];

  return (
    <Box display={"flex"} justifyContent={"center"} alignItems={"center"} ml={istabletView ? -1 : 10} mt={15}>
      <Swiper
        slidesPerView={istabletView ? 1.17 : isMobileView ? 2 : 3.2}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {appData.map((e, idx) => {
          return (
            <SwiperSlide key={idx}>
              <Box
                width={istabletView ? "280px" : "350px"}
                minWidth={"280px"}
                maxHeight={istabletView ? "417px" : "523px"}
                overflow={"hidden"}
                key={idx}
                mb={10}
                bgcolor={"rgba(255, 255, 255, 1)"}
                border={"1px solid #F5F5F7"}
                boxShadow={"0px 8px 32px rgba(27, 37, 74, 0.08)"}
                borderRadius={"28px"}
              >
                <Box width={"100%"} height={"137px"} pl={3} pr={3} pt={3}>
                  <Box
                    fontSize={"20px"}
                    display={"flex"}
                    fontFamily={"SuisseIntl"}
                    fontWeight={600}
                    justifyContent={"flex-start"}
                    textAlign={"left"}
                    alignItems="flex-start"
                    pr={10}
                  >
                    {e.title}
                  </Box>
                  <Box fontSize={"15px"} fontFamily={"SuisseIntl"} color={"#5E5E5E"} display={"flex"} textAlign={"left"} justifyContent={"flex-start"} alignItems="flex-start">
                    {e.description}
                  </Box>
                </Box>

                <Box height={istabletView ? "" : "360px"}>
                  <Image src={e.src} width={"350px"} height={"360px"} alt={e.title} />
                </Box>
              </Box>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </Box>
  );
};

export default AppCards;
