import styled from "styled-components";
import { ThemeProvider } from "styled-components";
import theme from "../styles/theme";

const SkillWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
`;

const SkillIcon = styled.img`
  height: 64px;
  width: 64px;
  margin-bottom: 10px;
`;

const SkillName = styled.span`
  font-size: 1.2rem;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.dark};
`;

const SkillsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 40px;
  margin-top: 30px;

  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
    gap: 20px;
  }
`;

const Skill = ({ name }) => {
  let icon;
  switch (name) {
    case "HTML":
      icon = "/icons/html.svg";
      break;
    case "CSS":
      icon = "/icons/css.svg";
      break;
    case "JavaScript":
      icon = "/icons/javascript.svg";
      break;
    case "React":
      icon = "/icons/react.svg";
      break;
    case "TypeScript":
      icon = "/icons/typescript.svg";
      break;
    case "Node.js":
      icon = "/icons/nodejs.svg";
      break;
    case "Next.js":
      icon = "/icons/nextjs.svg";
      break;
    case "Python":
      icon = "/icons/python.svg";
      break;
    case "Django":
      icon = "/icons/django.svg";
      break;
    case "MongoDB":
      icon = "/icons/mongodb.svg";
      break;
    case "Sqlite":
      icon = "/icons/sqlite.svg";
      break;
    case "Git":
      icon = "/icons/git.svg";
      break;
    // Add more cases here for other skills...
    default:
      icon = null;
  }

  return (
    <SkillWrapper>
      {icon && <SkillIcon src={icon} alt={`${name} Icon`} />}
      <SkillName>{name}</SkillName>
    </SkillWrapper>
  );
};

const Skills = () => {
  return (
    <ThemeProvider theme={theme}>
      <SkillsWrapper>
        <Skill name="HTML" />
        <Skill name="CSS" />
        <Skill name="JavaScript" />
        <Skill name="TypeScript" />
        <Skill name="React" />
        <Skill name="Node.js" />
        <Skill name="Next.js" />
        <Skill name="Python" />
        <Skill name="Django" />
        <Skill name="MongoDB" />
        <Skill name="Sqlite" />
        <Skill name="Git" />

        {/* Add more skills here */}
      </SkillsWrapper>
    </ThemeProvider>
  );
};

export default Skills;
