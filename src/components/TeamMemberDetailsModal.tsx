import { Box, Dialog, DialogContent, Grid, Link, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import { TeamMember } from "../pages/team";

type Props = { isOpen: boolean; onClose: () => void; member: TeamMember | null };

const TeamMemberDetailsModal: React.FC<Props> = ({ isOpen, onClose, member }) => (
  <Dialog open={isOpen} onClose={onClose} maxWidth="md" scroll="paper">
    <DialogContent style={{ padding: 60 }}>
      <Box
        width="56px"
        height="56px"
        borderRadius={56 / 2}
        bgcolor="#F4F4F4"
        display="flex"
        alignItems="center"
        justifyContent="center"
        position="absolute"
        top={30}
        right={30}
        style={{ cursor: "pointer" }}
        onClick={onClose}
      >
        <Image src="/icons/close.svg" alt="close" width="16" height="16" />
      </Box>
      <Grid container spacing={2} rowSpacing={4}>
        <Grid item xs={12} md={4} display="flex" flexDirection="column" justifyContent="space-between">
          <Box style={{ width: 120, height: 120, borderRadius: 60, backgroundColor: "#F0F6FA", position: "relative" }}>
            {member?.photo && <Image src={member?.photo} layout="fill" alt={member?.name} />}
          </Box>

          <Typography fontSize="18px" fontWeight="600" mt="30px">
            {member?.name}
          </Typography>

          <Typography fontSize="18px" lineHeight="24.12px" mb="20px">
            {member?.position}
          </Typography>

          <Box display="flex" flexDirection="row" mb={3}>
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

        <Grid item xs={12} md={7}>
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
      </Grid>
    </DialogContent>
  </Dialog>
);

export default TeamMemberDetailsModal;
