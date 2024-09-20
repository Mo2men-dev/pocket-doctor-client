import dagre from "@dagrejs/dagre";
import { Edge, Node, ReactFlowInstance } from "reactflow";
import { NODE_WIDTH, NODE_HIGHT } from "../react_flow_components/constants";
import { UnknownAction } from "@reduxjs/toolkit";
import { Dispatch } from "react";
import { setMatchFound } from "../redux/conditions/slice";
import { setNodeState, setEdgeState } from "../redux/nodes/slice";
import { playMatchFoundAnimation, zoomInOnNode } from "./animations";
import { generateEdgesForNodesOnPath } from "./generate";
import { createEdges } from "./nodesAndEdges";

const dagreGraph = new dagre.graphlib.Graph();
dagreGraph.setDefaultEdgeLabel(() => ({}));


/**
 * Function that updates the nodes and edges after a symptom is selected.
 * 
 * @param nodeState an array of nodes.
 * @param edgeState an array of edges.
 * @param matchFound a boolean that indicates if a match was found.
 * @param reactFlowInstance the react flow instance.
 * @param dispatch the dispatch function from the redux store.
 * @param setNodes the setNodes function from the react flow instance.
 * @param setEdges the setEdges function from the react flow instance.
 * @param totalSymptoms an array of all the symptoms selected by the user.
 * @returns void
 */
export function updateNodesAndEdges(
    nodeState: Node[],
    edgeState: Edge[],
    matchFound: boolean,
    reactFlowInstance: ReactFlowInstance<any, any> | null,
    dispatch: Dispatch<UnknownAction>,
    setNodes: any,
    setEdges: any,
    totalSymptoms: string[]
) {
    let newEdges;
    const newNodes = makeNodesUnclickable(nodeState);
    dispatch(setNodeState(newNodes));

    if (!matchFound) {
        newEdges = createEdges(nodeState);
    } else {
        newEdges = generateEdgesForNodesOnPath(nodeState, edgeState);
        playMatchFoundAnimation(reactFlowInstance, nodeState);
    }

    const { nodes: layoutedNodes, edges: _layoutedEdges } = getLayoutedElements(nodeState, newEdges);
    setNodes(layoutedNodes);
    setEdges(newEdges);

    if (!matchFound) zoomInOnNode(reactFlowInstance);

    if (totalSymptoms.length === 1) {
        dispatch(setMatchFound(true));
        dispatch(setEdgeState(newEdges));
    }
}

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
		dagreGraph.setNode(node.id, { width: NODE_WIDTH, height: NODE_HIGHT });
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
			
            let adjustYBy = NODE_HIGHT * (nodesCopy.length * 2);
            
			const nodeWithPosition = dagreGraph.node(node.id);
			node.targetPosition = isHorizontal ? "left" : "top";
			node.sourcePosition = isHorizontal ? "right" : "bottom";

			// We are shifting the dagre node position (anchor=center center) to the top left
			// so it matches the React Flow node anchor point (top left).
			node.position = {
				x: nodeWithPosition.x - NODE_WIDTH / 4,
				y: nodeWithPosition.y - NODE_HIGHT * 4 - adjustYBy,
			};

			adjustYBy -= NODE_HIGHT;
			return node;
		}
	);

	return { nodes: nodesCopy, edges: edgesCopy };
};

/**
 * Function that makes all nodes in the provided array unclickable.
 * @param nodes an array of nodes.
 * @returns an array of nodes with the clickable property set to false.
 * 
 * @example
 * ```ts
 * makeNodesUnclickable(nodes);
 * ```
 */
export const makeNodesUnclickable = (nodes: Node[]) => {
    const unclickableNodes = nodes.map((node: Node) => {
        return {
            ...node,
            data: { ...node.data, clickable: false },
        };
    });

    return unclickableNodes;
};