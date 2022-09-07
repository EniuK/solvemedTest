import { Box } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

const menuItems = [
  { title: "Home", link: "/" },
  { title: "Science", link: "/science" },
  { title: "Application", link: "/applications" },
  { title: "Team", link: "/team" },
  { title: "Join", link: "#" },
  { title: "Contact", link: "#" },
];

const Header = () => {
  const router = useRouter();

  return (
    <Box paddingX={6.25} display="flex" flexDirection="row" justifyContent="space-between" alignItems="flex-start">
      <Link href="/" passHref>
        <a>
          <Image src="/icons/logo.svg" alt="logo" width="234" height="34.5" />
        </a>
      </Link>

      <Box display="flex" flexDirection="column">
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
      </Box>
    </Box>
  );
};

export default Header;
