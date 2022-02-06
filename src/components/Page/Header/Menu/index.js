import styled from "styled-components";
import Button from "./Button";

const Wrapper = styled.div`
  display: flex;
  gap: 20px;
`;

const Menu = ({ className, ...props }) => {
  return (
    <Wrapper className={className} {...props}>
      <Button to="#home">Home</Button>
      <Button to="#teamlistener">Projects</Button>
      <Button to="#resume">Resume</Button>
      <Button to="#contact">Contact</Button>
    </Wrapper>
  );
};

export default Menu;
