import Contact from "../components/Contact";
import { ThemeProvider } from "styled-components";
import theme from "../styles/theme";
import { Container } from "../styles/globalStyles";

const ContactPage = () => {
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Contact />
      </Container>
    </ThemeProvider>
  );
};

export default ContactPage;
