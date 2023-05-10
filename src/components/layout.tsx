import { ReactNode, useEffect, useState } from "react";
import { Box, useMediaQuery } from "@mui/material";
import Footer from "./footer";
import Header from "./header";
import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from "next/router";
import MailchimpSubscribe from "../components/PopUp/PopUpMailchimp";

const variants = {
  initial: {
    transition: {
      duration: 0.3,
      delay: 0.5,
    },
  },
  animate: {
    transition: {
      duration: 0.3,
      delay: 0.5,
    },
  },
  exit: {
    transition: {
      duration: 0.3,
      delay: 0.5,
    },
  },
};

const Layout = ({ children }: { children: ReactNode }) => {
  const { asPath } = useRouter();
  const isSmallViewport = useMediaQuery("(max-width:900px)");
  const isHomeRoute = asPath === "/";
  const shouldAdjustBgImage = isSmallViewport && !isHomeRoute;
  const [notify, setNotify] = useState(false);
  const closeNotify = () => {
    setNotify(false);
  };

  const popUpTimer = () => {
    setTimeout(() => {
      setNotify(true);
    }, 30000);
  };
  useEffect(() => {
    const isVariableSet = localStorage.getItem("solvemed-email-popup-shown");

    if (!isVariableSet) {
      popUpTimer();

      localStorage.setItem("solvemed-email-popup-shown", "true");
    }
  }, []);

  return (
    <Box>
      {notify ? <MailchimpSubscribe onClose={closeNotify} /> : null}

      <Box
        style={{
          width: "100%",
          height: "100%",
          backgroundPosition: `center top ${shouldAdjustBgImage ? "-300px" : ""}`,
          backgroundOrigin: "border-box",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <Box paddingY={4.75} maxWidth="1467px" mx="auto" paddingX={{ xs: 1, md: 6.25 }} overflow="visible">
          <Header />
          <AnimatePresence mode="wait" initial={true}>
            <motion.main key={asPath} variants={variants} initial="initial" animate="animate" exit="exit">
              {children}

              <motion.div
                key={`${asPath}-overlay`}
                style={{
                  position: "fixed",
                  bottom: "-70%",
                  left: 0,
                  zIndex: 99,
                  width: "100%",
                  height: "170%",
                  pointerEvents: "none",
                }}
                transition={{ duration: 0.5 }}
                initial={false}
                variants={{
                  animate: {
                    WebkitMaskImage: "radial-gradient(circle, rgba(211,237,255,1) 0%, rgba(211,237,255,0) 0%)",
                    maskImage: "radial-gradient(circle, rgba(211,237,255,1) 0%, rgba(211,237,255,0) 0%)",
                  },
                  exit: {
                    WebkitMaskImage: "radial-gradient(circle, rgba(211,237,255,1) 0%, rgba(211,237,255,1) 100%)",
                    maskImage: "radial-gradient(circle, rgba(211,237,255,1) 0%, rgba(211,237,255,1) 100%)",
                  },
                }}
              >
                <div
                  style={{
                    backgroundColor: "#D3EDFF",
                    width: "100%",
                    height: "100%",
                  }}
                />
              </motion.div>
            </motion.main>
          </AnimatePresence>

          <Footer home={isHomeRoute} />
        </Box>
      </Box>
    </Box>
  );
};

export default Layout;
