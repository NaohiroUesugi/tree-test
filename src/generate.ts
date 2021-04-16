import { TTreeState } from "./types";

export const treeState: TTreeState = {
  "0": {
    id: "0",
    parentId: null,
    name: "0",
    type: "View",
    children: [],
  },
};

for (let i = 1; i < 10; i++) {
  const parentId = String(Math.floor(Math.pow(Math.random(), 2) * i));
  const id = i.toString();
  treeState[id] = {
    id,
    parentId,
    name: id,
    type: "View",
    children: [],
  };
  treeState[parentId].children.push(id);
}
