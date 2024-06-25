import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Handle, Position } from "reactflow";
import { addSymptom } from "../redux/symptoms/slice";
import { setNodeState } from "../redux/nodes/slice";
import { generateRandomId, generateRandomSymptoms } from "../utils/generate";

function InitSymptomNode() {
	const totalSymptoms = useSelector(
		(state: any) => state.symptomState.totalSymptoms
	);

	const [symptom, setSymptom] = React.useState("");
	const [filteredSymptoms, setFilteredSymptoms] = React.useState(totalSymptoms);
	const [inputFocused, setInputFocused] = React.useState(false);
	const parentRef = React.useRef<HTMLButtonElement>(null);

	const dispatch = useDispatch();

	const handleOnChange = (e: any) => {
		setSymptom(e.target.value);
		const value = e.target.value;
		const filtered = totalSymptoms.filter((s: string) => {
			return s.toLowerCase().includes(value.toLowerCase());
		});
		setFilteredSymptoms(filtered);
	};

	const handleFocus = () => {
		setInputFocused(true);
		if (symptom.length > 0) {
			const filtered = totalSymptoms.filter((s: string) => {
				return s.toLowerCase().includes(symptom.toLowerCase());
			});
			setFilteredSymptoms(filtered);
		} else {
			setFilteredSymptoms(totalSymptoms);
		}
	};

	return (
		<>
			<div className="p-1 bg-blue-500 rounded-sm shadow-lg">
				<Handle
					type="target"
					position={Position.Left}
					className="bg-blue-500"
					id="a"
				/>
				<div className="w-fit relative">
					<input
						className="text-black rounded-sm p-1 shadow-xl text-sm"
						value={symptom}
						onChange={(e) => handleOnChange(e)}
						maxLength={20}
						placeholder="Enter symptom"
						onFocus={handleFocus}
					/>
					{inputFocused && filteredSymptoms.length > 0 ? (
						<div className="w-full absolute bg-white rounded-sm max-h-20 z-50 shadow-lg mt-2 p-1 overflow-y-scroll">
							{filteredSymptoms.map((s: string) => {
								return (
									<div key={s}>
										<div
											className="text-black p-1 cursor-pointer text-xs"
											onClick={() => {
												setSymptom(s);
												setInputFocused(false);
												parentRef.current?.focus();
											}}>
											{s}
										</div>
										<hr />
									</div>
								);
							})}
						</div>
					) : (
						<></>
					)}
				</div>
				<Handle
					type="source"
					position={Position.Right}
					className="bg-blue-500"
					id="b"
				/>
			</div>
			<button
				className="absolute cursor-grab"
				onKeyDown={(e) => {
					if (e.key === "Enter") {
						const rootId = generateRandomId(5);
						dispatch(addSymptom(symptom));
						dispatch(
							setNodeState([
								{
									id: rootId,
									type: "symptomNode",
									data: { symptom: symptom, parentID: rootId },
									position: { x: 0, y: 0 },
								},
							])
						);
						generateRandomSymptoms(totalSymptoms, 5, rootId, dispatch);
					}
				}}
				ref={parentRef}></button>
		</>
	);
}

export default InitSymptomNode;
