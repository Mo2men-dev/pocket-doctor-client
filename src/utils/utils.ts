export function capitalizeFirstLetter(string: string): string {
	const s = string.toLowerCase();
	return s.charAt(0).toUpperCase() + s.slice(1);
}

export function removeDuplicates(arr: any[]): any[] {
	return Array.from(new Set(arr));
}
