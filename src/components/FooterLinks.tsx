import { Box, MenuItem } from "@mui/material";
import Link from "next/link";
import styles from "./link.module.css";
const FooterLinks = ({ el }: any) => {
  return (
    <Link href={el.link} passHref prefetch={true}>
      <MenuItem dense disableRipple>
        <a className={styles.links}>{el.title.toUpperCase()}</a>
      </MenuItem>
    </Link>
  );
};

export default FooterLinks;
