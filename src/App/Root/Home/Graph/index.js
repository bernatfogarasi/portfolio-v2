import { useEffect, useRef, useState } from "react";
import { Graph as GraphD3 } from "react-d3-graph";
import styled from "styled-components";

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
    { id: "C++", color: "black", symbolType: "diamond" },
    { id: "CSS", color: "black", symbolType: "diamond" },
    { id: "HTML", color: "black", symbolType: "diamond" },
    { id: "Java", color: "black", symbolType: "diamond" },
    { id: "Kotlin", color: "black", symbolType: "diamond" },
    { id: "Javascript", color: "black", symbolType: "diamond" },
    { id: "Python", color: "black", symbolType: "diamond" },
    { id: "R", color: "black", symbolType: "diamond" },
    { id: "SQL", color: "black", symbolType: "diamond" },
    { id: "Typescript", color: "black", symbolType: "diamond" },
    { id: "Django" },
    { id: "Express.js" },
    { id: "Flask" },
    { id: "GitHub" },
    { id: "MongoDB" },
    { id: "MoviePy" },
    { id: "Next.js" },
    { id: "Node.js" },
    { id: "NoSQL" },
    { id: "Prisma" },
    { id: "PostgreSQL" },
    { id: "React.js" },
    { id: "REST API" },
    { id: "Selenium" },
    { id: "SQLite" },
    { id: "Websockets" },
    { id: "Jest" },
    { id: "Supabase" },
    { id: "Mockk" },
  ],

  links: [
    { source: "C++", target: "REST API" },
    { source: "Java", target: "REST API" },
    { source: "Java", target: "Javascript" },
    { source: "Java", target: "Typescript" },
    { source: "Java", target: "Kotlin" },
    { source: "Javascript", target: "Typescript" },
    { source: "Javascript", target: "HTML" },
    { source: "Javascript", target: "CSS" },
    { source: "Javascript", target: "Node.js" },
    { source: "Javascript", target: "Express.js" },
    { source: "Javascript", target: "Next.js" },
    { source: "Javascript", target: "NoSQL" },
    { source: "Javascript", target: "MongoDB" },
    { source: "Javascript", target: "GitHub" },
    { source: "Javascript", target: "Websockets" },
    { source: "Javascript", target: "REST API" },
    { source: "Javascript", target: "React.js" },
    { source: "Javascript", target: "PostgreSQL" },
    { source: "Kotlin", target: "REST API" },
    { source: "Kotlin", target: "Mockk" },
    { source: "Python", target: "Javascript" },
    { source: "Python", target: "R" },
    { source: "Python", target: "Django" },
    { source: "Python", target: "Flask" },
    { source: "Python", target: "SQLite" },
    { source: "Python", target: "PostgreSQL" },
    { source: "Python", target: "GitHub" },
    { source: "Python", target: "Selenium" },
    { source: "Python", target: "MoviePy" },
    { source: "Python", target: "REST API" },
    { source: "SQL", target: "PostgreSQL" },
    { source: "Typescript", target: "React.js" },
    { source: "Typescript", target: "REST API" },
    { source: "Typescript", target: "Next.js" },
    { source: "Typescript", target: "Node.js" },
    { source: "Typescript", target: "Express.js" },
    { source: "Typescript", target: "GitHub" },
    { source: "Typescript", target: "PostgreSQL" },
    { source: "Typescript", target: "Jest" },
    { source: "Typescript", target: "Supabase" },
    { source: "Typescript", target: "Prisma" },
    { source: "Next.js", target: "Supabase" },
  ],
};

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
      <GraphD3
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
