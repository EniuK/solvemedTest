import { Box, Dialog, DialogContent, DialogContentText, DialogTitle, Grid, Link, Typography } from "@mui/material";
import type { NextPage } from "next";
import Image from "next/image";

type TeamMember = {
  name: string;
  position: string;
  roles: string[];
  links: { twitter?: string; linkedin?: string };
};

const team: TeamMember[] = [
  {
    name: "Hugo Chrost",
    position: "Chief Executive Officer, Co-founder",
    roles: ["Leadership", "Board member"],
    links: { twitter: "", linkedin: "" },
  },
  {
    name: "DR Michal Wlodarski",
    position: "Chief Operations Officer, Co-founder",
    roles: ["Leadership", "Board member"],
    links: { twitter: "", linkedin: "" },
  },
  {
    name: "Marcin Zukowski",
    position: "Board Member",
    roles: ["Leadership", "Board member"],
    links: { twitter: "", linkedin: "" },
  },
  {
    name: "Wojtek Walniczek",
    position: "OTB Ventures, Board Member",
    roles: ["Leadership", "Board member"],
    links: { linkedin: "" },
  },
  {
    name: "Dr Marcus Erken",
    position: "Partner at Sunfish Partners",
    roles: ["Leadership", "Board member"],
    links: { linkedin: "" },
  },
  {
    name: "Dominik Andrzejczuk",
    position: "Partner at Atmos Ventures",
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
  const MemberListItem = ({ member }: { member: TeamMember }) => (
    <Box
      style={{
        backgroundColor: "#fff",
        border: "1px solid black",
        borderRadius: 12,
        height: 452,
        padding: "60px 30px 30px 50px",
        maxWidth: 328,
        margin: "auto",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Box style={{ width: 120, height: 120, borderRadius: 60, backgroundColor: "#F0F6FA" }} />

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
      <Grid container>
        <Grid item xs={12}>
          <Typography variant="h3" textAlign="center" mb={10}>
            Our People
          </Typography>
          <Typography variant="h4" textAlign="center" mb={23.25}>
            Working together to overcome <br />
            neurological diseases.
          </Typography>
        </Grid>

        <Grid item container xs={12} rowSpacing={1.25} columnSpacing={1.25}>
          {team.map((member, idx) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={idx}>
              <MemberListItem member={member} />
            </Grid>
          ))}
          <Grid item xs={12} sm={6} md={4} lg={3} mt={{ xs: 2, sm: 0 }} display="flex" justifyContent="center" flexDirection="column">
            <Typography fontSize="21px" textAlign="center">
              and many more...
            </Typography>
          </Grid>
        </Grid>

        <Grid item xs={12} mt="214px" textAlign="center">
          <Typography fontSize="42px" fontWeight="300" mb="30px">
            We come from
          </Typography>
        </Grid>
        <Grid item xs={12} textAlign="center">
          <Typography fontSize="21px" lineHeight="25.2px" mb="60px" width="50%" mx="auto">
            Our team members bring wealth of experience from the world’s most innovative institutions and companies.
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

          {investors.map((investor) => (
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

      <Dialog open={false} onClose={() => {}} maxWidth="md" scroll="paper">
        <DialogContent>
          <Grid container columns={12}>
            <Grid item xs={4}>
              <Box style={{ width: 120, height: 120, borderRadius: 60, backgroundColor: "#F0F6FA" }} />

              <Typography fontSize="18px" fontWeight="600" mt="30px">
                Hugo Chrost
              </Typography>

              <Typography fontSize="18px" lineHeight="24.12px" mb="20px">
                Chief Executive Officer, Co-founder
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
            </Grid>

            <Grid item xs={7}>
              <Typography fontSize="30px" lineHeight="33px" fontWeight="300" mb="30px">
                Cambridge JBS, University Collage London, 500 Global, Harvard Ventures, Kairos Society
              </Typography>
              <Typography fontSize="16px" lineHeight="21.6px" mb={3}>
                Hugo is the founder & CEO of Solvemed Group which develops proprietary ocular biomarkers to revolutionise neurology care and drug development. He is also a Venture
                Partner at 500 Global.
              </Typography>
              <Typography fontSize="16px" lineHeight="21.6px">
                His passion for leadership and bridging science to business brings him to frequently shares his experience as a keynote speaker and guest lecturer at the University
                College London, University of Warsaw, and international conferences.
              </Typography>
            </Grid>

            <Grid item xs={1} container justifyContent="flex-end">
              <Box width="56px" height="56px" borderRadius={56 / 2} bgcolor="#F4F4F4" display="flex" alignItems="center" justifyContent="center">
                <Image src="/icons/close.svg" alt="close" width="16" height="16" />
              </Box>
            </Grid>
          </Grid>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Team;
