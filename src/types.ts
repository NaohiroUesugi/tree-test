type TTreeItem = {
  id: string;
  type: "View" | "Text";
  name: string;
  parentId: string | null;
  children: string[];
};

export type TTreeState = {
  [id: string]: TTreeItem;
};
