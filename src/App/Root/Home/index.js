import Section from "components/Section";
import styled from "styled-components";

import Graph from "./Graph";

const Wrapper = styled(Section)`
  display: flex;
  flex-direction: column;
  position: relative;
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

const Home = ({ className, ...props }) => {
  return (
    <Wrapper className={className} {...props}>
      <Text>Hi, my name is</Text>
      <Name>Bernat Fogarasi</Name>
      <Role>I build things for the web.</Role>
      <Graph />
    </Wrapper>
  );
};

export default Home;
