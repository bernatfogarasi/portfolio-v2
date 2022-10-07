import imageLink from "assets/icons/socials/link.png";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
  background: white;
  justify-content: center;
  border-radius: 4px;
  padding: 20px;
`;

const Image = styled.img`
  height: 40px;
`;

const Text = styled.div`
  font-family: Mononoki;
  font-size: 20px;
  text-align: center;
`;

const OpenButton = styled.a`
  background: none;
  padding: 10px;
  border-radius: 4px;
  text-decoration: none;
  color: black;
  border: 2px solid;
  font-family: Mononoki;
  display: flex;
  align-items: center;
  gap: 10px;
  :hover {
    transform: scale(1.1);
    transition: 0.1s;
  }
  :active {
    transform: scale(0.9);
  }
`;

const OpenButtonText = styled.div``;

const OpenButtonImage = styled(Image)`
  height: 20px;
`;

const Item = ({ className, item, children }) => {
  return (
    <Wrapper className={className}>
      <Image src={item.src} />
      <Text>{item.text}</Text>
      <Text>{item.displayHref}</Text>
      <OpenButton
        target={item.blank ? "_blank" : ""}
        rel="noreferrer"
        href={item.href}
      >
        <OpenButtonText>Open</OpenButtonText>
        <OpenButtonImage src={imageLink} />
      </OpenButton>
    </Wrapper>
  );
};

export default Item;
