import React from "react";
import { NodeProps, Position } from "reactflow";

import NodeHandle from "../components/NodeHandle";
import { useSymptomNode } from "../utils/hooks";
import Symptom from "../components/Symptom";

function SymptomNode({ data: { symptom, parentID, clickable } }: NodeProps<{ symptom: string; parentID: string; clickable: boolean }>) {
    const { handleOnClick } = useSymptomNode(symptom, parentID, clickable);

    return (
        <>
            <NodeHandle type="target" position={Position.Left} id="a" />
            <Symptom symptom={symptom} onClick={handleOnClick} />
            <NodeHandle type="source" position={Position.Right} id="b" />
        </>
    );
}

export default SymptomNode;