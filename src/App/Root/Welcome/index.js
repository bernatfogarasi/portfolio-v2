import Section from "components/Section";
import styled from "styled-components";

const Wrapper = styled(Section)`
  display: flex;
  flex-direction: column;
`;

const Text = styled.div`
  font-family: Mononoki;
  font-size: min(3vw, 3vh);
`;

const Name = styled.div`
  font-size: min(6vw, 10vh);
  font-weight: 800;
`;

const Role = styled.div`
  font-size: min(6vw, 10vh);
  font-weight: 800;
  text-shadow: -1px -1px 0 black, 1px -1px 0 black, -1px 1px 0 black,
    1px 1px 0 black;
  color: white;
`;

const Skills = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin-top: auto;
  background: white;
  margin: max(-6vw, -6vh);
  margin-top: auto;
`;

const Welcome = ({ className, ...props }) => {
  return (
    <Wrapper className={className} {...props}>
      <Text>Hi, my name is</Text>
      <Name>Bernat Fogarasi</Name>
      {/* <Text>and</Text> */}
      <Role>I build things for the web.</Role>
    </Wrapper>
  );
};

export default Welcome;
