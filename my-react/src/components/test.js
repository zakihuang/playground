import { useEffect, useRef } from "react";

import G6 from "@antv/g6/dist/g6.min.js";

// import G6 from "@antv/g6";


import insertCss from "insert-css";

insertCss(`
  .g6-tooltip {
    border-radius: 6px;
    font-size: 12px;
    color: #fff;
    background-color: #000;
    padding: 2px 8px;
    text-align: center;
  }
  .helloworld-app {
     height: 900px;
    // width: 1500px;
  }
`);

const data = {
  nodes: [
    {
      id: "1",
      dataType: "alps",
      name: "金融机构一",
      conf: [
        {
          label: "conf",
          value: "pai_graph.conf"
        },
        {
          label: "dot",
          value: "pai_graph.dot"
        },
        {
          label: "init",
          value: "init.rc"
        }
      ]
    },
    {
      id: "2",
      dataType: "alps",
      name: "核心企业一",

      conf: [
        {
          label: "conf",
          value: "pai_graph.conf"
        },
        {
          label: "dot",
          value: "pai_graph.dot"
        },
        {
          label: "init",
          value: "init.rc"
        }
      ]
    },
    {
      id: "3",
      dataType: "alps",
      name: "核心企业三",
      conf: [
        {
          label: "conf",
          value: "pai_graph.conf"
        },
        {
          label: "dot",
          value: "pai_graph.dot"
        },
        {
          label: "init",
          value: "init.rc"
        }
      ]
    },
    {
      id: "4",
      dataType: "sql",
      name: "核心企业二",
      conf: [
        {
          label: "conf",
          value: "pai_graph.conf"
        },
        {
          label: "dot",
          value: "pai_graph.dot"
        },
        {
          label: "init",
          value: "init.rc"
        }
      ]
    },
    {
      id: "5",
      dataType: "sql",
      name: "核心企业四",
      conf: [
        {
          label: "conf",
          value: "pai_graph.conf"
        },
        {
          label: "dot",
          value: "pai_graph.dot"
        },
        {
          label: "init",
          value: "init.rc"
        }
      ]
    },
    {
      id: "6",
      dataType: "feature_etl",
      name: "供应商一",
      comboId: 10,
      conf: [
        {
          label: "conf",
          value: "pai_graph.conf"
        },
        {
          label: "dot",
          value: "pai_graph.dot"
        },
        {
          label: "init",
          value: "init.rc"
        }
      ]
    },
    {
      id: "7",
      dataType: "feature_etl",
      name: "供应商二",
      comboId: 4,
      conf: [
        {
          label: "conf",
          value: "pai_graph.conf"
        },
        {
          label: "dot",
          value: "pai_graph.dot"
        },
        {
          label: "init",
          value: "init.rc"
        }
      ]
    },
    {
      id: "8",
      dataType: "feature_extractor",
      name: "供应商三",
      conf: [
        {
          label: "conf",
          value: "pai_graph.conf"
        },
        {
          label: "dot",
          value: "pai_graph.dot"
        },
        {
          label: "init",
          value: "init.rc"
        }
      ]
    }
  ],
  edges: [
    {
      source: "1",
      target: "2",
      label: "融资  \n 12006 万元"
    },
    {
      source: "2",
      target: "4",
      label: "融资  \n 12006 万元"
    },

    {
      source: "4",
      target: "6",
      label: "融资  \n 12006 万元"
    },

    {
      source: "4",
      target: "7",
      label: "融资 \n  12006 万元"
    },
    {
      source: "4",
      target: "8",
      label: "融资  \n 12006 万元"
    },
    {
      source: "4",
      target: "3",
      label: "融资  \n 12006 万元"
    },
    {
      source: "7",
      target: "8",
      label: "融资  \n 3 万元"
    },
    {
      source: "7",
      target: "1",
      label: "融资 \n  12006 万元"
    },
    {
      source: "8",
      target: "1",
      label: "融资 \n 12006 万元"
    },
    {
      source: "5",
      target: "4",
      label: "开立 \n 12006 万元"
    }
  ]
};

G6.registerNode(
  "sql",
  {
    drawShape(cfg, group) {
      const rect = group.addShape("rect", {
        attrs: {
          x: -75,
          y: -25,
          width: 150,
          height: 50,
          radius: 10,
          stroke: "#5B8FF9",
          fill: "#C6E5FF",
          lineWidth: 3
        },
        name: "rect-shape"
      });
      if (cfg.name) {
        group.addShape("text", {
          attrs: {
            text: cfg.name,
            x: 0,
            y: 0,
            fill: "#00287E",
            fontSize: 14,
            textAlign: "center",
            textBaseline: "middle",
            fontWeight: "bold"
          },
          name: "text-shape"
        });
      }
      return rect;
    }
  },
  "single-node"
);

function initF(ref) {
  const container = ref.current;
  const width = container.scrollWidth;
  const height = container.scrollHeight || 500;

  const graph = new G6.Graph({
    container: ref.current,
    width,
    height,

    layout: {
      type: "dagre",

      ranksep: 80,
      nodesep: 80,

      rankdir: "lr",
      // align: 'dl',
      // nodesepFunc: (d) => {
      //   if (['-1', '1'].includes(d.id)) {
      //     return 80;
      //   }

      //   return 50;
      // },
      // // ranksep: 70,
      // ranksepFunc: (d) => {
      //   if (['2', '4'].includes(d.id)) {
      //     return 30;
      //   }

      //   return 100
      // },
      controlPoints: true,
      // sortByCombo: true,
      nodeOrder: [],
     workerEnabled: false,
    },

    defaultNode: {
      type: "sql"
    },
    defaultEdge: {
      type: "polyline",
      style: {
        radius: 10,
        offset: 10,
        endArrow: true,
        lineWidth: 2,
        stroke: "gray",
        lineDash: [2, 2] // 虚线边
      },
      labelCfg: {
        refY: 0,
        // refX: 0,
        //  autoRotate: true,   // 使文本随边旋转
        style: {
          fill: "red",
          stroke: "red",
          fontSize: 16,
          // stroke: 'blue',
          // lineWidth: 1
          background: {
            fill: "#ffffff",
            // stroke: '#9EC9FF',
            padding: [2, 2, 2, 2],
            radius: 2
          }
        }
      }
    },
    nodeStateStyles: {
      selected: {
        stroke: "#d9d9d9",
        fill: "#5394ef"
      }
    },
    modes: {
      default: [
        "drag-canvas",
        "click-select",
        {
          type: "tooltip",
          formatText(model) {
            const cfg = model.conf;
            const text = [];
            cfg.forEach((row) => {
              text.push(row.label + ":" + row.value + "<br>");
            });
            return text.join("\n");
          },
          offset: 30
        }
      ]
    },
    fitView: true,
    fitViewPadding: 100
  });

  graph.data(data);
  graph.render();

  graph.on("afterlayout", () => {
    graph.fitView();
  });

  if (typeof window !== "undefined")
    window.onresize = () => {
      if (!graph || graph.get("destroyed")) return;
      if (!container || !container.scrollWidth || !container.scrollHeight) return;
      graph.changeSize(container.scrollWidth, container.scrollHeight);
    };
}

export default () => {
  let flag = useRef(false);
  const ref = useRef(null);

  useEffect(() => {
    if (flag.current) return;
    initF(ref);
    flag.current = true;
  }, []);

  return (
    <div>
      <div ref={ref} className="helloworld-app"></div>
    </div>
  );
};
