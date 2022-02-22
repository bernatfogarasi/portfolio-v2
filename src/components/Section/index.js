import styled from "styled-components";

const Wrapper = styled.div`
  height: calc(100vh - 64px);
  box-sizing: border-box;
  padding: min(6vw, 6vh);
  max-width: 1600px;
  margin: auto;
`;

const Anchor = styled.div`
  position: absolute;
  margin: max(-6vw, -6vh);
  transform: translateY(-64px);
`;

const Section = ({ className, id, children, ...props }) => {
  return (
    <Wrapper className={className} {...props}>
      <Anchor id={id} />
      {children}
    </Wrapper>
  );
};

export default Section;
