import { useEffect, useState } from "react";
import { Box, MenuItem, Typography, useMediaQuery, Link as LinkMUI, useTheme, Stack, Button, Divider } from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/router";
import { motion, useScroll, useTransform } from "framer-motion";
import styles from "./header.module.css";
import Image from "next/image";
import { useScrollBlock } from "./disableScroll";

const menuItems = [
  { title: "Team", link: "/team" },
  // { title: "Blog", link: "/blog" },
  { title: "Careers", link: "/careers" },
  { title: "Contact", link: "/contact" },
];

const Header = () => {
  const theme = useTheme();
  const router = useRouter();

  const isMobileView = useMediaQuery(theme.breakpoints.down("md"));
  const [open, setOpen] = useState(false);

  const handleMenuOpen = () => {
    setOpen(!open);
  };

  const close = () => {
    setOpen(false);
  };

  useEffect(() => {
    if (open) {
      blockScroll();
    } else {
      allowScroll();
    }
    if (!isMobileView) {
      close();
    }
  }, [open, isMobileView]);

  // Scroll up -> pojawianie sie menu w mobilce na gorze ekranu
  // const [scrollDirection, setScrollDirection] = useState("none");
  // const [prevScrollY, setPrevScrollY] = useState(0);
  // useEffect(() => {
  //   const handleScroll = () => {
  //     const currentScrollY = window.scrollY;
  //     if (currentScrollY < prevScrollY) {
  //       setScrollDirection("up");
  //     } else if (currentScrollY > prevScrollY) {
  //       setScrollDirection("down");
  //     } else {
  //       setScrollDirection("none");
  //     }
  //     setPrevScrollY(currentScrollY);
  //   };

  //   window.addEventListener("scroll", handleScroll);

  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, [prevScrollY]);
  const handleMenuClose = () => setOpen(!open);

  const { scrollY } = useScroll();
  const offset = useTransform(scrollY, [0, 400], [0, -5]);
  const opacity = useTransform(scrollY, [0, 600], [1, 0]);
  const [blockScroll, allowScroll] = useScrollBlock();

  return (
    <div className={styles.header}>
      <Box zIndex={600} onClick={() => setOpen(false)} position={"absolute"} mt={-5} style={open ? { top: 37.5, left: 20 } : { left: 20 }}>
        <Link href="/" passHref>
          <a className={styles.logoLinkContainer}>
            <motion.svg width="234" height="35" viewBox="0 0 234 35" fill="none" xmlns="http://www.w3.org/2000/svg">
              <motion.path
                d="M63.0797 12.7642C62.5975 13.0847 62.1481 13.3834 61.658 13.7098C60.2792 12.0349 58.4916 11.7491 56.5022 12.2054C55.4889 12.4374 54.9425 13.0673 54.8948 14.0161C54.8419 15.0679 55.1597 15.5438 56.3287 15.8982C57.3948 16.2223 58.5015 16.4097 59.57 16.7255C61.0126 17.1517 62.5065 17.5795 62.9492 19.303C63.5682 21.7097 62.5116 23.3223 60.4109 24.0603C58.4053 24.7648 56.3441 24.6566 54.4536 23.5433C53.7739 23.1439 53.1789 22.6004 52.5 22.0886C53.0397 21.6722 53.4845 21.3292 53.7526 21.1228C54.7154 21.6817 55.5536 22.4094 56.516 22.6604C57.5064 22.9185 58.6553 22.883 59.6662 22.662C60.778 22.4193 61.6639 21.3651 61.242 19.7873C60.9944 18.8618 60.1866 18.64 59.4383 18.4166C58.1616 18.0365 56.8436 17.7934 55.5737 17.3952C53.5038 16.7464 52.7054 15.3157 53.2156 13.2272C53.5614 11.8111 54.6239 11.1792 55.9518 10.8217C58.7101 10.0793 61.1017 10.5797 63.0797 12.7642Z"
                fill="#47474C"
                style={{ x: offset, opacity }}
              />
              <motion.path
                d="M87.1694 16.6415C87.1004 14.3256 85.9949 12.5942 83.4898 12.1202C81.4427 11.7327 78.7645 12.6893 78.3588 15.2022C78.1668 16.3933 78.1948 17.6254 78.1818 18.8394C78.1628 20.6371 79.3468 22.1949 81.0504 22.713C83.3947 23.4258 86.0324 22.4585 86.6943 20.3727C86.9798 19.4736 87.1694 18.4657 87.1694 17.554V16.6415ZM82.6188 24.4587C79.0066 24.5561 76.6268 22.1092 76.2783 18.7786C76.1131 17.1948 76.2108 15.6888 76.749 14.2514C77.5856 12.0184 79.3539 10.81 81.6746 10.5586C83.7681 10.332 85.7497 10.7279 87.2771 12.363C88.2643 13.4199 88.7126 14.6966 88.9168 16.1308C89.1435 17.7261 89.0241 19.2743 88.4666 20.7425C87.5893 23.0517 85.4843 24.5167 82.6188 24.4587Z"
                fill="#47474C"
                initial={{ x: -20 }}
                style={{ x: offset, opacity }}
              />
              <motion.path d="M104.94 22.7061H111.285V24.1419H103.173V10.6783H104.94V22.7061Z" fill="#47474C" style={{ x: offset, opacity }} />
              <motion.path
                d="M134.323 10.6966C132.994 14.234 131.717 17.6289 130.442 21.025C130.154 21.7918 129.831 22.5492 129.601 23.3338C129.395 24.0363 129.066 24.3544 128.273 24.307C126.982 24.2297 126.998 24.2798 126.558 23.0555C125.884 21.1801 125.181 19.3153 124.49 17.4466C123.694 15.2956 122.896 13.1463 122.102 10.9954C122.076 10.9235 122.088 10.8375 122.08 10.7266H124C125.37 14.6369 126.747 18.5682 128.182 22.6644C128.64 21.2764 129.025 20.0285 129.464 18.8003C130.376 16.2559 131.308 13.7182 132.263 11.1899C132.343 10.9792 132.645 10.7582 132.875 10.7187C133.306 10.6433 133.76 10.6966 134.323 10.6966Z"
                fill="#47474C"
                style={{ x: offset, opacity }}
              />
              <motion.path
                d="M149.368 12.1335V16.4744H156.162V18.0006H149.411V22.6781H156.65V24.1696H147.547V10.6827H156.649V12.1335H149.368Z"
                fill="#47474C"
                style={{ x: offset, opacity }}
              />
              <motion.path
                d="M184.451 24.2525H182.691V12.842C180.963 15.7238 179.365 18.3878 177.721 21.1275C176.074 18.3807 174.478 15.7214 172.783 12.8944V24.2359H170.978V10.7001C171.705 10.7001 172.4 10.6555 173.082 10.7254C173.314 10.7486 173.583 11.0222 173.72 11.2507C174.741 12.9651 175.735 14.6969 176.737 16.4235C177.051 16.965 177.364 17.5069 177.741 18.1589C178.703 16.5289 179.619 14.9826 180.527 13.432C180.97 12.6766 181.365 11.8912 181.849 11.1642C182.003 10.9341 182.363 10.7534 182.648 10.7194C183.222 10.6512 183.81 10.6989 184.451 10.6989V24.2525Z"
                fill="#47474C"
                style={{ x: offset, opacity }}
              />
              <motion.path
                d="M201.152 16.4894H207.908V17.986H201.166V22.6919H208.426V24.1601H199.303V10.6827H208.426V12.1193H201.152V16.4894Z"
                fill="#47474C"
                style={{ x: offset, opacity }}
              />
              <motion.path
                d="M224.585 22.7528C225.882 22.7528 227.113 22.842 228.326 22.73C229.775 22.5966 230.973 21.984 231.592 20.5159C232.275 18.8922 232.189 17.2315 231.908 15.566C231.516 13.2414 230.242 12.4793 228.442 12.2406C227.189 12.0744 225.897 12.2086 224.585 12.2086V22.7528ZM222.721 24.2731V10.6844C224.402 10.6844 226.062 10.6899 227.722 10.6828C229.243 10.6761 230.716 10.9378 231.825 12.0326C232.503 12.7015 233.185 13.5216 233.472 14.4025C234.197 16.6134 234.219 18.8697 233.264 21.0767C232.349 23.1901 230.593 24.0769 228.478 24.2419C226.598 24.3891 224.698 24.2731 222.721 24.2731Z"
                fill="#47474C"
                style={{ x: offset, opacity }}
              />
              <path
                d="M15.617 8.42768C14.7157 7.52639 13.2746 7.5 12 7.5C9.92893 7.5 8.25 5.82107 8.25 3.75C8.25 1.67893 9.92893 0 12 0C14.0711 0 15.75 1.67893 15.75 3.75C15.75 5.02462 15.7764 6.46573 16.6777 7.36702L17.3308 8.02011C18.4129 9.10229 20.2196 9 21.75 9C23.8211 9 25.5 10.6789 25.5 12.75C25.5 14.8211 23.8211 16.5 21.75 16.5C19.6789 16.5 18 14.8211 18 12.75C18 11.7661 17.8883 10.699 17.1926 10.0032L15.617 8.42768Z"
                fill="url(#paint0_linear_1077_19758)"
              />
              <path
                d="M8.11702 26.4277C7.21573 25.5264 5.77462 25.5 4.5 25.5C2.42893 25.5 0.75 23.8211 0.75 21.75C0.75 19.6789 2.42893 18 4.5 18C6.57107 18 8.25 19.6789 8.25 21.75C8.25 23.0246 8.27639 24.4657 9.17768 25.367L9.83077 26.0201C10.9129 27.1023 12.7196 27 14.25 27C16.3211 27 18 28.6789 18 30.75C18 32.8211 16.3211 34.5 14.25 34.5C12.1789 34.5 10.5 32.8211 10.5 30.75C10.5 29.7661 10.3883 28.699 9.69257 28.0032L8.11702 26.4277Z"
                fill="url(#paint1_linear_1077_19758)"
              />
              <path
                d="M16.367 17.4277C15.4657 16.5264 14.0246 16.5 12.75 16.5C10.6789 16.5 9 14.8211 9 12.75C9 10.6789 10.6789 9 12.75 9C14.8211 9 16.5 10.6789 16.5 12.75C16.5 14.0246 16.5264 15.4657 17.4277 16.367L18.0808 17.0201C19.1629 18.1023 20.9696 18 22.5 18C24.5711 18 26.25 19.6789 26.25 21.75C26.25 23.8211 24.5711 25.5 22.5 25.5C20.4289 25.5 18.75 23.8211 18.75 21.75C18.75 20.7661 18.6383 19.699 17.9426 19.0032L16.367 17.4277Z"
                fill="url(#paint2_linear_1077_19758)"
              />
              <path
                d="M7.36702 17.4277C6.46573 16.5264 5.02462 16.5 3.75 16.5C1.67893 16.5 0 14.8211 0 12.75C0 10.6789 1.67893 9 3.75 9C5.82107 9 7.5 10.6789 7.5 12.75C7.5 14.0246 7.52639 15.4657 8.42768 16.367L9.08077 17.0201C10.1629 18.1023 11.9696 18 13.5 18C15.5711 18 17.25 19.6789 17.25 21.75C17.25 23.8211 15.5711 25.5 13.5 25.5C11.4289 25.5 9.75 23.8211 9.75 21.75C9.75 20.7661 9.63831 19.699 8.94257 19.0032L7.36702 17.4277Z"
                fill="url(#paint3_linear_1077_19758)"
              />
              <defs>
                <linearGradient id="paint0_linear_1077_19758" x1="-4.77273" y1="5.1383" x2="40.2129" y2="4.73909" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#5242EE" />
                  <stop offset="1" stopColor="#97ECFF" />
                </linearGradient>
                <linearGradient id="paint1_linear_1077_19758" x1="-4.77273" y1="5.1383" x2="40.2129" y2="4.73909" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#5242EE" />
                  <stop offset="1" stopColor="#97ECFF" />
                </linearGradient>
                <linearGradient id="paint2_linear_1077_19758" x1="-4.77273" y1="5.1383" x2="40.2129" y2="4.73909" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#5242EE" />
                  <stop offset="1" stopColor="#97ECFF" />
                </linearGradient>
                <linearGradient id="paint3_linear_1077_19758" x1="-4.77273" y1="5.1383" x2="40.2129" y2="4.73909" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#5242EE" />
                  <stop offset="1" stopColor="#97ECFF" />
                </linearGradient>
              </defs>
            </motion.svg>
          </a>
        </Link>
      </Box>

      {isMobileView ? (
        <Box
          width={"100vw"}
          mt={-1}
          ml={-4}
          display={"flex"}
          flexDirection={"column"}
          justifyContent={"flex-end"}
          alignItems={"flex-end"}
          sx={{
            "&::-webkit-scrollbar": {
              width: "0.4em",
            },
            "&::-webkit-scrollbar-track": {
              boxShadow: "inset 0 0 6px rgba(0,0,0,0.3)",
            },
            "&::-webkit-scrollbar-thumb": {
              backgroundColor: "darkgrey",
              outline: "1px solid slategrey",
            },
          }}
        >
          <Box zIndex={300}>
            {open ? (
              <Box onClick={handleMenuClose} width={20} height={34.5} justifyContent="center" mt={1}>
                <Image src={"/images/icons/closeicon2.png"} width={"15px"} height={"15px"} alt={"close"} />
              </Box>
            ) : (
              <Stack justifyContent="center" width={20} height={34.5} onClick={handleMenuOpen}>
                <Box bgcolor={theme.palette.primary.main} height="1px" />
                <Box bgcolor={theme.palette.primary.main} height="1px" my={0.5} />
                <Box bgcolor={theme.palette.primary.main} height="1px" />
              </Stack>
            )}
          </Box>

          {open && (
            <>
              <Box height={"101vh"} width={"100vw"} mr={-10} pr={3} mt={-10} pt={8} zIndex={200}>
                <Box width={"100vw"} mt={5} zIndex={open ? 300 : 1} ml={-7} pl={7} bgcolor={"white"} pb={6}>
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
                    <Box ml={-5} mt={8}>
                      {menuItems.map((item) => {
                        return (
                          <Box key={item.title} mt={3} style={{ fontFamily: "SuisseIntl", fontWeight: 100, fontSize: "20px", lineHeight: "150%" }}>
                            <Link href={item.link} prefetch={false}>
                              <MenuItem onClick={handleMenuOpen} dense>
                                <a>{item.title}</a>
                              </MenuItem>
                            </Link>
                          </Box>
                        );
                      })}
                    </Box>

                    <Divider sx={{ width: "100vw", ml: -6, mt: 5, mb: 5 }} />
                    <Box mt={-1} alignItems={"center"} justifyContent={"flex-start"} width={"100vw"} ml={-5} display={"flex"}>
                      <Box height={"40px"} display={"flex"} justifyContent={"center"} alignItems={"center"} flexDirection={"row"}>
                        <Link href="https://www.linkedin.com/company/solvemed-group/" target="_blank" rel="noopener">
                          <Image src="/images/icons/linkedin.png" alt="linkedin" width="40px" height="40px" />
                        </Link>
                        <Box ml={2}>Linkedin</Box>
                      </Box>
                      <Box height={"40px"} display={"flex"} justifyContent={"center"} alignItems={"center"} flexDirection={"row"} ml={3}>
                        <Link href="https://twitter.com/solvemed" target="_blank" rel="noopener">
                          <Image src="/images/icons/twitter.png" alt="twitter" width="40px" height="40px" />
                        </Link>
                        <Box ml={2}>Twitter</Box>
                      </Box>
                    </Box>
                  </motion.div>
                </Box>
                <Box
                  height={"100%"}
                  width={"100vw"}
                  left={0}
                  position={"fixed"}
                  style={{ opacity: 0.6, backdropFilter: " blur(4px)", backgroundColor: "rgba(0, 0, 0, 0.7)" }}
                ></Box>
              </Box>
            </>
          )}
        </Box>
      ) : (
        <Box width={"100%"} mt={-1} display={"flex"} justifyContent={"flex-end"} alignItems={"center"}>
          {menuItems.map((item) => {
            const isCurrentPath = item.link === router.pathname;

            return (
              <Box key={item.title} mt={1.5}>
                <Link href={item.link} passHref prefetch={false}>
                  <MenuItem onClick={handleMenuClose} classes={{ root: styles.disableHover }} dense disableRipple>
                    <a className={`${styles.menuListItemLink} ${isCurrentPath ? styles.menuListItemLinkActive : ""}`}>{item.title.toUpperCase()}</a>
                  </MenuItem>
                </Link>
              </Box>
            );
          })}
          <Box ml={2} mt={1} justifyContent={"center"} alignItems={"center"}>
            <Link href={"/GetAccess"}>
              <Button
                color="secondary"
                style={{ textTransform: "none" }}
                variant="contained"
                size="small"
                sx={{ backgroundColor: "black", fontSize: "14px", fontWeight: 100, marginRight: 0, height: "44px", paddingX: 3, paddingY: 1 }}
              >
                <Typography fontSize={"14px"} variant="body1" fontStyle={"SuisseIntl"} fontWeight={400}>
                  Get access
                </Typography>
              </Button>
            </Link>
          </Box>
        </Box>
      )}
    </div>
  );
};

export default Header;
