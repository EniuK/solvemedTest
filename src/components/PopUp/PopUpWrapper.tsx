import { Box } from "@mui/material";

const PopUpWrapper = ({ children, onclick }: any) => {
  return (
    <Box
      position={"fixed"}
      bgcolor={"rgba(0, 0, 0, 0.3)"}
      display={"flex"}
      zIndex={700}
      width={"100vw"}
      padding={"auto"}
      justifyContent={"center"}
      alignItems={"center"}
      height={"100vh"}
      sx={{ backdropFilter: "blur(4px)" }}
      overflow={"hidden"}
      onClick={onclick}
    >
      {children}
    </Box>
  );
};

export default PopUpWrapper;
