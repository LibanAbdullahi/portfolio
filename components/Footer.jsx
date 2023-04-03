import styled from "styled-components";

const FooterWrapper = styled.footer`
  padding: 20px;
  text-align: center;
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.light};
`;

const Footer = () => {
  return (
    <FooterWrapper>
      <p>&copy; 2023 My Portfolio</p>
    </FooterWrapper>
  );
};

export default Footer;
