import Head from "next/head";
import { Container, Heading, Text } from "@chakra-ui/react";

const Home = () => {
  return (
    <>
      <Head>
        <title>Nextplate</title>
      </Head>
      <Container maxW={"5xl"} py={5}>
        <Heading>Nextplate Template</Heading>
        <Text>The opinionated starter for Next.js projects</Text>
      </Container>
    </>
  );
};

export default Home;
