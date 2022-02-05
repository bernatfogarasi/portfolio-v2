import styled from "styled-components";
import Button from "./Button";

const Wrapper = styled.div`
  display: flex;
  gap: 20px;
`;

const Menu = ({ className, ...props }) => {
  return (
    <Wrapper className={className} {...props}>
      <Button>Home</Button>
      <Button>Projects</Button>
      <Button>Resume</Button>
      <Button>About</Button>
      <Button>Contact</Button>
    </Wrapper>
  );
};

export default Menu;
