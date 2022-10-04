import { Box, Grid, Link, Typography } from "@mui/material";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import { useParallax } from "react-scroll-parallax";
import TeamMemberModal from "../components/TeamMemberModal/TeamMemberModal";
import styles from "./team.module.css";

export type TeamMember = {
  name: string;
  position: string;
  photo: string;
  roles: { title: string; color: string }[];
  linkedinUrl: string | null;
  twitterUrl: string | null;
  bio: { title: string; description: string };
  memberIndex?: number;
};

const team: TeamMember[] = [
  {
    name: "Hugo Chrost",
    position: "Chief Executive Officer, Co-founder",
    photo: "/images/Hugo Chrost.png",
    roles: [
      { title: "Leadership", color: "#ffeded" },
      { title: "Board member", color: "#F4EDFD" },
    ],
    linkedinUrl: "https://www.linkedin.com/in/chrosthugo/",
    twitterUrl: null,
    bio: {
      title: "Cambridge JBS, University Collage London, 500 Global, Harvard Ventures, Kairos Society",
      description:
        "Hugo is the founder & CEO of Solvemed Group which develops proprietary ocular biomarkers to revolutionise neurology care and drug development. He is also a Venture Partner at 500 Global. His passion for leadership and bridging science to business brings him to frequently shares his experience as a keynote speaker and guest lecturer at the University College London, University of Warsaw, and international conferences. Hugo is the founder & CEO of Solvemed Group which develops proprietary ocular biomarkers to revolutionise neurology care and drug development. He is also a Venture Partner at 500 Global. His passion for leadership and bridging science to business brings him to frequently shares his experience as a keynote speaker and guest lecturer at the University College London, University of Warsaw, and international conferences. Hugo is the founder & CEO of Solvemed Group which develops proprietary ocular biomarkers to revolutionise neurology care and drug development. He is also a Venture Partner at 500 Global. His passion for leadership and bridging science to business brings him to frequently shares his experience as a keynote speaker and guest lecturer at the University College London, University of Warsaw, and international conferences. Hugo is the founder & CEO of Solvemed Group which develops proprietary ocular biomarkers to revolutionise neurology care and drug development. He is also a Venture Partner at 500 Global. His passion for leadership and bridging science to business brings him to frequently shares his experience as a keynote speaker and guest lecturer at the University College London, University of Warsaw, and international conferences. Hugo is the founder & CEO of Solvemed Group which develops proprietary ocular biomarkers to revolutionise neurology care and drug development. He is also a Venture Partner at 500 Global. His passion for leadership and bridging science to business brings him to frequently shares his experience as a keynote speaker and guest lecturer at the University College London, University of Warsaw, and international conferences. Hugo is the founder & CEO of Solvemed Group which develops proprietary ocular biomarkers to revolutionise neurology care and drug development. He is also a Venture Partner at 500 Global. His passion for leadership and bridging science to business brings him to frequently shares his experience as a keynote speaker and guest lecturer at the University College London, University of Warsaw, and international conferences.",
    },
  },
  {
    name: "Dr Michal Wlodarski",
    position: "Chief Operations Officer, Co-founder",
    photo: "/images/Michaê Wlodarski.png",
    roles: [
      { title: "Leadership", color: "#ffeded" },
      { title: "Board member", color: "#F4EDFD" },
    ],
    linkedinUrl: "https://www.linkedin.com/in/mwlodarski/",
    twitterUrl: null,
    bio: {
      title: "Cambridge JBS, University Collage London, 500 Global, Harvard Ventures, Kairos Society",
      description:
        "Hugo is the founder & CEO of Solvemed Group which develops proprietary ocular biomarkers to revolutionise neurology care and drug development. He is also a Venture Partner at 500 Global. His passion for leadership and bridging science to business brings him to frequently shares his experience as a keynote speaker and guest lecturer at the University College London, University of Warsaw, and international conferences.",
    },
  },
  {
    name: "Marcin Zukowski",
    position: "Board Member, Co-founder at Snowflake",
    photo: "/images/Marcin Zukowski.png",
    roles: [{ title: "Board member", color: "#F4EDFD" }],
    linkedinUrl: null,
    twitterUrl: null,
    bio: {
      title: "Cambridge JBS, University Collage London, 500 Global, Harvard Ventures, Kairos Society",
      description:
        "Hugo is the founder & CEO of Solvemed Group which develops proprietary ocular biomarkers to revolutionise neurology care and drug development. He is also a Venture Partner at 500 Global. His passion for leadership and bridging science to business brings him to frequently shares his experience as a keynote speaker and guest lecturer at the University College London, University of Warsaw, and international conferences.",
    },
  },
  {
    name: "Wojtek Walniczek",
    position: "Board Member, Investment Director at OTB Ventures",
    photo: "/images/Wojtek Walniczek.png",
    roles: [{ title: "Board member", color: "#F4EDFD" }],
    linkedinUrl: "https://www.linkedin.com/in/wojtekwalniczek/",
    twitterUrl: null,
    bio: {
      title: "Cambridge JBS, University Collage London, 500 Global, Harvard Ventures, Kairos Society",
      description:
        "Hugo is the founder & CEO of Solvemed Group which develops proprietary ocular biomarkers to revolutionise neurology care and drug development. He is also a Venture Partner at 500 Global. His passion for leadership and bridging science to business brings him to frequently shares his experience as a keynote speaker and guest lecturer at the University College London, University of Warsaw, and international conferences.",
    },
  },
  {
    name: "Dr Marcus Erken",
    position: "Board Member, Founding Partner",
    photo: "/images/Dr Marcus Erken.png",
    roles: [{ title: "Board member", color: "#F4EDFD" }],
    linkedinUrl: "https://www.linkedin.com/in/erken/",
    twitterUrl: null,
    bio: {
      title: "Cambridge JBS, University Collage London, 500 Global, Harvard Ventures, Kairos Society",
      description:
        "Hugo is the founder & CEO of Solvemed Group which develops proprietary ocular biomarkers to revolutionise neurology care and drug development. He is also a Venture Partner at 500 Global. His passion for leadership and bridging science to business brings him to frequently shares his experience as a keynote speaker and guest lecturer at the University College London, University of Warsaw, and international conferences.",
    },
  },
  {
    name: "Dominik Andrzejczuk",
    position: "Board Member, Managing Partner",
    photo: "/images/Dominik Andrzejczuk.png",
    roles: [{ title: "Board member", color: "#F4EDFD" }],
    linkedinUrl: "https://www.linkedin.com/in/dominikand/",
    twitterUrl: null,
    bio: {
      title: "Cambridge JBS, University Collage London, 500 Global, Harvard Ventures, Kairos Society",
      description:
        "Hugo is the founder & CEO of Solvemed Group which develops proprietary ocular biomarkers to revolutionise neurology care and drug development. He is also a Venture Partner at 500 Global. His passion for leadership and bridging science to business brings him to frequently shares his experience as a keynote speaker and guest lecturer at the University College London, University of Warsaw, and international conferences.",
    },
  },
];

