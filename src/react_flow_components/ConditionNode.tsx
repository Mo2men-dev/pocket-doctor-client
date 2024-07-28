import React, { useEffect, useState } from "react";
import { Handle, NodeProps, Position } from "reactflow";
import { setUpConditions } from "../utils/utils";
import { fetchAllConditions } from "../api/api";
import { evaluateConditions } from "../utils/evaluate";
import { getState } from "../utils/state";
import SimilarConditions from "../components/SimilarConditions";
import { ConditionType } from "../types/data";
import Condition from "../components/Condition";

function ConditionNode({ data: { condition } }: NodeProps<{ condition: ConditionType }>) {
	const { selectedSymptoms } = getState();
	const [similarConditions, setSimilarConditions] = useState<ConditionType[]>([]);

	useEffect(() => {
		fetchAllConditions().then((data) => {
			// get the top 5 similar conditions excluding the current condition
			const topConditions = evaluateConditions(setUpConditions(data), selectedSymptoms).slice(1, 6)
            const topCondtionsList = topConditions.map((condition) => {
					return {
						id: condition.id,
						name: condition.name,
					};
				});

			setSimilarConditions(topCondtionsList);
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
            <Condition condition={condition}/>
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
