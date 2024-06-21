import { createSlice } from "@reduxjs/toolkit";
import { Edge } from "reactflow";
import {
	initialEdges,
	proccedNodes,
} from "../../react_flow_components/constants";

export interface LayoutState {
	nodes: Node[];
	edges: Edge[];
}

const layoutSlice = createSlice({
	name: "layoutState",
	initialState: {
		nodes: proccedNodes,
		edges: initialEdges,
	},
	reducers: {
		updtaeNodeState: (state, action) => {
			state.nodes = [...state.nodes, action.payload];
		},
	},
});

export const { updtaeNodeState } = layoutSlice.actions;
export default layoutSlice.reducer;
