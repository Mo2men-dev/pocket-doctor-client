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
	subNodes: [
		{
			node: {
				id: "Chest Pain",
				type: "symptomNode",
				data: { symptom: "Chest Pain" },
				position: { x: 0, y: 0 },
				parentId: "Init",
			},
			subNodes: [
				{
					node: {
						id: "Heart Attack",
						type: "symptomNode",
						data: { symptom: "Heart Attack" },
						position: { x: 0, y: 0 },
						parentId: "Chest Pain",
					},
					subNodes: [],
				},
				{
					node: {
						id: "Pneumonia",
						type: "symptomNode",
						data: { symptom: "Pneumonia" },
						position: { x: 0, y: 0 },
						parentId: "Chest Pain",
					},
					subNodes: [],
				},
				{
					node: {
						id: "Pulmonary Embolism",
						type: "symptomNode",
						data: { symptom: "Pulmonary Embolism" },
						position: { x: 0, y: 0 },
						parentId: "Chest Pain",
					},
					subNodes: [],
				},
			],
		},
		{
			node: {
				id: "Headache",
				type: "symptomNode",
				data: { symptom: "Headache" },
				position: { x: 0, y: 0 },
				parentId: "Init",
			},
			subNodes: [
				{
					node: {
						id: "Migraine",
						type: "symptomNode",
						data: { symptom: "Migraine" },
						position: { x: 0, y: 0 },
						parentId: "Headache",
					},
					subNodes: [],
				},
				{
					node: {
						id: "Tension Headache",
						type: "symptomNode",
						data: { symptom: "Tension Headache" },
						position: { x: 0, y: 0 },
						parentId: "Headache",
					},
					subNodes: [],
				},
				{
					node: {
						id: "Cluster Headache",
						type: "symptomNode",
						data: { symptom: "Cluster Headache" },
						position: { x: 0, y: 0 },
						parentId: "Headache",
					},
					subNodes: [],
				},
			],
		},
		{
			node: {
				id: "Nausea",
				type: "symptomNode",
				data: { symptom: "Nausea" },
				position: { x: 0, y: 0 },
				parentId: "Init",
			},
			subNodes: [],
		},
	],
};
export const proccedNodes: Node[] = spreadNodes(initialNodes);
export const initialEdges: Edge[] = createEdges(proccedNodes);
