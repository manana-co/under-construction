import { Input, Text, Box, Heading } from "@chakra-ui/react";
import type { NextPage } from "next";
import Head from "next/head";
import { DefenderIllustration } from "../components/DefenderIllustration";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
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
        <DefenderIllustration />
        <Heading size="2xl">More to come!</Heading>
        <Heading
          size="md"
          color="#317491"
          width="50rem"
          maxWidth="calc(100vw - 4rem)"
        >
          {
            "Please give us your email if you'd like to know when our store is back up."
          }
        </Heading>
        <Box
          width="20rem"
          border="2px solid #317491"
          display="inline-flex"
          flexDirection="column"
          justifyContent="center"
        >
          <Text color="#317491" height="30%" margin="5px 0 0 5px">
            EMAIL
          </Text>
          <Input
            type="email"
            background="#ebe2d7"
            variant="unstyled"
            outline="none"
            border="none"
            height="70%"
            color="#317491"
            fontSize="18px"
            margin="0 0 5px 5px"
          />
        </Box>
      </main>
    </>
  );
};

export default Home;
