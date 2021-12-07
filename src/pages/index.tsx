import Head from "next/head";
import { Container, Heading, Text } from "@chakra-ui/react";

import Hero from "../components/Hero";

const Home = () => {
  return (
    <>
      <Head>
        <title>Nextplate</title>
      </Head>
      <Hero />
    </>
  );
};

export default Home;
