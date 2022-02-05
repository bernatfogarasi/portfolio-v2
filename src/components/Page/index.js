import styled from "styled-components";
import Header from "./Header";

const Wrapper = styled.div``;

const Content = styled.div``;

const Page = ({ className, children, ...props }) => {
  return (
    <Wrapper className={className} {...props}>
      <Header />
      {children}
      <Content></Content>
    </Wrapper>
  );
};

export default Page;
