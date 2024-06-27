import React, { useEffect } from "react";
import ReactFlow, {
	Background,
	Controls,
	ReactFlowInstance,
	useEdgesState,
	useNodesState,
} from "reactflow";
import "reactflow/dist/style.css";

import SymptomNode from "./SymptomNode";
import { useDispatch, useSelector } from "react-redux";
import { getLayoutedElements } from "../utils/layout";
import { createEdges } from "../utils/nodesAndEdges";
import InitSymptomNode from "./InitSymptomNode";
import { setNodeState } from "../redux/nodes/slice";

const nodeTypes = {
	symptomNode: SymptomNode,
	initSymptomNode: InitSymptomNode,
};

function Workflow() {
	const nodeState = useSelector((state: any) => state.layoutState.nodes);
	const edgeState = useSelector((state: any) => state.layoutState.edges);
	const selectedSymptoms = useSelector(
		(state: any) => state.symptomState.selectedSymptoms
	);

	const [reactFlowInstance, setReactFlowInstance] =
		React.useState<ReactFlowInstance<any, any> | null>(null);

	const { nodes: layoutedNodes, edges: layoutedEdges } = getLayoutedElements(
		nodeState,
		edgeState
	);

	const dispatch = useDispatch();

	const [nodes, setNodes, onNodesChange] = useNodesState(layoutedNodes);
	const [edges, setEdges, onEdgesChange] = useEdgesState(layoutedEdges);

	useEffect(() => {
		// make all current nodes unclickable
		const newNodes = nodeState.map((node: any) => {
			return {
				...node,
				data: { ...node.data, clickable: false },
			};
		});
		dispatch(setNodeState(newNodes));

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
	}, [selectedSymptoms]);

	return (
		<div className="w-full h-full">
			<ReactFlow
				onInit={(instance) => setReactFlowInstance(instance)}
				nodes={nodes}
				edges={edges}
				onNodesChange={onNodesChange}
				onEdgesChange={onEdgesChange}
				zoomOnScroll={false}
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
