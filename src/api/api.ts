import axios from "axios";

export const fetchAllConditions = async () => {
	const ENV = import.meta.env.VITE_ENV;
	const API_URL =
		ENV === "dev"
			? "http://localhost:3000"
			: (import.meta.env.VITE_API_URL as string);
	const AUTH_TOKEN = import.meta.env.VITE_AUTH_TOKEN as string;
	const response = (
		await axios.get(`${API_URL}/conditions/all/symptoms`, {
			headers: {
				Authorization: AUTH_TOKEN,
			},
		})
	).data;
	return response;
};

export const fetchCondition = async (id: string) => {
	const ENV = import.meta.env.VITE_ENV;
	const API_URL =
		ENV === "dev"
			? "http://localhost:3000"
			: (import.meta.env.VITE_API_URL as string);
	const AUTH_TOKEN = import.meta.env.VITE_AUTH_TOKEN as string;
	const response = (
		await axios.get(`${API_URL}/conditions/${id}/symptoms`, {
			headers: {
				Authorization: AUTH_TOKEN,
			},
		})
	).data;
	return response;
};
