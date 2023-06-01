import { Box, Typography, useMediaQuery } from "@mui/material";
import { NextPage } from "next";
import Head from "next/head";
import { theme } from "../config/theme";

const policyFakedata = [
  {
    title: "General information ",
    items: [
      {
        text: "For the sake of your comfort and respecting your right to privacy, this Privacy Policy is intended to clearly inform you, (the User), about the information we (Solvemed) obtain and to outline the principles and purposes for which we process this information.",
      },
      {
        text: "Our commitment is to process the entrusted data in a secure and lawful manner.        ",
      },
      {
        text: "By using our website, two categories of information may be collected: Personal Data and Cookies.        ",
      },
    ],
  },
  {
    title: "Personal Data    ",
    items: [
      {
        text: "Personal Data, in accordance with art. 4(1) of GDPR is any data that identifies a specific natural person and any information about that identified person.         ",
      },
      {
        text: "Purpose and scope of processed data. In order to enable you to contact us via the contact form provided on the website, we process your: name and surname, e-mail address. If you are a medical practitioner and you are contacting to access our application (App), in order to better manage the distribution of our medical device, we additionally ask for your specialization and the type of device you use.",
      },
      {
        text: "Data Controller is Solvemed Group sp. z o. o. with its registered office in Poznań, ul. Święty Marcin 29/8; 61-806, Poland. Registered in National Court Register (KRS) under number 859939; NIP 7831824049; e-mail: ws@solvemed.ai;",
      },
      {
        text: "Basis and timeframes of data processing. We process data on the basis of your consent, for the period of correspondence and 5 years after its termination. If the contact results in the establishment of cooperation (provision of the App), personal data will be processed on the basis of the agreement (Terms of use) for the period of use of the application and 5 years after its termination. The legal basis and the duration of data processing may change if there is a legitimate legal reason.",
      },
      {
        text: "Your rights. As a user, you have the right to:",
        listItems: [
          "request access to and obtain a copy of your personal data;",
          "rectify (amend) your data;",
          "have the processing restricted;",
          "revoke consent to data processing;",
          "lodge a complaint to the President of the Office for Personal Data Protection.",
        ],
        additionalInfo: "For more information on your rights, see art. 12–23 GDPR.",
      },
      {
        text: "Due to Solvemed's global operations, your data may be transferred between Solvemed group companies in different jurisdictions (including outside the EU), which does not affect the security or standard of data protection.",
      },
    ],
  },
  {
    title: "Cookies",
    items: [
      {
        text: "Cookies are small text files that are stored on your computer or smartphone when you view our website. ",
      },
      {
        text: "What kind of cookies we use? There are different types of cookies. They can be divided into two groups:",
        listItems: [
          "Necessary for the use of the website (to ensure the stability of its operation) are applied by default when you enter our website (in accordance with the Telecommunications Law);",
          "Others - used for analytical purposes, only if you agree to it, such as: number of users, session statistics (entries, exits), approximate geolocation, information about the browser and device on which the site is visited, form interactions, video interactions, page scrolls so-called scroll, site searches, outbound clicks and page views (page loads).",
        ],
      },
      {
        text: "For what purpose do we use cookies? We use cookies files to gather general and anonymous statistical data via Google Analytics tools (cookies administrator: Google Inc. USA) in order to ensure the proper working of the website service, adjusting content to User’s preferences, and optimising the use of service`s websites. The cookies files allow the identification of the basic parameters of the user’s device (e.g. device type, screen resolution, location by country) and proper viewing of the website according to user’s requirements.",
      },
      {
        text: "Can I revoke consent or delete cookies? You can change the settings of cookies files anytime by setting conditions of access and keeping of cookies files data in browser settings. The settings may be adjusted in such way as to block automatic processing of cookies by the browser or/and notifying the user each time cookies are placed on User’s device. Detailed information on use and processing of cookies is available in program (browser) settings. You can also delete cookies using browser functions at any time.",
      },
    ],
  },
];

const PrivacyPolicy: NextPage<any> = () => {
  const isMobileView = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <>
      <div>
        <Head>
          <title>Solvemed Privacy Policy</title>
          <meta property="og:title" content="Solvemed Contact" />
          <meta property="og:type" content="website" />
          <meta
            name="description"
            content="Decoding neurology. In the blink of AI. Solvemed is a VC-backed Neuroscience AI company working to redefine neurology care and drug development. With neurodegenerative diseases (dementias) as the primary focus area, Solvemed leverages its proprietary machine learning technology to develop first-in-class digital biomarkers to support development of neurological drugs and establish affordable clinical examination and remote monitoring tools."
          />
        </Head>
      </div>
      <Box mx={"16px"} pr={isMobileView ? "32px" : ""} width={"100%"} display={"flex"} justifyContent={"center"} alignItems={"center"}>
        <Box width={isMobileView ? "100%" : "50%"}>
          <Box mt={isMobileView ? "" : "30px"} mb={"64px"}>
            <Typography fontFamily={"FinancierDisplay"} fontSize={"44px"} letterSpacing={"-0.03em"}>
              Privacy policy Solvemed Group sp. z o. o.
            </Typography>
          </Box>
          <Box
            fontFamily={"SuisseIntl"}
            fontWeight={100}
            lineHeight={isMobileView ? "160%" : "160%"}
            fontSize={isMobileView ? "15px" : "17px"}
            letterSpacing={"0.02em"}
            color={"#4E4E4E"}
          >
            {policyFakedata.map((el, idx) => {
              return (
                <Box key={el.title}>
                  <Box width={"100%"}>
                    <Box mb={4} mt={4}>
                      §{idx + 1}
                      {". "} {el.title}
                    </Box>
                  </Box>
                  <Box width={"100%"}>
                    {el.items.map((item, indx) => {
                      return (
                        <Box key={item.text} mt={2}>
                          <Box display={"flex"}>
                            <Box>
                              {indx + 1}
                              {". "}
                            </Box>
                            <Box>
                              {" "}
                              {"\u00A0"}
                              {item.text}
                            </Box>
                          </Box>

                          {item.listItems && (
                            <ul style={{ marginTop: 0 }}>
                              {item.listItems.map((listIt) => {
                                return (
                                  <li style={{ listStyleType: "disc", marginLeft: "32px" }} key={listIt}>
                                    <Box>{listIt}</Box>
                                  </li>
                                );
                              })}
                            </ul>
                          )}
                          {item?.additionalInfo && <Box>{item.additionalInfo}</Box>}
                        </Box>
                      );
                    })}
                  </Box>
                </Box>
              );
            })}
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default PrivacyPolicy;
