import React from "react";
import { Box, Typography } from "@mui/material";
import styles from "./ApplicationsInfoGraphic.module.css";

const ApplicationsInfoGraphic = () => (
  <div className={styles.infoGraphicContainer}>
    <Box width={{ md: "60%" }} className={styles.infoGraphicInternalContainer}>
      <Box className={styles.infoGraphicCore}>
        <img src="/images/logoVertical.svg" alt="Logo" />
        <Typography variant="body4" color="#494763" mb={2} mt={5}>
          Novel computer vision analytics
        </Typography>
        <Typography variant="body4" color="#494763">
          Proprietary predictive machine <br />
          learning
        </Typography>
      </Box>

      <Box className={styles.infoGraphicContainerBlock}>
        <Box right={{ xs: "40%", md: "80%" }} className={styles.infoGraphicItem}>
          <Box display="flex" flexGrow={1} alignItems="center">
            <img src="/images/applicationsIcon1.svg" alt="High-precision neuro-ocular biomarkers" style={{ width: 74, height: 74 }} />
          </Box>
          <Box>
            <Typography variant="body4" fontWeight="600" mb={1.5}>
              High-precision neuro-ocular biomarkers
            </Typography>
            <Typography variant="body6Wide" color="#494763">
              We provide medical and scientific camera-based tools for data capture
            </Typography>
          </Box>
        </Box>
        <img src="/images/arrowLongRight.svg" alt="Arrow right" className={styles.infoGraphicArrowIcon} style={{ left: 0 }} />
      </Box>

      <Box className={styles.infoGraphicContainerBlock}>
        <Box left={{ xs: "55%", md: "80%" }} className={styles.infoGraphicItem}>
          <Box display="flex" flexGrow={1} alignItems="center">
            <img src="/images/applicationsIcon2.svg" alt="Meta-data" style={{ width: 88, height: 83 }} />
          </Box>
          <Box>
            <Typography variant="body4" fontWeight="600" mb={1.5}>
              Meta-data
            </Typography>
            <Typography variant="body6Wide" color="#494763">
              Our proprietary ML technology combines EHR, demograpic and other data types for unprecedented insight
            </Typography>
          </Box>
        </Box>
        <img src="/images/arrowLongLeft.svg" alt="Arrow left" className={styles.infoGraphicArrowIcon} style={{ right: 0 }} />
      </Box>

      <Box className={styles.infoGraphicContainerBlock}>
        <Box right={{ xs: "50%", md: "60%" }} className={styles.infoGraphicBottomItem}>
          <Typography variant="body4" fontWeight="600" mb={1.5}>
            Clinical Evaluation
          </Typography>

          <img src="/images/applicationsIcon3.svg" alt="Clinical Evaluation" style={{ width: 71, height: 107 }} />

          <Typography variant="body6Wide" color="#494763">
            Assessments, screening, and Dx models
          </Typography>
        </Box>
        <img src="/images/arrowLongBottomLeft.svg" alt="Arrow bottom left" className={styles.infoGraphicArrowBottomIcon} style={{ right: 0 }} />
      </Box>

      <Box className={styles.infoGraphicContainerBlock}>
        <Box left={{ xs: "60%", md: "60%" }} className={styles.infoGraphicBottomItem}>
          <Typography variant="body4" fontWeight="600" mb={1.5}>
            Research <br />
            applications
          </Typography>

          <Box display="flex" alignSelf="flex-start" alignItems="center">
            <img src="/images/applicationsIcon4.svg" alt="Disease progression tracking" className={styles.infoGraphicIcon} />
            <Typography variant="body6Wide" color="#494763" ml={2}>
              Disease progression tracking
            </Typography>
          </Box>

          <Box display="flex" alignSelf="flex-start" alignItems="center">
            <img src="/images/applicationsIcon5.svg" alt="Patient stratification" className={styles.infoGraphicIcon} />
            <Typography variant="body6Wide" color="#494763" ml={2}>
              Patient stratification
            </Typography>
          </Box>

          <Box display="flex" alignSelf="flex-start" alignItems="center">
            <img src="/images/applicationsIcon6.svg" alt="Drug efficacy demonstration" className={styles.infoGraphicIcon} />
            <Typography variant="body6Wide" color="#494763" ml={2}>
              Drug efficacy demonstration
            </Typography>
          </Box>
        </Box>
        <img src="/images/arrowLongBottomRight.svg" alt="Arrow bottom right" className={styles.infoGraphicArrowBottomIcon} style={{ left: 0 }} />
      </Box>
    </Box>
  </div>
);

export default ApplicationsInfoGraphic;
