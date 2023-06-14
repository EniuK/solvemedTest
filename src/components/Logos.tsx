import { Box } from "@mui/material";
import Image from "next/image";

const logos = [
  { src: "/images/homePage/logos/NASA.svg", w: 140, h: 40 },
  { src: "/images/homePage/logos/apple.svg", w: 140, h: 40 },
  { src: "/images/homePage/logos/stanford.svg", w: 140, h: 40 },
  { src: "/images/homePage/logos/cambridge.svg", w: 140, h: 40 },
  { src: "/images/homePage/logos/nhs.svg", w: 140, h: 40 },
  { src: "/images/homePage/logos/honkong.svg", w: 140, h: 40 },
];
const logosMobile = [
  { src: "/images/homePage/logos/apple.svg", w: 140, h: 40 },
  { src: "/images/homePage/logos/NASA.svg", w: 140, h: 40 },
  { src: "/images/homePage/logos/stanford.svg", w: 140, h: 40 },
  { src: "/images/homePage/logos/cambridge.svg", w: 140, h: 40 },
  { src: "/images/homePage/logos/nhs.svg", w: 140, h: 40 },
  { src: "/images/homePage/logos/honkong.svg", w: 140, h: 40 },
];

const Logos = ({ isMobileView }: { isMobileView: boolean }) => {
  return (
    <Box>
      <Box
        width={"100%"}
        display={"flex"}
        alignItems={"center"}
        fontWeight={300}
        fontStyle={"SuisseIntl"}
        justifyContent={"center"}
        mb={5}
        fontSize={"15px"}
        color={"rgba(94, 94, 94, 1)"}
      >
        Our team comes from
      </Box>
      {isMobileView ? (
        <Box display={"flex"} justifyContent={"center"} width={"100%"} alignItems={"center"} flexWrap={"wrap"}>
          {logosMobile.map((e, idx) => {
            return (
              <Box
                key={idx}
                width={"50%"}
                mb={6}
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
                data-aos="fade-up"
                data-aos-duration="2000"
                data-aos-anchor-placement="bottom"
                data-aos-once={"true"}
              >
                <Image
                  src={e.src}
                  width={e.w}
                  height={e.h}
                  alt={"company"}
                  priority
                  style={{
                    maxWidth: "100%",
                    height: "auto",
                  }}
                />
              </Box>
            );
          })}
        </Box>
      ) : (
        <Box display={"flex"} justifyContent={"center"} alignItems={"center"}>
          {logos.map((e, idx) => {
            return (
              <Box key={idx} mr={6} data-aos="fade-up" data-aos-duration="1000" data-aos-anchor-placement="top">
                <Image
                  src={e.src}
                  width={e.w}
                  height={e.h}
                  alt={"company"}
                  priority
                  style={{
                    maxWidth: "100%",
                    height: "auto",
                  }}
                />
              </Box>
            );
          })}
        </Box>
      )}
    </Box>
  );
};

export default Logos;
