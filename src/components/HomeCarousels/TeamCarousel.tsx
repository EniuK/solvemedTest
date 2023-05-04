import { Box, Link, Typography, Input, Button, useMediaQuery } from "@mui/material";
import Image from "next/image";
import React from "react";
import { theme } from "../../config/theme";
const TeamCarousel = () => {
  const isMobileView = useMediaQuery(theme.breakpoints.down("md"));
  const teamData = [
    {
      name: "Dr Fion Bremner, MD",
      description: "Consultant Neuro-ophthalmologist and Ophthalmic Surgeon, University College London Hospitals, President of European Neuro-Ophthalmology Association",
      avatar: "/images/homePage/avatars/Bremner.png",
      quote:
        "If an App could be developed allowing pupil measurements to be made using a smartphone then this would be hugely valuable and I predict would very quickly become part of standard clinical practice.",
      titles: ["Neuro-opthalmologist"],
    },
  ];
  return (
    <Box display={"flex"} justifyContent={"center"} alignItems={"center"} mt={10}>
      {isMobileView ? (
        <Box>
          {teamData.map((e, idx) => {
            return (
              <Box
                width={"100%"}
                minWidth={"301px"}
                p={3}
                minHeight={"553px"}
                key={idx}
                border={"1px solid #F5F5F7"}
                boxShadow={"0px 8px 32px rgba(27, 37, 74, 0.08)"}
                borderRadius={"14px"}
              >
                <Box width={"100%"} display={"flex"} justifyContent={"space-between"} alignItems={"flex-start"}>
                  <Box>
                    <Image src={e.avatar} alt={e.name} width={"72px"} height={"72px"} />
                  </Box>
                  {e.titles.map((title) => {
                    return (
                      <Box bgcolor={"rgba(103, 71, 242, 0.07)"} p={1} borderRadius={10} fontWeight={500} fontSize={"12px"} key={title} color={"rgba(103, 71, 242, 1)"}>
                        <b>{title}</b>
                      </Box>
                    );
                  })}
                </Box>

                <Box width={"100%"} mt={4} fontSize={"21px"}>
                  <Typography fontFamily="FinancierDisplay">{e.name}</Typography>
                </Box>
                <Box width={"100%"} mt={2} fontWeight={300} color={"#5E5E5E"} fontSize={"14px"}>
                  {e.description}
                </Box>
                <Box mt={8}> &rdquo;</Box>
                <Box width={"100%"}>{e.quote}</Box>
              </Box>
            );
          })}
        </Box>
      ) : (
        <Box>
          {teamData.map((e, idx) => {
            return (
              <Box width={"786px"} minHeight={"553px"} p={8} key={idx} border={"1px solid #F5F5F7"} boxShadow={"0px 8px 32px rgba(27, 37, 74, 0.08)"} borderRadius={"14px"}>
                <Box width={"100%"} display={"flex"} justifyContent={"flex-end"} alignItems={"flex-end"}>
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
                <Box width={"60%"} mt={2} fontWeight={300} color={"#5E5E5E"} fontSize={"14px"}>
                  {e.description}
                </Box>

                <Box mt={8} ml={-3} display={"flex"}>
                  <Box pr={2}> &rdquo;</Box>
                  <Box width={"70%"}>{e.quote}</Box>
                </Box>
              </Box>
            );
          })}
        </Box>
      )}
    </Box>
  );
};

export default TeamCarousel;
