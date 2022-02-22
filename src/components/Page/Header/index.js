import styled from "styled-components";

import Menu from "./Menu";
import Title from "./Title";

const Wrapper = styled.div`
  position: sticky;
  top: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
  padding: 20px;
  background: white;
  z-index: 1;
`;

const Header = ({ className, ...props }) => {
  return (
    <Wrapper className={className} {...props}>
      <Title />
      <Menu />
    </Wrapper>
  );
};

export default Header;
