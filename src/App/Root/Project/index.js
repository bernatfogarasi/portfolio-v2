import A from "components/A";
import Section from "components/Section";
import styled from "styled-components";
import Slides from "./Slides";
import projects from "./projects";
import Stack from "./Stack";

const Wrapper = styled(Section)`
  display: flex;
  gap: 100px;
  box-sizing: border-box;
  background: ${({ colors }) => colors?.[0]};
  color: ${({ color }) => color};
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  width: 100%;
  box-sizing: border-box;
  overflow: hidden;
`;

const Head = styled.div`
  display: flex;
  gap: 80px;
  align-items: center;
  width: 100%;
`;

const Index = styled.div`
  font-family: Mononoki;
  font-size: 80px;
`;

const Url = styled(A)`
  display: flex;
  flex-direction: column;
  padding-bottom: 10px;
`;

const UrlTitle = styled.div`
  font-weight: 800;
  font-size: 40px;
`;

const UrlEnd = styled.div`
  font-size: 20px;
  font-family: Mononoki;
`;

const Project = ({ className, name, ...props }) => {
  const { index, title, url, urlEnd, slides, colors, color, stack } =
    projects[name];

  return (
    <Wrapper className={className} {...props} colors={colors} color={color}>
      <Stack stack={stack} color={color} />
      <Content>
        <Head>
          <Index>P:{index}</Index>
          <Url href={url} target="_blank">
            <UrlTitle href={url}>{title}</UrlTitle>
            <UrlEnd>{urlEnd}</UrlEnd>
          </Url>
        </Head>
        <Slides slides={slides} />
      </Content>
    </Wrapper>
  );
};

export default Project;
