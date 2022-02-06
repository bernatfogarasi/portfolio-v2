import styled, { css } from "styled-components";

const Wrapper = styled.div`
  padding: 10px;
  /* background: white; */
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const Image = styled.div`
  height: 40px;
  aspect-ratio: 1;
  display: flex;
  background: url(${({ src }) => src});
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  ${({ color }) =>
    color === "white" &&
    css`
      filter: invert();
    `}
`;

const Title = styled.div`
  text-align: center;
  font-family: Mononoki;
`;

const Item = ({ className, title, color, ...props }) => {
  return (
    <Wrapper className={className} title={title} {...props}>
      <Image color={color} {...props} />
      <Title>{title}</Title>
    </Wrapper>
  );
};

export default Item;
