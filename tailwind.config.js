/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,ts,jsx,tsx}"],
    darkMode: "class",
    theme: {
        container: {
            padding: "1rem",
            center: true,
        },
        extend: {
            colors: {
                // primary: "#d1411e",
            },
        },
    },
    plugins: [],
};
