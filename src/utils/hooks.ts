import { useState, useEffect } from "react";

import { ReactFlowInstance, useNodesState, useEdgesState } from "reactflow";

import { useDispatch } from "react-redux";

import { updateNodesAndEdges, getLayoutedElements } from "./layout";

import { evaluateConditions } from "./evaluate";
import { fetchAllConditions } from "../api/api";
import { ConditionType } from "../types/data";
import { setUpConditions } from "./utils";
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

// this hook is used to get the similar conditions after a match is found.
export function useSimilarConditions() {
    const { selectedSymptoms } = getState();
    const [similarConditions, setSimilarConditions] = useState<ConditionType[]>([]);

    useEffect(() => {
        fetchAllConditions().then((data) => {
            const topConditions = evaluateConditions(setUpConditions(data), selectedSymptoms).slice(1, 6);
            const topCondtionsList = topConditions.map((condition) => ({
                id: condition.id,
                name: condition.name,
            }));

            setSimilarConditions(topCondtionsList);
        });
    }, [selectedSymptoms]);

    return similarConditions;
}