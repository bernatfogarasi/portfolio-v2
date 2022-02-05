import styled from "styled-components";

const Wrapper = styled.div`
  /* display: grid;
  grid-template-rows: auto auto 1fr;
  padding: 50px;
  box-sizing: border-box;
  gap: 20px;

  max-height: 100%; */
  display: flex;
  height: 100%;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.div`
  font-weight: 600;
  font-size: 25px;
  font-family: Mononoki;
`;

const Description = styled.div`
  font-family: Mononoki;
`;

const Image = styled.img`
  height: 100%;
  /* height: 100%; */
  /* display: block; */
  /* max-height: 95%; */
  /* height: auto; */
  /* max-width: 100%; */
  /* width: auto; */
  /* object-fit: contain; */
  /* border: 1px solid red;
  box-sizing: border-box;
  height: fit-content; */
  /* flex-grow: 1; */
`;

const Slide = ({ className, slide, ...props }) => {
  const { title, description, image } = slide;
  return (
    <Wrapper className={className} {...props}>
      <Title>{title}</Title>
      <Description>{description}</Description>
      <Image src={image} />
    </Wrapper>
  );
};

export default Slide;
