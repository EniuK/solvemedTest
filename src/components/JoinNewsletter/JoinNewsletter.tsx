import { Box, Button, TextField, Typography, useMediaQuery } from "@mui/material";
import { useEffect, useState } from "react";
import { theme } from "../../config/theme";

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
      <Box mt={1} height={isSmallViewport ? "auto" : "45%"} display={"flex"} width={"100%"} justifyContent={"flex-start"} alignItems={"flex-start"} flexDirection={"row"}>
        {status === "success" ? (
          <Box width={"100%"} ml={-4.5} color={"black"} display={"flex"} justifyContent={"center"} alignItems={"center"}>
            {message}
          </Box>
        ) : (
          <>
            <form className="mc__form" onSubmit={() => handleSubmit()}>
              <Box width={isSmallViewport ? "260px" : "auto"}>
                <TextField
                  sx={{ fontsize: "14px", width: "100%" }}
                  label="Enter your email"
                  variant="standard"
                  value={email}
                  onChange={handleEmail}
                  type="email"
                  InputLabelProps={{
                    sx: {
                      fontFamily: "SuisseIntl",
                      fontWeight: 400,

                      fontSize: "15px",
                      lineHeight: "140%",
                      color: "gray",
                      "&.Mui-focused": {
                        color: "gray",
                      },
                    },
                  }}
                />
              </Box>
            </form>
            <Box
              style={isSmallViewport ? { paddingBottom: 10, marginLeft: 5, marginTop: -10 } : {}}
              display={"flex"}
              fontFamily={"SuisseIntl"}
              fontWeight={400}
              alignItems={"center"}
              justifyContent={"center"}
            >
              <Button
                color="secondary"
                style={{ textTransform: "none" }}
                sx={{ backgroundColor: "black", marginTop: "20px" }}
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
        {status === "sending" && <Box style={{ color: "blue" }}>sending...</Box>}
        {status === "error" && errorMessage && <Box style={{ color: "red" }}>invalid email address</Box>}
        {status === "error" ? null : <>{errorMessage && status !== "sending" ? <Box style={{ color: "red" }}>invalid email address</Box> : null}</>}
      </Box>
    </Box>
  );
};

export default NewsLetter;
