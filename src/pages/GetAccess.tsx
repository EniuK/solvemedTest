import { Box, Button, CardMedia, TextField, Typography, useMediaQuery } from "@mui/material";
import { NextPage } from "next";
import Head from "next/head";
import { motion } from "framer-motion";
import { theme } from "../config/theme";
import { useEffect, useState } from "react";
import React from "react";
import MailchimpSubscribe from "react-mailchimp-subscribe";
const initialValues = {
  name: "",
  surrname: "",
  specialization: "",
  email: "",
};

const MailchimpForms = ({ status, message, onValidated }: any) => {
  const isMobileView = useMediaQuery(theme.breakpoints.down("md"));
  const [userData, setUserData] = useState(initialValues);

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setUserData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    setErrorMessage(false);
  };

  const [errorMessage, setErrorMessage] = useState(false);

  const handleSubmit = async () => {
    userData.email &&
      userData.email.indexOf("@") > -1 &&
      (await onValidated({
        MERGE0: userData.email,
      }));

    if (userData.email.indexOf("@") === -1) {
      setErrorMessage(true);
    } else {
      setErrorMessage(false);
    }
  };

  useEffect(() => {
    if (status === "error" || status === "sending") {
      setErrorMessage(true);
    } else {
      setUserData(initialValues);
    }
  }, [status]);

  return (
    <>
      {isMobileView ? (
        <form className="mc__form" onSubmit={() => handleSubmit()}>
          <Box display={"flex"} justifyContent={"center"} ml={-3} pl={3} pr={20} alignItems={"center"} flexDirection={"row"} width={"100vw"}>
            <Box width={"100vw"} pl={14} display={"flex"} justifyContent={"flex-start"} alignItems={"flex-start"} flexDirection={"column"}>
              <Box width={"100vw"} display={"flex"} justifyContent={"flex-start"} alignItems={"flex-start"} flexDirection={"row"}>
                <Box style={{ width: "42%" }} mr={2}>
                  <TextField
                    style={{ width: "100%" }}
                    variant="standard"
                    name="name"
                    label="Name"
                    value={userData.name}
                    onChange={handleChange}
                    InputLabelProps={{
                      sx: {
                        color: "text.primary",
                        "&.Mui-focused": {
                          color: "gray",
                        },
                      },
                    }}
                  />
                </Box>
                <Box style={{ width: "42%" }}>
                  <TextField
                    variant="standard"
                    style={{ width: "100%" }}
                    name="surrname"
                    label="Surrname"
                    value={userData.surrname}
                    onChange={handleChange}
                    InputLabelProps={{
                      sx: {
                        color: "text.primary",
                        "&.Mui-focused": {
                          color: "gray",
                        },
                      },
                    }}
                  />
                </Box>
              </Box>

              <Box width={"100vw"} mt={8} display={"flex"} justifyContent={"flex-start"}>
                <TextField
                  variant="standard"
                  name="Specialization"
                  style={{ width: "90%" }}
                  label="specialization"
                  value={userData.specialization}
                  onChange={handleChange}
                  InputLabelProps={{
                    sx: {
                      color: "text.primary",
                      "&.Mui-focused": {
                        color: "gray",
                      },
                    },
                  }}
                />
              </Box>
              <Box width={"100vw"} mt={8} display={"flex"} justifyContent={"flex-start"}>
                <TextField
                  variant="standard"
                  name="Specialization"
                  style={{ width: "90%" }}
                  label="Enter your email"
                  value={userData.name}
                  onChange={handleChange}
                  InputLabelProps={{
                    sx: {
                      color: "text.primary",
                      "&.Mui-focused": {
                        color: "gray",
                      },
                    },
                  }}
                />
              </Box>
            </Box>
          </Box>
        </form>
      ) : (
        <form className="mc__form" onSubmit={() => handleSubmit()}>
          <Box display={"flex"} justifyContent={"center"} ml={-3} pl={3} pr={20} alignItems={"center"} flexDirection={"row"} width={"100vw"}>
            <Box width={"100%"} onClick={(e) => e.preventDefault()}>
              <CardMedia component="video" loop autoPlay src="/images/GetAccess/animation.mov" controls controlsList="nodownload" style={{ pointerEvents: "none" }} />
            </Box>

            <Box width={"50%"} display={"flex"} justifyContent={"flex-start"} alignItems={"flex-start"} flexDirection={"column"}>
              <Box width={"100%"} display={"flex"} justifyContent={"flex-start"} alignItems={"flex-start"} flexDirection={"row"}>
                <Box style={{ width: "49%" }} mr={4}>
                  <TextField
                    style={{ width: "100%" }}
                    variant="standard"
                    name="name"
                    label="Name"
                    value={userData.name}
                    onChange={handleChange}
                    InputLabelProps={{
                      sx: {
                        color: "text.primary",
                        "&.Mui-focused": {
                          color: "gray",
                        },
                      },
                    }}
                  />
                </Box>
                <Box style={{ width: "49%" }}>
                  <TextField
                    variant="standard"
                    style={{ width: "100%" }}
                    name="surrname"
                    label="Surname"
                    value={userData.surrname}
                    onChange={handleChange}
                    InputLabelProps={{
                      sx: {
                        color: "text.primary",
                        "&.Mui-focused": {
                          color: "gray",
                        },
                      },
                    }}
                  />
                </Box>
              </Box>

              <Box width={"100%"} mt={8}>
                <TextField
                  variant="standard"
                  name="specialization"
                  style={{ width: "100%" }}
                  label="Specialization"
                  value={userData.specialization}
                  onChange={handleChange}
                  InputLabelProps={{
                    sx: {
                      color: "text.primary",
                      "&.Mui-focused": {
                        color: "gray",
                      },
                    },
                  }}
                />
              </Box>
              <Box width={"100%"} mt={8}>
                <TextField
                  variant="standard"
                  name="email"
                  style={{ width: "100%" }}
                  label="Enter your email"
                  value={userData.email}
                  onChange={handleChange}
                  InputLabelProps={{
                    sx: {
                      color: "text.primary",
                      "&.Mui-focused": {
                        color: "gray",
                      },
                    },
                  }}
                />
              </Box>
            </Box>
          </Box>
          <Box width={"100%"} mt={-10} pr={15} display={"flex"} justifyContent={"flex-end"} alignItems={"flex-end"}>
            <Button color="secondary" style={{ textTransform: "none" }} disabled={closed ? 1 : 0} sx={{ backgroundColor: "black" }} variant="contained" size="large">
              <Box pt={0.5} pb={0.5}>
                Send
              </Box>
            </Button>
          </Box>
        </form>
      )}
    </>
  );
};

