import { Box, useMediaQuery } from "@mui/material";
import Image from "next/image";
import React, { useEffect, useRef } from "react";
import { theme } from "../../config/theme";
import AOS from "aos";

import SwiperCore, { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
const AppCards = () => {
  const isMobileView = useMediaQuery(theme.breakpoints.down("lg"));
  const istabletView = useMediaQuery(theme.breakpoints.down("md"));
  const swiperRef1 = useRef(null);
  SwiperCore.use([Navigation, Pagination]);

  useEffect(() => {
    AOS.init();
    return () => {
      AOS.refresh();
    };
  }, []);

  const slideNext1 = () => {
    if (swiperRef1.current && swiperRef1.current.swiper) {
      swiperRef1.current.swiper.slideNext();
    }
  };

  const slidePrev1 = () => {
    if (swiperRef1.current && swiperRef1.current.swiper) {
      swiperRef1.current.swiper.slidePrev();
    }
  };

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
    <Box>
      <Box
        data-aos={"fade-up"}
        data-aos-delay="50"
        data-aos-duration="1000"
        data-aos-easing="ease-out"
        data-aos-once="true"
        data-aos-anchor-placement="center"
        display={"flex"}
        width={"100%"}
        mt={"40px"}
      >
        <Swiper
          slidesPerView={istabletView ? 1.15 : isMobileView ? 2 : 3.4}
          onSwiper={(swiper) => {
            swiperRef1.current = swiper;
          }}
          navigation={{
            prevEl: ".swiper-button-prevApp",
            nextEl: ".swiper-button-nextApp",
          }}
          className="mySwiper"
          slidesOffsetBefore={!isMobileView ? 70 : 0}
          slidesOffsetAfter={!isMobileView ? 70 : 0}
          modules={[Pagination]}
          pagination={true}
        >
          {appData.map((e, idx) => {
            return (
              <SwiperSlide key={idx}>
                <Box
                  overflow={"hidden"}
                  maxWidth={"356px"}
                  style={istabletView ? { width: "301px", height: "417px" } : {}}
                  mb={10}
                  mt={5}
                  bgcolor={"rgba(255, 255, 255, 1)"}
                  border={"1px solid #F5F5F7"}
                  boxShadow={"0px 8px 32px rgba(27, 37, 74, 0.08)"}
                  borderRadius={"28px"}
                >
                  <Box width={"100%"} minHeight={isMobileView ? "116px" : "137px"} p={"24px"} pb={0}>
                    <Box
                      fontSize={isMobileView ? "20px" : "24px"}
                      display={"flex"}
                      fontFamily={"SuisseIntl"}
                      fontWeight={600}
                      justifyContent={"flex-start"}
                      textAlign={"left"}
                      alignItems="flex-start"
                      width={"90%"}
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
                      width={"90%"}
                    >
                      {e.description}
                    </Box>
                  </Box>

                  <Box mb={-1}>
                    <Image src={e.src} width={isMobileView ? 140 : 356} height={isMobileView ? 301 : 360} alt={e.title} priority />
                  </Box>
                </Box>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </Box>
      {!istabletView && (
        <Box display={"flex"} width={"100%"} justifyContent={"flex-end"} alignItems={"flex-end"} pr={"131px"}>
          <Box className="swiper-button-prevApp" style={{ cursor: "pointer" }} onClick={() => slidePrev1()} mr={2} width={"48px"} height={"48px"}>
            <Image src={"/images/icons/buttonLeft.svg"} alt="Previous" width={48} height={48} />
          </Box>
          <Box className="swiper-button-nextApp" style={{ cursor: "pointer" }} onClick={() => slideNext1()} width={"48px"} height={"48px"}>
            <Image src={"/images/icons/buttonRight.svg"} alt="Next" width={48} height={48} />
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default AppCards;
