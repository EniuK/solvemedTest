import { useState } from "react";
import { Box, Menu, MenuItem, Typography, useMediaQuery, Link as LinkMUI, useTheme, Stack } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import styles from "./header.module.css";

const menuItems = [
  { title: "Home", link: "/" },
  { title: "Science", link: "/science" },
  { title: "Application", link: "/applications" },
  { title: "Team", link: "/team" },
  { title: "Careers", link: "/careers" },
  { title: "Contact", link: "/contact" },
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
    <div className={styles.header}>
      <Link href="/" passHref>
        <a className={styles.logoLinkContainer}>
          <Image src="/icons/logo.svg" alt="logo" width="234" height="34.5" />
        </a>
      </Link>

      {router.pathname === "/" && (
        <LinkMUI href="https://www.linkedin.com/posts/solvemed-group_recently-solvemed-group-had-the-pleasure-activity-6955474167458598912-ws8-/" target="_blank" rel="noopener" className={styles.externalLinkContainer}>
          <div className={styles.externalLinkContent}>
            <Typography variant="body6Wide" color="secondary.light" mr={1}>
              Nov 29, 2021
            </Typography>
            <Typography variant="body2">Clinical Key Opinion Leaders Banquet in Oxford.</Typography>
          </div>
          <Image src="/icons/arrow-top-right.svg" alt="Arrow top right" width="13" height="12" />
        </LinkMUI>
      )}

      <div className={styles.menu}>
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
                      <a className={styles.menuItem} style={{ color: isCurrentPath ? theme.palette.secondary.main : theme.palette.primary.main }}>
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
                  <a className={styles.menuItem} style={{ color: isCurrentPath ? theme.palette.secondary.main : theme.palette.primary.main }}>
                    {item.title}
                  </a>
                </Link>
              );
            })}
          </Stack>
        )}
      </div>
    </div>
  );
};

export default Header;
