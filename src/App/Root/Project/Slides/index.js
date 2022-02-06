import styled from "styled-components";
import { Slide as SlideShow } from "react-slideshow-image";
// import { Fade as SlideShow } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import Slide from "./Slide";

const Wrapper = styled(SlideShow)`
  height: 100%;
  width: 100%;
  overflow: hidden;
  .react-slideshow-container {
    height: 100%;
    width: 100%;
  }
  .react-slideshow-wrapper {
    height: 100%;
    width: 100%;
  }
  .images-wrap {
    height: 100%;
    width: 100%;
  }
  .images-wrap > div {
    height: 100%;
  }
`;

const Slides = ({ className, slides, children, ...props }) => {
  return (
    <Wrapper
      className={className}
      duration={10000}
      transitionDuration={500}
      {...props}
    >
      {slides.map((slide, index) => (
        <Slide key={index} slide={slide} />
      ))}
    </Wrapper>
  );
};

export default Slides;
