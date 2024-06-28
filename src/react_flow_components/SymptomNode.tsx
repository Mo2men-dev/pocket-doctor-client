import React from "react";
import { NodeProps } from "reactflow";
import { Handle, Position } from "reactflow";
import { useDispatch, useSelector } from "react-redux";
import { generateRandomSymptoms } from "../utils/generate";
import { addSymptom, setSymptoms } from "../redux/symptoms/slice";
import { capitalizeFirstLetter, removeDuplicates } from "../utils/utils";
import { setConditions } from "../redux/conditions/slice";
import { evaluateConditions, generateSymptoms } from "../utils/evaluate";
import { addNode } from "../redux/nodes/slice";

function SymptomNode({
	data: { symptom, parentID, clickable },
}: NodeProps<{ symptom: string; parentID: string; clickable: boolean }>) {
	const totalConditions = useSelector(
		(state: any) => state.conditionState.conditions
	);
	const selectedSymptoms = useSelector(
		(state: any) => state.symptomState.selectedSymptoms
	);

	const dispatch = useDispatch();

	const handleOnClick = () => {
		if (!clickable) return;

		const symptomUpperCase = symptom.toUpperCase();

		const filteredConditions = evaluateConditions(totalConditions, [
			symptomUpperCase,
		]);
		const noZeroSimilarity = filteredConditions.filter(
			(condition: any) => condition.similarity !== 0
		);

		const evaluatedConditions = evaluateConditions(noZeroSimilarity, [
			...selectedSymptoms,
			symptomUpperCase,
		]);
		dispatch(setConditions(evaluatedConditions));

		const generatedSymptoms = removeDuplicates(
			generateSymptoms(noZeroSimilarity)
		);

		// remove the clicked symptom from the totalSymptoms array
		const noReapeat = generatedSymptoms.filter(
			(s: string) => s !== symptomUpperCase
		);

		// remove selectedSymptoms from generatedSymptoms
		const newSymptoms = noReapeat.filter(
			(s: string) => !selectedSymptoms.includes(s)
		);

		dispatch(setSymptoms(newSymptoms));

		// this will be the parentId for the this symptom child nodes
		// that will be generated when this symptom is clicked
		const pId = parentID;

		// add the clicked symptom to the selectedSymptoms array
		dispatch(addSymptom(symptom));
		const newNodes = generateRandomSymptoms(newSymptoms, pId, dispatch);

		if (newSymptoms.length === 1) {
			const lastNodeId = newNodes[0].id;
			const newConditionNode = {
				id: "conditionNode",
				type: "conditionNode",
				data: { condition: evaluatedConditions[0] },
				position: { x: 0, y: 0 },
				parentId: lastNodeId,
			};

			dispatch(addNode(newConditionNode));
		}
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
