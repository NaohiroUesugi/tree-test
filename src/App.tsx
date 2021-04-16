import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Tree, { TreeProps } from "rc-tree";
import TreeNode from "rc-tree/lib/TreeNode";

type Node = {
  id: string;
  type: "VIEW" | "IMAGE";
  name: string;
  parentId: string | null;
  children: string[];
};

const tree: { [key: string]: Node } = {
  "0": {
    id: "0",
    type: "VIEW",
    name: "test1-0",
    parentId: null,
    children: ["1-0", "2-0"],
  },
  "1-0": {
    id: "1-0",
    type: "VIEW",
    name: "test1-0",
    parentId: "0",
    children: ["1-1"],
  },
  "1-1": {
    id: "1-1",
    type: "IMAGE",
    name: "test1-1",
    parentId: "1-0",
    children: [],
  },
  "2-0": {
    id: "2-0",
    type: "IMAGE",
    name: "test2-0",
    parentId: "0",
    children: [],
  },
};
function App() {
  return (
    <div className="App">
      <Tree showIcon={true} switcherIcon={<span>click: </span>}>
        {layerTreeNode(tree["0"])}
      </Tree>
    </div>
  );
}

const layerTreeNode = (node: Node): JSX.Element => {
  const res = node.children.map((id) => {
    const item = tree[id];
    if (item.children) {
      return (
        <TreeNode title={item.name} key={item.id} isLeaf={false}>
          {layerTreeNode(item)}
        </TreeNode>
      );
    } else {
      return <TreeNode title={item.name} key={item.id} isLeaf={true} />;
    }
  });
  return <>{res}</>;
};

export default App;
