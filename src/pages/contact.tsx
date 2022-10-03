import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import { Form, Formik } from "formik";
import { NextPage } from "next";
import Head from "next/head";
import { useState } from "react";
import { contactSchema, emailFailStatus } from "../utils/helpers";
import styles from "./contact.module.css";

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
          <meta property="og:title" content="Solvemed Contact" key="title" />
          <meta name="description" content="Solvemed Contact Page" key="title" />
        </Head>
      </div>
      <Box textAlign="center">
        <img src="/images/green1.svg" alt="Background green" className={styles.bg} />
        <img src="/images/green2.svg" alt="Background green" className={styles.bg} />

        <img src="/images/blue1.svg" alt="Background blue" className={styles.bg3} />
        <img src="/images/blue3.svg" alt="Background blue" className={styles.bg3} />
        <Typography variant="h3" align="center" mb="20px" fontSize={92}>
          Contact us
        </Typography>
        <Typography variant="subtitle1" mb="30px" fontSize={42} style={{ width: "38%", margin: "0 auto", marginBottom: "2.5%" }}>
          Let’s partner up and make groundbreaking discoveries together
        </Typography>
        <Typography variant="body2" mb="165px" style={{ width: "40%", margin: "0 auto", marginBottom: "10%" }}>
          We are always on a look out of people with diverse engineering, scientific, operations expertise.
        </Typography>

        <Formik
          initialValues={initialValues}
          validationSchema={contactSchema}
          onSubmit={() => console.log()}
        >
          {({ errors, touched, isSubmitting, values, handleChange }) => {
            console.log(errors);
            return (
              <Form>
                <Box>
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
                      style={{ width: "60%", margin: "20px 0" }}
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
                      helperText={touched.email && Boolean(errors.email) && (errors.email === emailFailStatus.incorrect ? <Typography variant="h6">Your email is incorrect</Typography> : <Typography variant="h6">Please fill in your email address</Typography>)}
                      style={{ width: "60%", margin: "20px 0" }}
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
                      style={{ width: "60%", margin: "200px 0 20px" }}
                    />
                  </Grid>
                  {Object.keys(errors).length === 0 ? (
                    <Button color="primary" variant="contained" size="large" disabled={isSubmitting} style={{ margin: "20px 0", height: "54px", width: "194px" }}>
                      <a href={`mailto:contact@solvemed.ai?subject=${values.name}&body=From:${values.email} ${values.message}`}>Send Message!</a>
                    </Button>
                  ) : (
                    <Button color="primary" variant="contained" size="large" disabled={isSubmitting} style={{ margin: "20px 0", height: "54px", width: "194px" }}>
                      Send Message
                    </Button>
                  )}
                </Box>
              </Form>
            )
          }}
        </Formik>
      </Box>
    </>
  );
};

export default Contact;