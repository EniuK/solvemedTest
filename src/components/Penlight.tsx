import { Box, Button, Link, Typography } from "@mui/material";
import Image from "next/image";
import styles from "../pages/index.module.css";

const Penlight = ({ isMobileView }: { isMobileView: boolean }) => {
  return (
    <Box pt={10} pl={6} pr={6} pb={15}>
      {isMobileView ? (
        <Box
          mt={10}
          width={"100%"}
          display="flex"
          justifyContent={"center"}
          alignItems={"center"}
          flexDirection={"column"}
          flexShrink={1}
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-once="true"
        >
          <Box>
            <Typography fontWeight={200} fontFamily="FinancierDisplay" lineHeight={"130%"} fontSize={"32px"} textAlign={"center"}>
              Decoding neurology. <br /> In the blink of <span className={styles.gradient_text}>AI</span>.
            </Typography>
          </Box>
          <Box style={{ position: "absolute", margin: "0 0 150px 0", rotate: "180deg" }} width={"100%"} zIndex={-1}>
            <Image
              src={"/images/bg/aiEnabled.png"}
              width={880}
              height={489}
              alt="gradientBackground"
              priority
              style={{
                maxWidth: "100%",
                height: "auto",
              }}
            />
          </Box>
          <Box mt={4} width={"85vw"}>
            <Typography fontFamily={"SuisseIntl"} fontWeight={300} lineHeight={"150%"} fontSize={"14px"} color={"rgba(94, 94, 94, 1)"} textAlign={"center"}>
              mPenlight is the pupil reactivity testing app of choice for world{"'"}s top practitioners.
            </Typography>
          </Box>
          <Box justifyContent={"center"} alignItems={"center"} mt={5}>
            <Link href={"/GetAccess"}>
              <Button
                color="secondary"
                sx={{ backgroundColor: "black", fontSize: "14px", fontWeight: 100, marginRight: 0, padding: "12px 22px" }}
                variant="contained"
                style={{ textTransform: "none" }}
                size="small"
              >
                Get access!
              </Button>
            </Link>
          </Box>
        </Box>
      ) : (
        <Box
          pl={15}
          pr={15}
          width={"100%"}
          display="flex"
          justifyContent={"center"}
          alignItems={"center"}
          flexDirection={"column"}
          flexShrink={1}
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-once="true"
        >
          <Box>
            <Typography fontFamily="FinancierDisplay" lineHeight={"110%"} fontSize={"64px"} textAlign={"center"}>
              Decoding neurology. In the blink of <span className={styles.gradient_text}>AI</span>.
            </Typography>
          </Box>
          <Box mt={4}>
            <Typography fontFamily={"SuisseIntl"} lineHeight={"150%"} fontWeight={300} fontSize={"18px"} color={"rgba(94, 94, 94, 1)"} textAlign={"center"}>
              mPenlight is the pupil reactivity testing app of choice for world{"'"}s top practitioners.{" "}
            </Typography>
          </Box>
          <Box ml={2} mt={8} justifyContent={"center"} alignItems={"center"}>
            <Link href={"/GetAccess"}>
              <Button
                color="secondary"
                style={{ textTransform: "none" }}
                variant="contained"
                size="small"
                sx={{ backgroundColor: "black", fontSize: "14px", fontFamily: "SuisseIntl", fontWeight: 400, marginRight: 0, height: "44px", paddingX: 5, paddingY: 1 }}
              >
                <Typography fontSize={"14px"} variant="body1" fontStyle={"SuisseIntl"} fontWeight={400}>
                  Get access!
                </Typography>
              </Button>
            </Link>
          </Box>
        </Box>
      )}
      {!isMobileView && (
        <Box style={{ position: "absolute", left: "20%" }} zIndex={-1}>
          <Image
            src={"/images/bg/aiEnabled.png"}
            width={880}
            height={489}
            alt="gradientBackground"
            priority
            style={{
              maxWidth: "100%",
              height: "auto",
            }}
          />
        </Box>
      )}
    </Box>
  );
};

export default Penlight;
