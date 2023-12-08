import type { Config } from "tailwindcss";
const { nextui } = require("@nextui-org/react");

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
        "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        container: {
            center: true,
            padding: {
                DEFAULT: "calc(16/1920*100*1rem)",
            },
            screens: {
                sm: "640px",
                md: "768px",
                lg: "960px",
                xl: "1230px",
                xxl: "1536px",
            },
        },
        extend: {
            fontFamily: {
                body: ["Epilogue", "sans-serif"],
            },
            backgroundImage: {
                gradient:
                    "linear-gradient(90deg, #A89142 0%, #F6E18D 51.3%, #BB9C66 100%)",
                gradient_2:
                    "linear-gradient(180deg, #F6E18D 0%, rgba(168, 145, 66, 0.75) 100%);",
            },
            colors: {
                transparent: "transparent",
                primary: {
                    text_dark: "#391400",
                    "text_dark--accent": "#EF6D58",
                    text_dark_gray: "rgba(57, 20, 0, 0.64)",
                    text_light_accent: "#EF6D58",
                    text_light_gray: "rgba(255, 255, 255, 0.64)",
                    text_gray: "rgba(255, 255, 255, 0.3)",
                },
                secondary: {
                    F3D1BF: "#F3D1BF",
                    F6D021: "#F6D021",
                    "5C2000": "#5C2000",
                    "391400": "#391400",
                    F5DED1: "#F5DED1",
                    FFE4DF: "#FFE4DF",
                    "8082A5": "#8082A5",
                    "9B9B9B": "#9B9B9B",
                    F7CC47: "#F7CC47",
                    B550F8: "#B550F8",
                    D8D8D8: "#D8D8D8",
                    EF6C57: "#EF6C57",
                    "28293E": "#28293E",
                    "3A3C56": "#3A3C56",
                    DFE0E9: "#DFE0E9",
                    "32334C": "#32334C",
                    F6DACA: "#F6DACA",
                    FDF0E9: "#FDF0E9",
                    FFD5CE: "#FFD5CE",
                    "570B00": "#570B00",
                    E7C4B2: "#E7C4B2",
                    F094E3: "#F094E3",
                    F38472: "#F38472",
                    F4E4FF: "#F4E4FF",
                },
            },
        },
        darkMode: "class",
        plugins: [nextui()],
    },
};
export default config;
