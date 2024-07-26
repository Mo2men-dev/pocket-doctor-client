import { createSlice } from "@reduxjs/toolkit";
import { UiStateType } from "../../types/state";

const uiSlice = createSlice({
	name: "ui",
	initialState: {
		displayTitle: true,
		displayInstructions: false,
	} as UiStateType,
	reducers: {
		setDisplayTitle: (state, action) => {
			state.displayTitle = action.payload;
		},

		setDisplayInstructions: (state, action) => {
			state.displayInstructions = action.payload;
		},
	},
});

export const { setDisplayTitle, setDisplayInstructions } = uiSlice.actions;

export default uiSlice.reducer;
