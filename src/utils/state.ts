import { useSelector } from "react-redux";
import { LayoutStateType, SymptomStateType, ConditionStateType, UiStateType } from "../types/state";

/**
 * Function that returns all the states from the redux store.
 * @returns an object containing all the states. 
*/
export function getState() {
	const nodeState = useSelector((state: { layoutState: LayoutStateType }) => state.layoutState.nodes);
	const edgeState = useSelector((state: { layoutState: LayoutStateType }) => state.layoutState.edges);
	const selectedSymptoms = useSelector((state: { symptomState: SymptomStateType }) => state.symptomState.selectedSymptoms);
	const totalsymptoms = useSelector((state: { symptomState: SymptomStateType }) => state.symptomState.totalSymptoms);
    const matchFound = useSelector((state: { conditionState: ConditionStateType }) => state.conditionState.matchFound);
	const displayTitle = useSelector((state: { uiState: UiStateType }) => state.uiState.displayTitle);

    return { nodeState, edgeState, selectedSymptoms, totalsymptoms, matchFound, displayTitle };
}