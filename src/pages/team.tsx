import { Box, Grid, Link, Typography, useMediaQuery } from "@mui/material";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import React, { useEffect } from "react";
import { useState } from "react";
import TeamMemberModal from "../components/TeamMemberModal/TeamMemberModal";
import { motion } from "framer-motion";
import { theme } from "../config/theme";
import AOS from "aos";
import "aos/dist/aos.css";

export type TeamMember = {
  name: string;
  position: string;
  photo: string;
  roles: { title: string; color: string }[];
  linkedinUrl: string | null;
  twitterUrl: string | null;
  bio?: { title: string; description: string };
  memberIndex?: number;
  logos?: { id: string; image: string }[];
};

const team: TeamMember[] = [
  {
    name: "Hugo Chrost",
    position: "Chief Executive Officer, Co-founder",
    photo: "/images/HugoChrost.png",
    roles: [{ title: "Leadership", color: "#ffeded" }],
    linkedinUrl: "https://www.linkedin.com/in/chrosthugo/",
    twitterUrl: "https://twitter.com/chrost_hugo",
    bio: {
      title: "Cambridge JBS, University Collage London, 500 Global, Harvard Ventures, Kairos Society",
      description:
        "Hugo is the Co-founder and Chief Executive Officer at Solvemed Group. He leads all company divisions toward developing novel medical devices and advances the company's neuro-ocular biomarker pipeline to improve the patient care of over 1 billion people worldwide. Hugo has been recognized multiple times by top media, such as Forbes, as one of Europe's most influential healthcare leaders under 30. He became one of the youngest European inventors awarded the prestigious Harvard University & Harvard Club of Poland scholarship \"Path to Harvard.\" At the age of seventeen, he was accepted to the Cambridge University Business division (CJBS) Ignite Life Science Program as the youngest in university history. He is a Venture Partner at 500Global, a venture capital firm with >$2.8 billion in assets under management. His passion for leadership and bridging science to business brings him to frequently share his experiences as a keynote speaker and guest lecturer at the University College London, the University of Warsaw, and international conferences. He has shared the stage with people like the Co-founder of Wikipedia, Jimmy Wales, or legendary Prof. Richard B Freeman, chair of Economics at Harvard University.",
    },
    logos: [
      { id: "university of cambridge, judge business school", image: "/images/logos/we_come_from/cambridge_judge_business_school.png" },
      { id: "harvard ventures", image: "/images/logos/we_come_from/harvard_ventures.png" },
    ],
  },
  {
    name: "Dr Michal Wlodarski",
    position: "Chief Operating Officer, Co-founder",
    photo: "/images/MichaeWlodarski.png",
    roles: [{ title: "Leadership", color: "#ffeded" }],
    linkedinUrl: "https://www.linkedin.com/in/mwlodarski/",
    twitterUrl: null,
    bio: {
      title: "GlaxoSmithKline, NHS England, University of Cambridge, University College London, IE Business School",
      description:
        "Michal is a Co-founder & Chief Operating Officer at Solvemed, where he leads specialised world-class teams to bring cutting-edge digital products into clinical care and neuroscience research. Trained as a scientist, with a PhD in biological sciences from the University of Cambridge, his decade-long career in healthcare and life sciences has included research and commercial posts at GlaxoSmithKline, National Health Service England, among others. As an Honorary Lecturer at the University College London’s Institute of Ophthalmology and the School of Management, he trains Masters-level students in healthcare technology innovation. More recently, he has been appointed as an Adj. Professor at the IE Business School in Madrid, where he shares his experience in entrepreneurship and emerging technologies to help raise next generations of venture builders. Michal is passionate about patient-centric care and drug development innovation, and frequently shares his perspectives as a speaker at international conferences.",
    },
    logos: [
      { id: "glaxo smith kline", image: "/images/logos/we_come_from/glaxo_smith_kline.png" },
      {
        id: "university of cambridge",
        image: "/images/logos/we_come_from/university_of_cambridge.png",
      },
      {
        id: "imperial college london",
        image: "/images/logos/we_come_from/imperial_college_london.png",
      },
    ],
  },
  {
    name: "Marcin Zukowski",
    position: "Board Member",
    photo: "/images/MarcinZukowski.png",
    roles: [{ title: "Board member", color: "#F4EDFD" }],
    linkedinUrl: "https://www.linkedin.com/in/marcinzukowski/",
    twitterUrl: null,
  },
  {
    name: "Wojtek Walniczek",
    position: "OTB Ventures Board Member",
    photo: "/images/WojtekWalniczek.png",
    roles: [{ title: "Leadership", color: "#ffeded" }],
    linkedinUrl: "https://www.linkedin.com/in/wojtekwalniczek/",
    twitterUrl: null,
  },
  {
    name: "Dr Marcus Erken",
    position: "Board Member",
    photo: "/images/DrMarcusErken.png",
    roles: [{ title: "Leadership", color: "#ffeded" }],
    linkedinUrl: "https://www.linkedin.com/in/erken/",
    twitterUrl: null,
  },
  {
    name: "Dominik Andrzejczuk",
    position: "Board Member",
    photo: "/images/DominikAndrzejczuk.png",
    roles: [{ title: "Leadership", color: "#ffeded" }],
    linkedinUrl: "https://www.linkedin.com/in/dominikand/",
    twitterUrl: null,
  },
];

