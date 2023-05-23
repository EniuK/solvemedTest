import { Box, Typography, useMediaQuery, Slide } from "@mui/material";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { theme } from "../../config/theme";
import AOS from "aos";

import SwiperCore, { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
const teamData = [
  {
    name: "Dr Fion Bremner, MD",
    description: "Consultant Neuro-ophthalmologist and Ophthalmic Surgeon, University College London Hospitals, President of European Neuro-Ophthalmology Association",
    avatar: "/images/homePage/avatars/Bremner.png",
    quote:
      "If an App could be developed allowing pupil measurements to be made using a smartphone then this would be hugely valuable and I predict would very quickly become part of standard clinical practice.",
    titles: ["Neuro-opthalmologist"],
    sm: false,
  },
  {
    name: "Professor Sanjay Manohar, M.D.",
    description: "Neurologist and Clinical Researcher, Oxford University",
    avatar: "/images/homePage/avatars/Manohar.png",
    quote: "Solvemed is likely to succeed because of its unique combination of scientists, programmers and clinicians working on the problem.",
    titles: ["Neurologist"],
    sm: false,
  },
  {
    name: "Dr. James Neffendorf, M.D.",
    description: "Consultant Ophthalmologist and Vitreoretinal Surgeon (Locum) at King’s College Hospital NHS Foundation Trust",
    avatar: "/images/homePage/avatars/Neffendorf.png",
    quote: "The Solvemed AI penlight/pupillometer has the potential to modernise pupillary assessment and improve patient care.",
    titles: ["Ophthalmologist"],
    sm: false,
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
  },
];

const TeamCarousel = () => {
  const isMobileView = useMediaQuery(theme.breakpoints.down("md"));
  const desktop = useMediaQuery(theme.breakpoints.up("lg"));
  SwiperCore.use([Navigation]);

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
        <Box>
          <Swiper slidesPerView={1.15} spaceBetween={20} className="mySwiper1" slidesOffsetBefore={0} slidesOffsetAfter={0}>
            {teamData.map((e, idx) => {
              return (
                <SwiperSlide key={idx}>
                  <Box
                    minHeight={"452px"}
                    p={3}
                    position={"relative"}
                    pr={0}
                    pt={"16px"}
                    mt={3}
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

                    <Box width={"100%"} mt={4} mr={6}>
                      <Typography fontFamily="FinancierDisplay" fontSize={"18px"} fontWeight={400} lineHeight={"130%"} letterSpacing={"-0.01em"}>
                        {e.name}
                      </Typography>
                    </Box>
                    <Box width={"100%"} mt={2} pr={10} fontFamily="SuisseIntl" lineHeight={"150%"} fontWeight={300} color={"#5E5E5E"} fontSize={"12px"}>
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
              );
            })}
          </Swiper>
        </Box>
      ) : (
        <Box width={"100%"} mt={10}>
          <Swiper
            spaceBetween={20}
            className="mySwiper"
            slidesOffsetBefore={50}
            slidesOffsetAfter={50}
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
            }}
            pagination={false}
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
                    mb={4}
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
                      <Image src={e.avatar} alt={e.name} width={"100px"} height={"100px"} priority />
                    </Box>
                    <Box width={"100%"} fontFamily="FinancierDisplay" fontWeight={400} lineHeight={"130%"} letterSpacing={"-0.01em"} mt={2} fontSize={"21px"}>
                      {e.name}
                    </Box>
                    <Box flexGrow={1} style={e.sm ? { marginBottom: -10 } : {}}>
                      <Box width={"55%"} height={"40%"} lineHeight={"150%"} mt={2} fontFamily="SuisseIntl" fontWeight={300} color={"#5E5E5E"} fontSize={"14px"}>
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

          <Box display={"flex"} mt={5} width={"100%"} justifyContent={"flex-end"} alignItems={"flex-end"} pr={"131px"}>
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
