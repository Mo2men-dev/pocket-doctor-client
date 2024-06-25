export interface Condition {
	id?: string;
	name: string;
	description: string;
	symptoms?: string[];
	similarity?: number;
	flag?: boolean;
}

export interface Symptom {
	id?: string;
	name: string;
}
