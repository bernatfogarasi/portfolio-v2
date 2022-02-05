import Section from "components/Section";
import styled from "styled-components";

const Wrapper = styled(Section)``;

const Contact = ({ className, ...props }) => {
  return (
    <Wrapper className={className} {...props}>
      Contact
    </Wrapper>
  );
};

export default Contact;
