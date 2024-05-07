import { useEffect } from "react";
import { Graph, Model } from "@antv/x6";
import { DagreLayout } from "@antv/layout";
import "./index.css";

const data: Model.FromJSONData = {
  nodes: [],
  edges: []
};
const edges = [
  ["1", "2"],
  ["2", "3"],

  ["3", "4"],
  ["3", "5"],
  ["3", "6"],

  ["4", "7"],
  ["7", "1"],

  ["5", "1"],
];

for (let i = 1; i <= 7; i++) {
  data.nodes!.push({
    id: `${i}`,
    // shape: "circle",
    width: 100,
    height: 40,
    label: i + '节点',
    attrs: {
      body: {
        fill: "#5F95FF",
        stroke: "transparent"
      },
      label: {
        fill: "#ffffff"
      }
    }
  });
}

edges.forEach((edge: string[]) => {
  data.edges!.push({
    source: edge[0],
    target: edge[1],

    attrs: {
      line: {
        stroke: "#A2B1C3",
        strokeWidth: 2
      }
    },
 
    router: {
      name: 'metro',
      args: {
        startDirections: ['bottom'],
        endDirections: ['top'],
      },
    },
  });
});

export default () => {
  useEffect(() => {
    const graph = new Graph({
      container: document.getElementById("container")!,
      grid: true,
    });

    const dagreLayout = new DagreLayout({
      type: "dagre",
      rankdir: "LR",
      align: "UR",
      ranksep: 35,
      nodesep: 15
    });

    const model = dagreLayout.layout(data);

    graph.fromJSON(model);
  });

  return (
    <div>
      <div id="container" className="helloworld-app"></div>
    </div>
  );
};




