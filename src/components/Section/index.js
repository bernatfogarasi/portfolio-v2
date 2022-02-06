import { useEffect, useRef } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  height: calc(100vh - 64px);
  box-sizing: border-box;
  padding: min(6vw, 6vh);
  max-width: 1600px;
  margin: auto;
`;

const Anchor = styled.div`
  position: absolute;
  margin: max(-6vw, -6vh);
  transform: translateY(-64px);
`;

const Section = ({ className, id, children, ...props }) => {
  const ref = useRef();

  // useEffect(() => {
  //   const updateHash = (event) => {
  //     // if (id !== "teamlistener") return;
  //     const active =
  //       ref.current.offsetTop < window.pageYOffset &&
  //       ref.current.offsetTop + ref.current.clientHeight > window.pageYOffset;
  //     if (active) {
  //       console.log("set");
  //       window.location.hash = id;
  //     }
  //   };

  //   window.addEventListener("scroll", (event) => updateHash(event));

  //   return () => {
  //     window.removeEventListener("scroll", (event) => updateHash(event));
  //   };
  // }, [ref]);

  return (
    <Wrapper className={className} ref={ref} {...props}>
      <Anchor id={id} />
      {children}
    </Wrapper>
  );
};

export default Section;
