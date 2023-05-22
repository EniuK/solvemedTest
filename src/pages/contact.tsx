import { Box, Button, Grid, TextField, Typography, useMediaQuery } from "@mui/material";
import { Form, Formik } from "formik";
import { NextPage } from "next";
import Head from "next/head";
import { contactSchema, emailFailStatus } from "../utils/helpers";
import styles from "./contact.module.css";
import { motion } from "framer-motion";
import { theme } from "../config/theme";

const initialValues = {
  name: "",
  email: "",
  message: "",
};
const Contact: NextPage<any> = () => {
  const isMobileView = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <>
      <div>
        <Head>
          <title>Solvemed Contact</title>
          <meta property="og:title" content="Solvemed Contact" />
          <meta property="og:type" content="website" />
          <meta
            name="description"
            content="Decoding neurology. In the blink of AI. Solvemed is a VC-backed Neuroscience AI company working to redefine neurology care and drug development. With neurodegenerative diseases (dementias) as the primary focus area, Solvemed leverages its proprietary machine learning technology to develop first-in-class digital biomarkers to support development of neurological drugs and establish affordable clinical examination and remote monitoring tools."
          />
        </Head>
      </div>

      <Box textAlign="center" px={"16px"}>
        <Typography
          component={motion.p}
          style={isMobileView ? { fontSize: "48px", fontFamily: "FinancierDisplay", lineHeight: "150%" } : { fontSize: "64px", fontFamily: "FinancierDisplay", lineHeight: "150%" }}
          align="center"
          mb="40px"
          fontSize={92}
          variants={{ initial: { opacity: 0, y: 100 }, animate: { opacity: 1, y: 0 } }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          Contact us
        </Typography>
        <Typography
          component={motion.p}
          style={
            isMobileView
              ? { fontSize: "24px", fontFamily: "FinancierDisplay", lineHeight: "120%%", marginTop: "-30px", marginBottom: 20 }
              : { fontSize: "48px", fontFamily: "FinancierDisplay", lineHeight: "150%" }
          }
          fontSize={42}
          width={{ xs: "100%", md: "40%" }}
          marginX={{ md: "30%" }}
          px={{ xs: 3 }}
          variants={{ initial: { opacity: 0, y: 50 }, animate: { opacity: 1, y: 0 } }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          letterSpacing={"-2%"}
        >
          Let’s partner up and make groundbreaking discoveries together.
        </Typography>
        <Typography
          component={motion.p}
          style={{ margin: "0 auto 53px", fontFamily: "SuisseIntl", fontWeight: 300, fontSize: "15px", color: "#595D62" }}
          width={{ xs: "100%", md: "40%" }}
          variants={{ initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 } }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          We are always on a look out of people with diverse engineering, scientific, and operations expertise.
        </Typography>

        <Formik initialValues={initialValues} validationSchema={contactSchema} onSubmit={() => console.log()}>
          {({ errors, touched, isSubmitting, values, handleChange }: any) => {
            return (
              <Form>
                <Box maxWidth="664px" margin="0 auto" padding="0 10px">
                  <Grid item xs={12}>
                    <TextField
                      variant="standard"
                      name="name"
                      label="Name"
                      disabled={isSubmitting}
                      value={values.name}
                      onChange={handleChange}
                      error={touched.name && Boolean(errors.name)}
                      helperText={touched.name && Boolean(errors.name) && <Typography variant="h6">Please fill in your name</Typography>}
                      style={{ width: "100%", marginBottom: 70 }}
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
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      variant="standard"
                      name="email"
                      label="Email"
                      disabled={isSubmitting}
                      value={values.email}
                      onChange={handleChange}
                      error={touched.email && Boolean(errors.email)}
                      helperText={
                        touched.email &&
                        Boolean(errors.email) &&
                        (errors.email === emailFailStatus.incorrect ? (
                          <Typography variant="h6">Your email is incorrect</Typography>
                        ) : (
                          <Typography variant="h6">Please fill in your email address</Typography>
                        ))
                      }
                      style={{ width: "100%", marginBottom: 70 }}
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
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      variant="standard"
                      name="message"
                      label="Message"
                      disabled={isSubmitting}
                      value={values.message}
                      onChange={handleChange}
                      error={touched.message && Boolean(errors.message)}
                      helperText={touched.message && Boolean(errors.message) && <Typography variant="h6">Please fill in your message</Typography>}
                      style={{ width: "100%", margin: "20px 0 20px" }}
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
                  </Grid>
                  <Box width={"100%"} display={"flex"} alignItems={{ xs: "flex-end", md: "center", lg: "center" }} justifyContent={{ xs: "flex-end", md: "center", lg: "center" }}>
                    <Button
                      style={{ textTransform: "none", margin: "10px 0", height: "48px", width: "137px" }}
                      sx={{ backgroundColor: "black" }}
                      variant="contained"
                      disabled={isSubmitting}
                    >
                      {Object.keys(errors).length === 0 ? (
                        <Box style={{ fontFamily: "SuisseIntl", fontWeight: 500, fontSize: "15px" }}>
                          <a href={`mailto:contact@solvemed.ai?subject=${values.name}&body=From:${values.email} ${values.message}`}>Send Message</a>
                        </Box>
                      ) : (
                        "Send Message"
                      )}
                    </Button>
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

export default Contact;
