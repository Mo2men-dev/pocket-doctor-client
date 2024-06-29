export function capitalizeFirstLetter(string: string): string {
	const s = string.toLowerCase();
	return s.charAt(0).toUpperCase() + s.slice(1);
}

export function removeDuplicates(arr: any[]): any[] {
	return Array.from(new Set(arr));
}

export function setUpConditions(conditions: any[]) {
	const formattedConditions = conditions.map((condition) => {
		return {
			name: condition.condition.name,
			symptoms: condition.symptoms.map((symptom: any) => {
				return symptom.name;
			}),
			description: condition.condition.description,
			flag: true,
		};
	});

	return formattedConditions;
}
