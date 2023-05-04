import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { NextPage } from "next";
import Head from "next/head";
import NewestPosts from "../components/Blog/NewestPosts";
import Explore from "../components/Blog/Explore";
const Blog: NextPage<any> = () => {
  return (
    <>
      <div>
        <Head>
          <title>Solvemed Contact</title>
          <meta property="og:title" content="Solvemed Contact" />
          <meta property="og:type" content="website" />
          <meta
            name="description"
            content="Decoding neurology. In the blink of AI. Solvemed is a VC-backed Neuroscience AI company working to redefine neurology care and drug development. With neurodegenerative diseases (dementias) as the primary focus area, Solvemed leverages its proprietary machine learning technology to develop first-in-class digital biomarkers to support development of neurological drugs and establish affordable clinical examination and remote monitoring tools."
          />
        </Head>
        <Box>
          <Typography
            component={motion.p}
            textAlign={"center"}
            variant="h3"
            mb={{ xs: "60px", lg: "80px" }}
            variants={{ initial: { opacity: 0, y: 100 }, animate: { opacity: 1, y: 0 } }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            fontFamily={"FinancierDisplay"}
            fontWeight={300}
          >
            Solvemed Blog
          </Typography>

          <Typography
            component={motion.p}
            textAlign={"center"}
            variant="body2"
            width={{ xs: "100%", sm: "70%", md: "50%" }}
            margin="auto"
            mb={{ xs: "60px", lg: "80px" }}
            variants={{ initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 } }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            fontFamily={"FinancierDisplay"}
            fontWeight={300}
            color={"rgba(89, 93, 98, 1)"}
            fontSize={"18"}
          >
            Investors included European and US venture capital firms such as Atmos, APEX, Tensor, Preface and Techni, alongside Sunfish Partners, which had also contributed at the
            pre-seed stage in 2020.{" "}
          </Typography>
        </Box>
        <NewestPosts />
        <Explore />
      </div>
    </>
  );
};

export default Blog;
