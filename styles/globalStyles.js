import styled, { createGlobalStyle } from "styled-components";

// Define common styles here
export const colors = {
  primary: "#00587A",
  secondary: "#00A8E8",
  tertiary: "#F7EBEC",
  text: "#333",
};

export const Container = styled.div`
  max-width: 1024px;
  margin: 0 auto;
  padding: 0 20px;
`;

// Define global styles using createGlobalStyle
const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: 'Open Sans', sans-serif;
    font-size: 16px;
    color: ${colors.text};
  }

  h1, h2, h3 {
    font-family: 'Montserrat', sans-serif;
    margin: 0;
  }

  a {
    text-decoration: none;
    color: ${colors.primary};
  }
`;

export default GlobalStyle;
