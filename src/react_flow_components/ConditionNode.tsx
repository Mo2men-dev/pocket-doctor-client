import React from "react";
import { Handle, NodeProps, Position } from "reactflow";
import { capitalizeFirstLetter } from "../utils/utils";

function ConditionNode({ data: { condition } }: NodeProps<{ condition: any }>) {
	return (
		<>
			<Handle
				type="target"
				position={Position.Left}
				className="bg-blue-500"
				id="a"
			/>
			<div className="bg-white rounded-sm p-1 shadow-lg min-w-96 max-w-[800px]">
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
