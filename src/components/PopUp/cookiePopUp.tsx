import { Box, Typography, Button, useMediaQuery, TextField } from "@mui/material";
import Image from "next/image";

import PopUpWrapper from "./PopUpWrapper";

const CookiePopUp = ({ setUnlockScroll }: any) => {
  const cookieConsent = () => {
    localStorage.setItem("solvemed-cookie-consent", "true");
    setUnlockScroll();
  };

  return (
    <PopUpWrapper>
      <Box position={"fixed"} display={"flex"} justifyContent={"center"} alignItems={"center"} zIndex={1000} bottom={30}>
        <Box
          bgcolor={"white"}
          padding={"24px 40px 24px 32px"}
          boxShadow={"0px 8px 32px rgba(27, 37, 74, 0.08)"}
          borderRadius={"28px"}
          width={{ xs: "100%", md: "55%" }}
          display={"flex"}
          flexDirection={"column"}
        >
          <Box fontFamily="FinancierDisplay" fontStyle={"italic"} fontSize={"24px"} lineHeight={"134%"} letterSpacing={"-0.02em"}>
            You control your cookies
          </Box>
          <Box fontFamily="SuisseIntl" fontWeight={200} mt={"6px"} fontSize={"12px"} lineHeight={"150%"} color={"#4E4E4E"} style={{ opacity: 0.7 }}>
            By clicking “Accept All”, you consent to our website’s use of cookies to make our site function and give you a better experience by remembering your preferences, repeat
            visits and making site improvements. However, you may visit “Manager Cookies” to manage your preferences.Read more about our cookie policy
          </Box>
          <Box
            mt={"23px"}
            display={"flex"}
            justifyContent={"space-between"}
            alignItems={"center"}
            fontFamily="SuisseIntl"
            fontWeight={200}
            fontSize={"12px"}
            style={{ textDecorationLine: "underline" }}
          >
            <Box>Read more about our cookie policy</Box>
            <Box>
              <Button
                style={{ textTransform: "none", padding: "12.5px 20px", backgroundColor: "black", color: "white" }}
                sx={{
                  "&:hover": {
                    backgroundColor: "transparent",
                  },
                }}
                onClick={() => cookieConsent()}
              >
                Got it
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
    </PopUpWrapper>
  );
};

export default CookiePopUp;
