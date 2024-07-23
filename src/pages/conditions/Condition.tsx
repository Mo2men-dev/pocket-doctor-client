import React from "react";
import { capitalizeFirstLetter } from "../../utils/utils";
import { ConditionType } from "../../types/data";
import { useParams } from "react-router-dom";
import { fetchCondition } from "../../api/api";
import Nav from "../../components/Nav";
import { useSelector } from "react-redux";

function Condition() {
    const displayTitle = useSelector((state: any) => state.uiState.displayTitle);

	const { id } = useParams<{ id: string }>();
	const [condition, setCondition] = React.useState<{
		condition: ConditionType;
		symptoms: string[];
	} | null>(null);

	React.useEffect(() => {
		fetchCondition(id!).then((data) => {
			setCondition(data);
		});
	}, []);

	return (
		<div>
            <div className="relative w-full h-16">
                {displayTitle && ( <Nav/> )}
            </div>
			<header className="flex justify-center text-3xl p-2 text-blue-400">
				<h1>{condition?.condition.name}</h1>
			</header>
			<section className="p-4">
				<div className="bg-blue-500 rounded-md p-4">
					{condition ? (
						<>
							<h3 className="text-lg font-semibold underline">Description:</h3>
							<p>{condition.condition.description}</p>
							<h3 className="text-lg font-semibold underline">Symptoms:</h3>
							<div className="list-disc">
								{condition.symptoms.map((symptom, index) => {
									return <li key={index}>{capitalizeFirstLetter(symptom)}</li>;
								})}
							</div>
						</>
					) : (
						<div className="text-white flex justify-center">Loading...</div>
					)}
				</div>
			</section>
		</div>
	);
}

export default Condition;
