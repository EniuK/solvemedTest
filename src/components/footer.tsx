import { Box, Link, Typography, Divider, Input, Button, useMediaQuery } from "@mui/material";
import Image from "next/image";
import { theme } from "../config/theme";
import JoinNewsletterMailchimp from "./JoinNewsletter/JoinNewsletteMailchimp";

const menuItems = [
  { title: "TEAM", link: "/team" },
  { title: "BLOG", link: "/blog" },
  { title: "CAREER", link: "/careers" },
  { title: "CONTACT", link: "/contact" },
];

const Footer = ({ home }: any) => {
  const isSmallViewport = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <>
      <Divider sx={{ width: "100%", mt: 20 }} />
      {isSmallViewport ? (
        <Box width={"100%"} ml={-3}>
          <Box height={"100%"} width={"100%"} flexWrap={"wrap"} paddingY={4.75} display={"flex"} justifyContent={"space-between"} flexDirection={"row"}>
            <Box display={"flex"} flexDirection={"column"} height={"100%"} justifyContent={"flex-end"} alignItems={"flex-end"}>
              <Box paddingX={3} width={"100%"} height={"80%"} alignItems={"flex-start"} justifyContent={"flex-end"} display={"flex"} flexDirection={"column"}>
                <Box display={"flex"} flexDirection={"row"} justifyContent={"space-between"} width={"100%"}>
                  <Box width={"50%"}>
                    <Image src="/icons/logo-small.svg" alt="logo" width="35" height="46" />
                  </Box>
                  <Box alignItems={"center"} justifyContent={"center"} width={"50%"} display={"flex"}>
                    <Link href="https://www.linkedin.com/company/solvemed-group/" target="_blank" rel="noopener">
                      <Image src="/images/icons/linkedin.png" alt="linkedin" width="40px" height="40px" />
                    </Link>

                    <Link href="https://twitter.com/solvemed" ml={3} target="_blank" rel="noopener">
                      <Image src="/images/icons/twitter.png" alt="twitter" width="40px" height="40px" />
                    </Link>
                  </Box>
                </Box>
                <Box display={"flex"} justifyContent={"center"} alignItems={"center"}>
                  <JoinNewsletterMailchimp />
                </Box>

                <Divider sx={{ width: "110vw", ml: -6, mt: 20, position: "absolute" }} />
                <Box flexDirection={"row"} display={"flex"} height={"100px"} alignItems={"center"} justifyContent={"flex-start"} width={"100%"}>
                  {menuItems.map((e, idx) => {
                    return (
                      <Box key={idx} mr={4}>
                        <Link underline="none" href={e.link}>
                          <Typography fontSize={"14px"} textAlign={"center"} fontFamily="SuisseIntl">
                            {e.title}
                          </Typography>
                        </Link>
                      </Box>
                    );
                  })}
                </Box>
              </Box>

              <Box justifyContent={"flex-start"} alignItems={"flex-start"} width={"100vw"}>
                <Box minWidth={"330px"} maxWidth={"33vw"} display="flex" flexDirection={"column"} justifyContent="space-between" mb={3.5}>
                  <Box display="flex" width={"100%"} flexDirection="column" justifyContent={"flex-start"} pl={3} alignItems={"flex-start"} mt={3}>
                    <Box flexDirection={"column"} display={"flex"}>
                      <Typography color="primary.light" variant="body6Wide">
                        &copy; 2023 Solvemed Group
                      </Typography>
                      <Typography color="primary.light" variant="body6Wide" mt={2}>
                        All Rights reserved
                      </Typography>
                    </Box>
                  </Box>
                </Box>
                <Box pl={3}>
                  <Link href="#" underline="none" color="primary.light" variant="body6Wide" mr="29px">
                    Privacy Policy
                  </Link>
                  <Link href="#" underline="none" color="primary.light" variant="body6Wide" mr="29px">
                    Terms of Use
                  </Link>
                  <Link href="#" underline="none" color="primary.light" variant="body6Wide">
                    Cookie Policy
                  </Link>
                </Box>
              </Box>
              <Box mt={5} display={"flex"} width={"100vw"} justifyContent={"center"} alignItems={"center"}>
                <Box
                  borderRadius={"100px"}
                  height={"40px"}
                  boxShadow={" 0px 8px 32px rgba(27, 37, 74, 0.08)"}
                  display={"flex"}
                  width={"290px"}
                  flexDirection={"row"}
                  justifyContent={"space-between"}
                  alignItems={"center"}
                >
                  <Box justifyContent={"center"} alignItems={"center"}>
                    <Typography pl={2} fontSize={"19px"} fontFamily={"FinancierDisplay"} fontWeight={400}>
                      Become early adopter!
                    </Typography>
                  </Box>
                  <Button
                    color="secondary"
                    style={{ textTransform: "none", color: "white" }}
                    sx={{ backgroundColor: "black", fontSize: "14px", fontWeight: 100, marginRight: 0 }}
                    variant="contained"
                    size="small"
                  >
                    <Link href={"/GetAccess"} style={{ textTransform: "none", textDecoration: "none", color: "inherit" }}>
                      {" "}
                      Get access
                    </Link>
                  </Button>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      ) : (
        <Box width={"100%"}>
          <Box
            width={"100%"}
            flexWrap={"wrap"}
            paddingX={{ xs: 3, md: 6.25 }}
            paddingY={4.75}
            display={"flex"}
            justifyContent={"space-between"}
            alignItems={"flex-start"}
            flexDirection={"row"}
          >
            <Box display={"flex"} flexDirection={"column"} minWidth={"330px"} maxWidth={"33vw"} justifyContent={"flex-start"} alignItems={"flex-start"}>
              <Box width={"100%"} alignItems={"flex-start"} justifyContent={"flex-end"} display={"flex"} flexDirection={"column"}>
                <Image src="/icons/logo-small.svg" alt="logo" width="35" height="46" />

                <Typography color="primary.light" variant="body6Wide" mt={3}>
                  &copy; 2023 Solvemed Group
                </Typography>
                <Typography color="primary.light" variant="body6Wide">
                  All Rights reserved
                </Typography>
              </Box>

              <Box mt={5} justifyContent={"flex-start"} alignItems={"flex-start"} width={"100%"}>
                <Link href="#" underline="none" color="primary.light" variant="body6Wide" mr="29px">
                  Privacy Policy
                </Link>
                <Link href="#" underline="none" color="primary.light" variant="body6Wide" mr="29px">
                  Terms of Use
                </Link>
                <Link href="#" underline="none" color="primary.light" variant="body6Wide">
                  Cookie Policy
                </Link>
              </Box>
            </Box>
            <Box display={"flex"} pt={3} height={"100%"} pb={4} justifyContent={"flex-end"} alignItems={"flex-end"}>
              <JoinNewsletterMailchimp />
            </Box>

            <Box height={"100%"} pr={10} minWidth={"330px"} maxWidth={"33vw"} display="flex" flexDirection={"column"} justifyContent="space-between" mb={3.5}>
              <Box height={"100%"} display="flex" width={"100%"} flexDirection="column" justifyContent={"flex-end"} alignItems={"flex-end"} mt={{ xs: 2, sm: 0 }}>
                <Box flexDirection={"row"} display={"flex"} height={"70%"} justifyContent={"space-between"} width={"90%"}>
                  {menuItems.map((e, idx) => {
                    return (
                      <Box key={idx} width={"20%"} mr={3} display={"flex"} justifyContent={"flex-end"} alignItems={"flex-end"} textAlign={"flex-end"}>
                        <Link underline="none" href={e.link}>
                          <Typography fontSize={"14px"} fontFamily="SuisseIntl" textAlign={"center"}>
                            {e.title}
                          </Typography>
                        </Link>
                      </Box>
                    );
                  })}
                </Box>
                <Box mt={13} alignItems={"center"} flexDirection={"row"} justifyContent={"center"} width={"100%"} display={"flex"}>
                  <Box>
                    <Link style={{ textDecoration: "none" }} href="https://twitter.com/solvemed" target="_blank" rel="noopener">
                      <Box display={"flex"} justifyContent={"center"} alignItems={"center"}>
                        <Box mr={1}>
                          <Image src="/images/icons/twitter.png" alt="twitter" width="40px" height="40px" />
                        </Box>
                        <Box pb={1} fontSize={"15px"} fontStyle={"SuisseIntl"} fontWeight={300}>
                          Twitter
                        </Box>
                      </Box>
                    </Link>
                  </Box>
                  <Box ml={5}>
                    <Link style={{ textDecoration: "none" }} href="https://www.linkedin.com/company/solvemed-group/" target="_blank" rel="noopener">
                      <Box display={"flex"} justifyContent={"center"} alignItems={"center"}>
                        <Box mr={1}>
                          <Image src="/images/icons/linkedin.png" alt="linkedin" width="40px" height="40px" />
                        </Box>
                        <Box pb={1} fontSize={"15px"} fontStyle="SuisseIntl" fontWeight={300}>
                          Linkedin
                        </Box>
                      </Box>
                    </Link>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
          <Box display={"flex"} width={"100%"} mb={5} justifyContent={"flex-end"} alignItems={"flex-end"}>
            <Box
              borderRadius={"100px"}
              height={"40px"}
              boxShadow={" 0px 8px 32px rgba(27, 37, 74, 0.08)"}
              display={"flex"}
              width={"300px"}
              flexDirection={"row"}
              justifyContent={"space-between"}
              alignItems={"center"}
              mb={3}
              pr={3}
            >
              <Box
                justifyContent={"center"}
                alignItems={"center"}
                fontSize={"19px"}
                letterSpacing={"0.04em"}
                lineHeight={"134%"}
                fontStyle={"italic"}
                fontFamily={"FinancierDisplay"}
                fontWeight={600}
              >
                Become early adopter!
              </Box>
              <Box justifyContent={"center"} alignItems={"center"}>
                <Button
                  color="secondary"
                  style={{ textTransform: "none", color: "white" }}
                  sx={{ backgroundColor: "black", fontSize: "14px", fontWeight: 100, marginRight: 0 }}
                  variant="contained"
                  size="small"
                >
                  <Link href={"/GetAccess"} style={{ textTransform: "none", textDecoration: "none", color: "inherit" }}>
                    {" "}
                    Get access
                  </Link>
                </Button>
              </Box>
            </Box>
          </Box>
        </Box>
      )}
    </>
  );
};

export default Footer;
