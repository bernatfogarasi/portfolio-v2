import { HashLink } from "react-router-hash-link";
import styled from "styled-components";

const Wrapper = styled(HashLink)`
  color: black;
  text-decoration: none;
`;

const Button = ({ className, ...props }) => {
  return <Wrapper className={className} smooth {...props}></Wrapper>;
};

export default Button;
