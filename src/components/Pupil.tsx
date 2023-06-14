import { Box, Typography } from "@mui/material";
import styles from "../pages/index.module.css";
import AppCards from "./HomeCarousels/AppCards";

const Pupil = ({ isMobileView }: { isMobileView: boolean }) => {
  return (
    <Box pt={30} pb={30}>
      {isMobileView ? (
        <Box mt={10} width={"100%"} display="flex" justifyContent={"center"} alignItems={"center"} flexShrink={1} data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">
          <Typography lineHeight={"120%"} fontSize={"32px"} fontFamily="FinancierDisplay" textAlign={"center"}>
            Testing pupil is now <br /> simple, objective and <br />{" "}
            <span className={styles.gradient_text}>
              {" "}
              <b>AI-enabled.</b>
            </span>
          </Typography>
        </Box>
      ) : (
        <Box mt={10} width={"100%"} display="flex" justifyContent={"center"} alignItems={"center"} flexShrink={1} data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">
          <Typography variant="h4" fontSize={"64px"} textAlign={"center"}>
            Pupil testing is now <br /> simple, objective and{" "}
            <span className={styles.gradient_text}>
              {" "}
              <b>AI-enabled.</b>
            </span>
          </Typography>
        </Box>
      )}
      <Box style={isMobileView ? { marginLeft: "16px" } : { marginLeft: "131.53px" }}>
        <AppCards />
      </Box>
    </Box>
  );
};

export default Pupil;
