/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
        extend: {
            colors: {
                lal: "#ff0000",
            },
            container: {
                screens: {
                    desktop: "1200px",
                },
            },
            width: {
                container_70: "70%",
                container_75: "75%",
                container_80: "80%",
                container_85: "85%",
                container_90: "90%",
                container_95: "95%",
            },
            screens: {
                tablet_lg: "1150px",
                tablet_md: "980px",
                tablet: "960px",
                mobile: "640px",
                mobile_sm: "600px",
            },
        },
    },
    plugins: [],
};
