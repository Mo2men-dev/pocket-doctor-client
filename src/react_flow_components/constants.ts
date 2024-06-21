import { Edge, Node } from "reactflow";
import { createEdges } from "../utils/nodesAndEdges";
import { generateRandomId } from "../utils/generate";

const rootId = generateRandomId(5);
export const initialNodes: Node[] = [
	{
		id: rootId,
		type: "symptomNode",
		data: { symptom: "Init", parentID: rootId },
		position: { x: 0, y: 0 },
	},
];

export const initialEdges: Edge[] = createEdges(initialNodes);
