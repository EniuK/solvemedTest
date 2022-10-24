import { useState } from "react";
import { Box, Menu, MenuItem, Typography, useMediaQuery, Link as LinkMUI, useTheme, Stack } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { motion } from "framer-motion";
import styles from "./header.module.css";

const menuItems = [
  { title: "Home", link: "/" },
  { title: "Science", link: "/science" },
  { title: "Applications", link: "/applications" },
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
        <LinkMUI
          href="https://www.linkedin.com/posts/solvemed-group_recently-solvemed-group-had-the-pleasure-activity-6955474167458598912-ws8-/"
          target="_blank"
          rel="noopener"
          className={styles.externalLinkContainer}
        >
          <div className={styles.externalLinkContent}>
            <Typography variant="body2">Clinical Key Opinion Leaders Banquet in Oxford.</Typography>
          </div>
          <div className={styles.externalLinkIcon}>
            <Image src="/icons/arrow-top-right.svg" alt="Arrow top right" width="13" height="12" />
          </div>
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
                  <Link key={item.title} href={item.link} passHref prefetch={false}>
                    <MenuItem onClick={handleMenuClose} classes={{ root: styles.menuListItem }} dense>
                      <a className={styles.menuListItemLink} style={{ color: isCurrentPath ? theme.palette.secondary.main : theme.palette.primary.main }}>
                        {item.title}
                      </a>
                    </MenuItem>
                  </Link>
                );
              })}
            </Menu>
          </>
        ) : (
          <ul className={styles.menuList}>
            {menuItems.map((item) => {
              const isCurrentPath = item.link === router.pathname;
              return (
                <motion.li key={item.title} initial="initial" whileHover="hover" className={styles.menuListItem}>
                  <Link href={item.link} passHref>
                    <a className={styles.menuListItemLink} style={{ color: isCurrentPath ? theme.palette.secondary.main : theme.palette.primary.main }}>
                      {item.title}
                    </a>
                  </Link>
                  <motion.div
                    className={styles.menuListItemUnderline}
                    transition={{ duration: 0.3 }}
                    variants={{
                      initial: { width: 0 },
                      hover: { width: "100%" },
                    }}
                  />
                </motion.li>
              );
            })}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Header;
