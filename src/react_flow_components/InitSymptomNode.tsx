import React, { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { Handle, Position } from "reactflow";
import { capitalizeFirstLetter } from "../utils/utils";
import { setDisplayInstructions } from "../redux/ui/slice";
import { getState } from "../utils/state";
import { init } from "../utils/init";

function InitSymptomNode() {
    const { totalSymptoms, totalConditions, displayInstructions, displayTitle } = getState();

	const [symptom, setSymptom] = useState("");
	const [filteredSymptoms, setFilteredSymptoms] = useState(totalSymptoms);
	const [inputFocused, setInputFocused] = useState(false);
	const [disableEnter, setDisableEnter] = useState(true);
	const parentRef = useRef<HTMLButtonElement>(null);

	const dispatch = useDispatch();

	const handleOnChange = (e: any) => {
		setSymptom(e.target.value);
		const value = e.target.value;
		const filtered = totalSymptoms.filter((s: string) => {
			return s.toLowerCase().includes(value.toLowerCase());
		});
		setFilteredSymptoms(filtered);

		setDisableEnter(true);
		parentRef.current?.blur();
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

	const handleSubmit = () => {
        // initialize conditions, symptoms, display instructions and nodes.
		init(totalConditions, symptom, dispatch);
	};

	return (
		<div className="relative">
			{displayInstructions && (
				<div className="hidden bg-green-400 p-1 rounded-sm bg-opacity-60 absolute z-30 top-[-300%] text-[6px] font-semibold max-sm:block animate-fade-in">
					<span className="underline">How to use:</span>
					<div className="p-1 flex flex-col">
						<span>1. Type the symptom you are experiencing.</span>
						<span>2. Select a symptom.</span>
						<span>
							3. Press <span className="text-black">Enter</span>
						</span>
					</div>
				</div>
			)}

			<div className="p-1 bg-blue-500 rounded-sm shadow-lg relative">
				<Handle
					type="target"
					position={Position.Left}
					className="bg-blue-500"
					id="a"
				/>

				<div className="w-fit relative">
					{displayTitle && (
						<div className="absolute top-[-170%] left-[5%]">
							<object
								data="/title.svg"
								className="w-32"></object>
						</div>
					)}

					<input
						className="text-black rounded-sm p-1 shadow-xl text-sm max-lg:w-36 max-md:w-32"
						value={symptom}
						onChange={(e) => handleOnChange(e)}
						maxLength={20}
						placeholder="Enter symptom"
						onFocus={() => {
							handleFocus();
							dispatch(setDisplayInstructions(true));
						}}
						onBlur={() => {
							dispatch(setDisplayInstructions(true));
						}}
					/>

					{displayInstructions && (
						<div className="absolute top-[-90%] left-full max-sm:hidden">
							<object
								data="/arrow.svg"
								className="w-20"></object>
						</div>
					)}

					{inputFocused && filteredSymptoms.length > 0 ? (
						<div className="w-full absolute bg-white rounded-sm max-h-20 z-50 shadow-lg mt-2 p-1 overflow-y-scroll">
							{filteredSymptoms.map((s: string) => {
								return (
									<div key={s}>
										<div
											className="text-black p-1 cursor-pointer text-xs"
											onClick={() => {
												setSymptom(capitalizeFirstLetter(s));
												setInputFocused(false);
												setDisableEnter(false);

												parentRef.current?.focus();
											}}>
											{capitalizeFirstLetter(s)}
										</div>
										<hr />
									</div>
								);
							})}
						</div>
					) : (
						<></>
					)}

					{displayInstructions && (
						<div className="absolute -rotate-3 top-10 right-full">
							<object
								data="/thirdInstruction.svg"
								className="w-40 max-lg:w-28 max-md:w-24 max-sm:hidden"></object>
						</div>
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
						handleSubmit();
					}
				}}
				ref={parentRef}></button>

			{displayInstructions && (
				<div className="absolute w-full flex justify-center top-[350%]">
					<button
						onClick={() => handleSubmit()}
						disabled={disableEnter}
						className="hidden bg-black text-white py-1 px-2 rounded-sm absolute z-30 text-[6px] font-semibold max-sm:block">
						Enter
					</button>
				</div>
			)}
		</div>
	);
}

export default InitSymptomNode;