const investors = [
  { id: "atmos", image: "/images/logos/investors/atmos.png" },
  { id: "apex ventures", image: "/images/logos/investors/apex_ventures.png" },
  { id: "sunfish partners", image: "/images/logos/investors/sunfish_partners.png" },
  { id: "tensor ventures", image: "/images/logos/investors/tensor_ventures.png" },
  { id: "preface ventures", image: "/images/logos/investors/preface_ventures.png" },
  { id: "techni ventures", image: "/images/logos/investors/techni_ventures.png" },
  { id: "atomico", image: "/images/logos/investors/atomico.png" },
  { id: "cambridge angels", image: "/images/logos/investors/cambridge_angels.png" },
];

const weComeFrom = [
  { id: "harvard university", image: "/images/logos/we come from/harvard_university.png" },
  { id: "university of cambridge", image: "/images/logos/we come from/university_of_cambridge.png" },
  { id: "imperial college london", image: "/images/logos/we come from/imperial_college_london.png" },
  { id: "ucl", image: "/images/logos/we come from/ucl.png" },
  { id: "stanford university", image: "/images/logos/we come from/stanford_university.png" },
  { id: "snowflake", image: "/images/logos/we come from/snowflake.png" },
  { id: "nasa", image: "/images/logos/we come from/nasa.png" },
  { id: "glaxo smith kline", image: "/images/logos/we come from/glaxo_smith_kline.png" },
  { id: "nference", image: "/images/logos/we come from/nference.png" },
  { id: "mit", image: "/images/logos/we come from/mit.png" },
  { id: "oxford", image: "/images/logos/we come from/oxford.png" },
  { id: "nvidia", image: "/images/logos/we come from/nvidia.png" },
  { id: "mckinsey company", image: "/images/logos/we come from/mckinsey_company.png" },
  { id: "owkin", image: "/images/logos/we come from/owkin.png" },
  { id: "viz ai", image: "/images/logos/we come from/viz_ai.png" },
  { id: "huawei", image: "/images/logos/we come from/huawei.png" },
  { id: "quest diagnostic", image: "/images/logos/we come from/quest_diagnostic.png" },
  { id: "500", image: "/images/logos/we come from/500.png" },
  { id: "icon", image: "/images/logos/we come from/icon.png" },
  { id: "the university of hong kong", image: "/images/logos/we come from/the_university_of_hong_kong.png" },
  { id: "google", image: "/images/logos/we come from/google.png" },
  { id: "cerebras", image: "/images/logos/we come from/cerebras.png" },
  { id: "microsoft", image: "/images/logos/we come from/microsoft.png" },
  { id: "jonhson & johnson", image: "/images/logos/we come from/johnson_johnson.png" },
  { id: "novartis", image: "/images/logos/we come from/novartis.png" },
]

