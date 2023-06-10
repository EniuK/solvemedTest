import { Box, Button, TextField, Typography, useMediaQuery } from "@mui/material";
import { useEffect, useState } from "react";
import { theme } from "../../config/theme";
import Link from "next/link";

const NewsLetter = ({ status, message, onValidated }: any) => {
  const isSmallViewport = useMediaQuery(theme.breakpoints.down("sm"));

  const [email, setEmail] = useState("");
  const [errorMessage, setErrorMessage] = useState(false);

  const handleSubmit = async () => {
    email &&
      email.indexOf("@") > -1 &&
      (await onValidated({
        MERGE0: email,
      }));

    if (email.indexOf("@") === -1) {
      setErrorMessage(true);
    } else {
      setErrorMessage(false);
    }
  };

  const handleEmail = (e: any) => {
    setEmail(e.target.value);
    setErrorMessage(false);
  };

  useEffect(() => {
    if (status === "error" || status === "sending") {
      setErrorMessage(true);
    } else {
      setEmail("");
    }
  }, [status]);

  return (
    <Box
      height={isSmallViewport ? "25vh" : "100%"}
      width={isSmallViewport ? "100vw" : "330px"}
      style={isSmallViewport ? { marginLeft: -30 } : { paddingBottom: 70, marginTop: 30 }}
      display={"flex"}
      flexDirection={"column"}
      justifyContent={"center"}
      pl={4}
      alignItems={"center"}
    >
      <Box width={"100%"} pt={3} display={"flex"} textAlign={"left"}>
        <Typography fontFamily={"FinancierDisplay"} color={"#141415"} lineHeight={"110%"} letterSpacing={"0.01em"}>
          Join Our Newsletter
        </Typography>
      </Box>
      <Box mt={2} height={isSmallViewport ? "auto" : "45%"} display={"flex"} width={"100%"} justifyContent={"flex-start"} alignItems={"flex-start"} flexDirection={"row"}>
        {status === "success" ? (
          <Box width={"100%"} ml={-4.5} color={"black"} display={"flex"} justifyContent={"center"} alignItems={"center"}>
            {message}
          </Box>
        ) : (
          <>
            <Box width={"75%"}>
              <form className="mc__form" onSubmit={() => handleSubmit()}>
                <Box width={isSmallViewport ? "100%" : "auto"}>
                  <TextField
                    sx={{ fontsize: "14px", width: "100%" }}
                    label="Enter your email"
                    variant="standard"
                    value={email}
                    onChange={handleEmail}
                    type="email"
                    InputProps={{
                      style: { paddingBottom: 10 },
                    }}
                    InputLabelProps={{
                      sx: {
                        fontFamily: "SuisseIntl",
                        fontWeight: 400,
                        opacity: 0.4,
                        fontSize: "15px",
                        lineHeight: "140%",
                        color: "black",
                        "&.Mui-focused": {
                          color: "black",
                          opacity: 0.4,
                        },
                      },
                    }}
                  />
                </Box>
              </form>
            </Box>

            <Box
              style={isSmallViewport ? { paddingBottom: 10, marginLeft: 5, marginTop: -5, paddingLeft: 20, width: "25%", marginRight: 3 } : {}}
              display={"flex"}
              fontFamily={"SuisseIntl"}
              fontWeight={400}
              alignItems={"center"}
              justifyContent={"center"}
            >
              <Button
                style={{ textTransform: "none" }}
                sx={{ backgroundColor: "white", marginTop: "20px", color: "black", border: "1px solid rgba(20, 20, 21, 0.2)" }}
                onClick={() => handleSubmit()}
                variant="contained"
                size="large"
              >
                Send
              </Button>
            </Box>
          </>
        )}
      </Box>
      <Box display={"flex"} alignItems={"flex-start"} justifyContent={"flex-start"} width={"100%"}>
        <Box textAlign={"left"} mt={3} fontSize={"12px"} lineHeight="160%" color={"#595D62"} letterSpacing={"0.02em"}>
          by joining, you agree to the{" "}
          <Link href="/PrivacyPolicy" legacyBehavior>
            <a target="_blank" style={{ color: "black", textDecoration: "underline", fontFamily: "SuisseIntl" }}>
              Privacy Policy
            </a>
          </Link>{" "}
        </Box>
        {status === "sending" && <Box style={{ color: "blue" }}>sending...</Box>}
        {status === "error" && errorMessage && <Box style={{ color: "red" }}>invalid email address</Box>}
        {status === "error" ? null : <>{errorMessage && status !== "sending" ? <Box style={{ color: "red" }}>invalid email address</Box> : null}</>}
      </Box>
    </Box>
  );
};

export default NewsLetter;