const MailchimpGetAccessContainer = () => {
  const postUrl = `https://solvemed.us21.list-manage.com/subscribe/post?u=c93c3fe2f3e154caa4df2ce41&id=5e7e7dce89`;
  return (
    <div className="mc__form-container">
      <MailchimpSubscribe
        url={postUrl}
        render={({ subscribe, status, message }: any) => <MailchimpForms status={status} message={message} onValidated={(formData: any) => subscribe(formData)} />}
      />
    </div>
  );
};

const GetAccess: NextPage<any> = () => {
  const isMobileView = useMediaQuery(theme.breakpoints.down("md"));
  const [userData, setUserData] = useState(initialValues);
  const [closed, setClosed] = useState(false);

  useEffect(() => {
    const checkValues = () => {
      if (userData.name === "" || userData.surrname === "" || userData.specialization === "" || userData.email === "") {
        setClosed(true);
      }
    };
    checkValues();
  }, [userData]);

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setUserData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  return (
    <>
      <div>
        <Head>
          <title>Solvemed Early Access</title>
          <meta property="og:title" content="Solvemed Early Access" />
          <meta property="og:type" content="website" />
          <meta
            name="description"
            content="Decoding neurology. In the blink of AI. Solvemed is a VC-backed Neuroscience AI company working to redefine neurology care and drug development. With neurodegenerative diseases (dementias) as the primary focus area, Solvemed leverages its proprietary machine learning technology to develop first-in-class digital biomarkers to support development of neurological drugs and establish affordable clinical examination and remote monitoring tools."
          />
        </Head>
      </div>

      <Box
        textAlign="center"
        mr={-3}
        ml={-3}
        mt={-10}
        pt={10}
        style={{ backgroundImage: 'url("/images/GetAccess/gradient.png")', backgroundPosition: "center", backgroundRepeat: "no-repeat" }}
      >
        {isMobileView ? (
          <Box mt={-4}>
            <Box>
              <Typography
                component={motion.p}
                align="center"
                mb="30px"
                fontSize={92}
                variants={{ initial: { opacity: 0, y: 100 }, animate: { opacity: 1, y: 0 } }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                style={{ fontFamily: "FinancierDisplay", lineHeight: "25.5px", fontWeight: 200, fontSize: "42px" }}
              >
                Become early adopter
              </Typography>

              <Typography
                component={motion.p}
                px={10}
                style={{ margin: "0 auto 20px", fontSize: "16px" }}
                width={{ xs: "100%", md: "40%" }}
                lineHeight={"180%"}
                variants={{ initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 } }}
                transition={{ duration: 0.7, ease: "easeOut" }}
              >
                There is going to be up to 1 high quality email a month.
              </Typography>
            </Box>
            <Box width={"100vw"} justifyContent={"center"} alignItems={"center"} display={"flex"} onClick={(e) => e.preventDefault()}>
              <CardMedia
                component="video"
                loop
                autoPlay
                src="/images/GetAccess/animation.mov"
                controls={false}
                controlsList="nodownload"
                style={{ pointerEvents: "none", width: "500px" }}
              />
            </Box>
            <MailchimpGetAccessContainer />
          </Box>
        ) : (
          <Box>
            <Box>
              <Typography
                component={motion.p}
                variant="h3"
                align="center"
                mb="60px"
                fontSize={92}
                variants={{ initial: { opacity: 0, y: 100 }, animate: { opacity: 1, y: 0 } }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                style={{ fontFamily: "FinancierDisplay", lineHeight: "25.5px", fontWeight: 200 }}
              >
                Become early adopter
              </Typography>

              <Typography
                component={motion.p}
                variant="body2"
                style={{ margin: "0 auto 100px" }}
                width={{ xs: "100%", md: "40%" }}
                variants={{ initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 } }}
                transition={{ duration: 0.7, ease: "easeOut" }}
              >
                There is going to be up to 1 high quality email a month.
              </Typography>
            </Box>
            <MailchimpGetAccessContainer />
          </Box>
        )}
      </Box>
    </>
  );
};

export default GetAccess;
