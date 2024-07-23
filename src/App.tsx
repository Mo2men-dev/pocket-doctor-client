import React from "react";
import Workflow from "./react_flow_components/Workflow";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllConditions } from "./api/api";
import { setConditions } from "./redux/conditions/slice";
import { setSymptoms } from "./redux/symptoms/slice";
import { generateSymptoms } from "./utils/evaluate";
import { removeDuplicates, setUpConditions } from "./utils/utils";
import Nav from "./components/Nav";

function App() {
	const dispatch = useDispatch();
    const displayTitle = useSelector((state: any) => state.uiState.displayTitle);

	React.useEffect(() => {
		fetchAllConditions().then((data) => {
			const conditions = setUpConditions(data);
			dispatch(setConditions(conditions));
			dispatch(setSymptoms(removeDuplicates(generateSymptoms(conditions))));
		});
	}, []);

	return (
		<>
			<div className="w-full h-full">
                {displayTitle && ( <Nav/> )}
				<Workflow />
			</div>
		</>
	);
}

export default App;
