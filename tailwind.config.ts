import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				},
				// Forest Greens color palette
				forest: {
					50: '#f2f9f4',
					100: '#e4f3e8',
					200: '#c8e6d1',
					300: '#9dd4ae',
					400: '#6cbb86',
					500: '#48a067',
					600: '#358050',
					700: '#2c6843',
					800: '#275337',
					900: '#22462f',
				},
				bark: {
					50: '#f9f6f3',
					100: '#f0e9e2',
					200: '#e0d0c0',
					300: '#cbb198',
					400: '#b48f6f',
					500: '#a07a5a',
					600: '#8d664a',
					700: '#74543e',
					800: '#624736',
					900: '#533d30',
				},
				// Keep existing eco-friendly color palette
				nature: {
					50: '#f5f9f0',
					100: '#e6f0e0',
					200: '#cde4c3',
					300: '#a9d094',
					400: '#85b96a',
					500: '#63a046',
					600: '#4d8135',
					700: '#3c652c',
					800: '#335126',
					900: '#2c4423',
				},
				earth: {
					50: '#fbf7f3',
					100: '#f5ede3',
					200: '#ecdbc9',
					300: '#dec2a4',
					400: '#cca27d',
					500: '#bd8b63',
					600: '#a6734d',
					700: '#8a5f40',
					800: '#735038',
					900: '#614433',
				},
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
