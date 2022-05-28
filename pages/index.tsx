import { useState, ChangeEvent, KeyboardEventHandler } from "react";
import {
  Input,
  Text,
  Box,
  Heading,
  useTheme,
  Button,
  Flex,
} from "@chakra-ui/react";
import type { NextPage } from "next";
import Head from "next/head";
import { DefenderIllustration } from "../components/DefenderIllustration";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  const {
    fonts: { heading, body },
  } = useTheme();
  const [email, setEmail] = useState("");
  const [emailIsValid, setEmailIsValid] = useState(true);
  const [placeholder, setPlaceholder] = useState("");
  console.log(emailIsValid);

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    console.log("on change");
    if (!emailIsValid) setEmailIsValid(true);
    setEmail(event.target.value);
  };

  const onKeyPress: KeyboardEventHandler<HTMLInputElement> = (event) =>
    event.key === "Enter" && submit();

  const submit = () => {
    console.log(email);
    const isEmailValid = !!email.length && false;
    if (!isEmailValid) {
      setEmailIsValid(false);
      setPlaceholder("Please enter valid email!");
    }
    setEmail("");
  };

  const onClick = () => {
    setEmail("");
    setEmailIsValid(true);
    setPlaceholder("Enter your email");
  };

  return (
    <>
      <Head>
        <title>Mañana Co.</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <DefenderIllustration />
        <Heading
          size="2xl"
          color="#317491"
          fontFamily={heading}
          width="45rem"
          maxWidth="calc(100vw - 4rem)"
        >
          More to come! Please give us your email if youd like to know when our
          store is back up. -Mañana
        </Heading>
        <Box
          width="40rem"
          maxWidth="calc(100vw - 3rem)"
          border={emailIsValid ? "2px solid #317491" : `2px solid #D03228`}
          display="inline-flex"
          flexDirection="column"
          justifyContent="center"
          marginTop="2rem"
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
            value={email}
            sx={{
              caretColor: "#D03228",
            }}
            onChange={onChange}
            onClick={onClick}
            onKeyDown={onKeyPress}
            placeholder={placeholder}
            _placeholder={{ opacity: 0.3 }}
          />
        </Box>
        <Flex
          justifyContent="flex-end"
          width="40rem"
          maxWidth="calc(100vw - 3rem)"
        >
          <Button
            onClick={submit}
            variant="unstyled"
            background="#D03228"
            borderRadius={0}
            padding="20px"
            marginTop="5px"
            display="flex"
            color="#ebe2d7"
            alignItems="center"
            border="2px solid transparent"
            _hover={{
              border: "2px solid #D03228",
              background: "#ebe2d7",
              color: "#D03228",
            }}
            _focus={{ boxShadow: "none" }}
          >
            Send it.
          </Button>
        </Flex>
      </main>
    </>
  );
};

export default Home;
