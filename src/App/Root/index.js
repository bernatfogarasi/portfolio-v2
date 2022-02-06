import styled from "styled-components";
import Page from "components/Page";
import Welcome from "./Welcome";
import Project from "./Project";
import Contact from "./Contact";
import Resume from "./Resume";

const Wrapper = styled(Page)``;

const Root = ({ className, ...props }) => {
  return (
    <Wrapper className={className} {...props}>
      <Welcome />
      <Project name="teamlistener" />
      <Project name="bugpen" />
      <Project name="sigmavote" />
      <Resume />
      <Contact />
    </Wrapper>
  );
};

export default Root;
