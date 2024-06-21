import { Edge, Node } from "reactflow";
import { createEdges, spreadNodes } from "../utils/nodesAndEdges";

export interface NodeType {
	node: Node;
	subNodes: NodeType[];
}

export const initialNodes: NodeType = {
	node: {
		id: "Init",
		type: "symptomNode",
		data: { symptom: "Init" },
		position: { x: 0, y: 0 },
	},
	subNodes: [],
};
export const proccedNodes: Node[] = spreadNodes(initialNodes);
export const initialEdges: Edge[] = createEdges(proccedNodes);
