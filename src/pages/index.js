import { Text } from "@chakra-ui/react";
import { Container } from "../components/Container";
import { DarkModeSwitch } from "../components/DarkModeSwitch";
import { Hero } from "../components/Hero";
import { Main } from "../components/Main";

const Index = () => (
  <Container height="100vh">
    <Hero />
    <Main>
      <Text>testing</Text>
    </Main>
    <DarkModeSwitch />
  </Container>
);

export default Index;
