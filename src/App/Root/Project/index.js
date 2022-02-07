import A from "components/A";
import Section from "components/Section";
import styled from "styled-components";
import Slides from "./Slides";
import projects from "./projects";
import Stack from "./Stack";
import GitHub from "./GitHub";

const Wrapper = styled(Section)`
  display: flex;
  gap: min(5vw, 100px);
  box-sizing: border-box;
  background: ${({ colors }) => colors?.[0]};
  color: ${({ color }) => color};
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: min(2vw, 40px);
  width: 100%;
  box-sizing: border-box;
  overflow: hidden;
`;

const Head = styled.div`
  display: flex;
  gap: min(5vw, 80px);
  align-items: flex-start;
  width: 100%;
`;

const Index = styled.div`
  font-family: Mononoki;
  font-size: min(6vw, 80px);
`;

const Url = styled(A)`
  display: flex;
  flex-direction: column;
`;

const UrlTitle = styled.div`
  font-weight: 800;
  font-size: min(4vw, 40px);
`;

const UrlEnd = styled.div`
  font-size: min(3vw, 20px);
  font-family: Mononoki;
`;

const Project = ({ className, name, ...props }) => {
  const {
    index,
    title,
    url,
    urlEnd,
    slides,
    colors,
    color,
    stack,
    githubUrls,
  } = projects[name];

  return (
    <Wrapper className={className} {...props} colors={colors} color={color}>
      <Content>
        <Head>
          <Index>{index}:</Index>
          <Url href={url} target="_blank">
            <UrlTitle href={url}>{title}</UrlTitle>
            <UrlEnd>{urlEnd}</UrlEnd>
          </Url>
          <GitHub urls={githubUrls} color={color} />
        </Head>
        <Slides slides={slides} />
        <Stack stack={stack} color={color} />
      </Content>
    </Wrapper>
  );
};

export default Project;
