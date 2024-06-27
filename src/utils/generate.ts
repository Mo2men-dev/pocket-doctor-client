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

export const generateRandomSymptoms = (
	noReapeat: string[],
	pId: string,
	dispatch: Dispatch<UnknownAction>
) => {
	const pID = pId;

	noReapeat.forEach((symptom: any) => {
		const id = generateRandomId(5);
		dispatch(
			updateNodeState({
				id: id,
				type: "symptomNode",
				data: { symptom, parentID: id, clickable: true },
				position: { x: 0, y: 0 },
				parentId: pID,
			})
		);
	});
};
