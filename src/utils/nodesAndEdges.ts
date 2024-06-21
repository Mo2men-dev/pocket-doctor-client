import { NodeType } from "../react_flow_components/constants";
import { Node, Edge } from "reactflow";

export const spreadNodes = (rootNode: NodeType) => {
	let spreadedNodes: Node[] = [];
	spreadedNodes.push(rootNode.node);

	if (rootNode.subNodes.length > 0) {
		const flattenedNodes = flattenNodes(rootNode);
		flattenedNodes.forEach((node) => {
			spreadedNodes.push(node);
		});
	}

	return spreadedNodes;
};

const flattenNodes = (rootNode: NodeType): Node[] => {
	let out: Node[] = [];
	let curr: NodeType = rootNode;

	if (curr.subNodes.length > 0) {
		curr.subNodes.forEach((node) => {
			out = out.concat(flattenNodes(node));
		});
	}

	out.push(curr.node);
	return out;
};

export const createEdges = (rootNode: Node[]): Edge[] => {
	let out: Edge[] = [];

	rootNode.forEach((node) => {
		if (node.id !== "Init") {
			out.push({
				id: `${node.id}-Init`,
				source: node.parentId || "Init",
				target: node.id,
				animated: true,
				targetHandle: "b",
				sourceHandle: "a",
			});
		}
	});

	return out;
};
