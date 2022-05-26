import { Input, Text, Box, Heading, useTheme } from "@chakra-ui/react";
import type { NextPage } from "next";
import Head from "next/head";
import { DefenderIllustration } from "../components/DefenderIllustration";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  const {
    fonts: { heading, body },
  } = useTheme();
  return (
    <>
      <Head>
        <title>Mañana Co.</title>
        <link rel="icon" href="/favicon.ico" />
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link
          href="https://fonts.googleapis.com/css2?family=Vollkorn&display=swap"
          rel="stylesheet"
        />
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      <main className={styles.main}>
        <Heading size="2xl" color="#317491" fontFamily={heading}>
          More to come!
        </Heading>
        <DefenderIllustration />
        <Heading
          size="md"
          color="#317491"
          width="50rem"
          maxWidth="calc(100vw - 4rem)"
          fontFamily={body}
        >
          {
            "Please give us your email if you'd like to know when our store is back up."
          }
        </Heading>
        <Box
          width="40rem"
          maxWidth="calc(100vw - 3rem)"
          border="2px solid #317491"
          display="inline-flex"
          flexDirection="column"
          justifyContent="center"
        >
          <Text
            color="#317491"
            fontFamily={body}
            height="30%"
            margin="5px 0 0 5px"
            fontWeight={900}
          >
            EMAIL
          </Text>
          <Input
            type="email"
            width="calc(100% - 10px)"
            background="#ebe2d7"
            variant="unstyled"
            outline="none"
            border="none"
            height="70%"
            color="#317491"
            fontFamily={body}
            fontSize="18px"
            margin="0 5px 5px"
            fontWeight={800}
          />
        </Box>
      </main>
    </>
  );
};

export default Home;
