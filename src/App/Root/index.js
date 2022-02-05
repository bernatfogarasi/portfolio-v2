import styled from "styled-components";
import Page from "components/Page";
import Welcome from "./Welcome";
import About from "./About";
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
      <About />
      <Contact />
    </Wrapper>
  );
};

export default Root;
