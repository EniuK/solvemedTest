import React from "react";
import { NextPage } from "next";
import Image from "next/image";
import { Box, Grid, Typography } from "@mui/material";

const Applications: NextPage = () => {
  return (
    <Box>
      <Typography variant="h2" align="center" mb="100px">
        Applications
      </Typography>

      <Grid container>
        <Grid item container xs={12} alignItems="center" columnSpacing={2} rowSpacing={4}>
          <Grid item xs={12} md={2}>
            <ol style={{ fontSize: "13px", width: "fit-content", margin: "auto", lineHeight: "15.6px", fontWeight: "600", textTransform: "uppercase" }}>
              <li style={{ marginBottom: 16 }}>Clinicians</li>
              <li style={{ marginBottom: 16, color: "rgba(49, 41, 55, 0.4)" }}>
                Research <br />
                community
              </li>
              <li style={{ color: "rgba(49, 41, 55, 0.4)" }}>
                Pharma & <br />
                biotechs
              </li>
            </ol>
          </Grid>

          <Grid item container xs={12} sm={6} md={5} justifyContent="center">
            <Image src="/images/applications1.png" alt="applications1" height="608px" width="423px" />

            <Typography fontSize="16px" lineHeight="19.04px" mb="30px">
              For intensive care specialists, paramedics, ophthalmologists, neurologists, among others.
            </Typography>
            <Box bgcolor="#5242EE" borderRadius="100px" py="20px" px="32px" textAlign="center">
              <Typography color="#fff" fontSize="13px" lineHeight="15.6px" fontWeight="600" textTransform="uppercase">
                Get early access to Solvemed medical devices
              </Typography>
            </Box>
          </Grid>

          <Grid item xs={12} sm={6} md={5} mt={{ xs: 8, sm: 0 }}>
            <Typography variant="h5" mb="60px">
              Clinicians
            </Typography>
            <Typography variant="h4" mb="60px">
              Solvemed champions digital-first care, where cutting-edge technology supports clinicians and empowers patients.
            </Typography>
            <Typography variant="h6">Replace expensive equipment with cost-effective camera-enabled tools with access to data directly from your phone.</Typography>
            <Typography variant="h6" my={3}>
              Improve clinical decision-making with data analytics and visualisation platform
            </Typography>
            <Typography variant="h6">Enable remote patient monitoring</Typography>
          </Grid>
        </Grid>

        <Grid item xs={12}>
          <Box marginY="138px" width="100%" height={33} position="relative">
            <Image src="/icons/divider.svg" alt="divider" layout="fill" />
          </Box>
        </Grid>

        <Grid item container xs={12} alignItems="center" columnSpacing={2} rowSpacing={4}>
          <Grid item xs={12} md={2}>
            <ol style={{ fontSize: "13px", width: "fit-content", margin: "auto", lineHeight: "15.6px", fontWeight: "600", textTransform: "uppercase" }}>
              <li style={{ marginBottom: 16, color: "rgba(49, 41, 55, 0.4)" }}>Clinicians</li>
              <li style={{ marginBottom: 16 }}>
                Research <br />
                community
              </li>
              <li style={{ color: "rgba(49, 41, 55, 0.4)" }}>
                Pharma & <br />
                biotechs
              </li>
            </ol>
          </Grid>

          <Grid item xs={12} sm={6} md={5} mt={{ xs: 8, sm: 0 }}>
            <Typography variant="h5" mb="60px">
              Research community
            </Typography>
            <Typography variant="h4" mb="60px">
              Solvemed offers tailor-made research tools, including smartphone-based data capture devices and machine learning analytical capabilities.
            </Typography>
            <Typography variant="h6">Strengthen research design by collecting and validating novel biomarkers</Typography>
            <Typography variant="h6" my={3}>
              Expand data potential and discover new insights
            </Typography>
            <Typography variant="h6">Understand and stratify diseases</Typography>
          </Grid>

          <Grid item container xs={12} sm={6} md={5} justifyContent="center">
            <Image src="/images/applications2.png" alt="applications2" height="508px" width="664px" />

            <Typography fontSize="16px" lineHeight="19.04px" mb="30px">
              For intensive care specialists, paramedics, neuro-ophthalmologists, neurologists, among others.
            </Typography>
            <Box bgcolor="#5242EE" borderRadius="100px" py="20px" px="32px" textAlign="center">
              <Typography color="#fff" fontSize="13px" lineHeight="15.6px" fontWeight="600" textTransform="uppercase">
                Get early access to Solvemed medical devices
              </Typography>
            </Box>
          </Grid>
        </Grid>

        <Grid item xs={12}>
          <Box marginY="138px" width="100%" height={33} position="relative">
            <Image src="/icons/divider.svg" alt="divider" layout="fill" />
          </Box>
        </Grid>

        <Grid item container xs={12} alignItems="center" columnSpacing={2} rowSpacing={4}>
          <Grid item xs={12} md={2}>
            <ol style={{ fontSize: "13px", width: "fit-content", margin: "auto", lineHeight: "15.6px", fontWeight: "600", textTransform: "uppercase" }}>
              <li style={{ marginBottom: 16, color: "rgba(49, 41, 55, 0.4)" }}>Clinicians</li>
              <li style={{ marginBottom: 16, color: "rgba(49, 41, 55, 0.4)" }}>
                Research <br />
                community
              </li>
              <li>
                Pharma & <br />
                biotechs
              </li>
            </ol>
          </Grid>

          <Grid item container xs={12} sm={6} md={5} justifyContent="center">
            <Image src="/images/applications1.png" alt="applications1" height="608px" width="423px" />

            <Typography fontSize="16px" lineHeight="19.04px" mb="30px">
              For research-based life science companies active in neurology and ophthalmology.
            </Typography>
            <Box bgcolor="#5242EE" borderRadius="100px" py="20px" px="32px" textAlign="center">
              <Typography color="#fff" fontSize="13px" lineHeight="15.6px" fontWeight="600" textTransform="uppercase">
                Get early access to Solvemed medical devices
              </Typography>
            </Box>
          </Grid>

          <Grid item xs={12} sm={6} md={5} mt={{ xs: 8, sm: 0 }}>
            <Typography variant="h5" mb="60px">
              Pharma and biotechs
            </Typography>
            <Typography variant="h4" mb="60px">
              Solvemed addresses some of most pressing challenges of the neuroscience pharma industry.
            </Typography>
            <Typography variant="h6">De-risk clinical development and reduce trial duration and costs</Typography>
            <Typography variant="h6" my={3}>
              Track disease progression and demonstrate drug efficacy
            </Typography>
            <Typography variant="h6">Use novel endpoints and stratify patient cohorts</Typography>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Applications;
