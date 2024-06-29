import { createSlice } from "@reduxjs/toolkit";

export interface SymptomInitState {
	totalSymptoms: string[];
	selectedSymptoms: string[];
}

const symptomsSlice = createSlice({
	name: "symptoms",
	initialState: {
		totalSymptoms: [],
		selectedSymptoms: [],
	} as SymptomInitState,
	reducers: {
		addSymptom: (state, action) => {
			state.selectedSymptoms.push(action.payload.toUpperCase());
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
