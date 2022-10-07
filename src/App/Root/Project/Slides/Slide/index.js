import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
  padding: 10px;
  gap: 20px;
  justify-content: center;
  width: 80%;
  margin: auto;
`;

const Title = styled.div`
  font-size: 25px;
`;

const Description = styled.div`
  font-family: Mononoki;
`;

const ImageWrapper = styled.div`
  width: fit-content;
  height: fit-content;
  box-sizing: border-box;
  overflow: hidden;
`;

const Image = styled.img`
  max-height: 100%;
  max-width: 100%;
  border: 2px solid;
  border-radius: 4px;
  box-sizing: border-box;
`;

const Slide = ({ className, slide, ...props }) => {
  const { title, description, image } = slide;
  return (
    <Wrapper className={className} {...props}>
      <Title>{title}</Title>
      {description && <Description>{description}</Description>}
      {image ? (
        <ImageWrapper>
          <Image src={image} />
        </ImageWrapper>
      ) : null}
    </Wrapper>
  );
};

export default Slide;
