import { createSlice } from "@reduxjs/toolkit";
import { Edge } from "reactflow";
import {
	initialEdges,
	initialNodes,
} from "../../react_flow_components/constants";

export interface LayoutState {
	nodes: Node[];
	edges: Edge[];
}

const layoutSlice = createSlice({
	name: "layoutState",
	initialState: {
		nodes: initialNodes,
		edges: initialEdges,
	},
	reducers: {
		setNodeState: (state, action) => {
			state.nodes = action.payload;
		},

		updateNodeState: (state, action) => {
			state.nodes = [...state.nodes, action.payload];
		},
	},
});

export const { updateNodeState, setNodeState } = layoutSlice.actions;
export default layoutSlice.reducer;
