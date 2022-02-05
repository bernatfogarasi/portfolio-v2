import styled from "styled-components";

const Wrapper = styled.div`
  font-size: 20px;
  font-family: Mononoki;
`;

const Title = ({ className, ...props }) => {
  return (
    <Wrapper className={className} {...props}>
      BF
    </Wrapper>
  );
};

export default Title;
