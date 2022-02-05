import styled from "styled-components";

const Wrapper = styled.div`
  height: calc(100vh - 64px);
  box-sizing: border-box;
  padding: min(18vw, 18vh);
`;

const Section = ({ className, ...props }) => {
  return <Wrapper className={className} {...props}></Wrapper>;
};

export default Section;