const Team: NextPage = () => {
  const parallax = useParallax<HTMLDivElement>({ speed: -20 });
  const [memberDetails, setMemberDetails] = useState<TeamMember | null>(null);

  const MemberListItem = ({ member }: { member: TeamMember }) => (
    <Box bgcolor="#fff" borderRadius="12px" height={452} maxWidth={328} marginX="auto" display="flex" flexDirection="column" p="60px 30px 30px 50px">
      <Box style={{ width: 120, height: 120, borderRadius: 60, backgroundColor: "#F0F6FA", position: "relative" }}>
        <Image style={{ borderRadius: 60 }} src={member.photo} layout="fill" alt={member.name} />
      </Box>

      <Typography variant="body2Wide" fontWeight="600" mt="30px">
        {member.name}
      </Typography>

      <Typography variant="body2Wide" mb="20px">
        {member.position}
      </Typography>

      <Box display="flex" flexDirection="row">
        {member.roles.map((role, idx) => (
          <Box key={`${role.title}_${idx}`} style={{ backgroundColor: role.color, padding: "5px 12px 5px 12px", width: "fit-content", borderRadius: "1000px" }} mr={1}>
            <Typography variant="body6">{role.title}</Typography>
          </Box>
        ))}
      </Box>

      <Box display="flex" flexDirection="row" alignItems="center" justifyContent="flex-start" mt="auto">
        {member.linkedinUrl && (
          <Link href={member.linkedinUrl} target="_blank" rel="noopener" underline="none" display="flex" flexDirection="row" alignItems="center">
            <Image src="/icons/linkedin-outlined.svg" alt="linkedin" width="23" height="23" />
            <Typography variant="body4Wide" color="secondary.main" ml={1}>
              Linkedin
            </Typography>
          </Link>
        )}

        {member.twitterUrl && (
          <Link href={member.twitterUrl} ml={1} target="_blank" rel="noopener" underline="none" display="flex" flexDirection="row" alignItems="center">
            <Image src="/icons/twitter-outlined.svg" alt="twitter" width="23" height="23" />
            <Typography variant="body4Wide" color="secondary.main" ml={1}>
              Twitter
            </Typography>
          </Link>
        )}
      </Box>
    </Box>
  );

  return (
    <>
      <div>
        <Head>
          <title>Solvemed Team</title>
          <meta property="og:title" content="Solvemed Team" />
          <meta property="og:type" content="website" />
          <meta
            name="description"
            content="Decoding neurology. In the blink of AI. Solvemed is a VC-backed Neuroscience AI company working to redefine neurology care and drug development. With neurodegenerative diseases (dementias) as the primary focus area, Solvemed leverages its proprietary machine learning technology to develop first-in-class digital biomarkers to support development of neurological drugs and establish affordable clinical examination and remote monitoring tools."
          />
        </Head>
      </div>
      <div>
        <Typography variant="h3" mb={10} textAlign="center">
          Our People
        </Typography>
        <Typography variant="subtitle1" mb={23.25} textAlign="center">
          Working together to overcome <br />
          neurological diseases.
        </Typography>

        <Grid container rowSpacing={1.25} columnSpacing={1.25} mb="214px" position="relative">
          <picture>
            <source srcSet="/images/blue4.svg" type="image/svg+xml" />
            <img src="/images/blue4.svg" alt="Background blue" className={styles.bg} />
          </picture>

          {team.map((member, idx) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={idx} zIndex={1}>
              <MemberListItem member={{ ...member, memberIndex: idx }} />
            </Grid>
          ))}

          <Grid item xs={12} sm={6} md={4} lg={3} mt={{ xs: 2, sm: 0 }} display="flex" justifyContent="center" flexDirection="column" zIndex={1}>
            <Typography variant="body1" textAlign="center">
              and many more...
            </Typography>
          </Grid>
        </Grid>

        <Grid container justifyContent="flex-end" mt="190px" position="relative">
          <Grid item xs={12} md={6} position="relative">
            <div ref={parallax.ref}>
              <picture>
                <source srcSet="/images/brain2.png" type="image/svg+xml" />
                <img src="/images/brain2.png" alt="Brain" className={styles.brainImg} />
              </picture>
            </div>

            <picture>
              <source srcSet="/images/green4.svg" type="image/svg+xml" />
              <img src="/images/green4.svg" alt="Background green" className={styles.bg4} />
            </picture>

            <picture>
              <source srcSet="/images/green3.svg" type="image/svg+xml" />
              <img src="/images/green3.svg" alt="Background green" className={styles.bg3} />
            </picture>
          </Grid>

          <Grid item container xs={12} md={6} marginTop={{ xs: 16, md: 0 }}>
            <Grid item xs={12} zIndex={1}>
              <Typography variant="body1" fontWeight="600" mb="60px">
                About Solvemed
              </Typography>
              <Typography variant="subtitle1" mb="116px">
                Solvemed champions digital-first care, where cutting-edge technology supports clinicians and empowers patients.
              </Typography>
            </Grid>

            <Grid item xs={12} container spacing={4} textAlign={{ xs: "center", sm: "left" }}>
              <Grid item xs={12} sm={6}>
                <Typography fontSize="144px" lineHeight="138.24px" fontWeight="300">
                  40+
                </Typography>
                <Typography variant="body2" fontWeight="600">
                  People
                </Typography>
              </Grid>

              <Grid item xs={12} sm={6}>
                <Typography fontSize="144px" lineHeight="138.24px" fontWeight="300">
                  8
                </Typography>
                <Typography variant="body2" fontWeight="600">
                  PhDs
                </Typography>
              </Grid>

              <Grid item xs={12} sm={6}>
                <Typography fontSize="144px" lineHeight="138.24px" fontWeight="300">
                  10
                </Typography>
                <Typography variant="body2" fontWeight="600">
                  MDs
                </Typography>
              </Grid>

              <Grid item xs={12} sm={6}>
                <Typography fontSize="144px" lineHeight="138.24px" fontWeight="300">
                  2
                </Typography>
                <Typography variant="body2" fontWeight="600">
                  MBAs
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>

        <Typography variant="subtitle1" mb="30px" textAlign="center" mt="190px">
          We come from
        </Typography>

        <Typography variant="body1" mb="60px" width={{ xs: "100%", md: "40%" }} mx="auto" textAlign="center">
          Our team members bring wealth of experience from the world’s most innovative institutions and companies.
        </Typography>

        <Grid container justifyContent="space-between" alignItems="center" xs={12} spacing={10}   >
          {weComeFrom.map((item) => (
            <Grid item key={item.id} position="relative">
              <Box marginBottom={-5} marginRight={2} marginLeft={2}>
                <Image src={item.image} alt={item.id} width={120} height={40} layout="fixed" objectFit="scale-down" />
              </Box>
            </Grid>
          ))}
        </Grid>

        <Box position="relative">
          <picture>
            <source srcSet="/images/pink3.svg" type="image/svg+xml" />
            <img src="/images/pink3.svg" alt="Background pink" className={styles.bg2} />
          </picture>

          <Typography variant="subtitle3" textAlign="center" mb="60px" marginTop={20}>
            Solvemed investors
          </Typography>

          <Grid container justifyContent="space-between" xs={12} style={{ margin: "0 auto" }}  >
            {investors.map((item) => (
              <Grid item key={item.id} position="relative">
                <Box marginBottom={0} width={160} height={40}>
                  <Image src={item.image} alt={item.id} layout="fill" objectFit="scale-down" />
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>

        {!!memberDetails && <TeamMemberModal isOpen={!!memberDetails} onClose={() => setMemberDetails(null)} member={memberDetails} members={team} />}
      </div>
    </>
  );
};

export default Team;
