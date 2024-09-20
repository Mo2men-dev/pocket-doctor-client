import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { ReactFlowInstance, useNodesState, useEdgesState } from "reactflow";
import { updateNodesAndEdges } from "./layout";
import { getLayoutedElements } from "./layout";
import { getState } from "./state";

// This hook is used to manage the state of the workflow.
export function useWorkflowState() {
    const [reactFlowInstance, setReactFlowInstance] = useState<ReactFlowInstance<any, any> | null>(null);

    const { nodeState, edgeState, selectedSymptoms, matchFound, displayTitle, totalSymptoms } = getState();
    const { nodes: layoutedNodes, edges: layoutedEdges } = getLayoutedElements(nodeState, edgeState);
    const [nodes, setNodes, onNodesChange] = useNodesState(layoutedNodes);
    const [edges, setEdges, onEdgesChange] = useEdgesState(layoutedEdges);

    const dispatch = useDispatch();

    useEffect(() => {
        updateNodesAndEdges(
            nodeState,
            edgeState,
            matchFound,
            reactFlowInstance,
            dispatch,
            setNodes,
            setEdges,
            totalSymptoms
        );

    }, [selectedSymptoms, matchFound]);

    return { nodes, edges, onNodesChange, onEdgesChange, setReactFlowInstance, displayTitle, selectedSymptoms };
}
