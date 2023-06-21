import { Box, Typography } from "@mui/material";
import TeamCarousel from "./HomeCarousels/TeamCarousel";

const WhatExperts = ({ isMobileView }: { isMobileView: boolean }) => {
  return (
    <Box
      display={"flex"}
      width={"100%"}
      ml={-1}
      mt={20}
      justifyContent={"center"}
      alignItems={"center"}
      flexDirection={"column"}
      data-aos="fade-up"
      data-aos-duration="1000"
      data-aos-once="true"
    >
      <Box margin={"0 auto"}>
        <Typography variant="fin64" lineHeight={isMobileView ? "120%" : "134%"} textAlign={"center"}>
          What experts say
        </Typography>
      </Box>
      <Box margin={"0 auto"} mt={"12px"} textAlign={"center"}>
        {isMobileView ? (
          <Typography textAlign={"center"} variant="sus18_300" color={"#5E5E5E"}>
            We are proud to satisfy the needs of the world{"'"}s <br /> leading practitioners across the spectrum of care.{" "}
          </Typography>
        ) : (
          <Typography variant="sus18_300" color={"#5E5E5E"}>
            We have worked closely with clinicians to develop game-changing tools that <br /> reshape practice and clinical research.{" "}
          </Typography>
        )}
      </Box>
      <TeamCarousel />
    </Box>
  );
};

export default WhatExperts;
