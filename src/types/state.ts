import { ConditionType } from "./data";
import { Edge, Node } from "reactflow";

export interface LayoutStateType {
	nodes: Node[];
	edges: Edge[];
}

export interface ConditionStateType {
    conditions: ConditionType[];
    matchFound: boolean;
};

export interface SymptomStateType {
	totalSymptoms: string[];
	selectedSymptoms: string[];
};

export interface UiStateType {
	displayTitle: boolean;
	displayInstructions: boolean;
};