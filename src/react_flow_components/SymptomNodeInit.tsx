import React from "react";
import { NodeProps } from "reactflow";
import { Handle, Position } from "reactflow";
import { updtaeNodeState } from "../redux/nodes/slice";
import { useDispatch } from "react-redux";
import { generateRandomId } from "../utils/generate";

const randomData = [
	"Chest Pain",
	"Headache",
	"Nausea",
	"Fatigue",
	"Dizziness",
	"Shortness of Breath",
	"Abdominal Pain",
	"Back Pain",
	"Cough",
	"Fever",
	"Vomiting",
	"Diarrhea",
	"Rash",
	"Weakness",
	"Sore Throat",
	"Anxiety",
	"Numbness",
	"Palpitations",
	"Joint Pain",
	"Weight Loss",
	"Swelling",
	"Bleeding",
	"Confusion",
	"Seizure",
	"Visual Changes",
	"Hearing Loss",
	"Speech Difficulty",
	"Urinary Symptoms",
	"Sexual Symptoms",
	"Sleep Disturbance",
	"Appetite Changes",
	"Taste Changes",
	"Smell Changes",
	"Temperature Changes",
	"Sweating",
];

function SymptomNodeInit({
	data: { symptom, parentID },
}: NodeProps<{ symptom: string; parentID: string }>) {
	const dispatch = useDispatch();

	const handleOnClick = () => {
		const rn = Math.floor(Math.random() * randomData.length);
		const slice = randomData.slice(rn, rn + 5);
		const pId = parentID;

		slice.forEach((symptom) => {
			const id = generateRandomId(5);
			dispatch(
				updtaeNodeState({
					id: id,
					type: "symptomNode",
					data: { symptom, parentID: id },
					position: { x: 0, y: 0 },
					parentId: pId,
				})
			);
		});
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
				className="bg-blue-500 text-white p-2 rounded-lg shadow-lg cursor-pointer"
				onClick={handleOnClick}>
				{symptom}
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

export default SymptomNodeInit;
