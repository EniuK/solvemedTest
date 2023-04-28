import { Box, Typography, useMediaQuery } from "@mui/material";
import Image from "next/image";
import { theme } from "../../config/theme";

const CardWithShadow = () => {
  const isMobileView = useMediaQuery(theme.breakpoints.down("md"));
  const isPhoneView = useMediaQuery(theme.breakpoints.down("sm"));
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
      description: "Quicker to use then traditional penlight",
      src: "/images/homePage/userwithhearth.png",
    },

    {
      title: "AI Driven ",
      description: "Results precision proved clinically.",
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
    {
      title: "Reduces risks ",
      description: "Offers trust you need when examining the brain.",
      src: "/images/homePage/warning.png",
    },
    {
      title: "Easy to integrate",
      description: "with any Electronic Medical Records.",
      src: "/images/homePage/battery.png",
    },
  ];
  return (
    <Box>
      {isPhoneView ? (
        <Box width={"100%"} display={"flex"} flexDirection={"row"} flexWrap={"wrap"}>
          {cardData.map((element, idx: number) => {
            return (
              <Box key={idx} width={"50%"} display={"flex"} justifyContent={"center"} alignItems={"center"}>
                <Box
                  bgcolor={"#FFFFFF"}
                  borderRadius={"10px"}
                  p={2}
                  pr={4}
                  border={"1px solid #F5F5F7"}
                  height={"180px"}
                  boxShadow={"0px 8px 32px rgba(27, 37, 74, 0.08)"}
                  width={"310px"}
                >
                  <Image src={element.src} width="24px" height={"24px"} alt={element.title} />
                  <Box mt={2}>
                    <Typography style={{ fontWeight: "bold", fontFamily: "FinancierDisplay" }} fontSize={"28px"} variant="body1">
                      {element.title}
                    </Typography>
                  </Box>
                  <Box mt={1} width={"70%"}>
                    <Typography variant="body6" style={{ color: "rgba(94, 94, 94, 1)" }}>
                      {element.description}
                    </Typography>
                  </Box>
                </Box>
              </Box>
            );
          })}
        </Box>
      ) : isMobileView ? (
        <Box width={"100%"} display={"flex"} flexDirection={"row"} flexWrap={"wrap"}>
          {cardData.map((element, idx: number) => {
            return (
              <Box key={idx} width={"50%"} display={"flex"} justifyContent={"center"} alignItems={"center"}>
                <Box
                  bgcolor={"#FFFFFF"}
                  borderRadius={"10px"}
                  p={2}
                  pr={4}
                  border={"1px solid #F5F5F7"}
                  height={"180px"}
                  boxShadow={"0px 8px 32px rgba(27, 37, 74, 0.08)"}
                  width={"310px"}
                >
                  <Image src={element.src} width="24px" height={"24px"} alt={element.title} />
                  <Box mt={2}>
                    <Typography style={{ fontWeight: "bold", fontFamily: "FinancierDisplay" }} fontSize={"28px"} variant="body1">
                      {element.title}
                    </Typography>
                  </Box>
                  <Box mt={1} width={"70%"}>
                    <Typography variant="body6" style={{ color: "rgba(94, 94, 94, 1)" }}>
                      {element.description}
                    </Typography>
                  </Box>
                </Box>
              </Box>
            );
          })}
        </Box>
      ) : (
        <Box width={"100%"}>
          {cardData.map((element, idx: number) => {
            return (
              <Box key={idx} width={"100%"} display={"flex"} justifyContent={idx % 2 === 0 ? "flex-end" : "flex-start"} alignItems={"center"}>
                <Box
                  bgcolor={"#FFFFFF"}
                  borderRadius={"10px"}
                  p={3}
                  pr={4}
                  border={"1px solid #F5F5F7"}
                  boxShadow={"0px 8px 32px rgba(27, 37, 74, 0.08)"}
                  height={"204px"}
                  width={"310px"}
                >
                  <Image src={element.src} width="32px" height={"32px"} alt={element.title} />
                  <Box mt={3}>
                    <Typography style={{ fontFamily: "FinancierDisplay", fontWeight: 600 }} fontSize={"28px"} variant="body1">
                      {element.title}
                    </Typography>
                  </Box>
                  <Box mt={1} width={"70%"}>
                    <Typography variant="body6" style={{ fontStyle: "SuisseIntl", lineHeight: "24px", fontWeight: 300 }} fontSize={"16px"}>
                      {element.description}
                    </Typography>
                  </Box>
                </Box>
              </Box>
            );
          })}
        </Box>
      )}
    </Box>
  );
};

export default CardWithShadow;
