import { Box, useMediaQuery } from "@mui/material";
import Image from "next/image";
import React, { useEffect } from "react";
import { theme } from "../../config/theme";
import AOS from "aos";
import styles from "../../components/cardHomePage/cardWithShadow.module.css";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper";

const AppCards = () => {
  const isMobileView = useMediaQuery(theme.breakpoints.down("lg"));
  const istabletView = useMediaQuery(theme.breakpoints.down("md"));
  useEffect(() => {
    AOS.init();

    return () => {
      AOS.refresh();
    };
  }, [AOS]);
  const appData = [
    {
      title: "Reliable patient screening",
      description: "Precision that removes guess-work. ",
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
      src: "/images/homePage/appPhotos/lines.png",
    },
    {
      title: "Advanced analytics for demanding users",
      description: "Complex data sets for important decisions.",
      src: "/images/homePage/appPhotos/phone2.png",
    },
  ];

  return (
    <Box
      data-aos={"fade-up"}
      data-aos-delay="50"
      data-aos-duration="1000"
      data-aos-easing="ease-out"
      data-aos-once="true"
      data-aos-anchor-placement="center"
      display={"flex"}
      width={"100vw"}
      justifyContent={"center"}
      alignItems={"center"}
      mt={"40px"}
      className={styles.onBigScreen}
    >
      <Swiper
        slidesPerView={istabletView ? 1.3 : isMobileView ? 2 : 3.3}
        spaceBetween={0}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
        slidesOffsetBefore={!isMobileView ? 70 : 0}
        slidesOffsetAfter={!isMobileView ? 70 : 0}
      >
        {appData.map((e, idx) => {
          return (
            <SwiperSlide key={idx}>
              <Box
                overflow={"hidden"}
                maxWidth={"356px"}
                style={istabletView ? { width: "280px", height: "417px" } : {}}
                key={idx}
                mb={10}
                bgcolor={"rgba(255, 255, 255, 1)"}
                border={"1px solid #F5F5F7"}
                boxShadow={"0px 8px 32px rgba(27, 37, 74, 0.08)"}
                borderRadius={"28px"}
              >
                <Box width={"100%"} minHeight={"137px"} p={"24px"} pb={0}>
                  <Box
                    fontSize={isMobileView ? "20px" : "24px"}
                    display={"flex"}
                    fontFamily={"SuisseIntl"}
                    fontWeight={600}
                    justifyContent={"flex-start"}
                    textAlign={"left"}
                    alignItems="flex-start"
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
                    lineHeight={"140%"}
                    pr={istabletView ? 0 : 3}
                    mt={2}
                  >
                    {e.description}
                  </Box>
                </Box>

                <Box mb={-1}>
                  <Image src={e.src} width={"356px"} height={"360px"} alt={e.title} />
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
