import { Box, Typography, useMediaQuery } from "@mui/material";
import Image from "next/image";
import { useEffect } from "react";
import { theme } from "../../config/theme";
import AOS from "aos";
import styles from "./cardWithShadow.module.css";

import "aos/dist/aos.css";

const cardData = [
  {
    title: "FDA-listed",
    description: "class I medical device.",
    src: "/images/homePage/securityicon.png",
  },

  {
    title: "HIPPA  compliant",
    description: "Designed for privacy and security. ",
    src: "/images/homePage/medicalicon.png",
  },
  {
    title: "User friendly",
    description: "Faster to use than a traditional penlight.",
    src: "/images/homePage/userwithhearth.png",
  },
  {
    title: "Clinically tested",
    description: "Measurement accuracy and reliability proven clinically.",
    src: "/images/homePage/cross.png",
  },
  {
    title: "Reduces risks ",
    description: "Offers the trust you need when examining the brain.",
    src: "/images/homePage/warning.png",
  },
  {
    title: "AI Driven ",
    description: "Supported by cutting-edge Machine Learning technology.",
    src: "/images/homePage/Ai.png",
  },
  {
    title: "Works offline",
    description: "No internet access needed to conduct tests.",
    src: "/images/homePage/connection.png",
  },

  {
    title: "Sustainable ",
    description: "Designed with the planet in mind.",
    src: "/images/homePage/leafempty.png",
  },
];

const cardDataMobile = [
  {
    title: "FDA-listed",
    description: "class I medical device.",
    src: "/images/homePage/securityicon.png",
  },

  {
    title: "HIPPA  compliant",
    description: "Designed for privacy and security. ",
    src: "/images/homePage/medicalicon.png",
    paddingR: true,
  },
  {
    title: "User friendly",
    description: "Faster to use than a traditional penlight.",
    src: "/images/homePage/userwithhearth.png",
  },
  {
    title: "Clinically tested",
    description: "Measurement accuracy and reliability proven clinically.",
    src: "/images/homePage/cross.png",
  },
  {
    title: "AI Driven ",
    description: "Supported by cutting-edge Machine Learning technology.",
    src: "/images/homePage/Ai.png",
  },
  {
    title: "Works offline",
    description: "No internet access needed to conduct tests.",
    src: "/images/homePage/connection.png",
  },
  {
    title: "Reduces risks ",
    description: "Offers the trust you need when examining the brain.",
    src: "/images/homePage/warning.png",
    paddingR: true,
  },

  {
    title: "Sustainable ",
    description: "Designed with the planet in mind.",
    src: "/images/homePage/leafempty.png",
  },
];

const CardWithShadow = () => {
  const isMobileView = useMediaQuery(theme.breakpoints.down("md"));
  useEffect(() => {
    AOS.init();

    return () => {
      AOS.refresh();
    };
  }, [AOS]);

  return (
    <Box>
      {isMobileView ? (
        <Box display={"flex"} width={"100%"} ml={-1} mt={-5} flexDirection={"row"} flexWrap={"wrap"} justifyContent={"space-between"} pl={2}>
          {cardDataMobile.map((element, idx: number) => {
            return (
              <Box
                key={idx}
                width={"50%"}
                display={"flex"}
                justifyContent={idx % 2 === 0 ? "flex-end" : "flex-start"}
                alignItems={idx % 2 === 0 ? "flex-end" : "flex-start"}
                mb={1}
                p={0.5}
              >
                <div
                  data-aos={idx % 2 === 0 ? "fade-right" : "fade-left"}
                  data-aos-offset="200"
                  data-aos-delay="50"
                  data-aos-duration="500"
                  data-aos-easing="ease-out"
                  data-aos-mirror="true"
                  data-aos-once="true"
                  data-aos-anchor-placement="center"
                >
                  <Box
                    bgcolor={"#FFFFFF"}
                    borderRadius={"22px"}
                    p={"20px"}
                    style={element.paddingR ? { paddingRight: "24px" } : {}}
                    border={"1px solid #F5F5F7"}
                    height={"204px"}
                    boxShadow={"0px 8px 32px rgba(27, 37, 74, 0.08)"}
                    width={"162px"}
                  >
                    <Box height={"10%"}>
                      <Image src={element.src} width="24px" height={"24px"} alt={element.title} priority />
                    </Box>
                    <Box display={"flex"} height={"90%"} alignItems={"flex-start"} justifyContent={"flex-end"} flexDirection={"column"}>
                      <Box mt={2}>
                        <Typography style={{ fontFamily: "FinancierDisplay" }} fontSize={"20px"} lineHeight={"110%"}>
                          {element.title}
                        </Typography>
                      </Box>
                      <Box mt={1} width={"100%"}>
                        <Typography fontSize={"14px"} fontFamily={"SuisseIntl"} lineHeight={"150%"} style={{ color: "rgba(94, 94, 94, 1)", opacity: 0.8, fontWeight: 300 }}>
                          {element.description}
                        </Typography>
                      </Box>
                    </Box>
                  </Box>
                </div>
              </Box>
            );
          })}
        </Box>
      ) : (
        <Box width={"100%"} px={"5%"} maxWidth={"1467px"} display={"flex"} justifyContent={"center"} alignItems={"center"} flexDirection={"column"}>
          {cardData.map((element, idx: number) => {
            return (
              <div id={`trigger${idx}`} key={idx} style={{ width: "100%" }}>
                <Box margin={"0 auto"} width={"94%"} display={"flex"} justifyContent={idx % 2 === 0 ? "flex-end" : "flex-start"} alignItems={"center"}>
                  <div
                    data-aos={idx % 2 === 0 ? "fade-left" : "fade-right"}
                    data-aos-offset="200"
                    data-aos-delay="0"
                    data-aos-duration="500"
                    data-aos-easing="ease-out"
                    data-aos-once="true"
                    data-aos-anchor={`#trigger${idx}`}
                    data-aos-anchor-placement="top-bottom"
                    style={idx % 2 === 0 ? { marginLeft: "5%" } : { marginRight: "5%" }}
                  >
                    <Box
                      className={styles.card}
                      bgcolor={"#FFFFFF"}
                      borderRadius={"28px"}
                      p={"28px"}
                      border={"1px solid #F5F5F7"}
                      boxShadow={"0px 8px 32px rgba(27, 37, 74, 0.08)"}
                    >
                      <Image src={element.src} width="32px" height={"32px"} alt={element.title} priority />
                      <Box mt={3}>
                        <Typography style={{ fontWeight: 300, fontFamily: "FinancierDisplay", fontSize: "28px", color: "rgba(10, 9, 14, 1)" }}>{element.title}</Typography>
                      </Box>
                      <Box mt={1} width={"90%"}>
                        <Typography variant="body6" style={{ fontStyle: "SuisseIntl", lineHeight: "150%", fontWeight: 300, fontSize: "16px", color: "#5E5E5E" }}>
                          {element.description}
                        </Typography>
                      </Box>
                    </Box>
                  </div>
                </Box>
              </div>
            );
          })}
        </Box>
      )}
    </Box>
  );
};

export default CardWithShadow;
