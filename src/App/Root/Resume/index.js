import Iframe from "components/Iframe";
import Section from "components/Section";
import styled from "styled-components";

const Wrapper = styled(Section)`
  background: white;
  display: flex;
  flex-direction: column;
  gap: 40px;
`;

const Head = styled.div`
  display: flex;
  gap: 80px;
  align-items: center;
`;

const Title = styled.div`
  font-weight: 800;
  font-size: 40px;
`;

const Pdf = styled(Iframe)`
  height: 100%;
  width: 100%;
`;

const Resume = ({ className, ...props }) => {
  return (
    <Wrapper className={className} {...props}>
      <Head>
        <Title>Resume</Title>
      </Head>
      <Pdf
        src="https://drive.google.com/file/d/108GjJLnLrgcSWNqbluCwP06AI4e1IV9u/preview"
        width="640"
        height="480"
        allow="autoplay"
      ></Pdf>
    </Wrapper>
  );
};

export default Resume;
