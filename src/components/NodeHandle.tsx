import React from "react";
import { Position, Handle } from "reactflow";

const NodeHandle = ({ type, position, id }: { type: "source" | "target"; position: Position; id: string }) => (
    <Handle type={type} position={position} className="bg-blue-500" id={id} />
);

export default NodeHandle;