import { createSlice } from "@reduxjs/toolkit";

export interface UiInitState {
	displayTitle: boolean;
	displayInstructions: boolean;
}

const uiSlice = createSlice({
	name: "ui",
	initialState: {
		displayTitle: true,
		displayInstructions: false,
	} as UiInitState,
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
