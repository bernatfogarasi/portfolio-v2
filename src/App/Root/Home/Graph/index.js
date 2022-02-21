import styled from "styled-components";
import { Graph as Graph_ } from "react-d3-graph";
import { useEffect, useRef, useState } from "react";

const Wrapper = styled.div`
  position: absolute;
  height: 100%;
  top: 0;
  left: 0;
  box-sizing: border-box;
  width: 100%;
  z-index: -1;
  opacity: 0.4;
  overflow: hidden;
`;

const data = {
  nodes: [
    { id: "Python", color: "black", symbolType: "diamond" },
    { id: "Javascript", color: "black", symbolType: "diamond" },
    { id: "Typescript", color: "black", symbolType: "diamond" },
    { id: "C++", color: "black", symbolType: "diamond" },
    { id: "HTML", color: "black", symbolType: "diamond" },
    { id: "CSS", color: "black", symbolType: "diamond" },
    { id: "R", color: "black", symbolType: "diamond" },
    { id: "SQL", color: "black", symbolType: "diamond" },
    { id: "Node.js" },
    { id: "Express.js" },
    { id: "Next.js" },
    { id: "Django" },
    { id: "Flask" },
    { id: "NoSQL" },
    { id: "MongoDB" },
    { id: "SQLite" },
    { id: "Git" },
    { id: "GitHub" },
    { id: "Websockets" },
    { id: "Selenium" },
    { id: "MoviePy" },
    { id: "REST API" },
    { id: "React.js" },
  ],

  links: [
    { source: "Javascript", target: "Typescript" },
    { source: "C++", target: "Python" },
    { source: "Python", target: "Javascript" },
    { source: "Javascript", target: "HTML" },
    { source: "Javascript", target: "CSS" },
    { source: "Python", target: "R" },
    { source: "Python", target: "SQL" },
    { source: "Javascript", target: "Node.js" },
    { source: "Javascript", target: "Express.js" },
    { source: "Javascript", target: "Next.js" },
    { source: "Python", target: "Django" },
    { source: "Python", target: "Flask" },
    { source: "Javascript", target: "NoSQL" },
    { source: "Javascript", target: "MongoDB" },
    { source: "Python", target: "SQLite" },
    { source: "Javascript", target: "Git" },
    { source: "Javascript", target: "GitHub" },
    { source: "Python", target: "GitHub" },
    { source: "Javascript", target: "Websockets" },
    { source: "Python", target: "Selenium" },
    { source: "Python", target: "MoviePy" },
    { source: "Python", target: "REST API" },
    { source: "Javascript", target: "REST API" },
    { source: "Javascript", target: "React.js" },
    { source: "Typescript", target: "React.js" },
  ],
};

// const languages = [];

const Graph = ({ className, ...props }) => {
  const ref = useRef();

  const [gravity, setGravity] = useState(-100);

  useEffect(() => {
    setTimeout(() => {
      setGravity(-500);
    }, 2000);
  }, []);

  return (
    <Wrapper className={className} ref={ref} {...props}>
      <Graph_
        id="connections"
        data={data}
        config={{
          height: ref.current ? ref.current.clientHeight : 1000,
          width: ref.current ? ref.current.clientWidth : 1000,
          node: { fontSize: 16 },
          d3: {
            gravity:
              (gravity / 1000) *
              (ref.current
                ? Math.min(ref.current.clientHeight, ref.current.clientWidth)
                : 1000),
            linkLength: 200,
          },
        }}
      />
    </Wrapper>
  );
};

export default Graph;
