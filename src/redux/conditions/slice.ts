import { createSlice } from "@reduxjs/toolkit";
import { sampleConditions } from "../../react_flow_components/constants";

const conditionSlice = createSlice({
	name: "conditionState",
	initialState: {
		conditions: sampleConditions,
		matchFound: false,
	},
	reducers: {
		setConditions: (state, action) => {
			state.conditions = action.payload;
		},

		setMatchFound: (state, action) => {
			state.matchFound = action.payload;
		},
	},
});

export const { setConditions, setMatchFound } = conditionSlice.actions;
export default conditionSlice.reducer;
