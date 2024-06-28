import { Node, Edge } from "reactflow";

export const createEdges = (rootNode: Node[]): Edge[] => {
	let out: Edge[] = [];

	rootNode.forEach((node) => {
		if (node.id !== "Init") {
			out.push({
				id: `${node.id}-${node.parentId}`,
				source: node.parentId!,
				target: node.id,
				animated: true,
				targetHandle: "b",
				sourceHandle: "a",
			});
		}
	});

	return out;
};
