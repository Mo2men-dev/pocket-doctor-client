import React from "react";
import { Handle, NodeProps, Position } from "reactflow";
import { capitalizeFirstLetter, setUpConditions } from "../utils/utils";
import { fetchAllConditions } from "../api/api";
import { evaluateConditions } from "../utils/evaluate";
import { getState } from "../utils/state";
import SimilarConditions from "../components/SimilarConditions";
import { ConditionType } from "../types/data";

function ConditionNode({ data: { condition } }: NodeProps<{ condition: any }>) {
	const { selectedSymptoms } = getState();
	const [similarConditions, setSimilarConditions] = React.useState<ConditionType[]>([]);

	React.useEffect(() => {
		fetchAllConditions().then((data) => {
			// get the top 5 similar conditions excluding the current condition
			const topConditions = evaluateConditions(setUpConditions(data), selectedSymptoms)
				.slice(1, 6)
				.map((condition) => {
					return {
						id: condition.id,
						name: condition.name,
					};
				});

			setSimilarConditions(topConditions);
		});
	}, []);
	return (
		<>
			<Handle
				type="target"
				position={Position.Left}
				className="bg-blue-500"
				id="a"
			/>
			<div className="w-full my-1 text-xs flex justify-end">
				<button
					className="p-1 bg-black rounded-sm"
					onClick={() => {
						// for now just reload the page
						window.location.reload();
					}}>
					Reset
				</button>
			</div>
			<div className="bg-white rounded-sm p-1 shadow-lg min-w-96 max-w-[800px] cursor-default">
				<div className="bg-blue-500 p-2 rounded-sm shadow-lg">
					<div className="flex w-full justify-between items-center">
						<h1 className="text-2xl font-bold ">{condition.name}</h1>
						<div className="text-sm text-black">
							similarity: <span className="font-bold text-white">100%</span>
						</div>
					</div>
					<hr className="bg-white my-1" />
					<div>
						<span className="font-semibold text-lg text-black underline">
							Common Symptoms:
						</span>
						<div className="px-2">
							{condition.symptoms.map((symptom: any, index: number) => {
								return (
									<div
										key={index}
										className="text-sm">
										<span>{index + 1}. </span>
										{capitalizeFirstLetter(symptom)}
									</div>
								);
							})}
						</div>
					</div>
					<hr className="bg-white my-1" />
					<div>
						<span className="font-semibold text-lg text-black underline">
							Descripstion:
						</span>
						<div className="px-2 text-wrap">
							<p className="text-sm">{condition.description}</p>
						</div>
					</div>
				</div>
			</div>
            <SimilarConditions similarConditions={similarConditions}/>
			<Handle
				type="source"
				position={Position.Right}
				className="bg-blue-500"
				id="b"
			/>
		</>
	);
}

export default ConditionNode;
