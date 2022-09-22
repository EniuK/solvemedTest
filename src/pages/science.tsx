import React from "react";
import Image from "next/image";
import { NextPage } from "next";
import Slider from "react-slick";
import { Box, Grid, Typography, useMediaQuery, useTheme } from "@mui/material";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./science.module.css";
import { useParallax } from "react-scroll-parallax";
import { ParallaxProps } from "react-scroll-parallax/dist/components/Parallax/types";

const collaborators = [
  { name: "kings college hospital", icon: "/icons/logos/kings-college-hospital.svg" },
  { name: "university-college-london-hospitals", icon: "/icons/logos/university-college-london-hospitals.svg" },
  { name: "barts health", icon: "/icons/logos/barts-health.svg" },
  { name: "oftalmika", icon: "/icons/logos/oftalmika.svg" },
  { name: "hope", icon: "/icons/logos/hope.svg" },
  { name: "massachusetts general hospital", icon: "/icons/logos/massachusetts-general-hospital.svg" },
  { name: "oxford hospitals", icon: "/icons/logos/oxford-hospitals.svg" },
  { name: "queen mary", icon: "/icons/logos/queen-mary.svg" },
  { name: "loughborough", icon: "/icons/logos/loughborough.svg" },
  { name: "intermountain", icon: "/icons/logos/intermountain.svg" },
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
  const { className, onClick } = props;
  return (
    <div className={`${className} ${styles.sliderArrow}`} onClick={onClick}>
      <img src="/images/chevronRight.svg" alt="Next button" />
    </div>
  );
};

const PrevArrow = (props: any) => {
  const { className, onClick } = props;
  return (
    <div className={`${className} ${styles.sliderArrow}`} onClick={onClick}>
      <img src="/images/chevronLeft.svg" alt="Previous button" />
    </div>
  );
};

