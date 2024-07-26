import { generatePath } from "./generate";
import { Node } from "reactflow";

/**
 * Function that fits the view on a specific node.
 * @param reactFlowInstance the react flow instance.
 * @param nodesId the id of the node to zoom in on or null to fit the view on all nodes.
 */
export function zoomInOnNode(reactFlowInstance: any, nodeId?: string) {
    // if a node id is provided, zoom in on that node
    // otherwise, fit the view on all nodes
    const nodeObj = nodeId ? [{ id: nodeId }] : null;

    setTimeout(() => {
        reactFlowInstance?.fitView({
            duration: 1000,
            includeHiddenNodes: true,
            padding: 0.1,
            nodes: nodeObj,
        });
    }, 100);
}


/**
 * Function that zooms in on each node on the path after a match is found.
 * @param reactFlowInstance the react flow instance.
 * @param nodeState an array of nodes.
 */
export const playMatchFoundAnimation = (reactFlowInstance: any, nodeState: Node[]) => {
    const path = generatePath(nodeState);
    const pathLength = path.nodesOnPath.length;
    let index = 1;

    // zoom in on the first node
    zoomInOnNode(reactFlowInstance, path.nodesOnPath[0]);

    // set an interval to zoom in on each node on the path
    const interval = setInterval(() => {
        zoomInOnNode(reactFlowInstance, path.nodesOnPath[index]);
        index++;

        // clear the interval when the last node is reached
        if (index >= pathLength) {
            clearInterval(interval);
        }
    }, 1500);
}