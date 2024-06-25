import { createSlice } from "@reduxjs/toolkit";
import { generateSymptoms } from "../../utils/evaluate";
import { sampleConditions } from "../../react_flow_components/constants";
import { removeDuplicates } from "../../utils/utils";

export interface SymptomInitState {
	totalSymptoms: string[];
	selectedSymptoms: string[];
}

const symptomsSlice = createSlice({
	name: "symptoms",
	initialState: {
		totalSymptoms: removeDuplicates(generateSymptoms(sampleConditions)),
		selectedSymptoms: [],
	} as SymptomInitState,
	reducers: {
		addSymptom: (state, action) => {
			state.selectedSymptoms.push(action.payload);
		},

		resetSymptoms: (state) => {
			state.selectedSymptoms = [];
		},

		setSymptoms: (state, action) => {
			state.totalSymptoms = action.payload;
		},
	},
});

export const { addSymptom, resetSymptoms, setSymptoms } = symptomsSlice.actions;
export default symptomsSlice.reducer;
