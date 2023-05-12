import { Box, useMediaQuery } from "@mui/material";
import Image from "next/image";
import React from "react";
import { theme } from "../../config/theme";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper";

const AppCards = () => {
  const isMobileView = useMediaQuery(theme.breakpoints.down("lg"));
  const istabletView = useMediaQuery(theme.breakpoints.down("md"));
  const appData = [
    {
      title: "Reliable patient screening",
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
      description: "Consistent and reliable results every time.",
      src: "/images/homePage/appPhotos/cells.png",
    },
    {
      title: "Al-powered Software ",
      description: "Advanced algorithms and machine learning to assist in medical decision-making.",
      src: "/images/homePage/appPhotos/hgw.png",
    },
    {
      title: "Advanced analytics for demanding users",
      description: "Complex data sets for important decisions.",
      src: "/images/homePage/appPhotos/phone2.png",
    },
  ];

  return (
    <Box display={"flex"} width={"100vw"} justifyContent={"center"} alignItems={"center"} ml={istabletView ? -5 : -10} pl={istabletView ? 0 : 5} mt={15}>
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
                overflow={"hidden"}
                maxWidth={"356px"}
                key={idx}
                mb={10}
                bgcolor={"rgba(255, 255, 255, 1)"}
                border={"1px solid #F5F5F7"}
                boxShadow={"0px 8px 32px rgba(27, 37, 74, 0.08)"}
                borderRadius={"28px"}
              >
                <Box width={"100%"} height={"137px"} pl={3} pt={3}>
                  <Box
                    fontSize={isMobileView ? "20px" : "24px"}
                    display={"flex"}
                    fontFamily={"SuisseIntl"}
                    fontWeight={600}
                    justifyContent={"flex-start"}
                    textAlign={"left"}
                    alignItems="flex-start"
                    pr={6.5}
                  >
                    {e.title}
                  </Box>
                  <Box
                    fontSize={"15px"}
                    fontWeight={300}
                    fontFamily={"SuisseIntl"}
                    color={"#5E5E5E"}
                    display={"flex"}
                    textAlign={"left"}
                    justifyContent={"flex-start"}
                    alignItems="flex-start"
                    pr={istabletView ? 0 : 3}
                  >
                    {e.description}
                  </Box>
                </Box>

                <Box mb={-1}>
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
