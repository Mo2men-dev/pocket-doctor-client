import { SymbolDisplayPartKind } from "typescript";

/** @type {import('tailwindcss').Config} */
export default {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			keyframes: {
				slideFadeIn: {
                    "0%": {
                        opacity: 0,
                        transform: "translateY(-1rem)",
                    },
                    "100%": {
                        opacity: 1,
                        transform: "translateY(0)",
                    },
				},
			},
			borderRadius: {
				circle: "50%",
			},
			animation: {
                slideFadeIn: "slideFadeIn 0.5s ease-in-out",
            },
		},
	},
	plugins: [],
};
