import { Button, Flex, Heading, Image } from "@chakra-ui/react";

export const Hero = () => (
  <Flex
    justifyContent="center"
    alignItems="center"
    h="100vh"
    w="100%"
    flexWrap="wrap"
  >
    <Flex flexDir="column">
      <Heading>Making your life sweeter!</Heading>
      <Button>Hire us!</Button>
    </Flex>
    <Image src="dplogo.png" />
  </Flex>
);
