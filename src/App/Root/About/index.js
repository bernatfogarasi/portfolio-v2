import Section from "components/Section";
import styled from "styled-components";

const Wrapper = styled(Section)``;

const About = ({ className, ...props }) => {
  return (
    <Wrapper className={className} {...props}>
      About
    </Wrapper>
  );
};

export default About;
