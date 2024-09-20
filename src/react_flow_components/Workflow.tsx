import React from "react";
import ReactFlow, {
    Background,
    Controls,
} from "reactflow";
import "reactflow/dist/style.css";

import Disclaimer from "../components/Disclaimer";
import InitSymptomNode from "./InitSymptomNode";
import ConditionNode from "./ConditionNode";
import SymptomNode from "./SymptomNode";

import { useWorkflowState } from "../utils/hooks";

const nodeTypes = {
    symptomNode: SymptomNode,
    initSymptomNode: InitSymptomNode,
    conditionNode: ConditionNode,
};

function Workflow() {
    const { nodes, edges, onNodesChange, onEdgesChange, setReactFlowInstance, displayTitle, selectedSymptoms } = useWorkflowState();

    return (
        <div className="relative w-full h-full flex justify-center">
            <ReactFlow
                onInit={(instance) => setReactFlowInstance(instance)}
                nodes={nodes}
                edges={edges}
                onNodesChange={onNodesChange}
                onEdgesChange={onEdgesChange}
                panOnDrag={selectedSymptoms.length === 0 ? false : true}
                zoomOnScroll={false}
                fitView
                nodeTypes={nodeTypes}
            >
                <Background color="#888" gap={16} />
                <Controls />
            </ReactFlow>
            {displayTitle && <Disclaimer />}
        </div>
    );
}

export default Workflow;