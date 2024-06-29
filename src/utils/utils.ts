export function capitalizeFirstLetter(string: string): string {
	const s = string.toLowerCase();
	return s.charAt(0).toUpperCase() + s.slice(1);
}

export function removeDuplicates(arr: any[]): any[] {
	return Array.from(new Set(arr));
}

export const setUpConditions = (conditions: any[]) => {
	const formattedData = conditions.map((condition) => {
		return {
			name: condition.condition.name,
			description: condition.condition.description,
			symptoms: condition.symptoms.map((symptom: any) => {
				return symptom.name;
			}),
			flag: true,
		};
	});

	return formattedData;
};
