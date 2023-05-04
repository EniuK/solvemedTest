import { Box, Link, Typography, Divider, Input, Button, useMediaQuery } from "@mui/material";
import Image from "next/image";
import { theme } from "../config/theme";

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
      <Divider sx={{ width: "110vw", ml: -6, mt: 20 }} />
      {isSmallViewport ? (
        <Box width={"100vw"}>
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

                <Box display={"flex"} pt={5} width={"100%"} flexDirection={"column"} justifyContent={"flex-start"} alignItems={"flex-start"}>
                  <Box width={"100%"}>
                    <Typography>Join Our Newsletter</Typography>
                  </Box>
                  <Box mt={5} display={"flex"} width={"100%"} justifyContent={"flex-start"} alignItems={"flex-start"} flexDirection={"row"}>
                    <Input size="small" type="email" sx={{ fontsize: "14px", width: "80%" }} placeholder="Enter your email" />
                    <Button
                      color="inherit"
                      sx={{ backgroundColor: "white", color: "black", borderColor: "rgba(20, 20, 21, 0.2)", borderWidth: "0.5px", width: "15%" }}
                      variant="outlined"
                      size="large"
                    >
                      Send
                    </Button>
                  </Box>
                </Box>
                <Box flexDirection={"row"} display={"flex"} height={"100px"} alignItems={"center"} justifyContent={"flex-start"} width={"100%"}>
                  {menuItems.map((e, idx) => {
                    return (
                      <Box key={idx} mr={4}>
                        <Link underline="none" href={e.link}>
                          <Typography fontSize={"14px"} textAlign={"center"}>
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
                        &copy; 2022 Solvemed Group
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
                  <Box justifyContent={"center"} alignItems={"center"}>
                    <Button
                      color="secondary"
                      style={{ textTransform: "none" }}
                      sx={{ backgroundColor: "black", fontSize: "14px", fontWeight: 100, marginRight: 0 }}
                      variant="contained"
                      size="small"
                    >
                      Get access
                    </Button>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      ) : (
        <Box width={"100vw"} style={home ? { position: "sticky", bottom: 0 } : {}}>
          <Box
            height={"40vh"}
            width={"100%"}
            flexWrap={"wrap"}
            paddingX={{ xs: 3, md: 6.25 }}
            paddingY={4.75}
            display={"flex"}
            justifyContent={"space-between"}
            flexDirection={"row"}
          >
            <Box display={"flex"} flexDirection={"column"} height={"100%"} minWidth={"330px"} maxWidth={"33vw"} justifyContent={"flex-end"} alignItems={"flex-end"}>
              <Box width={"100%"} height={"80%"} alignItems={"flex-start"} justifyContent={"flex-end"} display={"flex"} flexDirection={"column"}>
                <Image src="/icons/logo-small.svg" alt="logo" width="35" height="46" />

                <Typography color="primary.light" variant="body6Wide" mt={3}>
                  &copy; 2022 Solvemed Group
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
            <Box height={"100%"} minWidth={"330px"} maxWidth={"33vw"} display={"flex"} flexDirection={"column"} justifyContent={"flex-end"} pl={4} alignItems={"flex-end"}>
              <Box width={"100%"}>
                <Typography>Join Our Newsletter</Typography>
              </Box>
              <Box mt={5} display={"flex"} width={"100%"} justifyContent={"flex-start"} alignItems={"flex-start"} flexDirection={"row"}>
                <Input size="small" type="email" sx={{ fontsize: "14px", width: "80%" }} placeholder="Enter your email" />
                <Button
                  color="inherit"
                  sx={{ backgroundColor: "white", color: "black", borderColor: "rgba(20, 20, 21, 0.2)", borderWidth: "0.5px", width: "15%" }}
                  variant="outlined"
                  size="large"
                >
                  Send
                </Button>
              </Box>
            </Box>
            <Box height={"40vh"} pb={7} pr={10} minWidth={"330px"} maxWidth={"33vw"} display="flex" flexDirection={"column"} justifyContent="space-between" mb={3.5}>
              <Box height={"40vh"} display="flex" width={"100%"} flexDirection="column" justifyContent={"flex-end"} alignItems={"flex-end"} mt={{ xs: 2, sm: 0 }}>
                <Box flexDirection={"row"} display={"flex"} height={"70%"} justifyContent={"space-between"} width={"90%"}>
                  {menuItems.map((e, idx) => {
                    return (
                      <Box key={idx} width={"20%"}>
                        <Link underline="none" href={e.link}>
                          <Typography fontSize={"14px"} textAlign={"center"}>
                            {e.title}
                          </Typography>
                        </Link>
                      </Box>
                    );
                  })}
                </Box>
                <Box alignItems={"center"} justifyContent={"center"} width={"100%"} display={"flex"}>
                  <Link href="https://www.linkedin.com/company/solvemed-group/" target="_blank" rel="noopener">
                    <Image src="/images/icons/linkedin.png" alt="linkedin" width="40px" height="40px" />
                  </Link>

                  <Link href="https://twitter.com/solvemed" ml={5} target="_blank" rel="noopener">
                    <Image src="/images/icons/twitter.png" alt="twitter" width="40px" height="40px" />
                  </Link>
                </Box>
              </Box>
            </Box>
            <Box display={"flex"} width={"100vw"} mb={5} justifyContent={"flex-end"} alignItems={"flex-end"}>
              <Box
                borderRadius={"100px"}
                height={"40px"}
                boxShadow={" 0px 8px 32px rgba(27, 37, 74, 0.08)"}
                display={"flex"}
                width={"290px"}
                flexDirection={"row"}
                justifyContent={"space-between"}
                alignItems={"center"}
                pb={3}
                pr={3}
              >
                <Box justifyContent={"center"} alignItems={"center"}>
                  <Typography pl={2} fontSize={"19px"} fontFamily={"FinancierDisplay"} fontWeight={400}>
                    Become early adopter!
                  </Typography>
                </Box>
                <Box justifyContent={"center"} alignItems={"center"}>
                  <Button
                    color="secondary"
                    style={{ textTransform: "none" }}
                    sx={{ backgroundColor: "black", fontSize: "14px", fontWeight: 100, marginRight: 0 }}
                    variant="contained"
                    size="small"
                  >
                    Get access
                  </Button>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      )}
    </>
  );
};

export default Footer;
