import React from "react";
import { Link } from "react-router-dom";
import { ConditionType } from "../../types/data";
import { fetchAllConditions } from "../../api/api";
import { useSelector } from "react-redux";
import Nav from "../../components/Nav";

function Conditions() {
    const displayTitle = useSelector((state: any) => state.uiState.displayTitle);

	// get the condition name from the url
	const [conditions, setConditions] = React.useState<
		Array<{
			condition: ConditionType;
			symptoms: string[];
		}>
	>([]);

	React.useEffect(() => {
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
				<div className="bg-blue-500 rounded-md p-4">
					{conditions.length !== 0 ? (
						conditions.map((condition, index) => {
							return (
								<Link
									to={`/conditions/${condition.condition.id}`}
									reloadDocument={true}
									key={index}>
									<div className="bg-white my-1 p-2 rounded-md shadow-md">
										<h3 className="text-lg text-blue-600 ">
											{condition.condition.name}
										</h3>
									</div>
								</Link>
							);
						})
					) : (
						<div className="text-white flex justify-center">Loading...</div>
					)}
				</div>
			</section>
		</div>
	);
}

export default Conditions;
