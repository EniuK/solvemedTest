import { Box, Link, Typography, Input, Button, FormControl } from "@mui/material";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import PopUpWrapper from "./PopUpWrapper";

const PopUp = ({ onClose, status, message, onValidated }: any) => {
  const inputRef = useRef(null);
  const [inner, setInner] = useState(false);
  const [outer, setOuter] = useState(false);
  const [inputClick, setInputClick] = useState(false);
  const [clickState, setClickState] = useState(false);
  const boxRef = useRef(null);
  const [windowDimensions, setWindowDimensions] = useState({
    width: 0,
    height: 0,
  });
  useEffect(() => {
    function handleResize() {
      setWindowDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  useEffect(() => {
    if (boxRef.current) {
      boxRef.current.focus();
    }
  }, []);
  const handleInner = (e: any) => {
    setClickState(true);
    e.stopPropagation();
    setInner(true);
    setInputClick(true);
  };

  const handleInput = (e: any) => {
    setClickState(true);
    e.stopPropagation();
    setInner(true);
    setInputClick(true);
  };
  const outerHandler = () => {
    let help = inner;
    let help2 = inputClick;
    let help3 = clickState;

    setOuter(true);

    if (!help) {
      if (!help2) {
        if (!help3) onClose();
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

  // mailchimp

  const [email, setEmail] = useState("");

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    email &&
      email.indexOf("@") > -1 &&
      onValidated({
        MERGE0: email,
      });
    await console.log(status);
    await console.log(message);
    // onClose();
  };
  return (
    <PopUpWrapper onclick={outerHandler}>
      <Box
        ref={boxRef}
        mr={2}
        ml={2}
        border={"thin"}
        boxShadow={"0px 8px 32px rgba(27, 37, 74, 0.08)"}
        position={"fixed"}
        width={windowDimensions.width < 480 ? 335 : 480}
        minHeight={357}
        bgcolor={"rgba(245, 245, 247, 1)"}
        borderRadius={6}
        display={"flex"}
        flexDirection={"column"}
        justifyContent={"center"}
        alignItems={"center"}
        pt={3}
        pb={3}
        tabIndex={0}
        sx={{
          "&:focus:not(.focus-visible)": {
            outline: "none",
          },
        }}
        style={{
          backgroundImage: `url('/images/bg/gradient.png')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        zIndex={300}
        onClick={handleInner}
        onFocus={() => {
          setInputClick(true);
          setInner(true);
          setClickState(true);
        }}
        onBlur={() => {
          setInner(false);
          setClickState(false);
          setInputClick(false);
        }}
      >
        <Box width={"100%"} display={"flex"} height={"5%"} justifyContent={"flex-end"} alignItems={"center"}>
          <Box mr={3}>
            <Image src="/images/icons/closeicon.png" alt="X" height="30px" width="30px" onClick={onClose} />
          </Box>
        </Box>
        <Typography
          ml={4}
          mr={4}
          fontFamily={"FinancierDisplay"}
          fontWeight={300}
          fontSize={windowDimensions.width < 480 ? 32 : 44}
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
        {windowDimensions.width > 480 ? (
          <Box mt={8} ml={10} mb={5} width={"100%"} justifyContent={"center"} alignItems={"center"}>
            <form className="mc__form" onSubmit={(e) => handleSubmit(e)}>
              <Input
                onClick={handleInput}
                onFocus={() => {
                  setInputClick(true);
                  setInner(true);
                  setClickState(true);
                }}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                tabIndex={0}
                style={{ minWidth: "273px", marginRight: "15px", marginLeft: "30px" }}
                type="email"
                placeholder="Enter your email"
                ref={inputRef}
                onBlur={() => {
                  setInputClick(false);
                  setClickState(false);
                  setInner(false);
                }}
              />
            </form>

            <Button color="secondary" sx={{ backgroundColor: "black" }} onClick={(e) => handleSubmit(e)} variant="contained" size="large">
              Send
            </Button>
          </Box>
        ) : (
          <Box mt={8} ml={10} mb={2} width={"100%"} justifyContent={"center"} alignItems={"center"}>
            <form className="mc__form" onSubmit={(e) => handleSubmit(e)}>
              <Input
                onClick={handleInput}
                onFocus={() => {
                  setInputClick(true);
                  setInner(true);
                  setClickState(true);
                }}
                style={{ minWidth: "80%", marginRight: "15px" }}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                placeholder="Enter your email"
                ref={inputRef}
                onBlur={() => {
                  setInputClick(false);
                  setClickState(false);
                }}
              />
            </form>

            <Box width={"80%"} display={"flex"} alignItems={"flex-end"} justifyContent={"flex-end"}>
              <Button color="secondary" sx={{ backgroundColor: "black", marginTop: "20px" }} onClick={(e) => handleSubmit(e)} variant="contained" size="large">
                Send
              </Button>
            </Box>
          </Box>
        )}
      </Box>
    </PopUpWrapper>
  );
};

export default PopUp;
