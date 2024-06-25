// function that compares two string arrays and returns a percentage of similarity
// between the two arrays.
export function evaluate(arr1: string[], arr2: string[]): number {
	let count = 0;
	for (let i = 0; i < arr1.length; i++) {
		if (arr2.includes(arr1[i])) {
			count++;
		}
	}
	return (count / arr1.length) * 100;
}

// function that evaluates the conditions based on the selected symptoms
// and returns an array ordered by the percentage of similarity.
export function evaluateConditions(
	conditions: any[],
	selectedSymptoms: string[]
) {
	const result = conditions.map((condition) => {
		let similarity = evaluate(condition.symptoms, selectedSymptoms);
		return {
			...condition,
			similarity: similarity,
			flag: similarity === 0 ? false : true,
		};
	});

	return result.sort((a, b) => b.similarity - a.similarity);
}

export const generateSymptoms = (conditions: any[]) => {
	let output: any[] = [];
	for (let i = 0; i < conditions.length; i++) {
		if (conditions[i].flag === true) {
			const symptoms = conditions[i].symptoms.map((symptom: string) => {
				return symptom;
			});
			output = output.concat(symptoms);
		}
	}

	return output;
};