const investors = [
  { id: "atmos", image: "/images/logos/investors/atmos.png", width: 95.69, height: 19.14 },
  { id: "apex ventures", image: "/images/logos/investors/apex_ventures.png", width: 82.38, height: 76.55 },
  { id: "sunfish partners", image: "/images/logos/investors/sunfish_partners.png", width: 96.52, height: 25.79 },
  { id: "tensor ventures", image: "/images/logos/investors/tensor_ventures.png", width: 128.97, height: 12.83 },
  { id: "preface ventures", image: "/images/logos/investors/preface_ventures.png", width: 59, height: 59 },
  { id: "techni ventures", image: "/images/logos/investors/techni_ventures.png", width: 100.68, height: 27.75 },
  { id: "atomico", image: "/images/logos/investors/atomico.png", width: 115.66, height: 22.74 },
  { id: "cambridge angels", image: "/images/logos/investors/cambridge_angels.png", width: 93.02, height: 39.11 },
];

const weComeFrom = [
  { id: "harvard university", image: "/images/logos/we_come_from/harvard_university.png", width: 126.37, height: 29.49 },
  { id: "university of cambridge", image: "/images/logos/we_come_from/university_of_cambridge.png", width: 113.73, height: 23.17 },
  { id: "imperial college london", image: "/images/logos/we_come_from/imperial_college_london.png", width: 107.41, height: 27.38 },
  { id: "ucl", image: "/images/logos/we_come_from/ucl.png", width: 107.41, height: 31.59 },
  { id: "stanford university", image: "/images/logos/we_come_from/stanford_university.png", width: 103.2, height: 33.7 },
  { id: "snowflake", image: "/images/logos/we_come_from/snowflake.png", width: 136, height: 53 },
  { id: "nasa", image: "/images/logos/we_come_from/nasa.png", width: 94.78, height: 27.38 },
  { id: "glaxo smith kline", image: "/images/logos/we_come_from/glaxo_smith_kline.png", width: 113.73, height: 40.02 },
  { id: "nference", image: "/images/logos/we_come_from/nference.png", width: 109.04, height: 28.82 },
  { id: "mit", image: "/images/logos/we_come_from/mit.png", width: 75, height: 40 },
  { id: "oxford", image: "/images/logos/we_come_from/oxford.png", width: 140, height: 40 },
  { id: "nvidia", image: "/images/logos/we_come_from/nvidia.png", width: 134.04, height: 34 },
  { id: "mckinsey company", image: "/images/logos/we_come_from/mckinsey_company.png", width: 114, height: 35 },
  { id: "owkin", image: "/images/logos/we_come_from/owkin.png", width: 120.05, height: 37.91 },
  { id: "roche", image: "/images/logos/we_come_from/roche.png", width: 88.46, height: 46.34 },
  { id: "huawei", image: "/images/logos/we_come_from/huawei.png", width: 107, height: 37 },
  { id: "quest diagnostic", image: "/images/logos/we_come_from/quest_diagnostic.png", width: 116, height: 40 },
  { id: "500", image: "/images/logos/we_come_from/500.png", width: 105, height: 51 },
  { id: "icon", image: "/images/logos/we_come_from/icon.png", width: 117, height: 59 },
  { id: "apple", image: "/images/homePage/logos/apple.png", width: 40, height: 40 },
];
const Team: NextPage = () => {
  const [memberDetails, setMemberDetails] = useState<TeamMember | null>(null);
  const isMobileView = useMediaQuery(theme.breakpoints.down("md"));
  useEffect(() => {
    AOS.init();

    return () => {
      AOS.refresh();
    };
  }, []);
  const MemberListItem = ({ member }: { member: TeamMember }) => (
    <Box
      onClick={() => member?.bio && setMemberDetails(member)}
      style={{ cursor: member?.bio ? "pointer" : "default" }}
      bgcolor="#fff"
      borderRadius="28px"
      boxShadow={" 0px 8px 32px rgba(27, 37, 74, 0.08)"}
      height={499.27}
      maxWidth={362.3}
      marginY={1}
      marginX={1}
      ml={isMobileView ? -1 : 1}
      display="flex"
      flexDirection="column"
      p="40px"
      data-aos="fade-up"
      aos-once="false"
      data-aos-duration="5000"
      data-aos-anchor-placement="top"
    >
      <Box style={{ width: 140, height: 140, borderRadius: 70, backgroundColor: "#F0F6FA", position: "relative" }}>
        <Image src={member.photo} alt={member.name} priority layout="fill" sizes="100vw" style={{ borderRadius: 70 }} />
      </Box>

      <Typography fontFamily={"FinancierDisplay"} lineHeight={"130%"} fontSize={"22px"} fontWeight="600" mt="30px">
        {member.name}
      </Typography>

      <Typography
        fontFamily={"SuisseIntl"}
        fontWeight={300}
        pt={2}
        color={"#5E5E5E"}
        style={{ opacity: 0.8 }}
        lineHeight={"140%"}
        fontSize={"14px"}
        mb="20px"
        maxWidth="200px"
        pr={member.name === "Hugo Chrost" ? 4 : 10}
      >
        {member.position}
      </Typography>

      <Box display="flex" pt={2} flexDirection="row">
        {member.roles.map((role, idx) => (
          <Box key={`${role.title}_${idx}`} style={{ backgroundColor: role.color, padding: "5px 12px 5px 12px", width: "fit-content", borderRadius: "1000px" }} mr={1}>
            <Typography fontFamily={"SuisseIntl"} fontWeight={400} fontSize={"12px"} lineHeight={"136%"}>
              {role.title}
            </Typography>
          </Box>
        ))}
      </Box>

      <Box display="flex" flexDirection="row" alignItems="center" justifyContent="flex-start" mt="auto">
        {member.linkedinUrl && (
          <Link href={member.linkedinUrl} target="_blank" rel="noopener" underline="none" display="flex" flexDirection="row" alignItems="center">
            <Image
              src="/images/icons/linkedin.png"
              alt="linkedin"
              width="40"
              height="40"
              style={{
                maxWidth: "100%",
                height: "auto",
              }}
            />
          </Link>
        )}

        {member.twitterUrl && (
          <Link href={member.twitterUrl} ml={1} target="_blank" rel="noopener" underline="none" display="flex" flexDirection="row" alignItems="center">
            <Image
              src="/images/icons/twitter.png"
              alt="twitter"
              width="40"
              height="40"
              style={{
                maxWidth: "100%",
                height: "auto",
              }}
            />
          </Link>
        )}
      </Box>
    </Box>
  );

  return (
    <Box>
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
        <Box
          style={{
            backgroundImage: `url("/images/team/gradient1.png")`,
            backgroundRepeat: "no-repeat",
          }}
          mt={-10}
          pt={10}
          mr={-25}
          pr={25}
        >
          <Box>
            <Typography
              component={motion.p}
              fontFamily={"FinancierDisplay"}
              fontSize={isMobileView ? "62px" : "100px"}
              lineHeight={"96px"}
              mb={5}
              textAlign="center"
              variants={{ initial: { opacity: 0, y: 100 }, animate: { opacity: 1, y: 0 } }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              Team
            </Typography>

            <Typography
              component={motion.p}
              fontFamily={"SuisseIntl"}
              fontSize={"18px"}
              fontWeight={300}
              mb={8.25}
              textAlign="center"
              variants={{ initial: { opacity: 0, y: 50 }, animate: { opacity: 1, y: 0 } }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              Working together to overcome neurological diseases.
            </Typography>
          </Box>
          <Grid container rowSpacing={1.25} columnSpacing={1.25} mb="214px" maxWidth="1110px" margin="0 auto">
            {team.map((member, idx) => (
              <Grid item xs={12} sm={6} md={4} lg={4} key={idx} zIndex={1}>
                <MemberListItem member={{ ...member, memberIndex: idx }} />
              </Grid>
            ))}

            <Grid item xs={12} sm={6} md={4} lg={3} mt={{ xs: 2, sm: 2 }} display="flex" justifyContent="center" flexDirection="column" margin="0 auto" zIndex={1}>
              <Typography fontFamily={"SuisseIntl"} fontWeight={400} fontSize={"21px"} textAlign="center">
                and many more...
              </Typography>
            </Grid>
          </Grid>
        </Box>
        <Box display={"flex"} mt="190px" width={"100vw"}>
          {isMobileView ? (
            <Box width={"100%"} display={"flex"} flexDirection={"column"}>
              <Box width={"100%"} display={"flex"} justifyContent={"center"} alignItems={"center"} mb={10} pr={8}>
                <Image
                  src="/images/team/brain.png"
                  width={650}
                  height={454}
                  alt="Brain"
                  priority
                  style={{
                    maxWidth: "100%",
                    height: "auto",
                  }}
                />
                <Box position={"absolute"} width={"100%"} height={"100%"} display={"flex"} justifyContent={"center"} alignItems={"center"}>
                  <Image
                    src={"/images/team/brainGradient.png"}
                    width={650}
                    height={454}
                    alt={"bg"}
                    priority
                    style={{
                      maxWidth: "100%",
                      height: "auto",
                    }}
                  />
                </Box>
              </Box>
              <Box width={"100%"}>
                <Box pr={{ xs: 0, md: 2, lg: 2 }} pl={2}>
                  <Typography fontFamily={"SuisseIntl"} fontWeight={400} fontSize={"21px"} mb="60px">
                    About Solvemed
                  </Typography>
                  <Typography fontFamily={"FinancierDisplay"} fontSize={"42px"} lineHeight={"54.6px"} mb="116px" pr={2} maxWidth="440px">
                    Solvemed champions digital-first care, where cutting-edge technology supports clinicians and empowers patients.
                  </Typography>
                </Box>

                <Box display={"flex"} width={"100%"} flexDirection={"column"} ml={2}>
                  <Box width={"90%"} display={"flex"} justifyContent={"space-between"} alignItems={"center"}>
                    <Box>
                      <Typography fontFamily={"FinancierDisplay"} letterSpacing={"-0.03em"} fontSize={{ xs: "100px", sm: "144px" }} lineHeight="138.24px" fontWeight="300">
                        36
                      </Typography>
                      <Typography fontFamily={"SuisseIntl"} fontSize={{ xs: "16px" }} fontWeight={400}>
                        Number of emplyees
                      </Typography>
                    </Box>

                    <Box>
                      <Typography fontFamily={"FinancierDisplay"} fontSize={{ xs: "100px", sm: "144px" }} lineHeight="138.24px" fontWeight="400">
                        4
                      </Typography>
                      <Typography fontFamily={"SuisseIntl"} fontSize={{ xs: "16px" }} fontWeight={400}>
                        Number of PhDs
                      </Typography>
                    </Box>
                  </Box>

                  <Box width={"90%"} display={"flex"} justifyContent={"space-between"} alignItems={"center"}>
                    <Box>
                      <Typography fontFamily={"FinancierDisplay"} fontSize={{ xs: "100px", sm: "144px" }} lineHeight="138.24px" fontWeight={400}>
                        6
                      </Typography>
                      <Typography fontFamily={"SuisseIntl"} fontSize={{ xs: "16px" }} fontWeight={400}>
                        Number of MDs
                      </Typography>
                    </Box>

                    <Box>
                      <Typography fontFamily={"FinancierDisplay"} fontSize={{ xs: "100px", sm: "144px" }} lineHeight="138.24px" fontWeight={400}>
                        9
                      </Typography>
                      <Typography fontFamily={"SuisseIntl"} fontSize={{ xs: "16px" }} fontWeight={400}>
                        Number of MBAs
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Box>
          ) : (
            <>
              <Box
                maxWidth={"50%"}
                display={"flex"}
                // style={{ backgroundImage: "url(/images/team/brainGradient.png)", backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundPosition: "center" }}
                justifyContent={"center"}
                alignItems={"center"}
                mr={4}
              >
                <Image
                  src="/images/team/brain.png"
                  width={650}
                  height={454}
                  alt="Brain"
                  priority
                  style={{
                    maxWidth: "100%",
                    height: "auto",
                  }}
                />
                <Box position={"absolute"} width={"100%"} height={"100%"} display={"flex"} justifyContent={"center"} alignItems={"center"}>
                  <Image
                    src={"/images/team/brainGradient.png"}
                    width={650}
                    height={454}
                    alt={"bg"}
                    priority
                    style={{
                      maxWidth: "100%",
                      height: "auto",
                    }}
                  />
                </Box>
              </Box>
              <Box width={"40%"}>
                <Box>
                  <Typography variant="body1" fontWeight="600" mb="60px">
                    About Solvemed
                  </Typography>
                  <Typography variant="subtitle1" mb="116px" maxWidth="440px">
                    Solvemed champions digital-first care, where cutting-edge technology supports clinicians and empowers patients.
                  </Typography>
                </Box>

                <Box display={"flex"} minWidth={"60%"} flexDirection={"column"} justifyContent={"flex-start"} alignItems={"flex-start"}>
                  <Box display={"flex"} justifyContent={"space-between"} alignItems={"center"}>
                    <Box mr={20}>
                      <Typography fontFamily={"FinancierDisplay"} letterSpacing={"-0.03em"} fontSize={{ xs: "100px", sm: "144px" }} lineHeight="138.24px" fontWeight="400">
                        36
                      </Typography>
                      <Typography fontFamily={"SuisseIntl"} fontSize={{ xs: "16px" }} fontWeight="400">
                        Number of emplyees
                      </Typography>
                    </Box>

                    <Box>
                      <Typography fontFamily={"FinancierDisplay"} fontSize={{ xs: "100px", sm: "144px" }} lineHeight="138.24px" fontWeight="400">
                        4
                      </Typography>
                      <Typography fontFamily={"SuisseIntl"} fontSize={{ xs: "16px" }} fontWeight="400">
                        Number of PhDs
                      </Typography>
                    </Box>
                  </Box>

                  <Box display={"flex"} justifyContent={"space-between"} alignItems={"center"}>
                    <Box mr={24}>
                      <Typography fontFamily={"FinancierDisplay"} fontSize={{ xs: "100px", sm: "144px" }} lineHeight="138.24px" fontWeight="300">
                        6
                      </Typography>
                      <Typography fontFamily={"SuisseIntl"} fontSize={{ xs: "16px" }} fontWeight="400">
                        Number of MDs
                      </Typography>
                    </Box>

                    <Box>
                      <Typography fontFamily={"FinancierDisplay"} fontSize={{ xs: "100px", sm: "144px" }} lineHeight="138.24px" fontWeight="300">
                        9
                      </Typography>
                      <Typography fontFamily={"SuisseIntl"} fontSize={{ xs: "16px" }} fontWeight="400">
                        Number of MBAs
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </>
          )}
        </Box>

        <Typography fontFamily={"FinancierDisplay"} fontWeight={300} fontSize={"60px"} lineHeight={"110%"} mb="30px" textAlign="center" mt="190px">
          We come from
        </Typography>

        <Typography fontFamily={"SuisseIntl"} fontWeight={300} fontSize={"16px"} mb="60px" width={{ xs: "95%", md: "40%" }} mx="auto" textAlign="center">
          Our team members bring a wealth of experience from the world’s most <br /> innovative institutions and companies.
        </Typography>

        <Grid container direction="row" justifyContent="space-between" alignItems="baseline" rowSpacing={{ md: 8, sm: 8, xs: 6 }} columns={{ md: 5, sm: 4, xs: 2 }}>
          {weComeFrom.map((item) => (
            <Grid item key={item.id} alignSelf="center" justifyContent="center" md={1} xs={1} sm={1}>
              <Box display="flex" justifyContent="center" alignItems="center">
                <Image
                  src={item.image}
                  alt={item.id}
                  width={item.width}
                  height={item.height}
                  priority
                  style={{
                    objectFit: "scale-down",
                  }}
                />
              </Box>
            </Grid>
          ))}
        </Grid>

        <Box>
          <Typography fontFamily={"SuisseIntl"} fontWeight={300} fontSize={"18px"} textAlign="center" mb="60px" marginTop={20}>
            Solvemed investors
          </Typography>

          <Grid container justifyContent="space-between" alignItems="center" rowSpacing={{ md: 8, sm: 8, xs: 6 }} columns={{ md: 8, sm: 4, xs: 2 }}>
            {investors.map((item) => (
              <Grid item key={item.id} md={1} xs={1} sm={1}>
                <Box marginBottom={0} display="flex" justifyContent="center" alignItems="center">
                  <Image
                    src={item.image}
                    alt={item.id}
                    width={item.width}
                    height={item.height}
                    priority
                    style={{
                      maxWidth: "100%",
                      height: "auto",
                      objectFit: "contain",
                    }}
                  />
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>

        {!!memberDetails && <TeamMemberModal isOpen={!!memberDetails} onClose={() => setMemberDetails(null)} member={memberDetails} members={team.filter((item) => item?.bio)} />}
      </div>
    </Box>
  );
};

export default Team;
