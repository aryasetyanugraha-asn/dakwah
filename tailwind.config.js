import forms from '@tailwindcss/forms';
import containerQueries from '@tailwindcss/container-queries';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "surface-container": "#eceef0",
        "surface-tint": "#2b6954",
        "outline": "#707974",
        "on-tertiary-fixed-variant": "#005236",
        "surface-dim": "#d8dadc",
        "on-tertiary-container": "#31c98f",
        "secondary-fixed": "#d5e3fc",
        "on-primary-container": "#80bea6",
        "tertiary-fixed": "#6ffbbe",
        "surface-variant": "#e0e3e5",
        "on-tertiary": "#ffffff",
        "surface-container-lowest": "#ffffff",
        "on-secondary": "#ffffff",
        "on-surface-variant": "#404944",
        "on-primary-fixed-variant": "#0b513d",
        "tertiary-container": "#004f34",
        "secondary-container": "#d5e3fc",
        "on-surface": "#191c1e",
        "inverse-on-surface": "#eff1f3",
        "tertiary": "#003623",
        "on-secondary-fixed": "#0d1c2e",
        "on-primary-fixed": "#002117",
        "surface-container-low": "#f2f4f6",
        "background": "#f7f9fb",
        "on-secondary-fixed-variant": "#3a485b",
        "surface": "#f7f9fb",
        "secondary": "#515f74",
        "on-primary": "#ffffff",
        "inverse-primary": "#95d3ba",
        "tertiary-fixed-dim": "#4edea3",
        "secondary-fixed-dim": "#b9c7df",
        "on-tertiary-fixed": "#002113",
        "primary-fixed-dim": "#95d3ba",
        "on-error": "#ffffff",
        "surface-container-highest": "#e0e3e5",
        "surface-bright": "#f7f9fb",
        "on-background": "#191c1e",
        "primary": "#003527",
        "primary-fixed": "#b0f0d6",
        "surface-container-high": "#e6e8ea",
        "primary-container": "#064e3b",
        "on-error-container": "#93000a",
        "outline-variant": "#bfc9c3",
        "error-container": "#ffdad6",
        "inverse-surface": "#2d3133",
        "error": "#ba1a1a",
        "on-secondary-container": "#57657a"
      },
      borderRadius: {
        DEFAULT: "0.25rem",
        lg: "0.5rem",
        xl: "0.75rem",
        full: "9999px"
      },
      spacing: {
        "margin-desktop": "40px",
        base: "4px",
        gutter: "16px",
        lg: "32px",
        xl: "48px",
        xs: "8px",
        "margin-mobile": "20px",
        sm: "16px",
        md: "24px"
      },
      fontFamily: {
        "headline-md": ["Newsreader", "serif"],
        "headline-lg": ["Newsreader", "serif"],
        "body-md": ["Manrope", "sans-serif"],
        "display-lg": ["Newsreader", "serif"],
        "label-md": ["Manrope", "sans-serif"],
        "label-sm": ["Manrope", "sans-serif"],
        "body-lg": ["Manrope", "sans-serif"]
      },
      fontSize: {
        "headline-md": ["24px", { lineHeight: "1.3", fontWeight: "500" }],
        "headline-lg": ["32px", { lineHeight: "1.2", fontWeight: "600" }],
        "body-md": ["16px", { lineHeight: "1.6", fontWeight: "400" }],
        "display-lg": ["48px", { lineHeight: "1.1", letterSpacing: "-0.02em", fontWeight: "600" }],
        "label-md": ["14px", { lineHeight: "1.4", letterSpacing: "0.01em", fontWeight: "600" }],
        "label-sm": ["12px", { lineHeight: "1.2", fontWeight: "700" }],
        "body-lg": ["18px", { lineHeight: "1.6", fontWeight: "400" }]
      }
    }
  },
  plugins: [
    forms,
    containerQueries,
  ],
}
