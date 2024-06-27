import React from "react";
import { NodeProps } from "reactflow";
import { Handle, Position } from "reactflow";
import { useDispatch, useSelector } from "react-redux";
import { generateRandomSymptoms } from "../utils/generate";
import { addSymptom, setSymptoms } from "../redux/symptoms/slice";
import { capitalizeFirstLetter } from "../utils/utils";

function SymptomNode({
	data: { symptom, parentID, clickable },
}: NodeProps<{ symptom: string; parentID: string; clickable: boolean }>) {
	const totalSymptoms = useSelector(
		(state: any) => state.symptomState.totalSymptoms
	);

	const dispatch = useDispatch();

	const handleOnClick = () => {
		if (!clickable) return;

		// remove the clicked symptom from the totalSymptoms array
		const noReapeat = totalSymptoms.filter(
			(s: string) => s !== symptom.toUpperCase()
		);
		dispatch(setSymptoms(noReapeat));

		// this will be the parentId for the this symptom child nodes
		// that will be generated when this symptom is clicked
		const pId = parentID;

		// add the clicked symptom to the selectedSymptoms array
		dispatch(addSymptom(symptom));
		generateRandomSymptoms(noReapeat, pId, dispatch);
	};

	return (
		<>
			<Handle
				type="target"
				position={Position.Left}
				className="bg-blue-500"
				id="a"
			/>
			<div
				className="bg-blue-500 text-white rounded-sm p-2 shadow-lg cursor-pointer text-sm"
				onClick={handleOnClick}>
				{capitalizeFirstLetter(symptom)}
			</div>
			<Handle
				type="source"
				position={Position.Right}
				className="bg-blue-500"
				id="b"
			/>
		</>
	);
}

export default SymptomNode;
