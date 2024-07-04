import { Edge, Node } from "reactflow";
import { createEdges } from "../utils/nodesAndEdges";

export const initialNodes: Node[] = [
	{
		id: "input",
		type: "initSymptomNode",
		data: {},
		position: { x: 0, y: 0 },
		draggable: false,
	},
];

export const initialEdges: Edge[] = createEdges(initialNodes);
