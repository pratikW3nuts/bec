/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
			'PT Sans': ["PT Sans", "sans-serif"],
      'Oswald': ["Oswald", "sans-serif"],
		},
    extend: {
      colors: {
        primary: "#FF5E41",
				white: "#ffffff",
        black:"#222222",
        paragraph:"#A7A7A7",
			},
      container: {
				center: true,

				padding: {
					DEFAULT: "15px",
				},

				screens: {
					sm: "750px",
					md: "970px",
					lg: "1230px",
				},
			},
      fontSize: {
        h1: ["118px", "113%"],
        h2: ["52px", "1.54"],
        h3: ["20px", "1.2"],
      },
    },
  },
  plugins: [],
}