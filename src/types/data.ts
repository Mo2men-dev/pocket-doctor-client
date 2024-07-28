export interface ConditionType {
	id?: string;
	name: string;
	description?: string;
	symptoms?: string[];
	similarity?: number;
	flag?: boolean;
}

export interface Symptom {
	id?: string;
	name: string;
}

export interface NodePathType {
    path: string[];
    nodesOnPath: string[];
}