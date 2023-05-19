import { Box, Button, CardMedia, FormControl, InputLabel, MenuItem, Select, TextField, Typography, useMediaQuery } from "@mui/material";
import { NextPage } from "next";
import Head from "next/head";
import { motion } from "framer-motion";
import { theme } from "../config/theme";
import { useEffect, useState } from "react";
import React from "react";
import MailchimpSubscribe from "react-mailchimp-subscribe";

const MailchimpForms = ({ status, message, onValidated }: any) => {
  const isMobileView = useMediaQuery(theme.breakpoints.down("md"));
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [surrname, setSurrname] = useState("");
  const [specialization, setSpecialization] = useState("");
  const [open, setopen] = useState(true);
  const [errorMessage, setErrorMessage] = useState(false);
  const [emptyValue, setEmptyValue] = useState(false);

  const handleSubmit = (e: any) => {
    e.preventDefault();

    email &&
      name !== "" &&
      surrname !== "" &&
      specialization !== "" &&
      email.indexOf("@") > -1 &&
      onValidated({
        EMAIL: email,
        MERGE1: name,
        MERGE2: surrname,
        MERGE6: specialization,
      });
    if (email === "" || surrname === "" || specialization === "") {
      setEmptyValue(true);
    } else {
      setEmptyValue(false);
    }
    if (email.indexOf("@") === -1) {
      setErrorMessage(true);
    } else {
      setErrorMessage(false);
    }
  };
  useEffect(() => {
    setEmptyValue(false);
  }, [email, name, surrname, specialization]);
  useEffect(() => {
    if (status === "success") {
      setName("");
      setSurrname("");
      setSpecialization("");
      setEmail("");
    }
  }, [status]);

  useEffect(() => {
    if (email !== "" && surrname !== "" && specialization !== "" && email !== "") {
      setopen(false);
    }
  }, [name, surrname, specialization, email, open]);

  return (
    <>
      {isMobileView ? (
        <>
          <form className="mc__form" onSubmit={(e) => handleSubmit(e)}>
            <Box display={"flex"} justifyContent={"center"} ml={-3} pl={4} pr={20} alignItems={"center"} flexDirection={"row"} width={"100vw"}>
              <Box width={"100vw"} pl={15} display={"flex"} justifyContent={"flex-start"} alignItems={"flex-start"} flexDirection={"column"}>
                <Box mt={5} ml={-1} width={"100vw"} display={"flex"} justifyContent={"flex-start"} alignItems={"flex-start"} flexDirection={"row"}>
                  <Box style={{ width: "45%" }} mr={2}>
                    <TextField
                      style={{ width: "90%" }}
                      variant="standard"
                      name="MERGE1"
                      label="Name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      InputProps={{
                        style: { paddingBottom: 10 },
                      }}
                      InputLabelProps={{
                        sx: {
                          color: "#9B9B9B",
                          "&.Mui-focused": {
                            color: "#9B9B9B",
                          },
                        },
                      }}
                    />
                  </Box>
                  <Box style={{ width: "45%" }} pr={1}>
                    <TextField
                      variant="standard"
                      style={{ width: "90%" }}
                      name="LNAME"
                      label="Surname"
                      value={surrname}
                      onChange={(e) => setSurrname(e.target.value)}
                      InputProps={{
                        style: { paddingBottom: 10 },
                      }}
                      InputLabelProps={{
                        sx: {
                          color: "#9B9B9B",
                          "&.Mui-focused": {
                            color: "#9B9B9B",
                          },
                        },
                      }}
                    />
                  </Box>
                </Box>

                <Box width={"100vw"} textAlign={"left"} mt={8} display={"flex"} justifyContent={"flex-start"}>
                  <FormControl variant="standard" style={{ width: "90%" }}>
                    <InputLabel id="specialization-label">Specialization</InputLabel>
                    <Select
                      style={{ paddingBottom: 10 }}
                      labelId="specialization-label"
                      id="specialization-select"
                      value={specialization}
                      name={"MERGE6"}
                      onChange={(e) => setSpecialization(e.target.value)}
                    >
                      <MenuItem value="Neurologists">Neurologists</MenuItem>
                      <MenuItem value="Intensivist">Intensivist</MenuItem>
                      <MenuItem value="Nurse">Nurse</MenuItem>
                      <MenuItem value="Anesthesiologists">Anesthesiologists</MenuItem>
                      <MenuItem value="Ophthalmologist">Ophthalmologist</MenuItem>
                      <MenuItem value="Neuro-ophthalmologists">Neuro-ophthalmologists</MenuItem>
                      <MenuItem value="Optometrist">Optometrist</MenuItem>
                    </Select>
                  </FormControl>
                </Box>
                <Box width={"100vw"} mt={8} display={"flex"} justifyContent={"flex-start"}>
                  <TextField
                    variant="standard"
                    name="EMAIL"
                    style={{ width: "90%" }}
                    label="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    InputProps={{
                      style: { paddingBottom: 10 },
                    }}
                    InputLabelProps={{
                      sx: {
                        color: "#9B9B9B",
                        "&.Mui-focused": {
                          color: "#9B9B9B",
                        },
                      },
                    }}
                  />
                </Box>
              </Box>
            </Box>
          </form>
          <Box width={"100%"} mt={5} pr={5} display={"flex"} justifyContent={"flex-end"} alignItems={"flex-end"}>
            <Button
              color="secondary"
              disabled={open}
              onClick={(e) => handleSubmit(e)}
              style={{ textTransform: "none" }}
              sx={{ backgroundColor: "black" }}
              variant="contained"
              size="large"
            >
              <Box pt={0.5} pb={0.5}>
                Send
              </Box>
            </Button>
          </Box>
          <Box mt={5} width={"100%"} display={"flex"} flexDirection={"column"} justifyContent={"center"} alignItems={"center"}>
            {status === "sending" && <Box style={{ color: "blue" }}>sending...</Box>}
            {status === "error" && errorMessage && <Box style={{ color: "red" }}>invalid email address</Box>}
            {status === "error" ? null : <>{errorMessage && status !== "sending" ? <Box style={{ color: "red" }}>invalid email address</Box> : null}</>}
            {emptyValue && <Box style={{ color: "red" }}>Please fill all values</Box>}
            {status === "success" && errorMessage === false && emptyValue === false && (
              <Box width={"100%"} ml={-4.5} color={"black"} display={"flex"} justifyContent={"center"} alignItems={"center"}>
                {message}
              </Box>
            )}
          </Box>
        </>
      ) : (
        <>
          <form className="mc__form" onSubmit={(e) => handleSubmit(e)}>
            <Box display={"flex"} justifyContent={"center"} ml={-3} pr={10} alignItems={"center"} flexDirection={"row"} width={"100vw"}>
              <Box width={"100%"} onClick={(e) => e.preventDefault()}>
                <CardMedia
                  poster="/images/GetAccess/phones.png"
                  component="video"
                  loop
                  autoPlay
                  src="/images/GetAccess/animation.mov"
                  controls
                  controlsList="nodownload"
                  style={{ pointerEvents: "none" }}
                />
              </Box>

              <Box width={"50%"} display={"flex"} justifyContent={"flex-start"} alignItems={"flex-start"} flexDirection={"column"}>
                <Box width={"100%"} display={"flex"} justifyContent={"flex-start"} alignItems={"flex-start"} flexDirection={"row"}>
                  <Box style={{ width: "49%" }} mr={4}>
                    <TextField
                      style={{ width: "100%" }}
                      variant="standard"
                      name="MERGE1"
                      label="Name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
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
                  <Box style={{ width: "50%" }}>
                    <TextField
                      variant="standard"
                      style={{ width: "100%" }}
                      name="LNAME"
                      label="Surname"
                      value={surrname}
                      onChange={(e) => setSurrname(e.target.value)}
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

                <Box textAlign={"left"} width={"100%"} mt={8}>
                  <FormControl variant="standard" style={{ width: "100%" }}>
                    <InputLabel id="specialization-label">Specialization</InputLabel>
                    <Select labelId="specialization-label" id="specialization-select" value={specialization} name={"MERGE6"} onChange={(e) => setSpecialization(e.target.value)}>
                      <MenuItem value="Neurologists">Neurologists</MenuItem>
                      <MenuItem value="Intensivist">Intensivist</MenuItem>
                      <MenuItem value="Nurse">Nurse</MenuItem>
                      <MenuItem value="Anesthesiologists">Anesthesiologists</MenuItem>
                      <MenuItem value="Ophthalmologist">Ophthalmologist</MenuItem>
                      <MenuItem value="Neuro-ophthalmologists">Neuro-ophthalmologists</MenuItem>
                      <MenuItem value="Optometrist">Optometrist</MenuItem>
                    </Select>
                  </FormControl>
                </Box>
                <Box width={"100%"} mt={8}>
                  <TextField
                    variant="standard"
                    name="EMAIL"
                    style={{ width: "100%" }}
                    label="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    InputLabelProps={{
                      sx: {
                        color: "text.primary",
                        "&.Mui-focused": {
                          color: "#9B9B9B",
                        },
                      },
                    }}
                  />
                </Box>
              </Box>
            </Box>
          </form>
          <Box width={"100%"} mt={-20} pr={5} display={"flex"} justifyContent={"flex-end"} alignItems={"flex-end"}>
            <Button
              color="secondary"
              onClick={(e) => handleSubmit(e)}
              disabled={open}
              style={{ textTransform: "none" }}
              sx={{ backgroundColor: "black" }}
              variant="contained"
              size="large"
            >
              <Box pt={0.5} pb={0.5}>
                Send
              </Box>
            </Button>
          </Box>
          <Box mt={20}>
            {status === "sending" && <Box style={{ color: "blue" }}>sending...</Box>}
            {status === "error" && errorMessage && <Box style={{ color: "red" }}>invalid email address</Box>}
            {status === "error" ? null : <>{errorMessage && status !== "sending" ? <Box style={{ color: "red" }}>invalid email address</Box> : null}</>}
            {emptyValue && <Box style={{ color: "red" }}>Please fill all values</Box>}
            {status === "success" && errorMessage === false && emptyValue === false && (
              <Box width={"100%"} ml={-4.5} color={"black"} display={"flex"} justifyContent={"center"} alignItems={"center"}>
                {message}
              </Box>
            )}
          </Box>
        </>
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
        style={
          isMobileView
            ? { backgroundImage: 'url("/images/GetAccess/gradient.png")', backgroundPosition: "top", backgroundRepeat: "no-repeat" }
            : { backgroundImage: 'url("/images/GetAccess/gradient.png")', backgroundPosition: "center", backgroundRepeat: "no-repeat" }
        }
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
                It{"'"}s time for an upgrade.
              </Typography>

              <Typography
                component={motion.p}
                px={10}
                style={{ margin: "0 auto 20px", fontSize: "16px" }}
                width={{ xs: "100%", md: "40%" }}
                lineHeight={"180%"}
                color={"#595D62"}
                fontFamily={"SuisseIntl"}
                variants={{ initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 } }}
                transition={{ duration: 0.7, ease: "easeOut" }}
              >
                Revolutionise patient care with Solvemed app and experience cutting-edge technology. Sign up now to improve your diagnostic!
              </Typography>
            </Box>
            <Box width={"100vw"} justifyContent={"center"} alignItems={"center"} display={"flex"} onClick={(e) => e.preventDefault()}>
              <CardMedia
                poster="/images/GetAccess/phones.png"
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
                It{"'"}s time for an upgrade.
              </Typography>

              <Typography
                component={motion.p}
                fontFamily={"SuisseIntl"}
                fontWeight={300}
                fontSize={"16px"}
                style={{ margin: "0 auto 100px" }}
                width={{ xs: "100%", md: "40%" }}
                variants={{ initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 } }}
                transition={{ duration: 0.7, ease: "easeOut" }}
              >
                Revolutionise patient care with Solvemed app and experience cutting-edge technology. Sign up now to improve your diagnostic!
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
