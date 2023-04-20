import { Box, Link, Typography, Input, Grid, Avatar, Button } from "@mui/material";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import PopUpWrapper from "./PopUpWrapper";

const PopUp = (onClose: any, onSend: any) => {
  const outerBoxRef = useRef(null);
  const innerBoxRef = useRef(null);
  const inputRef = useRef(null);
  const [inner, setInner] = useState(false);
  const [outer, setOuter] = useState(false);
  const [inputClick, setInputClick] = useState(false);
  const [fckinhelp, setfckinhelp] = useState(true);

  const handleInner = (e) => {
    setfckinhelp(true);
    e.stopPropagation();
    setInner(true);
    setInputClick(true);
  };

  const handleInput = (e) => {
    setfckinhelp(true);

    e.stopPropagation();
    setInner(true);
    setInputClick(true);
  };
  const outerHandler = () => {
    let help = inner;
    let help2 = inputClick;
    let help3 = fckinhelp;

    setOuter(true);

    if (!help) {
      if (!help2) {
        if (!help3) onClose.onClose();
      } else {
        setInner(true);
        help = true;
        setInputClick(true);
        help2 = true;
      }
    } else {
      setInner(true);
      help = true;
      setInputClick(true);
      help2 = true;
    }
  };

  return (
    <PopUpWrapper onclick={outerHandler}>
      <Box
        mr={2}
        ml={2}
        border={"thin"}
        boxShadow={"0px 8px 32px rgba(27, 37, 74, 0.08)"}
        position={"fixed"}
        minWidth={480}
        minHeight={357}
        bgcolor={"rgba(245, 245, 247, 1)"}
        borderRadius={6}
        display={"flex"}
        flexDirection={"column"}
        justifyContent={"center"}
        alignItems={"center"}
        pt={3}
        pb={3}
        style={{
          backgroundImage: `url('/images/bg/gradient.png')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        zIndex={300}
        ref={outerBoxRef}
        onClick={handleInner}
        onFocus={() => {
          setInputClick(true);
          setInner(true);
          setfckinhelp(true);
        }}
        onBlur={() => {
          setInner(false);
          setfckinhelp(false);
        }}
      >
        <Box width={"100%"} display={"flex"} height={"5%"} justifyContent={"flex-end"} alignItems={"center"}>
          <Box mr={3}>
            <Image src="/images/icons/closeicon.png" alt="X" height="30px" width="30px" onClick={onClose.onClose} />
          </Box>
        </Box>
        <Typography
          ml={4}
          mr={4}
          mt={2}
          fontFamily={"FinancierDisplay"}
          fontWeight={300}
          fontSize={44}
          justifyContent={"center"}
          variant={"h4"}
          alignItems={"center"}
          textAlign={"center"}
        >
          Don’t miss out on <br /> the important updates
        </Typography>

        <Typography textAlign={"center"} fontFamily={"SuisseIntl"} fontSize={14} variant={"body4"} color={"#595D62"} mt={3} ml={4.5} mr={4.5}>
          There is going to be up to 1 high quality email a month.
        </Typography>
        <Box mt={8} ml={10} mb={5} width={"100%"} justifyContent={"center"} alignItems={"center"}>
          <Box justifyContent={"flex-start"} alignItems={"flex-start"}>
            <Input
              onClick={handleInput}
              onFocus={() => {
                setInputClick(true);
                setInner(true);
                setfckinhelp(true);
              }}
              tabIndex={0}
              style={{ minWidth: "273px", marginRight: "20px" }}
              type="email"
              placeholder="Enter your email"
              ref={inputRef}
              onBlur={() => {
                setInputClick(false);
                setfckinhelp(false);
              }}
            />
          </Box>
          <Box width={"30%"} justifyContent={"flex-end"} alignItems={"flex-end"}>
            <Button color="secondary" sx={{ backgroundColor: "black" }} onClick={onSend.onClick} variant="contained" size="large">
              Send
            </Button>
          </Box>
        </Box>
      </Box>
    </PopUpWrapper>
  );
};

export default PopUp;
