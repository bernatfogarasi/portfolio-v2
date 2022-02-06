import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
  padding: 10px;
  gap: 20px;
`;

const Title = styled.div`
  font-size: 25px;
  font-family: Mononoki;
`;

const Description = styled.div`
  font-family: Mononoki;
`;

const ImageWrapper = styled.div`
  height: 100%;
  width: 100%;
  box-sizing: border-box;
  overflow: hidden;
  display: flex;
`;

const Image = styled.img`
  max-height: 100%;
  max-width: 100%;
  margin: auto;
  display: block;
  border: 2px solid;
  border-radius: 4px;
  box-sizing: border-box;
`;

const Slide = ({ className, slide, ...props }) => {
  const { title, description, image } = slide;
  return (
    <Wrapper className={className} {...props}>
      <Title>{title}</Title>
      <Description>{description}</Description>
      <ImageWrapper>
        <Image src={image} />
      </ImageWrapper>
    </Wrapper>
  );
};

export default Slide;
