import { useState, useEffect } from "react";
import { ReactFlowInstance, useNodesState, useEdgesState } from "reactflow";
import { useDispatch } from "react-redux";

import { fetchAllConditions } from "../api/api";
import { ConditionType } from "../types/data";

import { generateFilteredConditions, generateNewSymptoms, generateSymptomsNodes } from "./generate";
import { updateNodesAndEdges, getLayoutedElements, createNewConditionNode } from "./layout";
import { setSymptoms, addSymptom } from "../redux/symptoms/slice";
import { setConditions } from "../redux/conditions/slice";
import { evaluateConditions } from "./evaluate";
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

// this hook is used to manage the state of the symptom node when it is clicked.
export function useSymptomNode(symptom: string, parentID: string, clickable: boolean) {
    const { totalConditions, selectedSymptoms } = getState();
    const dispatch = useDispatch();

    const handleOnClick = () => {
        if (!clickable) return;

        const pId = parentID;
        const symptomUpperCase = symptom.toUpperCase();

        const noZeroSimilarity = generateFilteredConditions(symptomUpperCase, totalConditions);
        const evaluatedConditions = evaluateConditions(noZeroSimilarity, [...selectedSymptoms, symptomUpperCase]);
        dispatch(setConditions(evaluatedConditions));

        const newSymptoms = generateNewSymptoms(noZeroSimilarity, symptomUpperCase, selectedSymptoms);
        dispatch(setSymptoms(newSymptoms));

        dispatch(addSymptom(symptom));
        const newNodes = generateSymptomsNodes(newSymptoms, pId, dispatch);

        createNewConditionNode(newSymptoms, evaluatedConditions, newNodes, dispatch);
    };

    return { handleOnClick };
}