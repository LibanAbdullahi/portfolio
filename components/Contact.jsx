import styled from "styled-components";
import { ThemeProvider } from "styled-components";
import theme from "../styles/theme";

const ContactWrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.light};
  height: 100vh;

  .container {
    width: 100%;
    max-width: 600px;
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Label = styled.label`
  font-size: 1.2rem;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.dark};
  margin-bottom: 5px;
`;

const Input = styled.input`
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  border: 1px solid ${({ theme }) => theme.colors.gray};
  border-radius: 4px;
  box-sizing: border-box;
  font-size: 1.2rem;
`;

const TextArea = styled.textarea`
  width: 100%;
  height: 200px;
  padding: 12px 20px;
  margin: 8px 0;
  border: 1px solid ${({ theme }) => theme.colors.gray};
  border-radius: 4px;
  box-sizing: border-box;
  font-size: 1.2rem;
`;

const Button = styled.button`
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.white};
  padding: 14px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1.2rem;
  margin-top: 10px;
  transition: background-color 0.3s;

  &:hover {
    background-color: ${({ theme }) => theme.colors.secondary};
  }
`;

const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Contact = () => {
  const handleSubmit = event => {
    event.preventDefault();
    // Add form submission logic here
  };

  return (
    <ThemeProvider theme={theme}>
      <ContactWrapper>
        <Container>
          <h2>Contact Me</h2>
          <p>
            Have a question or want to work together? Send me a message and I
            will get back to you as soon as possible!
          </p>
          <Form onSubmit={handleSubmit}>
            <Label htmlFor="name">Name</Label>
            <Input type="text" id="name" name="name" required />
            <Label htmlFor="email">Email</Label>
            <Input type="email" id="email" name="email" required />
            <Label htmlFor="subject">Subject</Label>
            <Input type="text" id="subject" name="subject" required />
            <Label htmlFor="message">Message</Label>
            <TextArea id="message" name="message" required />
            <Button type="submit">Send</Button>
          </Form>
        </Container>
      </ContactWrapper>
    </ThemeProvider>
  );
};

export default Contact;
