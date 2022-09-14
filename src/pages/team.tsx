import { Box, Grid, Link, Typography } from "@mui/material";
import type { NextPage } from "next";
import Image from "next/image";
import { useState } from "react";
import { useParallax } from "react-scroll-parallax";
import TeamMemberDetailsModal from "../components/TeamMemberDetailsModal";
import styles from "./team.module.css";

export type TeamMember = {
  name: string;
  position: string;
  photo: string;
  roles: string[];
  links: { twitter?: string; linkedin?: string };
};

const team: TeamMember[] = [
  {
    name: "Hugo Chrost",
    position: "Chief Executive Officer, Co-founder",
    photo: "/images/team1.png",
    roles: ["Leadership", "Board member"],
    links: { twitter: "", linkedin: "" },
  },
  {
    name: "DR Michal Wlodarski",
    position: "Chief Operations Officer, Co-founder",
    photo: "/images/team2.png",
    roles: ["Leadership", "Board member"],
    links: { twitter: "", linkedin: "" },
  },
  {
    name: "Marcin Zukowski",
    position: "Board Member",
    photo: "/images/team3.png",
    roles: ["Leadership", "Board member"],
    links: { twitter: "", linkedin: "" },
  },
  {
    name: "Wojtek Walniczek",
    position: "OTB Ventures, Board Member",
    photo: "/images/team1.png",
    roles: ["Leadership", "Board member"],
    links: { linkedin: "" },
  },
  {
    name: "Dr Marcus Erken",
    position: "Partner at Sunfish Partners",
    photo: "/images/team2.png",
    roles: ["Leadership", "Board member"],
    links: { linkedin: "" },
  },
  {
    name: "Dominik Andrzejczuk",
    position: "Partner at Atmos Ventures",
    photo: "/images/team3.png",
    roles: ["Leadership", "Board member"],
    links: { twitter: "" },
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
    <Box
      onClick={() => setMemberDetails(member)}
      style={{
        backgroundColor: "#fff",
        borderRadius: 12,
        height: 452,
        padding: "60px 30px 30px 50px",
        maxWidth: 328,
        margin: "auto",
        display: "flex",
        flexDirection: "column",
        cursor: "pointer",
      }}
    >
      <Box style={{ width: 120, height: 120, borderRadius: 60, backgroundColor: "#F0F6FA", position: "relative" }}>
        <Image src={member.photo} layout="fill" alt={member.name} />
      </Box>

      <Typography fontSize="18px" fontWeight="600" mt="30px">
        {member.name}
      </Typography>

      <Typography fontSize="18px" lineHeight="24.12px" mb="20px">
        {member.position}
      </Typography>

      <Box display="flex" flexDirection="row">
        <Box style={{ backgroundColor: "#FFEDED", padding: "5px 12px 5px 12px", width: "fit-content", borderRadius: "1000px" }} mr={1}>
          <Typography fontSize="12px">Leadership</Typography>
        </Box>

        <Box style={{ backgroundColor: "#F4EDFD", padding: "5px 12px 5px 12px", width: "fit-content", borderRadius: "1000px" }}>
          <Typography fontSize="12px">Board member</Typography>
        </Box>
      </Box>

      <Box display="flex" flexDirection="row" alignItems="center" justifyContent="flex-start" mt="auto">
        <Link href="https://www.linkedin.com/" target="_blank" rel="noopener" underline="none" display="flex" flexDirection="row" alignItems="center">
          <Image src="/icons/linkedin-outlined.svg" alt="linkedin" width="23" height="23" />
          <Typography fontSize="14px" color="secondary.main" ml={1}>
            Linkedin
          </Typography>
        </Link>

        <Link href="https://twitter.com/" ml={1} target="_blank" rel="noopener" underline="none" display="flex" flexDirection="row" alignItems="center">
          <Image src="/icons/twitter-outlined.svg" alt="twitter" width="23" height="23" />
          <Typography fontSize="14px" color="secondary.main" ml={1}>
            Twitter
          </Typography>
        </Link>
      </Box>
    </Box>
  );

  return (
    <div>
      <Typography variant="h3" mb={10} textAlign="center">
        Our People
      </Typography>
      <Typography variant="h4" mb={23.25} textAlign="center">
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
            <MemberListItem member={member} />
          </Grid>
        ))}

        <Grid item xs={12} sm={6} md={4} lg={3} mt={{ xs: 2, sm: 0 }} display="flex" justifyContent="center" flexDirection="column">
          <Typography variant="body1" textAlign="center">
            and many more...
          </Typography>
        </Grid>
      </Grid>

      <Typography variant="h4" mb="30px" textAlign="center">
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

        <Typography variant="h5" textAlign="center" mb="60px">
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
            <Typography variant="h4" mb="116px">
              Solvemed champions digital-first care, where cutting-edge technology supports clinicians and empowers patients.
            </Typography>
          </Grid>

          <Grid item xs={12} container spacing={4} textAlign={{ xs: "center", sm: "left" }}>
            <Grid item xs={12} sm={6}>
              <Typography fontSize="144px" lineHeight="138.24px" fontWeight="300">
                40+
              </Typography>
              <Typography fontSize="18px" fontWeight="600">
                People
              </Typography>
            </Grid>

            <Grid item xs={12} sm={6}>
              <Typography fontSize="144px" lineHeight="138.24px" fontWeight="300">
                8
              </Typography>
              <Typography fontSize="18px" fontWeight="600">
                PhDs
              </Typography>
            </Grid>

            <Grid item xs={12} sm={6}>
              <Typography fontSize="144px" lineHeight="138.24px" fontWeight="300">
                10
              </Typography>
              <Typography fontSize="18px" fontWeight="600">
                MDs
              </Typography>
            </Grid>

            <Grid item xs={12} sm={6}>
              <Typography fontSize="144px" lineHeight="138.24px" fontWeight="300">
                2
              </Typography>
              <Typography fontSize="18px" fontWeight="600">
                MBAs
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      <TeamMemberDetailsModal isOpen={!!memberDetails} onClose={() => setMemberDetails(null)} member={memberDetails} />
    </div>
  );
};

export default Team;
