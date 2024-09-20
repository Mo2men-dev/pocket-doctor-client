import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { fetchAllConditions } from "../api/api";
import Nav from "../components/Nav";
import { ConditionType } from "../types/data";
import ConditionsList from "../components/ConditionsList";


function Conditions() {
	const [conditions, setConditions] = React.useState<Array<{ condition: ConditionType; symptoms: string[]; }>>([]);
    const displayTitle = useSelector((state: any) => state.uiState.displayTitle);

	useEffect(() => {
		fetchAllConditions().then((data) => {
			setConditions(data);
		});
	}, []);

	return (
		<div>
            <div className="relative w-full h-16">
                {displayTitle && ( <Nav/> )}
            </div>
			<header className="flex justify-center text-3xl p-2 text-blue-400">
				<h1>Conditions</h1>
			</header>
			<section className="p-4">
                <ConditionsList conditions={conditions} />
			</section>
		</div>
	);
}

export default Conditions;
