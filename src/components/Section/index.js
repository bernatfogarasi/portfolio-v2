import styled from "styled-components";

const Wrapper = styled.div`
  height: calc(100vh - 64px);
  box-sizing: border-box;
  padding: min(6vw, 6vh);
  max-width: 1600px;
  margin: auto;
`;

const Section = ({ className, ...props }) => {
  return <Wrapper className={className} {...props}></Wrapper>;
};

export default Section;
