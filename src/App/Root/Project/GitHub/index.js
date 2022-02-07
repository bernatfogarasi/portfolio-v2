import styled, { css } from "styled-components";
import Item from "./Item";

const Wrapper = styled.div`
  display: flex;
  gap: 20px;
  margin-left: auto;
`;

const GitHub = ({ className, color, urls = [], ...props }) => {
  return (
    <Wrapper className={className} {...props}>
      {urls.map((url) => (
        <Item key={urls} {...url} color={color} />
      ))}
    </Wrapper>
  );
};

export default GitHub;
