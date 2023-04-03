import styled from "styled-components";
import { ThemeProvider } from "styled-components";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import theme from "../styles/theme";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const Title = styled.h1`
  font-size: 4rem;
  font-weight: bold;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 3rem;
  }

  @media (max-width: 576px) {
    font-size: 2rem;
  }
`;

const Subtitle = styled.p`
  font-size: 2rem;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }

  @media (max-width: 576px) {
    font-size: 1rem;
  }
`;

const Button = styled.button`
  background-color: ${props => props.theme.primary};
  color: black;
  font-size: 1.5rem;
  border: none;
  border-radius: 0.5rem;
  padding: 1rem 2rem;
  cursor: pointer;

  &:hover {
    background-color: ${props => props.theme.secondary};
  }
`;

const IconWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 2rem;

  & > * {
    margin: 0 1rem;
    font-size: 2rem;
    cursor: pointer;

    &:hover {
      color: ${props => props.theme.secondary};
    }
  }
`;

const Hero = () => {
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Title>Hi! My name is Liban Abdullahi.</Title>
        <Subtitle>I&apos;m a Full-Stack Developer.</Subtitle>
        <Button>Get in touch</Button>
        <IconWrapper>
          <FaGithub />
          <FaLinkedin />
        </IconWrapper>
      </Container>
    </ThemeProvider>
  );
};

export default Hero;
