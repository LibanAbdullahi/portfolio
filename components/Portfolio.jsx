import styled from "styled-components";
import ProjectCard from "./ProjectCard";
import { projects } from "../projects/data";
import { ThemeProvider } from "styled-components";

import theme from "../styles/theme";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
`;

const Projects = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 40px;
  margin-top: 30px;
`;

const Portfolio = () => {
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Projects>
          {projects.map(project => (
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imageUrl={project.imageUrl}
              projectUrl={project.projectUrl}
            />
          ))}
        </Projects>
      </Container>
    </ThemeProvider>
  );
};

export default Portfolio;
