import { Box, MenuItem } from "@mui/material";
import Link from "next/link";
import styles from "./link.module.css";
const FooterLinks = ({ el }: any) => {
  return (
    <Link href={el.link} className={styles.links} passHref prefetch={true}>
      <MenuItem dense disableRipple>
        {el.title.toUpperCase()}
      </MenuItem>
    </Link>
  );
};

export default FooterLinks;
