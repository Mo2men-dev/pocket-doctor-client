import { UnknownAction } from "@reduxjs/toolkit";
import { Dispatch } from "react";
import { updateNodeState } from "../redux/nodes/slice";
import { NodePathType } from "../types/data";
import { Node, Edge } from "reactflow";

/**
 * Function that generates a random id this will be used to generate a unique id for each node.
 * @param length the length of the id to be generated.
 * @returns a random id.
 * @example
 * ```ts
 * generateRandomId(5);
 * ```
 */
export const generateRandomId = (length: number): string => {
	const characters =
		"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
	const charactersLength = characters.length;
	let result = "";
	for (let i = 0; i < length; i++) {
		result += characters.charAt(Math.floor(Math.random() * charactersLength));
	}
	return result;
};

/**
 * Function that generates the nodes for the symptoms based on the selected symptoms
 * @param noReapeat an array of strings.
 * @param pId the parent id of the nodes.
 * @param dispatch the dispatch function from the redux store.
 * @returns an array of nodes.
 * @example
 * ```ts
 * generateSymptomsNodes(noReapeat, pId, dispatch);
 * ```
 */
export const generateSymptomsNodes = (
	noReapeat: string[],
	pId: string,
	dispatch: Dispatch<UnknownAction>
) => {
	const pID = pId;
	let output: any[] = [];

	noReapeat.forEach((symptom: any) => {
		const id = generateRandomId(5);
		let node = {
			id: id,
			type: "symptomNode",
			data: { symptom, parentID: id, clickable: true },
			position: { x: 0, y: 0 },
			parentId: pID,
		};
		dispatch(updateNodeState(node));
		output.push(node);
	});

	return output;
};

/**
 * Function that finds the path from the initial node to the condition node
 * this will be used to highlight the path from the initial node to the condition node.
 * @param nodes an array of nodes.
 * @returns an object with the path and the nodesOnPath array.
 * @example
 * ```ts
 * generatePath(nodes);
 * ```
 */
export const generatePath = (nodes: Node[]): NodePathType => {
	let path = [];
	let nodesOnPath = [];
	let currId = "conditionNode";

	// the current parent id is the parent id of the current node in the loop
	let currParentId = nodes.find((node) => node.id === currId)?.parentId;

	// add the current node to the nodesOnPath array
	nodesOnPath.push(currId);

	// loop through the nodes array to find the path from the initial node to the condition node
	// the loop goes backwards from the condition node to the initial node
	// the loop stops when the current parent id is undefined
	while (currParentId) {
		// push the current id and the current parent id to the path array
		path.push(`${currId}-${currParentId}`);

		// set the current id to the current parent id
		currId = currParentId;

		// set the current parent id to the parent id of the current node
		currParentId = nodes.find((node) => node.id === currId)?.parentId;

		// add the current node to the nodesOnPath array
		nodesOnPath.push(currId);
	}

	// reverse the path array to get the path from the initial node to the condition node
	nodesOnPath = nodesOnPath.reverse();

	// return the path and the nodesOnPath array
	return { path, nodesOnPath };
};

/**
 * Function that returns the either animated or non-animated edges based on the path.
 * @param nodes an array of nodes.
 * @param edges an array of edges.
 * @returns an array of edges.
 */
export const generateEdgesForNodesOnPath = (nodes: Node[], edges: Edge[]) => {
    const path = generatePath(nodes);
    const newEdges = edges.map((edge: any) => {
        if (path.path.includes(edge.id)) {
            return {
                ...edge,
                animated: false,
                style: { stroke: "#0FFF50" },
            };
        } else {
            return {
                ...edge,
                animated: true,
            };
        }
    });

    return newEdges;
};