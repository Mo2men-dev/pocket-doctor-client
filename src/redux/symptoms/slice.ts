import { createSlice } from "@reduxjs/toolkit";
import { SymptomStateType } from "../../types/state";

const symptomsSlice = createSlice({
	name: "symptoms",
	initialState: {
		totalSymptoms: [],
		selectedSymptoms: [],
	} as SymptomStateType,
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
