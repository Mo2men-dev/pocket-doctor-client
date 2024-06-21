import React from "react";
import { NodeProps } from "reactflow";
import { Handle, Position } from "reactflow";

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
	data: { symptom },
}: NodeProps<{ symptom: string }>) {
	const handleOnClick = () => {
		const rn = Math.floor(Math.random() * randomData.length);
		const slice = randomData.slice(rn, rn + 5);

		console.log(slice);
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
