import styled from "styled-components";
import { ThemeProvider } from "styled-components";
import theme from "../styles/theme";
import Skills from "./Skill";

const AboutWrapper = styled.section`
  background-color: ${({ theme }) => theme.colors.light};
  padding: 60px 0;

  h2 {
    font-size: ${({ theme }) => theme.fontSizes.xxl};
    margin-bottom: 30px;
  }

  p {
    font-size: ${({ theme }) => theme.fontSizes.lg};
    line-height: ${({ theme }) => theme.lineHeights.body};
  }
`;

const SkillsHeader = styled.h3`
  margin-top: 32px;
`;

const About = () => {
  return (
    <ThemeProvider theme={theme}>
      <AboutWrapper>
        <h2>About Me</h2>
        <p>
          Hi, my name is Liban Abdullahi and I am a junior full-stack developer
          with a passion for building beautiful and functional web applications.
          My focus is on creating user-centric designs and experiences that help
          solve problems and make people&apos;s lives easier.
        </p>
        <SkillsHeader>Skills</SkillsHeader>
        <Skills />
      </AboutWrapper>
    </ThemeProvider>
  );
};

export default About;
