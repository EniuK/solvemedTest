import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import Image from "next/image";

const Explore = () => {
  const fakeData = [
    {
      src: "/images/blog/newest.png",
      categories: ["Technology"],
      est: "5 min read",
      title: "Solvemed to advance neuro-ocular biomarker tech with latest raise",
      desc: "Solvemed announced Tuesday that it raised $3.5 million to help build out an artificial intelligence-based ocular biomarker engine.",
      author: "Hugo Chrost",
    },
  ];

  const menuItems = ["All", "News", "Technology", "Research", "People"];

  return (
    <Box width={"100vw"} mt={10}>
      <Box>
        <Box mb={3}>
          <Typography fontSize={"64px"} fontFamily={"FinancierDisplay"}>
            Explore
          </Typography>
        </Box>
        <Box display={"flex"} mt={10}>
          {menuItems.map((e, idx) => {
            return (
              <Box mr={4} p={2} pl={4} pr={4} key={idx} border={" 1px solid #E3E3E3"} borderRadius={20}>
                {e}
              </Box>
            );
          })}
        </Box>
      </Box>
    </Box>
  );
};

export default Explore;
