import { Box, Grid, Link, Typography } from "@mui/material";
import type { NextPage } from "next";
import Image from "next/image";

type TeamMember = {
  name: string;
  position: string;
  strength: string;
  links: { twitter?: string; linkedin?: string };
};

const mockedTeamData: TeamMember[] = [
  {
    name: "Hugo Chrost",
    position: "Chief Executive Officer, Co-founder",
    strength: "Leadership",
    links: { twitter: "", linkedin: "" },
  },
  {
    name: "DR Michal Wlodarski",
    position: "Chief Operations Officer, Co-founder",
    strength: "Leadership",
    links: { twitter: "", linkedin: "" },
  },
  {
    name: "Marcin Zukowski",
    position: "Board Member",
    strength: "Leadership",
    links: { twitter: "", linkedin: "" },
  },
  {
    name: "Wojtek Walniczek",
    position: "OTB Ventures, Board Member ",
    strength: "Leadership",
    links: { linkedin: "" },
  },
];

const mockedInvestorsData = [
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
  const MemberListItem = ({ member }: { member: TeamMember }) => (
    <Box style={{ backgroundColor: "#fff", borderRadius: 12, height: 452, padding: "15%", maxWidth: 328, margin: "auto" }}>
      <Box style={{ width: 120, height: 120, borderRadius: 60, backgroundColor: "#F0F6FA" }} />

      <Typography fontSize="18px" fontWeight="600" mt="30px">
        {member.name}
      </Typography>

      <Typography fontSize="18px" mb="20px">
        {member.position}
      </Typography>

      <Box style={{ backgroundColor: "#FFEDED", padding: "5px 12px 5px 12px", width: 87, borderRadius: "1000px" }}>
        <Typography fontSize="12px">{member.strength}</Typography>
      </Box>

      <Box display="flex" flexDirection="row" alignItems="center" justifyContent="flex-start">
        <Link href="https://www.linkedin.com/" target="_blank" rel="noopener" underline="none" display="flex" flexDirection="row" alignItems="center">
          <Image src="/icons/linkedin-outlined.svg" alt="linkedin" width="23" height="23" />
          <Typography fontSize="14px" color="secondary.main" ml={1}>
            Linkedin
          </Typography>
        </Link>

        <Link href="https://twitter.com/" ml={5} target="_blank" rel="noopener" underline="none" display="flex" flexDirection="row" alignItems="center">
          <Image src="/icons/twitter-outlined.svg" alt="twitter" width="23" height="23" />
          <Typography fontSize="14px" color="secondary.main" ml={1}>
            Twitter
          </Typography>
        </Link>
      </Box>
    </Box>
  );

  return (
    <div
      style={{
        backgroundImage: "url('/icons/team-bg-blue.svg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Grid container paddingX={6.25}>
        <Grid item xs={12}>
          <Typography fontSize="92px" fontWeight="300" textAlign="center" mb={10}>
            Our Team
          </Typography>
          <Typography fontSize="42px" textAlign="center" mb={23.25}>
            Working together to overcome <br />
            neurological diseases.
          </Typography>
        </Grid>

        <Grid spacing={2} item container xs={12}>
          {mockedTeamData.map((member, idx) => (
            <Grid item xs={6} md={3} key={idx}>
              <MemberListItem member={member} />
            </Grid>
          ))}
        </Grid>

        <Grid item xs={12}>
          <Typography fontSize="21px" textAlign="center" mb="129px" mt="60px">
            and many more...
          </Typography>
        </Grid>

        <Grid item xs={12}>
          <Typography fontSize="42px" textAlign="center" mb="30px">
            We come from
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography fontSize="21px" textAlign="center" mb="60px">
            Our team members bring wealth of experience from the <br />
            world’s most innovative institutions and companies.
          </Typography>
        </Grid>

        <Grid item container xs={12} spacing={12} alignItems="center" justifyContent="center" mb="169px">
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

        <Grid item container xs={12} justifyContent="center" spacing={4}>
          <Grid item xs={12}>
            <Typography fontSize="30px" fontWeight="600" textAlign="center">
              Solvemed investors
            </Typography>
          </Grid>

          {mockedInvestorsData.map((investor) => (
            <Grid item key={investor.id}>
              <Image src={investor.image} alt={investor.id} width="129px" height="77px" />
            </Grid>
          ))}
        </Grid>

        <Grid item container xs={12} justifyContent="flex-end" mt="190px">
          <Grid item container xs={12} lg={6}>
            <Grid item xs={12}>
              <Typography fontSize="21px" fontWeight="600" mb="60px">
                About Solvemed
              </Typography>
              <Typography fontSize="42px" fontWeight="300">
                Solvemed champions digital-first care, where cutting-edge technology supports clinicians and empowers patients.
              </Typography>
            </Grid>

            <Grid item xs={6}>
              <Typography fontSize="144px" fontWeight="300">
                36
              </Typography>
              <Typography fontSize="18px" fontWeight="600">
                Number of emplyees
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography fontSize="144px" fontWeight="300">
                4
              </Typography>
              <Typography fontSize="18px" fontWeight="600">
                Number of PhDs
              </Typography>
            </Grid>

            <Grid item xs={6}>
              <Typography fontSize="144px" fontWeight="300">
                6
              </Typography>
              <Typography fontSize="18px" fontWeight="600">
                Number of MDs
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography fontSize="144px" fontWeight="300">
                9
              </Typography>
              <Typography fontSize="18px" fontWeight="600">
                Number of MBAs
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default Team;
