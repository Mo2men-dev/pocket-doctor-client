import axios from "axios";

export const fetchAllConditions = async () => {
	const API_URL = import.meta.env.VITE_API_URL as string;
	const response = (await axios.get(`${API_URL}/conditions/all/symptoms`)).data;
	return response;
};

export const fetchCondition = async (id: string) => {
	const API_URL = import.meta.env.VITE_API_URL as string;
	const response = (await axios.get(`${API_URL}/conditions/${id}/symptoms`))
		.data;
	return response;
};
