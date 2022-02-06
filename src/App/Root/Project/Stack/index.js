import styled from "styled-components";
import Item from "./Item";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  /* justify-content: space-around; */
  gap: 10px;
`;

const Stack = ({ className, stack = [], color, ...props }) => {
  return (
    <Wrapper className={className} {...props}>
      {stack.map((item) => (
        <Item key={item.title} color={color} {...item} />
      ))}
    </Wrapper>
  );
};

export default Stack;
