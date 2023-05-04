import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import { Form, Formik } from "formik";
import { NextPage } from "next";
import Head from "next/head";
import { contactSchema, emailFailStatus } from "../utils/helpers";
import styles from "./contact.module.css";
import { motion } from "framer-motion";
import Image from "next/image";

const initialValues = {
  name: "",
  email: "",
  message: "",
};
const GetAccess: NextPage<any> = () => {
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

      <Box textAlign="center" style={{ backgroundImage: 'url("/images/GetAccess/gradient.png")', backgroundPosition: "center", backgroundRepeat: "no-repeat" }}>
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

        <Formik initialValues={initialValues} validationSchema={contactSchema} onSubmit={() => console.log()}>
          {({ errors, touched, isSubmitting, values, handleChange }: any) => {
            return (
              <Form>
                <Box display={"flex"} justifyContent={"center"} ml={-3} pl={3} pr={20} alignItems={"center"} flexDirection={"row"} width={"100vw"}>
                  <Box width={"50%"}>
                    <Image src={"/images/GetAccess/phones.png"} width={"643.16px"} height={"481.8px"} alt={"phones"} />
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
    </>
  );
};

export default GetAccess;
