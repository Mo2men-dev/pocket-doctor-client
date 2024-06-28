import { createSlice } from "@reduxjs/toolkit";
import { Edge, Node } from "reactflow";
import {
	initialEdges,
	initialNodes,
} from "../../react_flow_components/constants";

export interface LayoutState {
	nodes: Node[];
	edges: Edge[];
	selectedNodes: any[];
}

const layoutSlice = createSlice({
	name: "layoutState",
	initialState: {
		nodes: initialNodes,
		edges: initialEdges,
	} as LayoutState,
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
