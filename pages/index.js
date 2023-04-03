import Header from "../components/Header";
import About from "../components/About";
import ProjectCard from "../components/ProjectCard";
import Footer from "../components/Footer";
import Portfolio from "../components/Portfolio";
import Hero from "../components/Hero";
import { Container } from "../styles/globalStyles";
import { ThemeProvider } from "styled-components";
import theme from "../styles/theme";

export default function Home() {
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Header />
        <Hero />

        <main>
          <About />
          <Portfolio />
        </main>

        <Footer />
      </Container>
    </ThemeProvider>
  );
}
