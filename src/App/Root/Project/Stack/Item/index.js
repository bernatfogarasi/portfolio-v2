import styled, { css } from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  width: 100%;
`;

const Image = styled.div`
  height: 4vw;
  max-height: 40px;
  max-width: 100%;
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
    `};
`;

const Title = styled.div`
  text-align: center;
  font-family: Mononoki;
  font-size: min(2vw, 18px);
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
