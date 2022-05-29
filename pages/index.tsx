import { useState, ChangeEvent, KeyboardEventHandler } from "react";
import {
  Input,
  Text,
  Box,
  Heading,
  useTheme,
  Button,
  Flex,
  useMediaQuery,
} from "@chakra-ui/react";
import type { NextPage } from "next";
import Head from "next/head";
import { DefenderIllustration } from "../components/DefenderIllustration";

const Home: NextPage = () => {
  const {
    fonts: { heading, body },
  } = useTheme();
  const [isSmallerThan500] = useMediaQuery("(max-width: 500px)");
  const [email, setEmail] = useState("");
  const [emailIsValid, setEmailIsValid] = useState(true);
  const [placeholder, setPlaceholder] = useState("");

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (!emailIsValid) setEmailIsValid(true);
    setEmail(event.target.value);
  };

  const onKeyPress: KeyboardEventHandler<HTMLInputElement> = (event) =>
    event.key === "Enter" && submit();

  const submit = () => {
    const isEmailValid = !!email.length && false;
    if (!isEmailValid) {
      setEmailIsValid(false);
      setPlaceholder("Enter valid email!");
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
      <Box
        as="main"
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        background="#ebe2d7"
        padding="10px 0"
        minHeight="100vh"
      >
        <DefenderIllustration />
        <Heading
          size="2xl"
          color="#317491"
          fontFamily={heading}
          width="45rem"
          maxWidth="calc(100vw - 4rem)"
          margin={isSmallerThan500 ? "" : "20px 0"}
        >
          More to come! We&apos;ll email you when our store is back up.
        </Heading>
        <Flex
          justifyContent="flex-end"
          width="40rem"
          maxWidth="calc(100vw - 4rem)"
        >
          <Heading color="#317491" fontFamily={heading}>
            -Mañana
          </Heading>
        </Flex>
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
      </Box>
    </>
  );
};

export default Home;
