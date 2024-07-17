import { ConditionType } from "../types/data";

/**
 * Capitalizes the first letter of a string.
 * @param string the string to capitalize.
 * @returns the string with the first letter capitalized.
 *
 * @example
 * ```ts
 * capitalizeFirstLetter("hello");
 * ```
 */
export function capitalizeFirstLetter(string: string): string {
	const s = string.toLowerCase();
	return s.charAt(0).toUpperCase() + s.slice(1);
}

/**
 * Removes duplicates from an array.
 * @param arr the array to remove duplicates from.
 * @returns an array without duplicates.
 *
 * @example
 * ```ts
 * removeDuplicates(arr);
 * ```
 */
export function removeDuplicates(arr: any[]): any[] {
	return Array.from(new Set(arr));
}

/**
 * Sets up the conditions array.
 * @param conditions an array of conditions.
 * @returns a formatted array of conditions.
 *
 * @example
 * ```ts
 * setUpConditions(conditions);
 * ```
 */
export function setUpConditions(
	conditions: Array<{
		condition: ConditionType;
		symptoms: string[];
	}>
) {
	const formattedConditions = conditions.map((condition) => {
		return {
			id: condition.condition.id,
			name: condition.condition.name,
			symptoms: condition.symptoms.map((symptom: any) => {
				return symptom;
			}),
			description: condition.condition.description,
			flag: true,
		};
	});

	return formattedConditions;
}