const Science: NextPage = () => {
  const theme = useTheme();
  const tablet = useMediaQuery(theme.breakpoints.up("md"));
  const desktop = useMediaQuery(theme.breakpoints.up("lg"));
  const mobile = useMediaQuery(theme.breakpoints.down("sm"));

  const sliderSettings = {
    dots: false,
    infinite: false,
    slidesToShow: desktop ? 4 : tablet ? 3 : mobile ? 1 : 2,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  const parallaxSettings: ParallaxProps = { speed: -20, translateY: [10, -30] };

  const parallax = useParallax<HTMLDivElement>(parallaxSettings);
  const parallax2 = useParallax<HTMLDivElement>(parallaxSettings);
  const parallax3 = useParallax<HTMLDivElement>(parallaxSettings);

  return (
    <Box textAlign="center">
      <Typography variant="h1" mb="80px">
        Science
      </Typography>
      <Typography variant="h4" mb="30px">
        Our research advances the frontier of <br />
        digital biomarker science.
      </Typography>
      <Typography variant="h6" mb="165px">
        We bring to the world the most advanced camera-enabled data <br />
        collection and analytical tools in the field of neurology and <br />
        ophthalmology.
      </Typography>

      <Grid container justifyContent="center" mb="200px">
        <Grid container item xs={12} lg={10} justifyContent="space-between" alignItems="center">
          <Grid item container xs={12} justifyContent="space-between">
            <Grid item xs={12} md={5.5} position="relative">
              <picture>
                <source srcSet="/images/pink.svg" type="image/svg+xml" />
                <img src="/images/pink.svg" alt="Background pink" className={styles.bg} />
              </picture>
              <div ref={parallax.ref}>
                <Image src="/images/science1.png" alt="science1" width={440} height={632} />
              </div>
            </Grid>
            <Grid item xs={12} md={5.5} textAlign="left">
              <Typography variant="body1" mb="60px">
                Technology validation
              </Typography>
              <Typography variant="h4" mb="57px">
                Our Software as Medical Devices undergo extensive testing validation against current standard of care and gold standard methods and devices.
              </Typography>
              <ul>
                <li className={styles.listItem}>
                  <Typography variant="h6">High precision biomarker parameter capture</Typography>
                </li>
                <li className={styles.listItem}>
                  <Typography variant="h6">Real-world relevance and utility</Typography>
                </li>
                <li className={styles.listItem}>
                  <Typography variant="h6">Developed in collaboration with clinicians and researchers</Typography>
                </li>
              </ul>
            </Grid>
          </Grid>

          <Grid item xs={12}>
            <Box marginY="138px" width="100%" height={33} position="relative">
              <Image src="/icons/divider.svg" alt="divider" layout="fill" />
            </Box>
          </Grid>

          <Grid item container xs={12} justifyContent="space-between">
            <Grid item xs={12} md={5.5} textAlign="left">
              <Typography variant="body1" mb="60px">
                Biomarker discovery
              </Typography>
              <Typography variant="h4" mb="57px">
                Our world-class biomarker studies, conducted in collaborations with some of the most renowned research institutions, hold promise of novel disease biomarkers.
              </Typography>
              <ul>
                <li className={styles.listItem}>
                  <Typography variant="h6">Collection of multi-biomarker panels enabled</Typography>
                </li>
                <li className={styles.listItem}>
                  <Typography variant="h6">Novel protocols for information-rich signals</Typography>
                </li>
                <li className={styles.listItem}>
                  <Typography variant="h6">Proprietary machine learning analytics</Typography>
                </li>
              </ul>
            </Grid>
            <Grid item xs={12} md={5.5} position="relative">
              <picture>
                <source srcSet="/images/yellow.svg" type="image/svg+xml" />
                <img src="/images/yellow.svg" alt="Background yellow" className={styles.bg2} />
              </picture>
              <div ref={parallax2.ref}>
                <Image src="/images/science2.png" alt="science2" width={440} height={632} />
              </div>
            </Grid>
          </Grid>

          <Grid item xs={12}>
            <Box marginY="138px" width="100%" height={33} position="relative">
              <Image src="/icons/divider.svg" alt="divider" layout="fill" />
            </Box>
          </Grid>

          <Grid item container xs={12} justifyContent="space-between">
            <Grid item xs={12} md={5.5} position="relative">
              <picture>
                <source srcSet="/images/blue.svg" type="image/svg+xml" />
                <img src="/images/blue.svg" alt="Background blue" className={styles.bg3} />
              </picture>
              <div ref={parallax3.ref}>
                <Image src="/images/science3.png" alt="science3" width={440} height={632} />
              </div>
            </Grid>
            <Grid item xs={12} md={5.5} textAlign="left">
              <Typography variant="body1" mb="60px">
                Machine learning
              </Typography>
              <Typography variant="h4" mb="57px">
                We combine cutting-edge computer vision algorithms with predictive analytics for novel scientific insights and technological breakthroughs.
              </Typography>
              <ul>
                <li className={styles.listItem}>
                  <Typography variant="h6">De-risk clinical development and reduce trial duration and costs</Typography>
                </li>
                <li className={styles.listItem}>
                  <Typography variant="h6">Track disease progression and demonstrate drug efficacy</Typography>
                </li>
                <li className={styles.listItem}>
                  <Typography variant="h6">Use novel endpoints and stratify patient cohorts</Typography>
                </li>
              </ul>
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      <Typography variant="h5" mb="20px">
        Research collaborations
      </Typography>
      <Typography variant="h6" mb="60px">
        We collaborate with partners at some of the most prominent clinical <br />
        and industrial life science organisations.
      </Typography>

      <Grid container justifyContent="space-evenly">
        {collaborators.map((item) => (
          <Grid item key={item.name} position="relative">
            <Box height={66} width={202} marginBottom={2}>
              <Image src={item.icon} alt={item.name} layout="fill" objectFit="scale-down" />
            </Box>
          </Grid>
        ))}
      </Grid>

      <Box position="relative">
        <picture>
          <source srcSet="/images/blue2.svg" type="image/svg+xml" />
          <img src="/images/blue2.svg" alt="Background blue" className={styles.bg4} />
        </picture>

        <Typography variant="h5" mb="90px" mt="120px">
          Selected literature
        </Typography>

        <Slider {...sliderSettings}>
          {selectedLiterature.map((item) => (
            <Box key={item.id} maxWidth="261px">
              <Box justifyContent="space-between" display="flex" flexDirection="column" height="378px" p="16px 30px" mr={0} borderRadius="24px" bgcolor="#fff">
                <Typography fontSize="12px">{item.source}</Typography>
                <Typography fontSize="23px" lineHeight="25.3px" fontWeight="300">
                  {item.title}
                </Typography>

                <div>
                  <Box bgcolor="info.dark" borderRadius="40px" padding="4px 8px" mb="9px" display={"inline-block"}>
                    <Typography fontSize="12px" color="#65426F">
                      {item.label}
                    </Typography>
                  </Box>
                  <Typography fontSize="12px">{item.author}</Typography>
                  <Typography fontSize="12px" color="primary.light">
                    Published: {item.publishDate}
                  </Typography>
                </div>
              </Box>
            </Box>
          ))}
        </Slider>
      </Box>
    </Box>
  );
};

export default Science;
