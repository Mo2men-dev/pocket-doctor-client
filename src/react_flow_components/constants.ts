import { Edge, Node } from "reactflow";
import { createEdges } from "../utils/nodesAndEdges";

export const initialNodes: Node[] = [
	{
		id: "Init",
		type: "symptomNode",
		data: { symptom: "Init" },
		position: { x: 0, y: 0 },
	},
];

export const initialEdges: Edge[] = createEdges(initialNodes);
