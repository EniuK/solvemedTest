import { Box, Grid, Typography } from "@mui/material";
import { NextPage } from "next";
import Image from "next/image";
import React from "react";

const collaborators = [
  { name: "kings college hospital", icon: "/icons/logos/kings-college-hospital.svg" },
  { name: "university-college-london-hospitals", icon: "/icons/logos/university-college-london-hospitals.svg" },
  { name: "barts health", icon: "/icons/logos/barts-health.svg" },
  { name: "oftalmika", icon: "/icons/logos/oftalmika.svg" },
  { name: "hope", icon: "/icons/logos/hope.svg" },
  { name: "massachusetts general hospital", icon: "/icons/logos/massachusetts-general-hospital.svg" },
];

const Science: NextPage = () => {
  return (
    <Box paddingX={6.25} textAlign="center">
      <Typography variant="h1" mb="80px">
        Science
      </Typography>
      <Typography variant="h4" mb="30px">
        Our research advances the frontier of <br />
        digital biomarker science.
      </Typography>
      <Typography fontSize="18px" lineHeight="24.3px" mb="165px">
        We bring to the world the most advanced camera-enabled data <br />
        collection and analytical tools in the field of neurology and <br />
        ophthalmology.
      </Typography>

      <Grid container justifyContent="center" mb="200px">
        <Grid container item xs={12} lg={10} justifyContent="space-between" alignItems="center">
          <Grid item container xs={12} justifyContent="space-between">
            <Grid item xs={12} md={5.5}>
              <Image src="/images/science1.png" alt="science1" width={440} height={632} />
            </Grid>
            <Grid item xs={12} md={5.5}>
              <Typography fontSize="21px" mb="60px" align="left">
                Technology validation
              </Typography>
              <Typography fontSize="42px" fontWeight="300" align="left" letterSpacing={-2} mb="57px">
                Our Software as Medical Devices undergo extensive testing validation against current standard of care and gold standard methods and devices.
              </Typography>
              <Typography fontSize="18px" align="left" mb="20px">
                High precision biomarker parameter capture
              </Typography>
              <Typography fontSize="18px" align="left" mb="20px">
                Real-world relevance and utility
              </Typography>
              <Typography fontSize="18px" align="left">
                Developed in collaboration with clinicians and researchers
              </Typography>
            </Grid>
          </Grid>

          <Grid item xs={12}>
            <Box marginY="138px" width="100%" height={33} position="relative">
              <Image src="/icons/divider.svg" alt="divider" layout="fill" />
            </Box>
          </Grid>

          <Grid item container xs={12} justifyContent="space-between">
            <Grid item xs={12} md={5.5}>
              <Typography fontSize="21px" mb="60px" align="left">
                Biomarker discovery
              </Typography>
              <Typography fontSize="42px" fontWeight="300" align="left" letterSpacing={-2} mb="57px">
                Our world-class biomarker studies, conducted in collaborations with some of the most renowned research institutions, hold promise of novel disease biomarkers.
              </Typography>
              <Typography fontSize="18px" align="left" mb="20px">
                Collection of multi-biomarker panels enabled
              </Typography>
              <Typography fontSize="18px" align="left" mb="20px">
                Novel protocols for information-rich signals
              </Typography>
              <Typography fontSize="18px" align="left">
                Proprietary machine learning analytics
              </Typography>
            </Grid>
            <Grid item xs={12} md={5.5}>
              <Image src="/images/science2.png" alt="science2" width={440} height={632} />
            </Grid>
          </Grid>

          <Grid item xs={12}>
            <Box marginY="138px" width="100%" height={33} position="relative">
              <Image src="/icons/divider.svg" alt="divider" layout="fill" />
            </Box>
          </Grid>

          <Grid item container xs={12} justifyContent="space-between">
            <Grid item xs={12} md={5.5}>
              <Image src="/images/science3.png" alt="science3" width={440} height={632} />
            </Grid>
            <Grid item xs={12} md={5.5}>
              <Typography fontSize="21px" mb="60px" align="left">
                Machine learning
              </Typography>
              <Typography fontSize="42px" fontWeight="300" align="left" letterSpacing={-2} mb="57px">
                We combine cutting-edge computer vision algorithms with predictive analytics for novel scientific insights and technological breakthroughs.
              </Typography>
              <Typography fontSize="18px" align="left" mb="20px">
                De-risk clinical development and reduce trial duration and costs
              </Typography>
              <Typography fontSize="18px" align="left" mb="20px">
                Track disease progression and demonstrate drug efficacy
              </Typography>
              <Typography fontSize="18px" align="left">
                Use novel endpoints and stratify patient cohorts
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      <Typography fontSize="30px" lineHeight="36px" fontWeight="600" mb="20px">
        Research collaborations
      </Typography>
      <Typography fontSize="18px" lineHeight="24.3px" mb="60px">
        We collaborate with partners at some of the most prominent clinical <br />
        and industrial life science organisations.
      </Typography>

      <Grid container justifyContent="center">
        <Grid container item columns={{ sm: 12, md: 10 }} sm={12} md={8}>
          {collaborators.map((item) => (
            <Grid item xs={2} key={item.name} height={66} width={202} position="relative">
              <Image src={item.icon} alt={item.name} layout="fill" objectFit="scale-down" />
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Box>
  );
};

export default Science;
