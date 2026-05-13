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
        "surface-container": "#F8FAFC",
        "surface-tint": "#059669",
        "outline": "#94A3B8",
        "on-tertiary-fixed-variant": "#064E3B",
        "surface-dim": "#E2E8F0",
        "on-tertiary-container": "#047857",
        "secondary-fixed": "#E0E7FF",
        "on-primary-container": "#10B981",
        "tertiary-fixed": "#A7F3D0",
        "surface-variant": "#F1F5F9",
        "on-tertiary": "#FFFFFF",
        "surface-container-lowest": "#FFFFFF",
        "on-secondary": "#FFFFFF",
        "on-surface-variant": "#475569",
        "on-primary-fixed-variant": "#047857",
        "tertiary-container": "#064E3B",
        "secondary-container": "#EEF2FF",
        "on-surface": "#0F172A",
        "inverse-on-surface": "#F8FAFC",
        "tertiary": "#065F46",
        "on-secondary-fixed": "#1E1B4B",
        "on-primary-fixed": "#022C22",
        "surface-container-low": "#F8FAFC",
        "background": "#FFFFFF",
        "on-secondary-fixed-variant": "#312E81",
        "surface": "#FFFFFF",
        "secondary": "#475569",
        "on-primary": "#FFFFFF",
        "inverse-primary": "#34D399",
        "tertiary-fixed-dim": "#6EE7B7",
        "secondary-fixed-dim": "#C7D2FE",
        "on-tertiary-fixed": "#022C22",
        "primary-fixed-dim": "#34D399",
        "on-error": "#FFFFFF",
        "surface-container-highest": "#E2E8F0",
        "surface-bright": "#FFFFFF",
        "on-background": "#0F172A",
        "primary": "#059669",
        "primary-fixed": "#A7F3D0",
        "surface-container-high": "#F1F5F9",
        "primary-container": "#065F46",
        "on-error-container": "#7F1D1D",
        "outline-variant": "#CBD5E1",
        "error-container": "#FEE2E2",
        "inverse-surface": "#1E293B",
        "error": "#DC2626",
        "on-secondary-container": "#334155"
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
        "headline-md": ["Playfair Display", "serif"],
        "headline-lg": ["Playfair Display", "serif"],
        "body-md": ["Inter", "sans-serif"],
        "display-lg": ["Playfair Display", "serif"],
        "label-md": ["Inter", "sans-serif"],
        "label-sm": ["Inter", "sans-serif"],
        "body-lg": ["Inter", "sans-serif"],
        "serif": ["Playfair Display", "serif"],
        "sans": ["Inter", "sans-serif"],
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
