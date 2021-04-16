import React from "react";
import Tree from "rc-tree";
import TreeNode from "rc-tree/lib/TreeNode";
import { useAppSelector } from "./hooks";

function App() {
  return (
    <div className="App">
      <Tree showIcon={true} switcherIcon={<span>click: </span>}>
        {LayerTreeNode({ id: "0" })}
      </Tree>
    </div>
  );
}

type Props = {
  id: string;
};

const LayerTreeNode = ({ id }: Props): JSX.Element => {
  const item = useAppSelector((state) => state.tree[id]);

  return (
    <TreeNode title={item.name} key={item.id} isLeaf={false}>
      {item.children.length > 0 &&
        item.children.map((cid) => LayerTreeNode({ id: cid }))}
    </TreeNode>
  );
};

export default App;
