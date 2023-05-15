import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import { Form, Formik } from "formik";
import { NextPage } from "next";
import Head from "next/head";
import { contactSchema, emailFailStatus } from "../utils/helpers";
import styles from "./contact.module.css";
import { motion } from "framer-motion";

const initialValues = {
  name: "",
  email: "",
  message: "",
};
const Contact: NextPage<any> = () => {
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

      <Box textAlign="center">
        <Typography
          component={motion.p}
          variant="h3"
          align="center"
          mb="60px"
          fontSize={92}
          variants={{ initial: { opacity: 0, y: 100 }, animate: { opacity: 1, y: 0 } }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          Contact us
        </Typography>
        <Typography
          component={motion.p}
          variant="subtitle1"
          fontSize={42}
          style={{ margin: "0 auto 30px" }}
          width={{ xs: "100%", md: "40%" }}
          variants={{ initial: { opacity: 0, y: 50 }, animate: { opacity: 1, y: 0 } }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          Let’s partner up and make groundbreaking discoveries together.
        </Typography>
        <Typography
          component={motion.p}
          variant="body2"
          style={{ margin: "0 auto 100px" }}
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
                <Box maxWidth="664px" margin="0 10px">
                  <Grid item xs={12}>
                    <TextField
                      variant="standard"
                      name="name"
                      placeholder="Name"
                      disabled={isSubmitting}
                      value={values.name}
                      onChange={handleChange}
                      error={touched.name && Boolean(errors.name)}
                      helperText={touched.name && Boolean(errors.name) && <Typography variant="h6">Please fill in your name</Typography>}
                      style={{ width: "100%", margin: "20px 0" }}
                      InputProps={{ classes: { input: styles.input } }}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      variant="standard"
                      name="email"
                      placeholder="Email"
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
                      style={{ width: "100%", margin: "20px 0" }}
                      InputProps={{ classes: { input: styles.input } }}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      variant="standard"
                      name="message"
                      placeholder="Message"
                      disabled={isSubmitting}
                      value={values.message}
                      onChange={handleChange}
                      error={touched.message && Boolean(errors.message)}
                      helperText={touched.message && Boolean(errors.message) && <Typography variant="h6">Please fill in your message</Typography>}
                      style={{ width: "100%", margin: "200px 0 20px" }}
                      InputProps={{ classes: { input: styles.input } }}
                    />
                  </Grid>
                  <Button
                    color="secondary"
                    style={{ textTransform: "none", margin: "20px 0", height: "54px", width: "194px" }}
                    sx={{ backgroundColor: "black" }}
                    variant="contained"
                    size="large"
                    disabled={isSubmitting}
                  >
                    {Object.keys(errors).length === 0 ? (
                      <a href={`mailto:contact@solvemed.ai?subject=${values.name}&body=From:${values.email} ${values.message}`} className={styles.sendBtnText}>
                        Send Message
                      </a>
                    ) : (
                      "Send Message"
                    )}
                  </Button>
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
