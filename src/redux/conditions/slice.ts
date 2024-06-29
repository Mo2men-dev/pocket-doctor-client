import { createSlice } from "@reduxjs/toolkit";

const conditionSlice = createSlice({
	name: "conditionState",
	initialState: {
		conditions: [],
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
