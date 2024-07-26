import { createSlice } from "@reduxjs/toolkit";
import {
	initialEdges,
	initialNodes,
} from "../../react_flow_components/constants";
import { LayoutStateType } from "../../types/state";


const layoutSlice = createSlice({
	name: "layoutState",
	initialState: {
		nodes: initialNodes,
		edges: initialEdges,
	} as LayoutStateType,
	reducers: {
		setNodeState: (state, action) => {
			state.nodes = action.payload;
		},

		setEdgeState: (state, action) => {
			state.edges = action.payload;
		},

		updateNodeState: (state, action) => {
			state.nodes = [...state.nodes, action.payload];
		},

		addNode: (state, action) => {
			state.nodes = [...state.nodes, action.payload];
		},
	},
});

export const { updateNodeState, setNodeState, addNode, setEdgeState } =
	layoutSlice.actions;
export default layoutSlice.reducer;
