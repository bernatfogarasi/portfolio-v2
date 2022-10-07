import styled from "styled-components";

import Item from "./Item";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 80px;
  height: fit-content;
  width: min-content;

  animation: marquee 40s linear infinite;
  :hover {
    animation-play-state: paused;
  }

  @keyframes marquee {
    0% {
      transform: translateX(40px);
    }
    100% {
      transform: translateX(-50%);
    }
  }
`;

const Stack = ({ className, stack = [], color, ...props }) => {
  return (
    <Wrapper className={className} {...props}>
      {stack.map((item) => (
        <Item key={item.title} color={color} {...item} />
      ))}
      {stack.map((item) => (
        <Item key={item.title} color={color} {...item} />
      ))}
      {stack.map((item) => (
        <Item key={item.title} color={color} {...item} />
      ))}
      {stack.map((item) => (
        <Item key={item.title} color={color} {...item} />
      ))}
      {stack.map((item) => (
        <Item key={item.title} color={color} {...item} />
      ))}
      {stack.map((item) => (
        <Item key={item.title} color={color} {...item} />
      ))}
    </Wrapper>
  );
};

export default Stack;
