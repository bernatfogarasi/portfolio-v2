import Section from "components/Section";
import styled from "styled-components";

const Wrapper = styled(Section)`
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  padding: 20vh 10vw;
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

const Color = styled.div`
  z-index: -1;
  background: #ff0;
  position: absolute;
  height: 40vh;
  width: 60vw;
  top: 25vh;
  right: 10vw;
  border-bottom-right-radius: 10vw;
  border-bottom: 10px solid;
  border-right: 10px solid;
`;

const Welcome = ({ className, ...props }) => {
  return (
    <Wrapper className={className} {...props}>
      <Text>Hi, my name is</Text>
      <Name>Bernat Fogarasi</Name>
      <Text>and I'm a</Text>
      <Role>Developer</Role>
      {/* <Color /> */}
    </Wrapper>
  );
};

export default Welcome;
