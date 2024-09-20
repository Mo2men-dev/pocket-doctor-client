import React from "react";
import { NodeProps, Position } from "reactflow";

import SimilarConditions from "../components/SimilarConditions";
import Condition from "../components/Condition";

import { useSimilarConditions } from "../utils/hooks";
import NodeHandle from "../components/NodeHandle";
import { ConditionType } from "../types/data";
import Button from "../components/Button";

function ConditionNode({ data: { condition } }: NodeProps<{ condition: ConditionType }>) {
    const similarConditions = useSimilarConditions();

    return (
        <>
            <NodeHandle type="target" position={Position.Left} id="a" />
            <div className="w-full my-1 text-xs flex justify-end">
                <Button text="Reset" props={{ onClick: () => window.location.reload() }} style="p-1 bg-black rounded-sm"/>
            </div>
            <Condition condition={condition} />
            <SimilarConditions similarConditions={similarConditions} />
            <NodeHandle type="source" position={Position.Right} id="b" />
        </>
    );
}

export default ConditionNode;