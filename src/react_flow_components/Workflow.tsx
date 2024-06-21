import React, { useCallback, useEffect } from "react";
import ReactFlow, {
	Background,
	Connection,
	Controls,
	addEdge,
	useEdgesState,
	useNodesState,
} from "reactflow";
import "reactflow/dist/style.css";

import SymptomNodeInit from "./SymptomNodeInit";
import dagre from "@dagrejs/dagre";
import { useDispatch, useSelector } from "react-redux";
import { getLayoutedElements } from "../utils/layout";
import { initialNodes, initialEdges, proccedNodes } from "./constants";

const dagreGraph = new dagre.graphlib.Graph();
dagreGraph.setDefaultEdgeLabel(() => ({}));

const nodeTypes = {
	symptomNode: SymptomNodeInit,
};

function Workflow() {
	const nodeState = useSelector((state: any) => state.layoutState.nodes);
	const edgeState = useSelector((state: any) => state.layoutState.edges);

	const { nodes: layoutedNodes, edges: layoutedEdges } = getLayoutedElements(
		nodeState,
		edgeState
	);

	const [nodes, setNodes, onNodesChange] = useNodesState(layoutedNodes);
	const [edges, setEdges, onEdgesChange] = useEdgesState(layoutedEdges);

	useEffect(() => {
		console.log("nodes", nodes);
	}, []);

	const onConnect = useCallback((con: Connection) => {
		const edge = {
			...con,
			id: `${con.source}-${con.target}`,
			animated: true,
		};
		setEdges((es) => addEdge(edge, es));
	}, []);

	return (
		<div className="w-full h-full">
			<ReactFlow
				nodes={nodes}
				edges={edges}
				onNodesChange={onNodesChange}
				onEdgesChange={onEdgesChange}
				onConnect={onConnect}
				fitView
				nodeTypes={nodeTypes}>
				<Background
					color="#888"
					gap={16}
				/>
				<Controls />
			</ReactFlow>
		</div>
	);
}

export default Workflow;
