import { Box } from "@mui/material";
import TeamCarousel from "./HomeCarousels/TeamCarousel";

const TeamCarousel2 = ({ isMobileView }: { isMobileView: boolean }) => {
  return (
    <Box style={isMobileView ? {} : { marginLeft: "131.53px" }}>
      <TeamCarousel />
    </Box>
  );
};

export default TeamCarousel2;
