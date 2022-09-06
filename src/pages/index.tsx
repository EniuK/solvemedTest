import { Typography } from "@mui/material";
import type { NextPage } from "next";
import Image from "next/image";

const Home: NextPage = () => (
  <div>
    <Image src="/icons/logo.svg" alt="logo" width="234" height="34.5" />
    <Typography variant="h1" align="center">
      Meet breakthrough <br /> digital technology for <br /> brain health.
    </Typography>
  </div>
);

export default Home;
