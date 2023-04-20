import { ReactNode } from "react";
import { Link, Typography, useTheme } from "@mui/material";
import { motion } from "framer-motion";
import styles from "./AnimatedButton.module.css";

type Props = { url: string; children: ReactNode; variant?: "filled" | "outlined" };

const AnimatedButton: React.FC<Props> = ({ url, children, variant = "outlined", onFun }) => {
  const { palette } = useTheme();
  const transition = { ease: "easeInOut" };
  const filledVariant = variant === "filled";

  const buttonVariants = filledVariant
    ? { initial: { backgroundColor: palette.secondary.main }, active: { backgroundColor: palette.common.black } }
    : { initial: {}, active: { backgroundColor: palette.secondary.main } };

  return (
    <Link
      {...(onFun ? { onclick: { onFun } } : null)}
      href={url}
      ml={{ xs: "0", sm: "auto" }}
      target="_blank"
      rel="noopener"
      className={`${styles.button} ${filledVariant ? styles.buttonPrimary : ""}`}
      component={motion.a}
      transition={transition}
      variants={buttonVariants}
      initial="initial"
      whileHover="active"
    >
      <Typography
        className={styles.buttonLabel}
        component={motion.span}
        variant={filledVariant ? "body5" : "body6"}
        color={filledVariant ? palette.common.white : palette.secondary.main}
        mr={filledVariant ? 0 : 2.5}
        transition={transition}
        variants={{ initial: { y: "-50%", opacity: 1 }, active: { y: "-200%", opacity: 0 } }}
      >
        {children}
      </Typography>
      <Typography
        className={styles.buttonLabel}
        component={motion.span}
        variant={filledVariant ? "body5" : "body6"}
        color="common.white"
        mr={filledVariant ? 0 : 2.5}
        transition={transition}
        variants={{ initial: { y: "100%", opacity: 0 }, active: { y: "-50%", opacity: 1 } }}
      >
        {children}
      </Typography>

      {!filledVariant && (
        <motion.div className={styles.buttonIcon} transition={transition} variants={{ initial: { right: "20%" }, active: { right: "15%" } }}>
          <motion.svg width="10" height="9" viewBox="0 0 10 9" fill="none" xmlns="http://www.w3.org/2000/svg">
            <motion.path d="M-1.5299e-07 4.5L8 4.5M8 4.5L4 1M8 4.5L4 8" stroke={palette.secondary.main} variants={{ active: { stroke: palette.common.white } }} strokeWidth="1.5" />
          </motion.svg>
        </motion.div>
      )}
    </Link>
  );
};

export default AnimatedButton;
