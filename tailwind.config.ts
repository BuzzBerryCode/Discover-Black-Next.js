import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  safelist: [
    // Match score colors - standard Tailwind colors
    'text-green-600', 'bg-green-100', 'dark:text-green-400', 'dark:bg-green-900/30',
    'text-yellow-600', 'bg-yellow-100', 'dark:text-yellow-400', 'dark:bg-yellow-900/30',
    'text-orange-600', 'bg-orange-100', 'dark:text-orange-400', 'dark:bg-orange-900/30',
    'text-red-600', 'bg-red-100', 'dark:text-red-400', 'dark:bg-red-900/30',
    // Section background
    'bg-section-bg',
    // Common classes that might not be detected
    'bg-black', 'dark',
  ],
  theme: {
    extend: {
      colors: {
        // Original custom colors
        "abu-abu": "var(--abu-abu)",
        "agak-putih": "var(--agak-putih)",
        basewhite: "var(--basewhite)",
        graysblack: "var(--graysblack)",
        "neutral-100": "var(--neutral-100)",
        "neutral-new100": "var(--neutral-new100)",
        "neutral-new600": "var(--neutral-new600)",
        "neutral-new900": "var(--neutral-new900)",
        
        // Radix UI colors
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        
        // All missing colors from comprehensive search
        "brand-blue": "#557EDD",
        "brand-purple": "#6C40E4",
        "brand-blue-hover": "#4A6BC8",
        "brand-purple-hover": "#5A36C7",
        "text-primary": "#06152b",
        "text-primary-alt": "#080d1c",
        "text-secondary": "#71737c",
        "text-muted": "#999999",
        "text-heading": "#111827",
        "text-label": "#374151",
        "text-button": "#6b7280",
        "border-light": "#dbe2eb",
        "border-lighter": "#f1f4f9",
        "border-divider": "#e1e5e9",
        "border-section": "#f3f4f6",
        "border-dropdown": "#e5e7eb",
        "border-selected": "#94c4fc",
        "border-pagination": "#2463eb",
        "border-checkbox": "#D9E1E7",
        "border-list-selected": "#94c4fc",
        "bg-card": "#F9FAFB",
        "bg-selected": "#f1f6fe",
        "bg-profile": "#384455",
        "bg-hover": "#f9fafb",
        "bg-hover-alt": "#F0F0F0",
        "bg-input": "#f9fafb",
        "bg-toggle-active": "#f1f4f9",
        "input-border": "#d1d5db",
        "focus-ring": "#3b82f6",
        "success-green": "#1ad598",
        "error-red": "#ea3a3d",
        "donut-stroke": "#E5E7EB",
        "action-border": "#E5E7EB",
        
        // Gradient colors
        "gradient-red": "#FC4C4B",
        "gradient-pink": "#CD45BA", 
        "gradient-purple": "#6E57FF",
        "ai-toggle-start": "#E7CBFD",
        "ai-toggle-end": "#E0DEEA",
        
        // Extended color palette
        "text-dark": "#06152b",
        "text-medium": "#71737c",
        "text-light": "#999999",
        "bg-light": "#f1f4f9",
        "bg-white": "#ffffff",
        "border-gray": "#dbe2eb",
        "border-light-gray": "#f1f4f9",
        "hover-bg": "#f9fafb",
        "selected-bg": "#f1f6fe",
        "profile-bg": "#384455",
        "checkbox-border": "#D9E1E7",
        "list-border": "#DBE2EB",
        
        // New section background color
        "section-bg": "var(--section-bg)",
      },
      backgroundImage: {
        'gradient-brand': 'linear-gradient(90deg, #557EDD 0%, #6C40E4 100%)',
        'gradient-brand-hover': 'linear-gradient(90deg, #4A6BC8 0%, #5A36C7 100%)',
        'gradient-buzz': 'linear-gradient(90deg, #FC4C4B 0%, #CD45BA 50%, #6E57FF 100%)',
        'gradient-ai-toggle': 'linear-gradient(to right, #E7CBFD, #E0DEEA)',
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: {
        sans: [
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
          '"Noto Color Emoji"',
        ],
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      screens: {
        'xs': '480px',
        '3xl': '1600px',
      },
    },
    container: { center: true, padding: "2rem", screens: { "2xl": "1400px" } },
  },
  plugins: [],
  darkMode: ["class"],
} satisfies Config;

export default config; 