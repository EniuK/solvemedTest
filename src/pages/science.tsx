import React from "react";
import Image from "next/image";
import { NextPage } from "next";
import Slider from "react-slick";
import { Box, Grid, Typography } from "@mui/material";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const collaborators = [
  { name: "kings college hospital", icon: "/icons/logos/kings-college-hospital.svg" },
  { name: "university-college-london-hospitals", icon: "/icons/logos/university-college-london-hospitals.svg" },
  { name: "barts health", icon: "/icons/logos/barts-health.svg" },
  { name: "oftalmika", icon: "/icons/logos/oftalmika.svg" },
  { name: "hope", icon: "/icons/logos/hope.svg" },
  { name: "massachusetts general hospital", icon: "/icons/logos/massachusetts-general-hospital.svg" },
];

const selectedLiterature = [
  {
    id: "1",
    title: "Executive function deficits in mild cognitive impairment: evidence from saccade tasks",
    author: "Negin Chehrehnegar",
    publishDate: "2021",
    source: "Aging & Mental Health Journal",
    label: "Alzheimer's disease",
  },
  {
    id: "2",
    title: "Understanding the effects of mild traumatic brain injury on the pupillary light reflex",
    author: "Kenneth J Ciuffreda",
    publishDate: "2017",
    source: "Concussion Journal",
    label: "Mild Traumatic Brain Injury",
  },
  {
    id: "3",
    title: "Pupillometry and 123I-DaTSCAN imaging in Parkinson's Disease: A Comparison Study",
    author: "Evangelia Giza",
    publishDate: "2012",
    source: "International Journal of Neuroscience",
    label: "Parkinson's disease",
  },
  {
    id: "4",
    title: "Executive function deficits in mild cognitive impairment: evidence from saccade tasks",
    author: "Negin Chehrehnegar",
    publishDate: "2021",
    source: "Aging & Mental Health Journal",
    label: "Alzheimer's disease",
  },
  {
    id: "5",
    title: "Understanding the effects of mild traumatic brain injury on the pupillary light reflex",
    author: "Kenneth J Ciuffreda",
    publishDate: "2017",
    source: "Concussion Journal",
    label: "Mild Traumatic Brain Injury",
  },
  {
    id: "6",
    title: "Pupillometry and 123I-DaTSCAN imaging in Parkinson's Disease: A Comparison Study",
    author: "Evangelia Giza",
    publishDate: "2012",
    source: "International Journal of Neuroscience",
    label: "Parkinson's disease",
  },
];

const NextArrow = (props: any) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        width: 48,
        height: 48,
        border: "1px solid rgba(49, 41, 55, 0.2)",
        borderRadius: 24,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 1,
      }}
      onClick={onClick}
    >
      <Image src="/icons/arrow-right.svg" alt="Next button" width="5px" height="7px" />
    </div>
  );
};

const Science: NextPage = () => {
  const settings = {
    dots: false,
    infinite: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <NextArrow />,
  };

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

      <Typography fontSize="30px" fontWeight="600" mb="90px" mt="120px">
        Selected literature
      </Typography>

      <div>
        <Slider {...settings}>
          {selectedLiterature.map((item, idx) => (
            <div key={item.id}>
              <Box
                height="378px"
                p="16px 30px"
                maxWidth="261px"
                borderRadius="24px"
                bgcolor="#fff"
                border="1px solid black"
                justifyContent="space-between"
                display={"flex"}
                flexDirection={"column"}
              >
                <Typography fontSize="12px">{item.source}</Typography>
                <Typography fontSize="23px" lineHeight="25.3px" fontWeight="300">
                  {item.title}
                </Typography>

                <div>
                  <Box bgcolor="#FBEDFF" borderRadius="40px" padding="4px 8px" mb="9px" display={"inline-block"}>
                    <Typography fontSize="12px" color="#65426F">
                      {item.label}
                    </Typography>
                  </Box>
                  <Typography fontSize="12px">{item.author}</Typography>
                  <Typography fontSize="12px" color="#494763">
                    Published: {item.publishDate}
                  </Typography>
                </div>
              </Box>
            </div>
          ))}
        </Slider>
      </div>
    </Box>
  );
};

export default Science;
