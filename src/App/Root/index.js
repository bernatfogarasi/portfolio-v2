import styled from "styled-components";
import Page from "components/Page";
import Home from "./Home";
import Project from "./Project";
import Contact from "./Contact";
import Resume from "./Resume";

const Wrapper = styled(Page)``;

const Root = ({ className, ...props }) => {
  return (
    <Wrapper className={className} {...props}>
      <Home id="home" />
      <Project id="teamlistener" name="teamlistener" />
      <Project id="bugpen" name="bugpen" />
      <Project id="sigmavote" name="sigmavote" />
      <Resume id="resume" />
      <Contact id="contact" />
    </Wrapper>
  );
};

export default Root;
