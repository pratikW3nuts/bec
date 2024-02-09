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
			'Sarabun': ["Sarabun", "sans-serif"],
      'Roboto': ["Roboto", "sans-serif"],
		},
    extend: {
      colors: {
        primary: "#FF5E41",
				white: "#ffffff",
        black:"#222222",
        paragraph:"#A7A7A7",
        skin:"#E9E9E9",
        darkgrey:"#222222",
			},
      // clipPath: {
      //   'triangle': 'polygon(100% 0, 50% 0, 100% 133px)',
      // },
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
      backgroundImage:{
        "service":"url(../assets/images/servicebg.png)",
      },
      fontSize: {
        h1: ["118px", "113%"],
        h2: ["64px", "120%"],
        h3: ["20px", "120%"],
      },
    },
  },
  plugins: [],
}