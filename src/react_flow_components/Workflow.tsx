import React, { useEffect } from "react";
import ReactFlow, {
	Background,
	Controls,
	ReactFlowInstance,
	useEdgesState,
	useNodesState,
} from "reactflow";
import "reactflow/dist/style.css";

import SymptomNodeInit from "./SymptomNodeInit";
import { useSelector } from "react-redux";
import { getLayoutedElements } from "../utils/layout";
import { createEdges } from "../utils/nodesAndEdges";

const nodeTypes = {
	symptomNode: SymptomNodeInit,
};

function Workflow() {
	const nodeState = useSelector((state: any) => state.layoutState.nodes);
	const edgeState = useSelector((state: any) => state.layoutState.edges);
	const [reactFlowInstance, setReactFlowInstance] =
		React.useState<ReactFlowInstance<any, any> | null>(null);

	const { nodes: layoutedNodes, edges: layoutedEdges } = getLayoutedElements(
		nodeState,
		edgeState
	);

	const [nodes, setNodes, onNodesChange] = useNodesState(layoutedNodes);
	const [edges, setEdges, onEdgesChange] = useEdgesState(layoutedEdges);

	useEffect(() => {
		const newEdges = createEdges(nodeState);
		const { nodes: layoutedNodes, edges: _layoutedEdges } = getLayoutedElements(
			nodeState,
			newEdges
		);

		setNodes(layoutedNodes);
		setEdges(newEdges);
		setTimeout(() => {
			reactFlowInstance?.fitView({
				duration: 1000,
				includeHiddenNodes: true,
				padding: 0.1,
			});
		}, 100);
	}, [nodeState]);

	return (
		<div className="w-full h-full">
			<ReactFlow
				onInit={(instance) => setReactFlowInstance(instance)}
				nodes={nodes}
				edges={edges}
				onNodesChange={onNodesChange}
				onEdgesChange={onEdgesChange}
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
