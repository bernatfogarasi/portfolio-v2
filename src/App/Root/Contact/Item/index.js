import A from "components/A";
import styled from "styled-components";

const Wrapper = styled(A)`
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

const Item = ({ className, src, children, ...props }) => {
  return (
    <Wrapper className={className} target="_blank" rel="noreferrer" {...props}>
      <Image src={src} />
      <Text>{children}</Text>
    </Wrapper>
  );
};

export default Item;
