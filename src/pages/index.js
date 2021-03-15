import { Container } from "../components/Container";
import { DarkModeSwitch } from "../components/DarkModeSwitch";
import { Hero } from "../components/Hero";
import { Main } from "../components/Main";

const Index = () => (
  <Container height="100vh">
    <Hero />
    <Main></Main>
    <DarkModeSwitch />
  </Container>
);

export default Index;
