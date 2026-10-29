import type { Config } from "tailwindcss";
export default { content: ["./src/**/*.{ts,tsx}"], theme: { extend: {
  colors: { navy: { 950: "#0A1A3A", 900: "#0F2A5C", 700: "#2B4A85", 500: "#5A74A3" }, sky: { 50: "#F3F8FF", 100: "#E6F0FF", 200: "#CFE2FF", 400: "#7FB0F5", 600: "#2F6FDB" } },
  fontFamily: { sans: ["var(--font-jakarta)", "system-ui", "sans-serif"] } } }, plugins: [] } satisfies Config;
