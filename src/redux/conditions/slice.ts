import { createSlice } from "@reduxjs/toolkit";
import { ConditionStateType } from "../../types/state";

const conditionSlice = createSlice({
	name: "conditionState",
	initialState: {
		conditions: [],
		matchFound: false,
	} as ConditionStateType,
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
