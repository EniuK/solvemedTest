import React, { Fragment } from "react";
import { NextPage } from "next";
import { Box, Grid, Link, Typography } from "@mui/material";
import Image from "next/image";

const careers = [
  {
    category: "Neuroscience",
    positions: [
      {
        title: "Head of Research",
        description: "Remote (preferred locations for the remote role: Boston, MA; San Francisco Bay Area)",
        url: "https://google.com",
      },
      {
        title: "Head of R&D Partnerships",
        description: "Remote (preferred locations for the remote role: London , UK; Boston, MA; San Francisco Bay Area)",
        url: "https://google.com",
      },
    ],
  },
  {
    category: "Operations",
    positions: [
      {
        title: "Head of Research",
        description: "Remote (preferred locations for the remote role: Boston, MA; San Francisco Bay Area)",
        url: "https://google.com",
      },
      {
        title: "Head of R&D Partnerships",
        description: "Remote (preferred locations for the remote role: London , UK; Boston, MA; San Francisco Bay Area)",
        url: "https://google.com",
      },
    ],
  },
  {
    category: "Commercial",
    positions: [
      {
        title: "Head of Research",
        description: "Remote (preferred locations for the remote role: Boston, MA; San Francisco Bay Area)",
        url: "https://google.com",
      },
      {
        title: "Head of R&D Partnerships",
        description: "Remote (preferred locations for the remote role: London , UK; Boston, MA; San Francisco Bay Area)",
        url: "https://google.com",
      },
    ],
  },
];

const Careers: NextPage = () => {
  return (
    <Grid container xs={10} lg={8} columns={10} margin="auto" alignItems="center">
      <Grid item xs={10} textAlign="center">
        <Typography variant="h3" mb="80px">
          Join Solvemed
        </Typography>
        <Typography variant="h4" mb="30px">
          Digital mapping of the human brain is an interdisciplinary challenge.
        </Typography>
        <Typography fontSize="18px" lineHeight="24.3px">
          We are looking to hire a wide range of people with diverse engineering, scientific, operations expertise.
        </Typography>
      </Grid>

      {careers.map((sectionItem) => (
        <Fragment key={sectionItem.category}>
          <Grid item xs={10} mt="100px" mb="42px">
            <Typography fontSize="30px" fontWeight="600">
              {sectionItem.category}
            </Typography>
          </Grid>

          {sectionItem.positions.map((item, idx) => (
            <Fragment key={item.title}>
              <Grid item xs={10} sm={7} md={8} zeroMinWidth>
                <Typography fontSize="21px" fontWeight="600">
                  Head of Research
                </Typography>
                <Typography fontSize="18px" paragraph>
                  Remote (preferred locations for the remote role: Boston, MA; San Francisco Bay Area)
                </Typography>
              </Grid>

              <Grid item xs={10} sm={3} md={2}>
                <Link
                  href={item.url}
                  border="1px solid #5242EE"
                  ml={{ xs: "0", sm: "auto" }}
                  borderRadius="100px"
                  height="54px"
                  width="151px"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  underline="none"
                  target="_blank"
                  rel="noopener"
                >
                  <Typography color="#5242EE" fontSize="12px" fontWeight="600" textTransform="uppercase" mr="18px">
                    Apply Now
                  </Typography>
                  <Image src="/icons/arrow-right.svg" alt="arrow right" width="10px" height="10px" />
                </Link>
              </Grid>

              {idx !== sectionItem.positions.length - 1 && (
                <Grid item xs={10} marginY="30px">
                  <Box height="1px" bgcolor="rgba(0, 0, 0, 0.2)" />
                </Grid>
              )}
            </Fragment>
          ))}
        </Fragment>
      ))}
    </Grid>
  );
};

export default Careers;
