/**
 * Function that compares two string arrays and returns a percentage of similarity between the two arrays.
 * @param arr1 an array of strings.
 * @param arr2 an array of strings.
 * @returns a percentage of similarity between the two arrays.
 *
 * @example
 * ```ts
 * evaluate(["headache", "fever"], ["headache", "fever", "cough"]);
 * //Output: 67
 * ```
 */
export function evaluate(arr1: string[], arr2: string[]): number {
	let count = 0;
	for (let i = 0; i < arr1.length; i++) {
		if (arr2.includes(arr1[i])) {
			count++;
		}
	}
	return Math.ceil((count / arr1.length) * 100);
}

/**
 * Function that evaluates the conditions based on the selected symptoms and returns an array ordered by the percentage of similarity.
 * @param conditions an array of conditions.
 * @param selectedSymptoms an array of selected symptoms.
 * @returns an array of conditions ordered by the percentage of similarity.
 *
 * @example
 * ```ts
 * evaluateConditions(conditions, selectedSymptoms);
 * ```
 */
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

/**
 * Function that generates the symptoms based on the condition similarity
 * if the condition has a similarity greater than 0% the symptoms will be added to the output array.
 * The output array will be used to generate the symptoms nodes.
 *
 * @param conditions an array of conditions.
 * @returns an array of symptoms.
 *
 * @example
 * ```ts
 * generateSymptoms(conditions);
 * ```
 */
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
