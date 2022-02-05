import Section from "components/Section";
import styled from "styled-components";

const Wrapper = styled(Section)``;

const Resume = ({ className, ...props }) => {
  return (
    <Wrapper className={className} {...props}>
      Resume
    </Wrapper>
  );
};

export default Resume;
