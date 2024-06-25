import { createSlice } from "@reduxjs/toolkit";
import { sampleConditions } from "../../react_flow_components/constants";

const conditionSlice = createSlice({
	name: "conditionState",
	initialState: {
		conditions: sampleConditions,
	},
	reducers: {
		setConditions: (state, action) => {
			state.conditions = action.payload;
		},
	},
});

export const { setConditions } = conditionSlice.actions;
export default conditionSlice.reducer;
