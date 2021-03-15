import { Box, Button, Flex, Heading, Image } from "@chakra-ui/react";

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
      <Box alignSelf="center" m={4}>
        <Button>Hire us!</Button>
      </Box>
    </Flex>
    <Image src="dplogo.png" boxSize={96} />
  </Flex>
);
