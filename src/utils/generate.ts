import { UnknownAction } from "@reduxjs/toolkit";
import { Dispatch } from "react";
import { updateNodeState } from "../redux/nodes/slice";

export const generateRandomId = (length: number) => {
	const characters =
		"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
	const charactersLength = characters.length;
	let result = "";
	for (let i = 0; i < length; i++) {
		result += characters.charAt(Math.floor(Math.random() * charactersLength));
	}
	return result;
};

// function that generates the nodes for the symptoms based on the selected symptoms
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

export const generatePath = (nodes: any[]) => {
	let path = [];
	let nodesOnPath = [];
	let currId = "conditionNode";
	let currParentId = nodes.find((node) => node.id === currId).parentId;
	nodesOnPath.push(currId);

	while (currParentId) {
		path.push(`${currId}-${currParentId}`);
		currId = currParentId;
		currParentId = nodes.find((node) => node.id === currId).parentId;

		nodesOnPath.push(currId);
	}

	nodesOnPath = nodesOnPath.reverse();

	return { path, nodesOnPath };
};
