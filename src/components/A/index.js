import styled from "styled-components";

const Wrapper = styled.a`
  color: inherit;
  text-decoration: none;
`;

const A = ({ className, ...props }) => {
  return <Wrapper className={className} {...props}></Wrapper>;
};

export default A;
