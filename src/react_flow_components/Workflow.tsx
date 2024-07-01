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
import { setEdgeState, setNodeState } from "../redux/nodes/slice";
import ConditionNode from "./ConditionNode";
import { setMatchFound } from "../redux/conditions/slice";
import { generatePath } from "../utils/generate";

const nodeTypes = {
	symptomNode: SymptomNode,
	initSymptomNode: InitSymptomNode,
	conditionNode: ConditionNode,
};

function Workflow() {
	const nodeState = useSelector((state: any) => state.layoutState.nodes);
	const edgeState = useSelector((state: any) => state.layoutState.edges);
	const selectedSymptoms = useSelector(
		(state: any) => state.symptomState.selectedSymptoms
	);
	const matchFound = useSelector(
		(state: any) => state.conditionState.matchFound
	);
	const totalsymptoms = useSelector(
		(state: any) => state.symptomState.totalSymptoms
	);
	const displayTitle = useSelector((state: any) => state.uiState.displayTitle);

	const [reactFlowInstance, setReactFlowInstance] =
		React.useState<ReactFlowInstance<any, any> | null>(null);
	const [showInfo, setShowInfo] = React.useState(false);

	const { nodes: layoutedNodes, edges: layoutedEdges } = getLayoutedElements(
		nodeState,
		edgeState
	);

	const dispatch = useDispatch();

	const [nodes, setNodes, onNodesChange] = useNodesState(layoutedNodes);
	const [edges, setEdges, onEdgesChange] = useEdgesState(layoutedEdges);

	useEffect(() => {
		let newEdges;
		// make all current nodes unclickable
		const newNodes = nodeState.map((node: any) => {
			return {
				...node,
				data: { ...node.data, clickable: false },
			};
		});
		dispatch(setNodeState(newNodes));

		if (!matchFound) {
			newEdges = createEdges(nodeState);
		} else {
			const path = generatePath(nodeState);
			let index = 1;
			newEdges = edgeState.map((edge: any) => {
				if (path.path.includes(edge.id)) {
					return {
						...edge,
						animated: false,
						style: { stroke: "#0FFF50" },
					};
				} else {
					return {
						...edge,
						animated: true,
					};
				}
			});

			setTimeout(() => {
				reactFlowInstance?.fitView({
					duration: 1000,
					includeHiddenNodes: true,
					padding: 0.1,
					nodes: [{ id: path.nodesOnPath[0] }],
				});
			}, 100);

			const interval = setInterval(() => {
				reactFlowInstance?.fitView({
					duration: 1500,
					includeHiddenNodes: true,
					padding: 0.1,
					nodes: [{ id: path.nodesOnPath[index] }],
				});
				index++;

				if (index >= path.nodesOnPath.length) {
					clearInterval(interval);
				}
			}, 1500);
		}

		const { nodes: layoutedNodes, edges: _layoutedEdges } = getLayoutedElements(
			nodeState,
			newEdges
		);

		setNodes(layoutedNodes);
		setEdges(newEdges);

		if (!matchFound) {
			setTimeout(() => {
				reactFlowInstance?.fitView({
					duration: 1000,
					includeHiddenNodes: true,
					padding: 0.1,
				});
			}, 100);
		}

		if (totalsymptoms.length === 1) {
			dispatch(setMatchFound(true));
			dispatch(setEdgeState(newEdges));
		}
	}, [selectedSymptoms, matchFound]);

	return (
		<div className="relative w-full h-full flex justify-center">
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
			{displayTitle && (
				<div className="absolute bottom-0 right-0 flex justify-end items-end p-5">
					<div className="flex justify-center items-center">
						<div
							onMouseEnter={() => setShowInfo(true)}
							onMouseLeave={() => setShowInfo(false)}
							className="font-mono bg-red-600 rounded-circle text-sm w-6 h-6 flex justify-center items-center bg-opacity-50 text-orange-400 cursor-pointer">
							i
						</div>
						{showInfo && (
							<div
								className="absolute right-full bg-red-600 py-1 px-2 rounded-md text-sm text-nowrap
                            ">
								This project is not intended to serve as a substitute for
								professional medical advice from a licensed physician.
							</div>
						)}
					</div>
				</div>
			)}
		</div>
	);
}

export default Workflow;
