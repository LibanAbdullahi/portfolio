import styled from "styled-components";

const CardWrapper = styled.div`
  border-radius: 4px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  overflow: hidden;
`;

const ImageWrapper = styled.div`
  position: relative;
  padding-bottom: 60%;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  background-image: url(${props => props.imageUrl});
`;

const ContentWrapper = styled.div`
  padding: 20px;
  background-color: ${({ theme }) => theme.colors.light};
`;

const Title = styled.h3`
  margin-bottom: 10px;
`;

const Description = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.md};
  line-height: ${({ theme }) => theme.lineHeights.body};
`;

const Button = styled.a`
  display: inline-block;
  padding: 10px 20px;
  margin-top: 20px;
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.light};
  border-radius: 4px;
  transition: background-color 0.2s ease-in-out;

  &:hover {
    background-color: ${({ theme }) => theme.colors.primaryDark};
  }
`;

const ProjectCard = ({ title, description, imageUrl, projectUrl }) => {
  return (
    <CardWrapper>
      <ImageWrapper imageUrl={imageUrl} />
      <ContentWrapper>
        <Title>{title}</Title>
        <Description>{description}</Description>
        <Button href={projectUrl} target="_blank" rel="noopener noreferrer">
          View Project
        </Button>
      </ContentWrapper>
    </CardWrapper>
  );
};

export default ProjectCard;
