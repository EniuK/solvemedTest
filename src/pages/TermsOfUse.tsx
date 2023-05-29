import { Box, Button, Grid, TextField, Typography, useMediaQuery } from "@mui/material";
import { NextPage } from "next";
import Head from "next/head";
import { theme } from "../config/theme";

const policyFakedata = [
  {
    title: "General information ",
    items: [
      {
        text: "Privacy policy outlines the rules for processing and protection of personal data of Users when using Administrators websites",
      },
      {
        text: "A User, for the needs of this policy is defined as a person contacting and/or ordering services provided by the Administrator.",
      },
      {
        text: "Solvemed Group sp. z o. o., NIP: 7831824049, REGON: 387028665, bwith its registered office in Poznań at ul. Święty Marcin 29/8; 61-806, Poland, e-mail: ws@solvemed.ai is an Administrator of Personal Data according to the Regulation (EU) 2016/679 of the European Parliament and of the Council of 27 April 2016 on the protection of natural persons with regard to the processing of personal data and on the free movement of such data, and repealing Directive 95/46/WE (General Data Protection Regulation)L 119/40 PL Dziennik Urzędowy Unii Europejskiej 4.5.2016.",
      },
      {
        text: "Contact regarding the processing of personal data by the Administrator: ws@solvemed.ai",
      },
      {
        text: "The scope, purpose and period of data processing is outlined in further parts of this Privacy Policy",
      },
    ],
  },
  {
    title: "The purpose of collecting and processing of personal data by the Administrator",
    items: [
      {
        text: "The user entrusts the Administrator with the processing of personal data in order to use the WWW services and for the processing of User`s queries and orders made using Administrator`s contact form, including sending of personalised business information to the User.",
      },
      {
        text: "The user providing a contact phone number agrees to be contacted by Administrator by phone in order to enable the Administrator to provide services outlined in point 1 above.",
      },
      {
        text: "The User providing an email address agrees to be contacted by Administrator by email in order to enable the Administrator to provide services outlined in point 1 above.",
      },
      {
        text: "User’s consent by providing the information is voluntary, whereas lack of such consent may cause the Administrator to not be able to process queries/orders placed using the contact form.",
      },
      {
        text: "In an event of establishing cooperation between User and Administrator access to personal data may need to be granted to sub-contractors and affiliated partners of the Administrator. This will be clearly communicated to the User and access granted only with User’s permission.",
      },
    ],
  },
  {
    title: "The scope of data processing by Administrator",
    items: [
      {
        text: "Data gathered based on this Privacy Policy consist of all or some of the following:",
      },
      {
        text: "User data:",
        listItems: ["Name and surname", "Email address", "Telephone number", "Professional specialisation"],
      },
      {
        text: "The processing of above data includes creating backup copies of data.",
      },
    ],
  },
];

const TermsOfUse: NextPage<any> = () => {
  const isMobileView = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <>
      <div>
        <Head>
          <title>Solvemed Terms of use </title>
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
              Terms of use Solvemed Group sp. z o. o.
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
                        <Box key={item.text}>
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

export default TermsOfUse;
