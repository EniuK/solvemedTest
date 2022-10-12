import React from "react";
import Image from "next/image";
import { NextPage } from "next";
import Slider from "react-slick";
import { Box, Grid, Stack, Typography, useMediaQuery, useTheme } from "@mui/material";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./science.module.css";
import { useParallax } from "react-scroll-parallax";
import { ParallaxProps } from "react-scroll-parallax/dist/components/Parallax/types";
import Head from "next/head";
import BackgroundImage from "../components/BackgroundImage/BackgroundImage";

const collaborators = [
  { name: "kings college hospital", icon: "/images/logos/collaborations/kings_college_hospital_nhs.png", width: "192px", height: "76px" },
  { name: "university-college-london-hospitals", icon: "/images/logos/collaborations/nhs_foundation_trust.png", width: "205px", height: "54px" },
  { name: "barts health", icon: "/images/logos/collaborations/nhs_trust.png", width: "117px", height: "68px" },
  { name: "hope", icon: "/images/logos/collaborations/hope.png", width: "123px", height: "106px" },
  { name: "oftalmika", icon: "/images/logos/collaborations/oftalmika.png", width: "140px", height: "96px" },
  { name: "oxford hospitals", icon: "/images/logos/collaborations/oxford_univeristy_hospitals.png", width: "241px", height: "75px" },
  { name: "queen mary", icon: "/images/logos/collaborations/queen_mary.png", width: "169px", height: "44px" },
  { name: "loughborough", icon: "/images/logos/collaborations/loughborough_university.png", width: "204px", height: "65px" },
];

const selectedLiterature = [
  {
    id: "1",
    title: "Ocular motor signatures of cognitive dysfunction in multiple sclerosis",
    author: "Joanne Fielding, et al.",
    publishDate: "2015",
    source: "Nature Reviews Neurology",
    label: "Multiple sclerosis",
  },
  {
    id: "2",
    title: "Fixational microsaccades: A quantitative and objective measure of disability in multiple sclerosis",
    author: "Christy K Sheehy, et al.",
    publishDate: "2020",
    source: "Multiple Sclerosis Journal",
    label: "Multiple sclerosis",
  },
  {
    id: "3",
    title: "Pupillary response to sparse multifocal stimuli in multiple sclerosis patients",
    author: "E N Ali, et al.",
    publishDate: "2014",
    source: "Multiple Sclerosis Journal",
    label: "Multiple sclerosis",
  },
  {
    id: "4",
    title: "Using endogenous saccades to characterize fatigue in multiple sclerosis",
    author: "Marisa Ferreira, et al.",
    publishDate: "2017",
    source: "Multiple Sclerosis and Related Disorders",
    label: "Multiple sclerosis",
  },
  {
    id: "5",
    title: "Gray Matter Atrophy to Explain Subclinical Oculomotor Deficit in Multiple Sclerosis",
    author: "Bálint Kincses, et al.",
    publishDate: "2019",
    source: "Frontiers in Neurology",
    label: "Multiple sclerosis",
  },
  {
    id: "6",
    title: "Eye Movement Evaluation in MS and PD Using a Standardized Oculomotor & Neuro-Ophthalmic Disorder Assessment",
    author: "Alessandro Grillini, et al.",
    publishDate: "2020",
    source: "Frontiers in Neurology",
    label: "Parkinson's disease",
  },
  {
    id: "7",
    title: "Executive function deficits in mild cognitive impairment: evidence from saccade tasks",
    author: "Negin Chehrehnegar, et al.",
    publishDate: "2021",
    source: "Aging & Mental Health Journal",
    label: "Alzheimer's disease",
  },
  {
    id: "8",
    title: "Pupillometry and 123I-DaTSCAN imaging in Parkinson's Disease: A Comparison Study",
    author: "Evangelia Giza, et al.",
    publishDate: "2012",
    source: "International Journal of Neuroscience",
    label: "Parkinson's disease",
  },
  {
    id: "9",
    title: "Understanding the effects of mild traumatic brain injury on the pupillary light reflex",
    author: "Kenneth J Ciuffreda, et al.",
    publishDate: "2017",
    source: "Concussion Journal",
    label: "Mild Traumatic Brain Injury",
  },
  {
    id: "10",
    title: "Visual Scanning and Pupillary Responses in Young Children with Autism Spectrum Disorder",
    author: "Christa J. Anderson, et al.",
    publishDate: "2006",
    source: "Journal of Clinical and Experimental Neuropsychology",
    label: "Autism Spectrum Disorder",
  },
  {
    id: "11",
    title: "Pupillometry and 123I-DaTSCAN imaging in Parkinson's Disease: A Comparison Study",
    author: "Mona Guath, et al.",
    publishDate: "2022",
    source: "Journal of the International Neuropsychological Society",
    label: "Major Depression",
  },
  {
    id: "12",
    title: "Pupillary effects in habitual cannabis consumers quantified with pupillography",
    author: "Carlo P Campobasso, et al.",
    publishDate: "2020",
    source: "Journal Forensic science international",
    label: "Substance abuse",
  },
  {
    id: "13",
    title: "Reduced pupillary light reflexes in diabetic autonomic neuropathy",
    author: "S A Smith, et al.",
    publishDate: "1983",
    source: "Journal Diabetologia",
    label: "Diabetic neuropathy",
  },
  {
    id: "14",
    title: "Pupil size and pupillary light reflex in early infancy: heritability and link to genetic liability to schizophrenia",
    author: "Ana Maria Portugal, et al.",
    publishDate: "2021",
    source: "Journal of child psychology and psychiatry, and allied disciplines",
    label: "Schizophrenia",
  },
  {
    id: "15",
    title: "Response time as a proxy of ongoing mental state: A combined fMRI and pupillometry study in Generalized Anxiety Disorder",
    author: "Elena Makovac, et al.",
    publishDate: "2019",
    source: "Journal NeuroImage",
    label: "Anxiety",
  },
  {
    id: "16",
    title: "Pupillary response in reward processing in adults with major depressive disorder in remission",
    author: "Mona Guath, et al.",
    publishDate: "2022",
    source: "Journal of the International Neuropsychological Society",
    label: "Diabetic Retinopathy",
  },
  {
    id: "17",
    title: "Pupillary effects in habitual cannabis consumers quantified with pupillography",
    author: "Carlo P Campobasso, et al.",
    publishDate: "2020",
    source: "Journal Forensic science international",
    label: "Ophthalmic Disease",
  },
  {
    id: "18",
    title: "Reduced pupillary light reflexes in diabetic autonomic neuropathy",
    author: "S A Smith, et al.",
    publishDate: "1983",
    source: "Journal Diabetologia",
    label: "Glaucoma",
  },
  {
    id: "20",
    title: "Response time as a proxy of ongoing mental state: A combined fMRI and pupillometry study in Generalized Anxiety Disorder",
    author: "Elena Makovac, et al.",
    publishDate: "2019",
    source: "Journal NeuroImage",
    label: "ALS",
  },
];

