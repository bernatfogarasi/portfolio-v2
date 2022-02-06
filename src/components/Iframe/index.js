import styled from "styled-components";

const Wrapper = styled.iframe`
  border: none;
`;

const Iframe = ({ className, ...props }) => {
  return <Wrapper className={className} {...props}></Wrapper>;
};

export default Iframe;
