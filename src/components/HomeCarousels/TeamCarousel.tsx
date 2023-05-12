import { Box, Typography, useMediaQuery, Slide } from "@mui/material";
import Image from "next/image";
import React from "react";
import { theme } from "../../config/theme";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper";
const TeamCarousel = () => {
  const isMobileView = useMediaQuery(theme.breakpoints.down("md"));
  const desktop = useMediaQuery(theme.breakpoints.up("lg"));
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
        "Nobody tracks pupils accurately, and it sucks - from medical school, through residency, through fellowship specialisation. Industry-wide standardised pupillary measurements are very important to the future of care.There is high demand for a smartphone-enabled, reproducible, reliable, scalable noninvasive diagnostic. This would be adopted across the entire industry.",
      titles: ["Ophthalmologist"],
      sm: true,
    },
  ];

  return (
    <Box mt={isMobileView ? 5 : 10}>
      {isMobileView ? (
        <Box>
          <Swiper
            slidesPerView={1.15}
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
                    width={"303px"}
                    minHeight={"452px"}
                    p={3}
                    position={"relative"}
                    pr={6}
                    mt={3}
                    mb={5}
                    border={"1px solid #F5F5F7"}
                    boxShadow={"0px 8px 32px rgba(27, 37, 74, 0.08)"}
                    borderRadius={"14px"}
                  >
                    <Box width={"110%"} display={"flex"} justifyContent={"space-between"} alignItems={"flex-start"}>
                      <Box>
                        <Image src={e.avatar} alt={e.name} width={"72px"} height={"72px"} />
                      </Box>
                      <Box>
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
                      fontWeight={400}
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
                  <Box ml={5} mb={4} width={"786px"} height={"553px"} p={8} border={"1px solid #F5F5F7"} boxShadow={"0px 8px 32px rgba(27, 37, 74, 0.08)"} borderRadius={"14px"}>
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
                      <Image src={e.avatar} alt={e.name} width={"100px"} height={"100px"} />
                    </Box>
                    <Box width={"100%"} fontFamily="FinancierDisplay" fontWeight={400} lineHeight={"130%"} letterSpacing={"-0.01em"} mt={2} fontSize={"21px"}>
                      {e.name}
                    </Box>
                    <Box width={"55%"} height={e.sm ? "25%" : "30%"} lineHeight={"140%"} mt={2} fontFamily="SuisseIntl" fontWeight={300} color={"#5E5E5E"} fontSize={"14px"}>
                      {e.description}
                    </Box>

                    <Box mt={1} ml={-3} height={e.sm ? "45%" : "40%"} display={"flex"}>
                      <Box pr={2}> &rdquo;</Box>
                      <Box width={e.sm ? "100%" : "70%"} display={"flex"} lineHeight={e.sm ? "22.1px" : "24.7px"} fontFamily="SuisseIntl" fontWeight={400}>
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
