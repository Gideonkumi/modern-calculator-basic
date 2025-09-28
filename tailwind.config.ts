import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        
        // Calculator button system
        "button-primary": {
          DEFAULT: "hsl(var(--button-primary))",
          hover: "hsl(var(--button-primary-hover))",
          foreground: "hsl(var(--button-primary-foreground))",
        },
        "button-secondary": {
          DEFAULT: "hsl(var(--button-secondary))",
          hover: "hsl(var(--button-secondary-hover))",
          foreground: "hsl(var(--button-secondary-foreground))",
        },
        "button-operator": {
          DEFAULT: "hsl(var(--button-operator))",
          hover: "hsl(var(--button-operator-hover))",
          foreground: "hsl(var(--button-operator-foreground))",
        },
        "button-danger": {
          DEFAULT: "hsl(var(--button-danger))",
          hover: "hsl(var(--button-danger-hover))",
          foreground: "hsl(var(--button-danger-foreground))",
        },
        
        // Calculator surfaces
        "calculator-bg": "hsl(var(--calculator-bg))",
        "calculator-border": "hsl(var(--calculator-border))",
        "display-bg": "hsl(var(--display-bg))",
        "display-text": "hsl(var(--display-text))",
        
        // Navigation
        "nav-bg": "hsl(var(--nav-bg))",
        "nav-border": "hsl(var(--nav-border))",
        
        primary: {
          DEFAULT: "hsl(var(--button-primary))",
          foreground: "hsl(var(--button-primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--button-secondary))",
          foreground: "hsl(var(--button-secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--button-danger))",
          foreground: "hsl(var(--button-danger-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--button-secondary))",
          foreground: "hsl(var(--button-secondary-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--button-operator))",
          foreground: "hsl(var(--button-operator-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--calculator-bg))",
          foreground: "hsl(var(--foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
          border: "hsl(var(--card-border))",
        },
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
