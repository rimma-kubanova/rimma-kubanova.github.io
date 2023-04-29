module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "background": "url('./assets/background.png')",
        "aboutme": "url('./assets/about-me.png')",
        "background-2": "url('./assets/background-2nd.png')",
      },
	  height: {
		'custom': 'calc(100vh)',
	  }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