const NextArrow = (props: any) => {
  const { className, onClick } = props;
  return (
    <div className={`${className} ${styles.sliderArrow} ${styles.sliderArrowNext}`} onClick={onClick}>
      <img src="/images/chevronRight.svg" alt="Next button" />
    </div>
  );
};

const PrevArrow = (props: any) => {
  const { className, onClick } = props;
  return (
    <div className={`${className} ${styles.sliderArrow} ${styles.sliderArrowPrev}`} onClick={onClick}>
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
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    slidesToShow: desktop ? 5 : tablet ? 3 : mobile ? 1 : 2,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    className: styles.slider,
  };

  const parallaxSettings: ParallaxProps = { speed: -20, translateY: [10, -30] };

  const parallax = useParallax<HTMLDivElement>(parallaxSettings);
  const parallax2 = useParallax<HTMLDivElement>(parallaxSettings);
  const parallax3 = useParallax<HTMLDivElement>(parallaxSettings);

  return (
    <>
      <div>
        <Head>
          <title>Solvemed Science</title>
          <meta property="og:title" content="Solvemed Science" />
          <meta property="og:type" content="website" />
          <meta
            name="description"
            content="Decoding neurology. In the blink of AI. Solvemed is a VC-backed Neuroscience AI company working to redefine neurology care and drug development. With neurodegenerative diseases (dementias) as the primary focus area, Solvemed leverages its proprietary machine learning technology to develop first-in-class digital biomarkers to support development of neurological drugs and establish affordable clinical examination and remote monitoring tools."
          />
        </Head>
      </div>
      <Box textAlign="center">
        <Typography variant="h1" mb="80px">
          Science
        </Typography>
        <Typography variant="subtitle1" mb="30px">
          Our research advances the frontier of digital biomarker science.
        </Typography>
        <Typography variant="body2" mb="165px">
          We bring to the world the most advanced camera-enabled data collection and analytical tools in the field of neurology and ophthalmology.
        </Typography>

        <Grid container justifyContent="center" mb="200px">
          <Grid container item xs={12} lg={10} justifyContent="space-between" alignItems="center">
            <Grid item container xs={12} justifyContent="space-between">
              <Grid item xs={12} sm={5} md={5} position="relative">
                <BackgroundImage src="/images/pink.svg" alt="Background pink" className={styles.bg} />
                <div ref={parallax.ref}>
                  <Image src="/images/science1.png" alt="science1" width={440} height={632} />
                </div>
              </Grid>
              <Grid item xs={12} sm={6} md={6} textAlign="left">
                <Typography variant="body1Wide" mb="60px">
                  Technology validation
                </Typography>
                <Typography variant="subtitle1" mb="57px">
                  Our Software as Medical Devices undergo extensive testing validation against current standard of care and gold standard methods and devices.
                </Typography>
                <ul>
                  <li className={styles.listItem}>
                    <Typography variant="body2">High precision biomarker parameter capture</Typography>
                  </li>
                  <li className={styles.listItem}>
                    <Typography variant="body2">Real-world relevance and utility</Typography>
                  </li>
                  <li className={styles.listItem}>
                    <Typography variant="body2">Developed in collaboration with clinicians and researchers</Typography>
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
              <Grid item xs={12} sm={6} md={6} textAlign="left">
                <Typography variant="body1Wide" mb="60px">
                  Biomarker discovery
                </Typography>
                <Typography variant="subtitle1" mb="57px">
                  Our world-class biomarker studies, conducted in collaborations with some of the most renowned research institutions, hold promise of novel disease biomarkers.
                </Typography>
                <ul>
                  <li className={styles.listItem}>
                    <Typography variant="body2">Collection of multi-biomarker panels enabled</Typography>
                  </li>
                  <li className={styles.listItem}>
                    <Typography variant="body2">Novel protocols for information-rich signals</Typography>
                  </li>
                  <li className={styles.listItem}>
                    <Typography variant="body2">Proprietary machine learning analytics</Typography>
                  </li>
                </ul>
              </Grid>
              <Grid item xs={12} sm={5} md={5} position="relative">
                <BackgroundImage src="/images/yellow.svg" alt="Background yellow" className={styles.bg2} />
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
              <Grid item xs={12} sm={5} md={5} position="relative">
                <BackgroundImage src="/images/blue.svg" alt="Background blue" className={styles.bg3} />
                <div ref={parallax3.ref}>
                  <Image src="/images/science3.png" alt="science3" width={440} height={632} />
                </div>
              </Grid>
              <Grid item xs={12} sm={6} md={6} textAlign="left">
                <Typography variant="body1Wide" mb="60px">
                  Machine learning
                </Typography>
                <Typography variant="subtitle1" mb="57px">
                  We combine cutting-edge computer vision algorithms with predictive analytics for novel scientific insights and technological breakthroughs.
                </Typography>
                <ul>
                  <li className={styles.listItem}>
                    <Typography variant="body2">De-risk clinical development and reduce trial duration and costs</Typography>
                  </li>
                  <li className={styles.listItem}>
                    <Typography variant="body2">Track disease progression and demonstrate drug efficacy</Typography>
                  </li>
                  <li className={styles.listItem}>
                    <Typography variant="body2">Use novel endpoints and stratify patient cohorts</Typography>
                  </li>
                </ul>
              </Grid>
            </Grid>
          </Grid>
        </Grid>

        <Typography variant="subtitle3" mb="20px">
          Research collaborations
        </Typography>
        <Typography variant="body2" mb={12}>
          We collaborate with partners at some of the most prominent clinical <br />
          and industrial life science organisations.
        </Typography>

        <Grid container justifyContent="space-between" xs={4} columns={{ xs: 2, sm: 2, lg: 4 }} rowSpacing={{ lg: 8, sm: 18, xs: 12 }} alignItems="center" columnSpacing={{ lg: 0, sm: 0, xs: 4}}>
          {collaborators.map((item) => (
            <Grid item key={item.name} xs={1} sm={1} lg={1}>
              <Box display="flex" justifyContent="center" alignItems="center">
                <Image src={item.icon} alt={item.name} width={item.width} height={item.height} objectFit="contain" />
              </Box>
            </Grid>
          ))}
        </Grid>

        <Box position="relative">
          <BackgroundImage src="/images/blue2.svg" alt="Background blue" className={styles.bg4} />

          <Typography variant="subtitle3" mb="90px" mt="120px">
            Selected literature
          </Typography>

          <Slider {...sliderSettings}>
            {selectedLiterature.map((item) => (
              <Box key={item.id} maxWidth="90%">
                <Stack justifyContent="space-between" spacing={2} height="378px" p="16px" borderRadius="24px" bgcolor="#fff">
                  <Typography mt={3} variant="body6Wide">
                    {item.source}
                  </Typography>
                  <Typography component="p" fontSize={{ xs: 21, sm: 23 }} fontWeight="500" letterSpacing="-0.02em" lineHeight="25.3px">
                    {item.title}
                  </Typography>

                  <div>
                    <Box bgcolor="info.dark" borderRadius="40px" padding="4px 8px" mb="9px" display="inline-block">
                      <Typography variant="body6Wide" color="#65426F">
                        {item.label}
                      </Typography>
                    </Box>
                    <Typography variant="body6Wide">{item.author}</Typography>
                    <Typography variant="body6Wide" color="rgba(0,0,0,0.29)" mt={1 / 3}>
                      Published: {item.publishDate}
                    </Typography>
                  </div>
                </Stack>
              </Box>
            ))}
          </Slider>
        </Box>
      </Box>
    </>
  );
};

export default Science;
