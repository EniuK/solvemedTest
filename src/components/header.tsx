import { useState } from "react";
import { Box, Menu, MenuItem, Typography, useMediaQuery, Link as LinkMUI, useTheme, Stack } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

const menuItems = [
  { title: "Home", link: "/" },
  { title: "Science", link: "/science" },
  { title: "Application", link: "/applications" },
  { title: "Team", link: "/team" },
  { title: "Careers", link: "/careers" },
  { title: "Contact", link: "#" },
];

const Header = () => {
  const theme = useTheme();
  const router = useRouter();
  const [menuAnchorEl, setMenuAnchorEl] = useState<null | HTMLElement>(null);
  const isMenuOpen = Boolean(menuAnchorEl);
  const isMobileView = useMediaQuery(theme.breakpoints.down("md"));

  const handleMenuOpen = (event: React.MouseEvent<HTMLDivElement>) => {
    setMenuAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => setMenuAnchorEl(null);

  return (
    <Stack flexDirection="row" justifyContent="flex-start" alignItems="center" mb="145px" flexWrap="wrap">
      <Link href="/" passHref>
        <a>
          <Image src="/icons/logo.svg" alt="logo" width="234" height="34.5" />
        </a>
      </Link>

      {router.pathname === "/" && (
        <LinkMUI
          href="https://google.com"
          display="flex"
          justifyContent="space-between"
          px={3}
          py={2}
          border={`1px solid ${theme.palette.secondary.main}`}
          borderRadius={24}
          underline="none"
          target="_blank"
          rel="noopener"
          mx="auto"
        >
          <Typography fontSize="12px" color="secondary.light">
            Nov 29, 2021
          </Typography>
          <Typography variant="h6" ml={6} mr={3}>
            Clinical Key Opinion Leaders Banquet in Oxford.
          </Typography>
          <Image src="/icons/arrow-top-right.svg" alt="Arrow top right" width="13" height="12" />
        </LinkMUI>
      )}

      <Stack zIndex={100} alignItems="flex-end" position="fixed" top={38} right={50} left={0} maxWidth="1467px" mx="auto">
        {isMobileView ? (
          <>
            <Stack justifyContent="center" width={20} height={34.5} onClick={handleMenuOpen}>
              <Box bgcolor={theme.palette.primary.main} height="1px" />
              <Box bgcolor={theme.palette.primary.main} height="1px" my={0.5} />
              <Box bgcolor={theme.palette.primary.main} height="1px" />
            </Stack>

            <Menu anchorEl={menuAnchorEl} open={isMenuOpen} onClose={handleMenuClose}>
              {menuItems.map((item) => {
                const isCurrentPath = item.link === router.pathname;
                return (
                  <MenuItem key={item.title} onClick={handleMenuClose}>
                    <Link href={item.link}>
                      <a
                        style={{
                          textDecoration: "none",
                          fontSize: 13,
                          textTransform: "uppercase",
                          marginBottom: 8,
                          color: isCurrentPath ? theme.palette.secondary.main : theme.palette.primary.main,
                        }}
                      >
                        {item.title}
                      </a>
                    </Link>
                  </MenuItem>
                );
              })}
            </Menu>
          </>
        ) : (
          <Stack>
            {menuItems.map((item) => {
              const isCurrentPath = item.link === router.pathname;
              return (
                <Link key={item.title} href={item.link}>
                  <a
                    style={{
                      textDecoration: "none",
                      fontSize: 13,
                      textTransform: "uppercase",
                      marginBottom: 8,
                      color: isCurrentPath ? theme.palette.secondary.main : theme.palette.primary.main,
                    }}
                  >
                    {item.title}
                  </a>
                </Link>
              );
            })}
          </Stack>
        )}
      </Stack>
    </Stack>
  );
};

export default Header;
