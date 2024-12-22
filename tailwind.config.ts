import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'], // Adding Poppins font family
      },
      
      animation: {
        'slide-left-right': 'slideLeftRight 1s ease-out', // Same animation for both text and image
        'slide-top': 'slideTop 1s ease-out', // Slide in from top
        'slide-bottom': 'slideBottom 1s ease-out', // Slide in from bottom
      },
      keyframes: {
        slideLeftRight: {
          '0%': { transform: 'translateX(-100%)' }, // Slide in from left
          '100%': { transform: 'translateX(0)' },  // End position
        },
        slideTop: {
          '0%': { transform: 'translateY(-100%)' }, // Slide in from top
          '100%': { transform: 'translateY(0)' },   // End position
        },
        slideBottom: {
          '0%': { transform: 'translateY(100%)' },  // Slide in from bottom
          '100%': { transform: 'translateY(0)' },   // End position
        },
      },
      colors: {
        background: "var(--background)", // Custom background color from CSS variable
        foreground: "var(--foreground)", // Custom foreground color from CSS variable
      },
    },
  },
  plugins: [],
} satisfies Config;
