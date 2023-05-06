import { Box, CardMedia, TextField, Typography, useMediaQuery, video } from "@mui/material";
import { Form, Formik } from "formik";
import { NextPage } from "next";
import Head from "next/head";
import { contactSchema, emailFailStatus } from "../utils/helpers";
import { motion } from "framer-motion";
import Image from "next/image";
import { theme } from "../config/theme";
const initialValues = {
  name: "",
  email: "",
  message: "",
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
                controls
                controlsList="nodownload"
                style={{ pointerEvents: "none", width: "500px" }}
              />
            </Box>
            <Formik initialValues={initialValues} validationSchema={contactSchema} onSubmit={() => console.log()}>
              {({ errors, touched, isSubmitting, values, handleChange }: any) => {
                return (
                  <Form>
                    <Box display={"flex"} justifyContent={"center"} ml={-3} pl={3} pr={20} alignItems={"center"} flexDirection={"row"} width={"100vw"}>
                      <Box width={"100vw"} pl={14} display={"flex"} justifyContent={"flex-start"} alignItems={"flex-start"} flexDirection={"column"}>
                        <Box width={"100vw"} display={"flex"} justifyContent={"flex-start"} alignItems={"flex-start"} flexDirection={"row"}>
                          <Box style={{ width: "42%" }} mr={2}>
                            <TextField
                              style={{ width: "100%" }}
                              variant="standard"
                              name="name"
                              label="Name"
                              disabled={isSubmitting}
                              value={values.name}
                              onChange={handleChange}
                              error={touched.name && Boolean(errors.name)}
                              helperText={touched.name && Boolean(errors.name) && <Typography variant="h6">Please fill in your name</Typography>}
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
                              name="Surname"
                              label="Surname"
                              disabled={isSubmitting}
                              value={values.name}
                              onChange={handleChange}
                              error={touched.name && Boolean(errors.name)}
                              helperText={touched.name && Boolean(errors.name) && <Typography variant="h6">Please fill in your name</Typography>}
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
                            label="Specialization"
                            disabled={isSubmitting}
                            value={values.name}
                            onChange={handleChange}
                            error={touched.name && Boolean(errors.name)}
                            helperText={touched.name && Boolean(errors.name) && <Typography variant="h6">Please fill in your name</Typography>}
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
                            disabled={isSubmitting}
                            value={values.name}
                            onChange={handleChange}
                            error={touched.name && Boolean(errors.name)}
                            helperText={touched.name && Boolean(errors.name) && <Typography variant="h6">Please fill in your name</Typography>}
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
                  </Form>
                );
              }}
            </Formik>
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

            <Formik initialValues={initialValues} validationSchema={contactSchema} onSubmit={() => console.log()}>
              {({ errors, touched, isSubmitting, values, handleChange }: any) => {
                return (
                  <Form>
                    <Box display={"flex"} justifyContent={"center"} ml={-3} pl={3} pr={20} alignItems={"center"} flexDirection={"row"} width={"100vw"}>
                      <Box width={"50%"} onClick={(e) => e.preventDefault()}>
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
                              disabled={isSubmitting}
                              value={values.name}
                              onChange={handleChange}
                              error={touched.name && Boolean(errors.name)}
                              helperText={touched.name && Boolean(errors.name) && <Typography variant="h6">Please fill in your name</Typography>}
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
                              name="Surname"
                              label="Surname"
                              disabled={isSubmitting}
                              value={values.name}
                              onChange={handleChange}
                              error={touched.name && Boolean(errors.name)}
                              helperText={touched.name && Boolean(errors.name) && <Typography variant="h6">Please fill in your name</Typography>}
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
                            name="Specialization"
                            style={{ width: "100%" }}
                            label="Specialization"
                            disabled={isSubmitting}
                            value={values.name}
                            onChange={handleChange}
                            error={touched.name && Boolean(errors.name)}
                            helperText={touched.name && Boolean(errors.name) && <Typography variant="h6">Please fill in your name</Typography>}
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
                            name="Specialization"
                            style={{ width: "100%" }}
                            label="Enter your email"
                            disabled={isSubmitting}
                            value={values.name}
                            onChange={handleChange}
                            error={touched.name && Boolean(errors.name)}
                            helperText={touched.name && Boolean(errors.name) && <Typography variant="h6">Please fill in your name</Typography>}
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
                  </Form>
                );
              }}
            </Formik>
          </Box>
        )}
      </Box>
    </>
  );
};

export default GetAccess;
