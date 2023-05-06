import { Box, Typography, useMediaQuery, Slide } from "@mui/material";
import Image from "next/image";
import React, { useState } from "react";
import { theme } from "../../config/theme";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";
const TeamCarousel = () => {
  const isMobileView = useMediaQuery(theme.breakpoints.down("md"));
  const isPhoneView = useMediaQuery(theme.breakpoints.down("sm"));
  const desktop = useMediaQuery(theme.breakpoints.up("lg"));
  const teamData = [
    {
      name: "Dr Fion Bremner, MD",
      description: "Consultant Neuro-ophthalmologist and Ophthalmic Surgeon, University College London Hospitals, President of European Neuro-Ophthalmology Association",
      avatar: "/images/homePage/avatars/Bremner.png",
      quote:
        "If an App could be developed allowing pupil measurements to be made using a smartphone then this would be hugely valuable and I predict would very quickly become part of standard clinical practice.",
      titles: ["Neuro-opthalmologist"],
    },
    {
      name: "Professor Sanjay Manohar, M.D.",
      description: "Neurologist and Clinical Researcher, Oxford University",
      avatar: "/images/homePage/avatars/Manohar.png",
      quote: "Solvemed is likely to succeed because of its unique combination of scientists, programmers and clinicians working on the problem.",
      titles: ["Neurologist"],
    },
    {
      name: "Dr. James Neffendorf, M.D.",
      description: "Consultant Ophthalmologist and Vitreoretinal Surgeon (Locum) at King’s College Hospital NHS Foundation Trust",
      avatar: "/images/homePage/avatars/Neffendorf.png",
      quote: "The Solvemed AI penlight/pupillometer has the potential to modernise pupillary assessment and improve patient care.",
      titles: ["Ophthalmologist"],
    },
  ];

  return (
    <Box width={"100vw"} ml={-3} pl={1} mt={isMobileView ? 5 : 10}>
      {isMobileView ? (
        <Box>
          <Swiper
            slidesPerView={1.2}
            spaceBetween={10}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination]}
            className="mySwiper"
          >
            {teamData.map((e, idx) => {
              return (
                <SwiperSlide key={idx}>
                  <Box
                    key={idx}
                    width={"303px"}
                    height={"452px"}
                    p={3}
                    pr={6}
                    mt={3}
                    mb={5}
                    ml={1}
                    border={"1px solid #F5F5F7"}
                    boxShadow={"0px 8px 32px rgba(27, 37, 74, 0.08)"}
                    borderRadius={"14px"}
                  >
                    <Box width={"110%"} display={"flex"} justifyContent={"space-between"} alignItems={"flex-start"}>
                      <Box>
                        <Image src={e.avatar} alt={e.name} width={"72px"} height={"72px"} />
                      </Box>
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

                    <Box width={"100%"} mt={4} fontSize={"18px"}>
                      <Typography fontFamily="FinancierDisplay" fontWeight={400} lineHeight={"130%"} letterSpacing={"-0.01em"}>
                        {e.name}
                      </Typography>
                    </Box>
                    <Box width={"100%"} mt={2} pr={1} fontFamily="SuisseIntl" lineHeight={"140%"} fontWeight={300} color={"#5E5E5E"} fontSize={"12px"}>
                      {e.description}
                    </Box>
                    <Box mt={3}> &rdquo;</Box>
                    <Box
                      width={"100%"}
                      lineHeight={"140%"}
                      display={"flex"}
                      sx={{ flexGrow: 1 }}
                      justifyContent={"flex-end"}
                      alignItems={"flex-end"}
                      fontFamily="SuisseIntl"
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
        <Box width={"100vw"} pl={5} mt={10}>
          <Swiper
            slidesPerView={desktop ? 1.5 : 1}
            spaceBetween={10}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination]}
            className="mySwiper"
          >
            {teamData.map((e, idx) => {
              return (
                <SwiperSlide key={idx}>
                  <Box ml={5} width={"786px"} height={"553px"} p={8} border={"1px solid #F5F5F7"} boxShadow={"0px 8px 32px rgba(27, 37, 74, 0.08)"} borderRadius={"14px"}>
                    <Box width={"100%"} display={"flex"} mt={-3} justifyContent={"flex-end"} alignItems={"flex-end"}>
                      {e.titles.map((title) => {
                        return (
                          <Box bgcolor={"rgba(103, 71, 242, 0.07)"} p={1.5} borderRadius={10} fontWeight={500} key={title} color={"rgba(103, 71, 242, 1)"}>
                            {title}
                          </Box>
                        );
                      })}
                    </Box>
                    <Box>
                      <Image src={e.avatar} alt={e.name} width={"100px"} height={"100px"} />
                    </Box>
                    <Box width={"100%"} mt={2} fontSize={"21px"}>
                      {e.name}
                    </Box>
                    <Box width={"60%"} height={"30%"} mt={2} fontWeight={300} color={"#5E5E5E"} fontSize={"14px"}>
                      {e.description}
                    </Box>

                    <Box mt={1} ml={-3} height={"40%"} display={"flex"}>
                      <Box pr={2}> &rdquo;</Box>
                      <Box width={"70%"} display={"flex"}>
                        {e.quote}
                      </Box>
                    </Box>
                  </Box>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </Box>
      )}
    </Box>
  );
};

export default TeamCarousel;
