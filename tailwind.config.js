import { SymbolDisplayPartKind } from "typescript";

/** @type {import('tailwindcss').Config} */
export default {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			borderRadius: {
				circle: "50%",
			},
		},
	},
	plugins: [],
};
