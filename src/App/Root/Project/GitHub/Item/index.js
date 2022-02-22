import image from "assets/icons/socials/github.png";
import A from "components/A";
import styled, { css } from "styled-components";

const Wrapper = styled(A)`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

const Image = styled.img`
  height: 50px;
  width: 50px;
  ${({ color }) =>
    color === "white" &&
    css`
      filter: invert();
    `}
  margin-left: auto
`;

const Text = styled.div`
  font-family: Mononoki;
`;

const Item = ({ className, title, color, ...props }) => {
  return (
    <Wrapper
      className={className}
      target="_blank"
      referrer="noreferrer"
      {...props}
    >
      <Image src={image} color={color} />
      <Text>{title}</Text>
    </Wrapper>
  );
};

export default Item;
