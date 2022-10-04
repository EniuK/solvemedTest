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
    roles: [
      { title: "Board member", color: "#F4EDFD" },
    ],
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
    roles: [
      { title: "Board member", color: "#F4EDFD" },
    ],
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
    roles: [
      { title: "Board member", color: "#F4EDFD" },
    ],
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
    roles: [
      { title: "Board member", color: "#F4EDFD" },
    ],
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
  { id: "atmos", image: "/icons/atmos-logo.svg" },
  { id: "apex", image: "/icons/apex-logo.svg" },
  { id: "sunfish", image: "/icons/sunfish-logo.svg" },
  { id: "tensorVentures", image: "/icons/tensor-ventures-logo.svg" },
  { id: "prefaceVentures", image: "/icons/preface-ventures-logo.svg" },
  { id: "techniVentures", image: "/icons/techni-ventures-logo.svg" },
  { id: "atomico", image: "/icons/atomico-logo.svg" },
  { id: "cambridgeAngels", image: "/icons/cambridge-angels-logo.svg" },
];

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
          <meta name="description" content="Decoding neurology. In the blink of AI. Solvemed is a VC-backed Neuroscience AI company working to redefine neurology care and drug development. With neurodegenerative diseases (dementias) as the primary focus area, Solvemed leverages its proprietary machine learning technology to develop first-in-class digital biomarkers to support development of neurological drugs and establish affordable clinical examination and remote monitoring tools." />
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
            <Grid item xs={12} sm={6} md={4} lg={3} key={idx}>
              <MemberListItem member={{ ...member, memberIndex: idx }} />
            </Grid>
          ))}

          <Grid item xs={12} sm={6} md={4} lg={3} mt={{ xs: 2, sm: 0 }} display="flex" justifyContent="center" flexDirection="column">
            <Typography variant="body1" textAlign="center">
              and many more...
            </Typography>
          </Grid>
        </Grid>

        <Typography variant="subtitle1" mb="30px" textAlign="center">
          We come from
        </Typography>

        <Typography variant="body1" mb="60px" width={{ xs: "100%", md: "40%" }} mx="auto" textAlign="center">
          Our team members bring wealth of experience from the world’s most innovative institutions and companies.
        </Typography>

        <Grid container alignItems="center" justifyContent="space-evenly" mb="169px" spacing={2}>
          <Grid item>
            <Image src="/icons/harvard-logo.svg" alt="harvard" width="126" height="30" />
          </Grid>
          <Grid item>
            <Image src="/icons/cambridge-logo.svg" alt="cambridge" width="113" height="23" />
          </Grid>
          <Grid item>
            <Image src="/icons/imperial-college-logo.svg" alt="imperial college" width="107" height="27" />
          </Grid>
          <Grid item>
            <Image src="/icons/ucl-logo.svg" alt="ucl" width="107" height="41" />
          </Grid>
          <Grid item>
            <Image src="/icons/stanford-logo.svg" alt="stanford" width="103" height="33" />
          </Grid>
        </Grid>

        <Box position="relative">
          <picture>
            <source srcSet="/images/pink3.svg" type="image/svg+xml" />
            <img src="/images/pink3.svg" alt="Background pink" className={styles.bg2} />
          </picture>

          <Typography variant="subtitle3" textAlign="center" mb="60px">
            Solvemed investors
          </Typography>

          <Grid container justifyContent="space-evenly" position="relative" spacing={2}>
            {investors.map((investor) => (
              <Grid item key={investor.id}>
                <Image src={investor.image} alt={investor.id} width="129px" height="77px" />
              </Grid>
            ))}
          </Grid>
        </Box>

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
            <Grid item xs={12}>
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

        {!!memberDetails && <TeamMemberModal isOpen={!!memberDetails} onClose={() => setMemberDetails(null)} member={memberDetails} members={team} />}
      </div>
    </>
  );
};

export default Team;
