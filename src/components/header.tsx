import { useState } from "react";
import { Box, Menu, MenuItem, useMediaQuery } from "@mui/material";
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
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const router = useRouter();
  const open = Boolean(anchorEl);
  const matches = useMediaQuery("(max-width:900px)");

  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box display="flex" flexDirection="row" justifyContent="space-between" alignItems="flex-start" mb="145px">
      <Link href="/" passHref>
        <a>
          <Image src="/icons/logo.svg" alt="logo" width="234" height="34.5" />
        </a>
      </Link>

      <Box display="flex" flexDirection="column" position="fixed" top={38} right={50} zIndex={100}>
        {matches ? (
          <>
            <div style={{ width: "20px" }} onClick={handleClick}>
              <Box bgcolor="#141415" height="1px" />
              <Box bgcolor="#141415" height="1px" my={0.5} />
              <Box bgcolor="#141415" height="1px" />
            </div>

            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                "aria-labelledby": "basic-button",
              }}
            >
              {menuItems.map((item) => {
                const isCurrentPath = item.link === router.pathname;
                return (
                  <MenuItem key={item.title} onClick={handleClose}>
                    <Link href={item.link}>
                      <a
                        style={{
                          textDecoration: "none",
                          fontSize: 13,
                          textTransform: "uppercase",
                          marginBottom: 8,
                          color: isCurrentPath ? "#5242EE" : "#141415",
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
          <>
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
                      color: isCurrentPath ? "#5242EE" : "#141415",
                    }}
                  >
                    {item.title}
                  </a>
                </Link>
              );
            })}
          </>
        )}
      </Box>
    </Box>
  );
};

export default Header;
