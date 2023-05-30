import { Box, Typography, useMediaQuery, Slide } from "@mui/material";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { theme } from "../../config/theme";
import AOS from "aos";
import SwiperCore, { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import styles from "./TeamCarousel.module.css";

import { LazyLoadComponent } from "react-lazy-load-image-component";

const teamData = [
  {
    name: "Dr Fion Bremner, MD",
    description: "Consultant Neuro-ophthalmologist and Ophthalmic Surgeon, University College London Hospitals, President of European Neuro-Ophthalmology Association",
    avatar: "/images/homePage/avatars/Bremner.png",
    quote:
      "If an App could be developed allowing pupil measurements to be made using a smartphone then this would be hugely valuable and I predict would very quickly become part of standard clinical practice.",
    titles: ["Neuro-opthalmologist"],
    sm: false,
    msm: false,
  },
  {
    name: "Professor Sanjay Manohar, M.D.",
    description: "Neurologist and Clinical Researcher, Oxford University",
    avatar: "/images/homePage/avatars/Manohar.png",
    quote: "Solvemed is likely to succeed because of its unique combination of scientists, programmers and clinicians working on the problem.",
    titles: ["Neurologist"],
    sm: false,
    msm: false,
  },
  {
    name: "Dr. James Neffendorf, M.D.",
    description: "Consultant Ophthalmologist and Vitreoretinal Surgeon (Locum) at King’s College Hospital NHS Foundation Trust",
    avatar: "/images/homePage/avatars/Neffendorf.png",
    quote: "The Solvemed AI penlight/pupillometer has the potential to modernise pupillary assessment and improve patient care.",
    titles: ["Ophthalmologist"],
    sm: false,
    msm: false,
  },
  {
    name: "Dr. Gregg J. Berdy",
    description:
      "President of Ophthalmology Associates, ran the FDA’s pivotal Xalatan trial. Anterior segment surgeon, elected to membership in the prestigious Castroviejo Corneal Society.",
    avatar: "/images/homePage/avatars/Berdy.png",
    quote:
      "Nobody tracks pupils accurately. Industry-wide standardised pupillary measurements are the future of care. There is high demand for a smartphone-enabled, reliable, scalable noninvasive diagnostic. This would be adopted across the entire industry.",
    titles: ["Ophthalmologist"],
    sm: true,
    msm: false,
  },
  {
    name: "Dr Simon Raby",
    description: "Clinical Director Oxford Major Trauma Centre",
    avatar: "/images/homePage/avatars/Simon.png",
    quote:
      "With accurate, repeatable assessment of pupil size, this application could improve diagnosis of life-threatening complications of traumatic brain injury. This could reduce time to surgery, improve tertiary neurosciences services and deliver patient centred care.",
    titles: ["Intensivist"],
    sm: false,
    msm: true,
  },
];
// sm - zmienna na cos malego
// msm - super maly napis, duze paddingi etc
const TeamCarousel = () => {
  const isMobileView = useMediaQuery(theme.breakpoints.down("md"));
  const desktop = useMediaQuery(theme.breakpoints.up("lg"));
  SwiperCore.use([Navigation, Pagination]);

  useEffect(() => {
    AOS.init();
    return () => {
      AOS.refresh();
    };
  }, [AOS]);

  const swiperRef = useRef(null);

  const slideNext = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideNext();
    }
  };

  const slidePrev = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slidePrev();
    }
  };

  // swipper desktop

  return (
    <Box
      mt={isMobileView ? 5 : "40px"}
      data-aos={"fade-up"}
      data-aos-delay="50"
      data-aos-duration="1000"
      data-aos-easing="ease-out"
      data-aos-once="true"
      data-aos-anchor-placement="center"
    >
      {isMobileView ? (
        <Box ml={"-16px"} width={"100%"} display={"flex"}>
          <Swiper
            style={{ width: "100%", maxWidth: "301px" }}
            slidesPerView={1.3}
            slidesOffsetBefore={0}
            slidesOffsetAfter={0}
            modules={[Pagination]}
            pagination={true}
            className="mySwiper"
          >
            {teamData.map((e, idx) => {
              return (
                <LazyLoadComponent key={idx}>
                  <SwiperSlide style={{ maxWidth: "301px" }}>
                    <Box
                      minHeight={"452px"}
                      maxWidth={"356px"}
                      overflow={"hidden"}
                      width={"301px"}
                      p={3}
                      position={"relative"}
                      pr={0}
                      pt={"16px"}
                      mt={3}
                      mb={5}
                      border={"1px solid #F5F5F7"}
                      boxShadow={"0px 8px 32px rgba(27, 37, 74, 0.08)"}
                      borderRadius={"22px"}
                    >
                      <Box width={"100%"} display={"flex"} justifyContent={"space-between"} alignItems={"flex-start"}>
                        <Box>
                          <Image src={e.avatar} alt={e.name} width={"72px"} height={"72px"} priority />
                        </Box>
                        <Box mr={"16px"}>
                          {e.titles.map((title) => {
                            return (
                              <Box
                                bgcolor={"rgba(103, 71, 242, 0.07)"}
                                p={0.5}
                                pl={2}
                                pr={2}
                                borderRadius={10}
                                fontWeight={500}
                                fontSize={"12px"}
                                key={title}
                                color={"rgba(103, 71, 242, 1)"}
                              >
                                {title}
                              </Box>
                            );
                          })}
                        </Box>
                      </Box>

                      <Box width={"90%"} mt={4} mr={6}>
                        <Typography fontFamily="FinancierDisplay" fontSize={"18px"} fontWeight={400} lineHeight={"130%"} letterSpacing={"-0.01em"}>
                          {e.name}
                        </Typography>
                      </Box>
                      <Box width={e.msm ? "90%" : "90%"} mt={2} pr={5} fontFamily="SuisseIntl" lineHeight={"150%"} fontWeight={300} color={"#5E5E5E"} fontSize={"12px"}>
                        {e.description}
                      </Box>
                      <Box mt={3}> &rdquo;</Box>
                      <Box
                        width={"80%"}
                        lineHeight={"150%"}
                        display={"flex"}
                        sx={{ flexGrow: 1 }}
                        justifyContent={"flex-end"}
                        alignItems={"flex-end"}
                        fontFamily="SuisseIntl"
                        fontWeight={400}
                        mr={6}
                        fontSize={"15px"}
                      >
                        {e.quote}
                      </Box>
                    </Box>
                  </SwiperSlide>
                </LazyLoadComponent>
              );
            })}
          </Swiper>
        </Box>
      ) : (
        <Box width={"100%"} mt={5}>
          <Swiper
            spaceBetween={20}
            className="mySwiper"
            slidesOffsetBefore={50}
            slidesOffsetAfter={50}
            modules={[Pagination]}
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
            }}
            pagination={true}
            navigation={{
              prevEl: ".swiper-button-prev1",
              nextEl: ".swiper-button-next1",
            }}
            breakpoints={{
              1200: {
                slidesPerView: 1.8,
              },
              1536: {
                slidesPerView: 2.5,
              },
            }}
          >
            {teamData.map((e, idx) => {
              return (
                <SwiperSlide key={idx}>
                  <Box
                    style={{ maxWidth: "781px", minHeight: "603px", padding: "72px", paddingBottom: 0 }}
                    mt={10}
                    mb={10}
                    border={"1px solid #F5F5F7"}
                    boxShadow={"0px 8px 32px rgba(27, 37, 74, 0.08)"}
                    borderRadius={"14px"}
                  >
                    <Box width={"100%"} display={"flex"} mt={-3} justifyContent={"flex-end"} alignItems={"flex-end"}>
                      {e.titles.map((title) => {
                        return (
                          <Box
                            bgcolor={"rgba(103, 71, 242, 0.07)"}
                            fontSize={"14px"}
                            px={"16px"}
                            py={"4px"}
                            borderRadius={10}
                            fontWeight={500}
                            key={title}
                            color={"rgba(103, 71, 242, 1)"}
                          >
                            {title}
                          </Box>
                        );
                      })}
                    </Box>
                    <Box>
                      <Image src={e.avatar} style={e.msm ? { borderRadius: "50%" } : {}} alt={e.name} width={"100px"} height={"100px"} priority />
                    </Box>
                    <Box width={"100%"} fontFamily="FinancierDisplay" fontWeight={400} lineHeight={"130%"} letterSpacing={"-0.01em"} mt={2} fontSize={"21px"}>
                      {e.name}
                    </Box>
                    <Box flexGrow={1} style={e.sm ? { marginBottom: -10 } : {}}>
                      <Box width={e.msm ? "25%" : "55%"} height={"40%"} lineHeight={"150%"} mt={2} fontFamily="SuisseIntl" fontWeight={300} color={"#5E5E5E"} fontSize={"14px"}>
                        {e.description}
                      </Box>

                      <Box mt={6} ml={-3} height={"60%"} display={"flex"}>
                        <Box pr={2}> &rdquo;</Box>
                        <Box width={e.sm ? "100%" : "85%"} display={"flex"} lineHeight={"150%"} fontFamily="SuisseIntl" fontWeight={400}>
                          {e.quote}
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                </SwiperSlide>
              );
            })}
          </Swiper>

          <Box display={"flex"} width={"100%"} justifyContent={"flex-end"} alignItems={"flex-end"} pr={"131px"}>
            <Box className="swiper-button-prev1" style={{ cursor: "pointer" }} onClick={() => slidePrev()} mr={2}>
              <Image src={"/images/icons/buttonLeft.svg"} alt="Previous" width={"48px"} height={"48px"} />
            </Box>
            <Box className="swiper-button-next1" style={{ cursor: "pointer" }} onClick={() => slideNext()}>
              <Image src={"/images/icons/buttonRight.svg"} alt="Next" width={"48px"} height={"48px"} />
            </Box>
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default TeamCarousel;
