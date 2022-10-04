import React, { useRef, useState } from "react";
import Image from "next/image";
import { Backdrop as BackdropMUI, Box, Grid, Link, Modal, Typography } from "@mui/material";
import { TeamMember } from "../../pages/team";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./TeamMemberModal.module.css";
import { default as Slider, Settings, CustomArrowProps } from "react-slick";

type Props = {
  isOpen: boolean;
  onClose: () => void;
  member: TeamMember | null;
  members: TeamMember[];
};

const TeamMemberModal: React.FC<Props> = ({ isOpen, onClose, member, members }) => {
  const sliderRef = useRef<Slider | null>(null);
  const [activeIndex, setActiveIndex] = useState(member?.memberIndex ?? 0);

  const SliderNextArrow = ({ className, currentSlide, slideCount = 0 }: CustomArrowProps) => {
    const disabled = currentSlide === slideCount - 1;

    const onNextSlide = () => {
      if (disabled) return;
      sliderRef.current?.slickGoTo(activeIndex + 1);
      setActiveIndex((prev) => prev + 1);
    };

    return (
      <div className={`${className} ${styles.sliderArrow} ${styles.sliderArrowNext} ${disabled && styles.sliderArrowDisabled}`} onClick={onNextSlide}>
        <img src="/icons/chevron-right.svg" alt="Next button" />
      </div>
    );
  };

  const SliderPrevArrow = ({ className, currentSlide }: CustomArrowProps) => {
    const disabled = currentSlide === 0;

    const onPrevSlide = () => {
      if (disabled) return;
      sliderRef.current?.slickGoTo(activeIndex - 1);
      setActiveIndex((prev) => prev - 1);
    };

    return (
      <div className={`${className} ${styles.sliderArrow} ${styles.sliderArrowPrev} ${disabled && styles.sliderArrowDisabled}`} onClick={onPrevSlide}>
        <img src="/icons/chevron-left.svg" alt="Previous button" />
      </div>
    );
  };

  const SliderDots = ({ dots }: { dots: React.ReactNode }) => (
    <div className="slick-dots" style={{ display: "flex", justifyContent: "center" }}>
      {(dots as JSX.Element[])?.map((dot, idx) => (
        <div key={idx} className={`${styles[dot?.props?.className]} ${styles.sliderDot}`} />
      ))}
    </div>
  );

  const sliderSettings: Settings = {
    className: styles.slider,
    infinite: false,
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: activeIndex,
    nextArrow: <SliderNextArrow />,
    prevArrow: <SliderPrevArrow />,
    appendDots: (dots) => <SliderDots dots={dots} />,
  };

  return (
    <Modal
      open={isOpen}
      onClose={onClose}
      classes={{ root: styles.modal }}
      components={{
        Backdrop: (props) => <BackdropMUI {...props} style={{ backgroundColor: "#fff", opacity: 0.95 }} />,
      }}
    >
      <Box className={styles.sliderWrapper}>
        <Slider {...sliderSettings} ref={sliderRef}>
          {members.map((item, idx) => (
            <Box key={idx} bgcolor="#fff" p={7.5} px="76px" borderRadius="24px" position="relative" width="80%" height="100%">
              <div className={styles.closeBtn} onClick={onClose}>
                <Image src="/icons/close.svg" alt="close" width="16" height="16" />
              </div>

              <Grid container height="100%" style={{ overflowY: "auto" }}>
                <Grid item xs={12} md={4} display="flex" flexDirection="column">
                  <div className={styles.avatar}>{item?.photo && <Image src={item?.photo} style={{ borderRadius: 60 }} layout="fill" alt={item?.name} />}</div>

                  <Typography variant="body2Wide" fontWeight="600" mt="30px">
                    {item?.name}
                  </Typography>

                  <Typography variant="body2Wide" mb="20px">
                    {item?.position}
                  </Typography>

                  <Box display="flex" flexDirection="row" flexWrap="wrap" mb={3}>
                    {item.roles.map((role) => (
                      <Box key={role.title} className={styles.roleChip} bgcolor={role.color}>
                        <Typography variant="body6">{role.title}</Typography>
                      </Box>
                    ))}
                  </Box>

                  {(item?.linkedinUrl || item?.twitterUrl) && (
                    <div className={styles.socialIconsWrapper}>
                      {item?.linkedinUrl && (
                        <Link href={item.linkedinUrl} target="_blank" rel="noopener" className={styles.socialIcon}>
                          <Image src="/icons/linkedin-outlined.svg" alt="linkedin" width="23" height="23" />
                          <Typography variant="body4Wide" color="secondary.main" ml={1}>
                            Linkedin
                          </Typography>
                        </Link>
                      )}

                      {item?.twitterUrl && (
                        <Link href={item.twitterUrl} ml={1} target="_blank" rel="noopener" className={styles.socialIcon}>
                          <Image src="/icons/twitter-outlined.svg" alt="twitter" width="23" height="23" />
                          <Typography variant="body4Wide" color="secondary.main" ml={1}>
                            Twitter
                          </Typography>
                        </Link>
                      )}
                    </div>
                  )}
                </Grid>

                <Grid item xs={12} md={8} height="100%">
                  <Box width="80%">
                    <Typography variant="subtitle2" mb="30px">
                      {item?.bio?.title}
                    </Typography>

                    <Box display="flex" alignItems="center">
                      {item?.logos?.map((logo) => (
                        <div key={logo.id} className={styles.logoWrapper}>
                          <img src={logo.image} alt={logo.id} className={styles.logo} />
                        </div>
                      ))}
                    </Box>

                    <Typography variant="body3">{item?.bio?.description}</Typography>
                  </Box>
                </Grid>
              </Grid>
            </Box>
          ))}
        </Slider>
      </Box>
    </Modal>
  );
};

export default TeamMemberModal;
