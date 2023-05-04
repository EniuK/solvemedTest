import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import Image from "next/image";

const NewestPosts = () => {
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

  return (
    <Box width={"100vw"}>
      <Box>
        <Box mb={3}>
          <Typography fontSize={"64px"} fontFamily={"FinancierDisplay"}>
            Newest Posts
          </Typography>
        </Box>
        {fakeData.map((e, idx) => {
          return (
            <Box key={idx} width={"1100px"} maxHeight={"360px"}>
              <Box display={"flex"} justifyContent={"center"} alignItems={"center"}>
                <Box mr={5}>
                  <Image src={e.src} width={"538px"} height={"356.72px"} alt={"post"} />
                </Box>
                <Box display={"flex"} justifyContent={"flex-start"} alignItems={"flex-start"} flexDirection={"column"}>
                  <Box display={"flex"} color={"rgba(82, 66, 238, 1)"} flexDirection={"row"} justifyContent={"center"} alignItems={"center"}>
                    {e.categories.map((cat, idx) => {
                      return <Box key={idx}>{cat}</Box>;
                    })}
                    <Box m={1} width={"4px"} height={"4px"} borderRadius={4} bgcolor={"#5242EE"} />
                    {e.est}
                  </Box>
                  <Box fontSize={"42px"} fontFamily={"FinancierDisplay"} lineHeight={"110%"} fontWeight={300}>
                    {e.title}
                  </Box>
                  <Box mt={1} color={"#4E4E4E"} fontSize={"14px"} lineHeight={"140%"} fontFamily={"SuisseIntl"}>
                    {e.desc}
                  </Box>
                  <Box mt={1}> by {e.author}</Box>
                </Box>
              </Box>
            </Box>
          );
        })}
      </Box>
    </Box>
  );
};

export default NewestPosts;
