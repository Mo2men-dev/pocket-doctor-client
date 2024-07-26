import React, { useEffect, useState } from "react";
import ReactFlow, {
	Background,
	Controls,
	ReactFlowInstance,
	useEdgesState,
	useNodesState,
} from "reactflow";
import "reactflow/dist/style.css";

import Disclaimer from "../components/Disclaimer";

import SymptomNode from "./SymptomNode";
import InitSymptomNode from "./InitSymptomNode";
import ConditionNode from "./ConditionNode";

import { useDispatch } from "react-redux";
import { getLayoutedElements, makeNodesUnclickable } from "../utils/layout";
import { createEdges } from "../utils/nodesAndEdges";
import { setEdgeState, setNodeState } from "../redux/nodes/slice";
import { setMatchFound } from "../redux/conditions/slice";
import { getState } from "../utils/state";
import { playMatchFoundAnimation, zoomInOnNode } from "../utils/animations";
import { generateEdgesForNodesOnPath } from "../utils/generate";

const nodeTypes = {
    symptomNode: SymptomNode,
    initSymptomNode: InitSymptomNode,
    conditionNode: ConditionNode,
};

function Workflow() {

    const { nodeState, edgeState, selectedSymptoms, matchFound, displayTitle, totalsymptoms } = getState();
	const [reactFlowInstance, setReactFlowInstance] = useState<ReactFlowInstance<any, any> | null>(null);
	const { nodes: layoutedNodes, edges: layoutedEdges } = getLayoutedElements(nodeState, edgeState);
	const [nodes, setNodes, onNodesChange] = useNodesState(layoutedNodes);
	const [edges, setEdges, onEdgesChange] = useEdgesState(layoutedEdges);

	const dispatch = useDispatch();

	useEffect(() => {
		let newEdges;

		// make all current nodes unclickable
		const newNodes = makeNodesUnclickable(nodeState);
		dispatch(setNodeState(newNodes));

		if (!matchFound) {
			newEdges = createEdges(nodeState);
		} else {
            // create new edges to highlight the path to the condition node
			newEdges = generateEdgesForNodesOnPath(nodeState, edgeState);

            // play the match found animation
            playMatchFoundAnimation(reactFlowInstance, nodeState);
		}

        // each time the selected symptoms change, update the nodes and edges
		const { nodes: layoutedNodes, edges: _layoutedEdges } = getLayoutedElements(nodeState, newEdges);
		setNodes(layoutedNodes);
		setEdges(newEdges);

        // if no match is found, fit the view on all nodes
		if (!matchFound) zoomInOnNode(reactFlowInstance);

        // if the total symptoms array has only one symptom, set match found to true
        // and set the edge state to the new edges
		if (totalsymptoms.length === 1) {
			dispatch(setMatchFound(true));
			dispatch(setEdgeState(newEdges));
		}

	}, [selectedSymptoms, matchFound]);

	return (
		<div className="relative w-full h-full flex justify-center">
			<ReactFlow
				onInit={(instance) => {
                        setReactFlowInstance(instance)
                }}
				nodes={nodes}
				edges={edges}
				onNodesChange={onNodesChange}
				onEdgesChange={onEdgesChange}
				panOnDrag={selectedSymptoms.length === 0 ? false : true}
				zoomOnScroll={false}
				fitView
				nodeTypes={nodeTypes}>
				<Background
					color="#888"
					gap={16}
				/>
				<Controls />
			</ReactFlow>
			{displayTitle && ( <Disclaimer /> )}
		</div>
	);
}

export default Workflow;
