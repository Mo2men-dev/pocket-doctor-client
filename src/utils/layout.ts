import dagre from "@dagrejs/dagre";
const dagreGraph = new dagre.graphlib.Graph();
dagreGraph.setDefaultEdgeLabel(() => ({}));

const nodeWidth = 15;
const nodeHeight = 10;

/**
 * This function takes in nodes and edges and returns the layouted elements
 * @param nodes an array of nodes.
 * @param edges an array of edges.
 * @param direction the direction of the layout.
 * @returns an object with the layouted nodes and edges.
 *
 * @example
 * ```ts
 * getLayoutedElements(nodes, edges, direction);
 * ```
 */
export const getLayoutedElements = (
	nodes: any[],
	edges: any[],
	direction = "LR"
) => {
	const nodesCopy = nodes.map((node) => ({ ...node }));
	const edgesCopy = edges.map((edge) => ({ ...edge }));

	const isHorizontal = direction === "LR";
	dagreGraph.setGraph({ rankdir: direction });

	nodesCopy.forEach((node: { id: string }) => {
		dagreGraph.setNode(node.id, { width: nodeWidth, height: nodeHeight });
	});

	edgesCopy.forEach(
		(edge: {
			source: dagre.Edge;
			target: string | { [key: string]: any } | undefined;
		}) => {
			dagreGraph.setEdge(edge.source, edge.target);
		}
	);

	dagre.layout(dagreGraph);

	nodesCopy.forEach(
		(node: {
			id: string | dagre.Label;
			targetPosition: string;
			sourcePosition: string;
			position: { x: number; y: number };
		}) => {
			let adjustYBy = nodeHeight * (nodesCopy.length * 2);
			const nodeWithPosition = dagreGraph.node(node.id);
			node.targetPosition = isHorizontal ? "left" : "top";
			node.sourcePosition = isHorizontal ? "right" : "bottom";

			// We are shifting the dagre node position (anchor=center center) to the top left
			// so it matches the React Flow node anchor point (top left).
			node.position = {
				x: nodeWithPosition.x - nodeWidth / 4,
				y: nodeWithPosition.y - nodeHeight * 4 - adjustYBy,
			};

			adjustYBy -= nodeHeight;

			return node;
		}
	);

	return { nodes: nodesCopy, edges: edgesCopy };
};
