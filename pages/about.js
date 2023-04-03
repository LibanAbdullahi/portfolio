import React from "react";
import { Container } from "../styles/globalStyles";
import { ThemeProvider } from "styled-components";
import theme from "../styles/theme";
import About from "../components/About";

const AboutPage = () => {
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <About />
      </Container>
    </ThemeProvider>
  );
};

export default AboutPage;
