import styled from "styled-components";

const Wrapper = styled.div``;

const Button = ({ className, ...props }) => {
  return <Wrapper className={className} {...props}></Wrapper>;
};

export default Button;
