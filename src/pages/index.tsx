import { useState } from "react";
import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { Box, Stack, Typography } from "@mui/material";
import styles from "./index.module.css";
import "animate.css";

const slides = [
  {
    metric: "Broken pursuit",
    target: "Cerebellar\nhemispheres",
    diagnosis: "Multi-system\natrophy",
  },
  {
    metric: "Nystagmus",
    target: "Deep cerebellar\nnuclei",
    diagnosis: "Multiple sclerosis",
  },
  {
    metric: "Internuclear\nophthalmoplegia",
    target: "Medial longitudinal\nfasciculus",
    diagnosis: "Multiple sclerosis\n(MS)",
  },
  {
    metric: "Parasympathetic\ndysfunction",
    target: "Edinger Westphal\nnucleus",
    diagnosis: "Parkinson’s and\nMulti-system\natrophy (MSA)",
  },
  {
    metric: "Bradykinesia",
    target: "Saccadic velocity",
    diagnosis: "Parkinson’s disease",
  },
  {
    metric: "Vertical gaze palsy",
    target: "Tectum /\nsubthalamus",
    diagnosis: "Progressive\nsupranuclear palsy\n(PSP)",
  },
  {
    metric: "Oculomotor\napraxia",
    target: "Posterior parietal\ncortex",
    diagnosis: "Alzheimer’s\ndisease",
  },
  {
    metric: "Executive\ndysfunction",
    target: "Lateral frontal\ncortex",
    diagnosis: "Frontotemporal\ndementia (FTD) /\nLewy body (DLB)",
  },
  {
    metric: "Fatiguable ptosis",
    target: "Levator palpebris\nsuperioris",
    diagnosis: "Myasthenia gravis",
  },
];

const areas = [
  {
    id: 0,
    coords: "205,499,30",
  },
  {
    id: 1,
    coords: "274,491,30",
  },
  {
    id: 2,
    coords: "337,431,30",
  },
  {
    id: 3,
    coords: "363,373,30",
  },
  {
    id: 4,
    coords: "284,392,30",
  },
  {
    id: 5,
    coords: "305,331,30",
  },
  {
    id: 6,
    coords: "136,168,30",
  },
  {
    id: 7,
    coords: "521,137,30",
  },
  {
    id: 8,
    coords: "621,283,30",
  },
];

const Home: NextPage = () => {
  const [activeSlide, setActiveSlide] = useState(slides[0]);
  const [activeSlideCoords, setActiveSlideCoords] = useState({ top: 499, left: 218, angle: 0 });

  return (
    <>
      <div>
        <Head>
          <title>Solvemed</title>
          <meta property="og:title" content="Solvemed" />
          <meta property="og:type" content="website" />
          <meta
            name="description"
            content="Decoding neurology. In the blink of AI. Solvemed is a VC-backed Neuroscience AI company working to redefine neurology care and drug development. With neurodegenerative diseases (dementias) as the primary focus area, Solvemed leverages its proprietary machine learning technology to develop first-in-class digital biomarkers to support development of neurological drugs and establish affordable clinical examination and remote monitoring tools."
          />
        </Head>
      </div>

      <Box position="relative">
        <img src="/images/pink4.svg" alt="Background pink" className={styles.bg3} />
        <img src="/images/green5.svg" alt="Background green" className={styles.bg5} />

        <Typography variant="h1" align="center" marginX="auto" width={{ xs: "100%", md: "80%", lg: "70%" }}>
          Meet breakthrough digital technology for brain health.
        </Typography>

        <img src="/images/brainWithHand.png" alt="Intro image" className={styles.introImage} />
        <img src="/images/blue7.svg" alt="Background blue" className={styles.bg7} />
      </Box>

      <Box width={{ xs: "80%", sm: "60%", md: "50%", xl: "40%" }} margin="auto">
        <Typography variant="subtitle1" mb={5}>
          Solvemed&apos;s health evaluation tools are designed to complement existing assessments by making the patient data more precise and objective, and the data collection
          easier and more frequent.
        </Typography>
        <Typography variant="subtitle1">
          They also improve the quality of neurological care by empowering and connecting patients, clinicians, and researchers inside and outside of clinical settings.
        </Typography>
      </Box>

      <Stack mb="120px" mt="96px" position="relative" flexDirection="row" alignItems="center" flexWrap="wrap" rowGap={20}>
        <div className={styles.imageWrapper}>
          <img src="/images/women.png" alt="Women" className={styles.womenImg} useMap="#womanMap" />

          <map name="womanMap">
            {areas.map((item) => (
              <area
                key={item.id.toString()}
                shape="circle"
                coords={item.coords}
                style={{ cursor: "pointer" }}
                onClick={() => {
                  const currentCoord = item.coords.split(",");
                  setActiveSlideCoords({ top: +currentCoord[1], left: +currentCoord[0], angle: item.id * 45 });
                  setActiveSlide(slides[item.id]);
                }}
              />
            ))}
          </map>

          <img
            src="/images/highlight.png"
            alt="Highlight"
            className={styles.highlight}
            style={{
              top: activeSlideCoords.top,
              left: activeSlideCoords.left,
              transform: `translate(-50%, -50%) rotate(-${activeSlideCoords.angle}deg)`,
            }}
          />
          <img src="/images/blue5.svg" alt="Background blue" className={styles.bg4} />
        </div>

        <div>
          <Typography variant="body1">Metric</Typography>
          <Typography key={activeSlide.metric} whiteSpace="pre-line" variant="subtitle1" mt="20px" mb="56px" className="animate__animated animate__fadeIn animate__slower">
            {activeSlide.metric}
          </Typography>
          <Typography variant="body1">Target</Typography>
          <Typography whiteSpace="pre-line" key={activeSlide.target} variant="subtitle1" mt="20px" mb="56px" className="animate__animated animate__fadeIn animate__slower">
            {`${activeSlide.target}`}
          </Typography>
          <Typography variant="body1">Diagnosis</Typography>
          <Typography key={activeSlide.diagnosis} whiteSpace="pre-line" variant="subtitle1" mt="20px" mb="56px" className="animate__animated animate__fadeIn animate__slower">
            {activeSlide.diagnosis}
          </Typography>
        </div>

        <img src="/images/blue6.svg" alt="Background blue" className={styles.bg2} />
        <img src="/images/pink4.svg" alt="Background pink" className={styles.bg6} />
      </Stack>

      <Box display="flex" flexDirection={{ xs: "column", sm: "row" }} justifyContent="space-between" width={{ xs: "100%", md: "80%", lg: "70%" }} margin="auto">
        <Typography variant="body1" pr={{ xs: 0, sm: 3 }} mb={{ xs: 3, md: 0 }}>
          Assessment of the eye can provide important information to the clinician about the patient’s ophthalmological and neurological health.
        </Typography>
        <Typography variant="body1">However, up till now precise ocular measurements have required specialist equipment not available to most clinicians.</Typography>
      </Box>

      <Box position="relative" textAlign="center">
        <img src="/images/yellow2.svg" alt="Background yellow" className={styles.bg} />

        <Typography variant="subtitle3" mb="22px" mt="160px">
          Our Research and Development
        </Typography>
        <Typography variant="body1" width={{ xs: "100%", md: "50%" }} mx="auto" mb={4} color="primary.light">
          We are constantly developing our internal Research and Development capabilities leveraging the synergy between AI, neuroscience, and optical physics, to build a unique
          portfolio of health evaluation tools for some of the most challenging neurological disorders.
        </Typography>

        <Link href="/science">
          <a className={styles.scienceLink}>View Science</a>
        </Link>
      </Box>
    </>
  );
};

export default Home;
